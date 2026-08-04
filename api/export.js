// GET /api/export?key=<ADMIN_KEY> → volcado completo del ranking global, para copia de seguridad.
// Cuesta 2 comandos de Redis por ejecución (ZREVRANGE + MGET), así que es gratis en la práctica.
// PROTEGIDO: si no existe la variable de entorno ADMIN_KEY, el endpoint no responde a nadie.
// (Importante: el volcado incluye los IDs de jugador, y con un ID se puede enviar puntuación en su
//  nombre → por eso NUNCA debe ser público.)
const URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const ADMIN = process.env.ADMIN_KEY;

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

module.exports = async (req, res) => {
  if (!URL || !TOKEN) { res.status(500).json({ error: "KV no configurado" }); return; }
  if (!ADMIN || req.query.key !== ADMIN) { res.status(403).json({ error: "no" }); return; }
  try {
    const top = (await redis(["ZREVRANGE", "lb:global", 0, -1, "WITHSCORES"])) || [];
    const ids = [], scores = [];
    for (let i = 0; i < top.length; i += 2) { ids.push(top[i]); scores.push(Number(top[i + 1])); }
    let disp = [];
    if (ids.length) disp = (await redis(["MGET"].concat(ids.map((x) => "pl:" + x)))) || [];
    const players = ids.map((id, i) => {
      let d = {}; try { d = JSON.parse(disp[i] || "{}"); } catch (e) {}
      return { id, gloria: scores[i], name: d.n || "", flag: d.f || "", country: d.c || "", ts: d.ts || null };
    });
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Content-Disposition", 'attachment; filename="f1glory-ranking.json"');
    res.status(200).json({ exported: new Date().toISOString(), count: players.length, players });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
