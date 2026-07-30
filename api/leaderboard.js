// GET /api/leaderboard?scope=w|m&limit=500&id=<playerId>
// Ranking semanal / mensual por "Puntos de leyenda". Lee de Vercel KV (Upstash Redis) vía REST.
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
function monthKey(d) {
  return d.getUTCFullYear() + "-" + String(d.getUTCMonth() + 1).padStart(2, "0");
}

module.exports = async (req, res) => {
  if (!URL || !TOKEN) { res.status(500).json({ error: "KV no configurado" }); return; }
  try {
    const scope = req.query.scope === "m" ? "m" : "w";
    const limit = Math.max(1, Math.min(500, parseInt(req.query.limit) || 100));
    const id = req.query.id ? String(req.query.id).slice(0, 64) : null;
    const now = new Date();
    const key = scope === "m" ? "lb:m:" + monthKey(now) : "lb:w:" + isoWeekKey(now);

    const top = (await redis(["ZREVRANGE", key, 0, limit - 1, "WITHSCORES"])) || [];
    const rows = [], ids = [];
    for (let i = 0; i < top.length; i += 2) {
      ids.push(top[i]);
      rows.push({ rank: rows.length + 1, gloria: Number(top[i + 1]) });
    }
    if (ids.length) {
      const disp = (await pipe(ids.map((x) => ["GET", "pl:" + x]))).map((z) => z.result);
      rows.forEach((row, i) => {
        let d = {}; try { d = JSON.parse(disp[i] || "{}"); } catch (e) {}
        row.name = d.n || "—"; row.flag = d.f || "🏁"; row.country = d.c || "";
      });
    }
    let me = null;
    if (id) {
      const rk = await redis(["ZREVRANK", key, id]);
      if (rk != null) me = { rank: rk + 1, gloria: Number(await redis(["ZSCORE", key, id])) };
    }
    res.setHeader("Cache-Control", "s-maxage=20, stale-while-revalidate=60");
    res.status(200).json({ scope, key, count: rows.length, rows, me });
  } catch (e) {
    res.status(500).json({ error: String(e && e.message || e) });
  }
};
