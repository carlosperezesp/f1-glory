// POST /api/submit  { id, name, flag, country, b:{f1,constr,wins,podiums,poles,subcamp,seasons} }
// Guarda tu MEJOR "Puntos de leyenda" de la SEMANA y de la GLOBAL (histórica). Recalcula la puntuación en el
// servidor (no se fía del total del cliente) + topes de cordura + rate-limit. Vercel KV (Upstash Redis) vía REST.
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

module.exports = async (req, res) => {
  if (req.method !== "POST") { res.status(405).json({ error: "POST only" }); return; }
  if (!URL || !TOKEN) { res.status(500).json({ error: "KV no configurado" }); return; }
  try {
    let body = req.body;
    if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = {}; } }
    body = body || {};
    const id = String(body.id || "");
    if (id.length < 8 || id.length > 64) { res.status(400).json({ error: "id inválido" }); return; }
    const nm = String(body.name || "").slice(0, 14);
    const fl = String(body.flag || "🏁").slice(0, 8);
    const co = String(body.country || "").slice(0, 32);
    const b = body.b || {};
    const num = (k) => Math.max(0, Math.min(999, Math.floor(Number(b[k]) || 0)));
    const f1 = num("f1"), constr = num("constr"), wins = num("wins"),
          podiums = num("podiums"), poles = num("poles"), subcamp = num("subcamp"), seasons = num("seasons");
    // topes de cordura (anti-trampa básico)
    if (f1 > 25 || constr > 25 || wins > 600 || poles > 600 || seasons > 45) {
      res.status(400).json({ error: "valores imposibles" }); return;
    }
    // misma fórmula que "Puntos de leyenda" del juego
    const gloria = f1 * 120 + constr * 30 + wins * 3 + podiums + poles + subcamp * 15;
    if (gloria > seasons * 450 + 2500) { res.status(400).json({ error: "puntuación incoherente con la carrera" }); return; }

    // rate-limit por IP (40/hora)
    const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "x";
    const rl = await redis(["INCR", "rl:" + ip]);
    if (rl === 1) await redis(["EXPIRE", "rl:" + ip, 3600]);
    if (rl > 40) { res.status(429).json({ error: "demasiados envíos, prueba más tarde" }); return; }

    const now = new Date();
    const wk = "lb:w:" + isoWeekKey(now);
    const GL = "lb:global";
    const disp = JSON.stringify({ n: nm, f: fl, c: co, g: gloria, ts: Date.now() });
    await pipe([
      ["ZADD", wk, "GT", gloria, id],
      ["ZADD", GL, "GT", gloria, id],
      ["EXPIRE", wk, 60 * 60 * 24 * 21], // la semanal se renueva; la global NO caduca
      ["SET", "pl:" + id, disp],         // display permanente (para el histórico global)
    ]);
    const ranks = (await pipe([["ZREVRANK", wk, id], ["ZREVRANK", GL, id]])).map((x) => x.result);
    res.status(200).json({
      ok: true, gloria,
      week: { rank: ranks[0] == null ? null : ranks[0] + 1 },
      global: { rank: ranks[1] == null ? null : ranks[1] + 1 },
    });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
