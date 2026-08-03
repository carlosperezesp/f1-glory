// ⚠️ TEMPORAL: renombra el display de jugadores con nombre ofensivo a "PILOTO" (la puntuación se conserva).
// Igual que admin-clean en su día: se crea, se usa UNA vez y se BORRA.
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

module.exports = async (req, res) => {
  if (!URL || !TOKEN) { res.status(500).json({ error: "KV no configurado" }); return; }
  try {
    if (req.query.key !== "glory26tmp") { res.status(403).json({ error: "no" }); return; }
    const match = String(req.query.match || "");
    if (match.length < 4) { res.status(400).json({ error: "match demasiado corto" }); return; }
    const ids = await redis(["ZRANGE", "lb:global", 0, -1]);
    const renamed = [];
    for (const id of ids) {
      const raw = await redis(["GET", "pl:" + id]);
      if (!raw) continue;
      let d; try { d = JSON.parse(raw); } catch (e) { continue; }
      if ((d.n || "").toUpperCase().includes(match.toUpperCase())) {
        const old = d.n; d.n = "PILOTO";
        await redis(["SET", "pl:" + id, JSON.stringify(d)]);
        renamed.push({ old, now: "PILOTO" });
      }
    }
    res.status(200).json({ ok: true, renamed });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
