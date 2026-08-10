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
// 🚫 FILTRO DE NOMBRES: el ranking es público (y lo juegan críos). Apología nazi, insultos de odio y
// obscenidades obvias se sustituyen por "PILOTO" — la puntuación cuenta igual, el nombre no se muestra.
// Normaliza para saltarse los trucos habituales: acentos, puntos, espacios, 0/1/3/4/$ por letras.
const BANNED = [
  // odio / apología
  "hitler", "adolfh", "adolfoh", "adolh", "nazi", "fuhrer", "fuehrer", "heilhit", "sieghei", "tercerreich",
  "thirdreich", "holocaust", "holocaus", "genocid", "kukluxklan", "kkk", "isis", "alqaeda", "pedofil", "pedophil",
  // insultos de odio (es/en)
  "nigger", "nigga", "negrata", "maricon", "faggot", "sudaca", "panchito", "gitanaco", "retrasad", "subnormal",
  // obscenidades obvias
  "hijoputa", "hijodeputa", "malparido", "fuckyou", "fuck", "shit", "polla", "verga", "cabron", "puto", "puta", "coño", "cono",
  // 🇧🇷 portugués (Brasil y Portugal). Añadido al abrir el juego en portugués.
  // insultos de odio
  "viado", "veado", "viadinho", "traveco", "sapatao", "macaco", "crioulo", "favelado", "retardado", "mongoloid",
  // obscenidades
  "caralho", "buceta", "boceta", "piroca", "punheta", "pentelho", "xoxota", "arrombado", "vagabunda",
  "otario", "babaca", "escroto", "bosta", "merda", "cuzao", "cuzinho", "fodase", "fodese", "sefoda", "vaisefoder", "fodido",
  "filhadaputa", "filhodaputa", "fdp", "vaitomarnocu",
];
/* ⚠️ NO METER AQUÍ, aunque sean insultos de libro: cada una bloquearía apellidos REALES por coincidir
   como subcadena. Comprobado uno a uno antes de descartarlas.
     · "bicha"  → BICHARA, apellido brasileño de origen libanés
     · "porra"  → PORRAS, apellido español y latinoamericano corriente
     · "corno"  → CORNO / CORNOLDI, apellidos italianos (y Brasil está lleno de apellidos italianos)
     · "pinto"  → PINTO, de los apellidos portugueses más comunes que existen
     · "preto"  → PRETO, apellido real
     · "cu"     → demasiado corto: caería CUNHA, CURRO, CUEVAS…
   El filtro busca subcadenas, así que una palabra corta o común hace más daño del que evita: deja
   fuera a alguien con su propio apellido, y esa persona no vuelve. */
