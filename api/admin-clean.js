// TEMPORAL: borra un id de PRUEBA de todas las tablas (para testear el anti-trampa sin ensuciar el ranking).
// Se BORRA este archivo tras usarlo. Protegido por clave. NO hace flush global.
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
function isoWeekKey(d) {
  const dt = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = dt.getUTCDay() || 7;
  dt.setUTCDate(dt.getUTCDate() + 4 - day);
  const ys = new Date(Date.UTC(dt.getUTCFullYear(), 0, 1));
  return dt.getUTCFullYear() + "-W" + String(Math.ceil((((dt - ys) / 86400000) + 1) / 7)).padStart(2, "0");
}

module.exports = async (req, res) => {
  if (!URL || !TOKEN) { res.status(500).json({ error: "KV no configurado" }); return; }
  if (req.query.key !== "limpieza-glory-x9k2m7") { res.status(403).json({ error: "no" }); return; }
  const id = String(req.query.id || "").slice(0, 64);
  if (!id) { res.status(400).json({ error: "falta id" }); return; }
  try {
    const wk = "lb:w:" + isoWeekKey(new Date());
    const r1 = await redis(["ZREM", "lb:global", id]);
    const r2 = await redis(["ZREM", wk, id]);
    const r3 = await redis(["DEL", "pl:" + id]);
    res.status(200).json({ ok: true, removed: { global: r1, week: r2, player: r3 } });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
