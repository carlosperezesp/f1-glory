// TEMPORAL: limpieza de datos de prueba antes del estreno del ranking (1-ago-2026).
// Se BORRA este archivo tras usarlo. Protegido por clave.
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
  if (req.query.key !== "limpieza-glory-x9k2m7") { res.status(403).json({ error: "no" }); return; }
  try {
    const keys = ["lb:global", "lb:w:2026-W31", "lb:w:2026-W32"];
    const deleted = await redis(["DEL", ...keys]);
    res.status(200).json({ ok: true, deleted, keys });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