function cleanName(raw) {
  const norm = String(raw || "")
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")   // fuera acentos
    .replace(/0/g, "o").replace(/1/g, "i").replace(/3/g, "e").replace(/4/g, "a")
    .replace(/5/g, "s").replace(/7/g, "t").replace(/\$/g, "s").replace(/@/g, "a")
    .replace(/[^a-z]/g, "");                            // fuera puntos, espacios y símbolos
  // 26 y no 14: en los RETOS el nombre visible es «ALONSO (APODO)» y con 14 se cortaba a la mitad.
  // El apodo que teclea el jugador sigue capado a 14 por el maxlength del input.
  return BANNED.some((w) => norm.includes(w)) ? null : String(raw || "").slice(0, 26);
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
    const nm = cleanName(body.name) || "PILOTO"; // nombre ofensivo → se guarda anónimo, la marca cuenta igual
    const fl = String(body.flag || "🏁").slice(0, 8);
    const co = String(body.country || "").slice(0, 32);
    const b = body.b || {};
    const num = (k) => Math.max(0, Math.min(9999, Math.floor(Number(b[k]) || 0)));
    const f1 = num("f1"), constr = num("constr"), wins = num("wins"),
          podiums = num("podiums"), poles = num("poles"), subcamp = num("subcamp"), seasons = num("seasons");
    const secs = Math.max(0, Math.floor(Number(body.secs) || 0));
    const ns = Math.max(0, Math.floor(Number(body.ns) || 0));

    // 🛡️ TOPES de cordura. El que MANDA de verdad es el techo de gloria (abajo): estos solo cortan valores
    // absurdos. Ojo: f1 estaba en 16 y rechazaba carreras legítimas de dios (18 mundiales ≈ 3750 pts, por
    // debajo del techo) → subido a 20, que con cualquier reparto realista sigue quedando bajo los 4200.
    if (f1 > 20 || constr > 20 || wins > 240 || podiums > 480 || poles > 320 || subcamp > 20 || seasons > 32) {
      res.status(400).json({ error: "valores imposibles" }); return;
    }
    // 🛡️ COHERENCIA interna: no puedes tener más títulos que temporadas, ni más victorias que podios (toda victoria es podio)
    if (f1 > seasons || wins > podiums) { res.status(400).json({ error: "stats incoherentes" }); return; }

    // misma fórmula que "Puntos de leyenda" del juego
    const gloria = f1 * 120 + constr * 30 + wins * 3 + podiums + poles + subcamp * 15;
    // 🛡️ TECHO DURO de gloria: el máximo honesto medido ronda 2500-2900; 4200 deja margen de sobra y corta los 6000+
    if (gloria > 4200) { res.status(400).json({ error: "puntuación imposible" }); return; }

    // 🛡️ PLAUSIBILIDAD DE TIEMPO: una carrera real tarda minutos (cada temporada tiene delays + clics). Si llega
    // con muchas temporadas en pocos segundos, es que se editó y envió al vuelo. (Solo si el cliente manda `secs`.)
    if (secs > 0 && ns > 0 && secs < Math.max(12, ns * 0.8)) {
      res.status(400).json({ error: "carrera demasiado rápida para ser real" }); return;
    }

    // rate-limit por IP (40/hora)
    const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "x";
    const rl = await redis(["INCR", "rl:" + ip]);
    if (rl === 1) await redis(["EXPIRE", "rl:" + ip, 3600]);
    if (rl > 40) { res.status(429).json({ error: "demasiados envíos, prueba más tarde" }); return; }

    // 🕰️ ÉPOCA y 📅 RETO en los que se jugó la carrera. Se miden en el servidor contra listas blancas:
    // nada que llegue del cliente entra como clave de Redis sin filtrar.
    const ERAS_OK = ["2000", "2010", "2020", "2026"];
    const era = ERAS_OK.indexOf(String(body.era || "")) >= 0 ? String(body.era) : null;
    const ch = /^[a-z0-9]{3,16}$/.test(String(body.ch || "")) ? String(body.ch) : null;

    const now = new Date();
    const wk = "lb:w:" + isoWeekKey(now);
    const GL = "lb:global";
    const disp = JSON.stringify({ n: nm, f: fl, c: co, g: gloria, ts: Date.now(), e: era || undefined });
    // Tablas: la GLOBAL histórica no se toca (nadie pierde su puesto) y se añaden las de época y reto,
    // que arrancan limpias. Todo en UN pipeline → sigue siendo un solo viaje a la base de datos.
    const cmds = [
      ["ZADD", wk, "GT", gloria, id],
      ["ZADD", GL, "GT", gloria, id],
      ["EXPIRE", wk, 60 * 60 * 24 * 21], // la semanal se renueva; la global NO caduca
      ["SET", "pl:" + id, disp],         // display permanente (para el histórico global)
    ];
    // ⚖️ una carrera de RETO no entra en la tabla de su época: el escenario está fijado y no es
    // comparable con una carrera libre. Va SOLO a la del reto (y a la global, como todas).
    if (ch) cmds.push(["ZADD", "lb:ch:" + ch, "GT", gloria, id]);
    else if (era) cmds.push(["ZADD", "lb:era:" + era, "GT", gloria, id]);
    await pipe(cmds);
    // (antes se devolvía aquí el puesto con 2 ZREVRANK más; el cliente no los usaba y costaban
    //  2 comandos por envío → fuera. El puesto se ve al abrir el ranking.)
    res.status(200).json({ ok: true, gloria });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
