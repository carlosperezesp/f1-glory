// GET /api/leaderboard?scope=w|g&limit=500&id=<playerId>
// Ranking SEMANAL (se renueva) o GLOBAL (histórico) por "Puntos de leyenda". Vercel KV (Upstash Redis) vía REST.
const URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(cmd) {
  const r = await fetch(URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmd),
  });
  const j = await r.json();
  if (j.error) throw new Error(j.error);
  return j.result;
}
async function pipe(cmds) {
  const r = await fetch(URL + "/pipeline", {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmds),
  });
  return await r.json(); // [{result:...}, ...]
}
function isoWeekKey(d) {
  const dt = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = dt.getUTCDay() || 7;
  dt.setUTCDate(dt.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(dt.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((dt - yearStart) / 86400000) + 1) / 7);
  return dt.getUTCFullYear() + "-W" + String(week).padStart(2, "0");
}

module.exports = async (req, res) => {
  if (!URL || !TOKEN) { res.status(500).json({ error: "KV no configurado" }); return; }
  try {
    const scope = req.query.scope === "g" ? "g" : "w";
    const limit = Math.max(1, Math.min(500, parseInt(req.query.limit) || 100));
    const id = req.query.id ? String(req.query.id).slice(0, 64) : null;
    const now = new Date();
    const key = scope === "g" ? "lb:global" : "lb:w:" + isoWeekKey(now);

    const top = (await redis(["ZREVRANGE", key, 0, limit - 1, "WITHSCORES"])) || [];
    const rows = [], ids = [];
    for (let i = 0; i < top.length; i += 2) {
      ids.push(top[i]);
      rows.push({ rank: rows.length + 1, gloria: Number(top[i + 1]) });
    }
    if (ids.length) {
      // ⚡ UN SOLO comando MGET en vez de un GET por jugador. Antes, con 100 filas, cada visita al
      // ranking costaba ~103 comandos de Redis y eso reventó la cuota mensual (4-ago-2026).
      const disp = (await redis(["MGET"].concat(ids.map((x) => "pl:" + x)))) || [];
      rows.forEach((row, i) => {
        let d = {}; try { d = JSON.parse(disp[i] || "{}"); } catch (e) {}
        row.name = d.n || "—"; row.flag = d.f || "🏁"; row.country = d.c || "";
      });
    }
    let me = null;
    if (id) {
      // ZREVRANK + ZSCORE en un único pipeline (2 comandos, 1 viaje)
      const r = await pipe([["ZREVRANK", key, id], ["ZSCORE", key, id]]);
      const rk = r[0] && r[0].result;
      if (rk != null) me = { rank: rk + 1, gloria: Number(r[1] && r[1].result) };
    }
    // caché más larga: la mayoría de visitas se sirven desde el CDN sin tocar la base de datos
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    res.status(200).json({ scope, key, count: rows.length, rows, me });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
