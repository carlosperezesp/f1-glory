// GET /api/me?scope=w|g&id=<playerId> → { rank, gloria } SOLO de un jugador (2 comandos).
// Existe para que /api/leaderboard NO lleve el `id` en la URL: así la lista es idéntica para todo el
// mundo y el CDN la cachea UNA vez para todos, en vez de una copia por jugador.
const URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

async function pipe(cmds) {
  const r = await fetch(URL + "/pipeline", {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmds),
  });
  return await r.json();
}
function isoWeekKey(d) {
  const dt = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = dt.getUTCDay() || 7;
  dt.setUTCDate(dt.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(dt.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((dt - yearStart) / 86400000) + 1) / 7);
  return dt.getUTCFullYear() + "-W" + String(week).padStart(2, "0");
}

/* 🕰️ LAS ÉPOCAS QUE ACEPTA EL RANKING. ⚠️ ESTA LISTA ESTÁ EN CUATRO SITIOS: submit.js,
   leaderboard.js, me.js y el array de sub-pestañas de index.html. Al abrir una época nueva hay
   que tocar LOS CUATRO. El 26-ago-2026 se descubrió que 1990 llevaba cinco días abierta al
   público —con su etiqueta «¡nuevo!»— y no estaba en ninguno: las carreras de los 90 no entraban
   en su tabla, y al terminar, el ranking se abría en `e:1990`, el servidor respondía «scope
   inválido» y el jugador leía «Aún no hay puntuaciones» justo después de acabar su carrera. */
const ERAS_OK = ["1990", "2000", "2010", "2020", "2026", "tp"];   // 🧑‍💼 "tp" = modo jefe, tabla propia
function scopeKey(scope) {
  if (scope === "g") return "lb:global";
  if (scope === "w") return "lb:w:" + isoWeekKey(new Date());
  const m = /^e:(.+)$/.exec(scope);
  if (m) return ERAS_OK.indexOf(m[1]) >= 0 ? "lb:era:" + m[1] : null;
  const c = /^c:([a-z0-9]{3,16})$/.exec(scope);
  if (c) return "lb:ch:" + c[1];
  return null;
}

module.exports = async (req, res) => {
  if (!URL || !TOKEN) { res.status(500).json({ error: "KV no configurado" }); return; }
  try {
    const id = req.query.id ? String(req.query.id).slice(0, 64) : null;
    if (!id) { res.status(400).json({ error: "falta id" }); return; }
    // mismos ámbitos que /api/leaderboard: g · w · e:<época> · c:<reto>
    const key = scopeKey(String(req.query.scope || "w"));
    if (!key) { res.status(400).json({ error: "scope inválido" }); return; }
    const r = await pipe([["ZREVRANK", key, id], ["ZSCORE", key, id]]);
    const rk = r[0] && r[0].result;
    res.setHeader("Cache-Control", "no-store");
    res.status(200).json({ me: rk == null ? null : { rank: rk + 1, gloria: Number(r[1] && r[1].result) } });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
