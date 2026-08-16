// GET /api/remove?key=<ADMIN_KEY>&id=<player_id> → borra a un jugador de TODAS las tablas.
//
// Nació el 16-ago-2026: alguien avisó por email de que había conseguido colar una puntuación
// manipulada (MITNICK, 4022) y ofreció su player id para limpiarla. No había forma de borrar nada
// sin entrar a mano en la consola de Upstash, así que se monta aquí con el mismo candado que
// /api/export: si no existe la variable de entorno ADMIN_KEY, el endpoint no responde a nadie.
//
// Borra de golpe:
//   · lb:global            (histórica, la que no caduca)
//   · lb:w:*               (semanales, incluidas las que sigan vivas)
//   · lb:era:* y lb:ch:*   (época y reto)
//   · pl:<id>              (la ficha con el nombre visible)
// Se usa SCAN para no dejarse ninguna tabla nueva que se añada en el futuro.
//
// ⚠️ Con `dry=1` NO borra: solo dice qué borraría. Conviene mirarlo antes de ejecutar de verdad.
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

  const id = String(req.query.id || "").trim();
  // mismo formato que genera el juego: letras y números, nada más. Así este endpoint no puede
  // usarse para tocar claves arbitrarias de Redis.
  if (!/^[a-z0-9]{8,40}$/.test(id)) { res.status(400).json({ error: "id con formato raro" }); return; }
  const dry = String(req.query.dry || "") === "1";

  try {
    // ficha del jugador, para poder confirmar a quién se está borrando ANTES de hacerlo
    let ficha = null;
    try { ficha = JSON.parse((await redis(["GET", "pl:" + id])) || "null"); } catch (e) {}

    // todas las tablas de clasificación que existan ahora mismo
    const tablas = [];
    let cur = "0";
    do {
      const out = await redis(["SCAN", cur, "MATCH", "lb:*", "COUNT", 200]);
      cur = out[0];
      (out[1] || []).forEach((k) => { if (tablas.indexOf(k) < 0) tablas.push(k); });
    } while (cur !== "0" && tablas.length < 500);

    // ¿en cuáles aparece?
    const puestos = [];
    for (const k of tablas) {
      const sc = await redis(["ZSCORE", k, id]);
      if (sc !== null && sc !== undefined) puestos.push({ tabla: k, gloria: Number(sc) });
    }

    if (dry) {
      res.setHeader("Cache-Control", "no-store");
      res.status(200).json({ dry: true, id, ficha, apareceEn: puestos, tablasMiradas: tablas.length });
      return;
    }

    for (const p of puestos) await redis(["ZREM", p.tabla, id]);
    const borradaFicha = await redis(["DEL", "pl:" + id]);

    res.setHeader("Cache-Control", "no-store");
    res.status(200).json({ ok: true, id, ficha, borradoDe: puestos.map((p) => p.tabla), fichaBorrada: borradaFicha === 1 });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
