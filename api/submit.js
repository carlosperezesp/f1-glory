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

    /* 🛡️ COHERENCIA CON EL CALENDARIO (16-ago-2026). Los topes de arriba eran ABSOLUTOS —480 podios,
       320 poles— y no miraban cuántas carreras habías podido disputar de verdad. Con 3 temporadas se
       podían declarar 400 podios. Ahora se atan a las temporadas: el calendario más largo del juego
       son 24 carreras (racesIn), y se dejan 24 de margen por las carreras de sustituto, que no salen
       de tus temporadas como titular. */
    /* 🧑‍💼 EN EL MODO JEFE PUNTÚAN DOS COCHES, no uno: el techo se dobla. Sin esto, una temporada
       de jefe con sus dos pilotos en el podio ya rompía el tope y el servidor devolvía «más
       resultados que carreras posibles» — o sea que los equipos DOMINANTES eran justo los
       rechazados. Se detectó antes de abrir el modo, midiendo un envío de verdad. */
    const dosCoches = String(body.era || "") === "tp";
    const techoCarreras = seasons * (dosCoches ? 48 : 24) + (dosCoches ? 48 : 24);
    if (podiums > techoCarreras || poles > techoCarreras || wins > techoCarreras) {
      res.status(400).json({ error: "más resultados que carreras posibles" }); return;
    }

    // misma fórmula que "Puntos de leyenda" del juego
    const gloria = f1 * 120 + constr * 30 + wins * 3 + podiums + poles + subcamp * 15;
    // 🛡️ TECHO DURO de gloria: el máximo honesto medido ronda 2500-2900; 4200 deja margen de sobra y corta los 6000+
    if (gloria > 4200) { res.status(400).json({ error: "puntuación imposible" }); return; }

    /* 🛡️ PLAUSIBILIDAD DE TIEMPO. Una carrera real tarda minutos: cada temporada lleva sus esperas y
       sus clics. Si llega con muchas temporadas en pocos segundos, se editó y se envió al vuelo.
       🐞 AGUJERO CERRADO EL 16-AGO-2026: esto decía `if (secs > 0 && ns > 0 && ...)`, o sea que
       BASTABA CON NO MANDAR `secs` para saltarse la comprobación entera. Lo destapó un jugador que
       avisó por email tras colar una puntuación manipulada. Ahora los dos campos son OBLIGATORIOS.
       Comprobado que el juego siempre los envía: `secs` sale de S._t0, que se fija en startCareer. */
    if (!(secs > 0) || !(ns > 0)) { res.status(400).json({ error: "faltan datos de la partida" }); return; }
    if (secs < Math.max(12, ns * 0.8)) {
      res.status(400).json({ error: "carrera demasiado rápida para ser real" }); return;
    }

    // rate-limit por IP (40/hora)
    const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "x";
    const rl = await redis(["INCR", "rl:" + ip]);
    if (rl === 1) await redis(["EXPIRE", "rl:" + ip, 3600]);
    if (rl > 40) { res.status(429).json({ error: "demasiados envíos, prueba más tarde" }); return; }

    // 🕰️ ÉPOCA y 📅 RETO en los que se jugó la carrera. Se miden en el servidor contra listas blancas:
    // nada que llegue del cliente entra como clave de Redis sin filtrar.
    /* 🕰️ ⚠️ MISMA LISTA EN CUATRO SITIOS (leaderboard.js, me.js y las sub-pestañas de index.html).
       Si falta una época aquí, esa carrera NO entra en su tabla — le pasó a 1990 durante cinco días. */
    /* 🧑‍💼 "tp" NO ES UNA ÉPOCA, es el modo jefe, pero viaja por el mismo carril porque la maquinaria
       de tablas por ámbito ya existe y funciona. Tiene tabla propia por la misma razón que la tuvo el
       retro: puntúa en otra escala. Medido el 4-sep-2026: una partida de jefe de CINCO temporadas en
       la que además te despiden da 436 puntos, contra una mediana de 90 en el clásico de 2026 — y es
       que suma las victorias y los podios de LOS DOS pilotos del equipo. */
    const ERAS_OK = ["1990", "2000", "2010", "2020", "2026", "tp"];
    const era = ERAS_OK.indexOf(String(body.era || "")) >= 0 ? String(body.era) : null;
    const ch = /^[a-z0-9]{3,16}$/.test(String(body.ch || "")) ? String(body.ch) : null;

    const now = new Date();
    const wk = "lb:w:" + isoWeekKey(now);
    const GL = "lb:global";
    /* 🔍 EL DESGLOSE, PARA PODER AUDITAR (16-ago-2026). Antes solo se guardaba el total, así que ante
       una marca de 3.992 no había manera de saber si eran 20 mundiales o 8: el reparto se validaba al
       recibirlo y se tiraba. Ahora se guarda junto al resto.
       🔒 ES PRIVADO Y DEBE SEGUIRLO SIENDO: /api/leaderboard lee este mismo registro pero copia SOLO
       `n`, `f` y `c` a la respuesta pública (ver leaderboard.js). ⚠️ NUNCA hacer `...d` ahí ni
       devolver el objeto entero, o el desglose de todo el mundo se vuelve público.
       Va dentro del mismo SET que ya existía → no cuesta ni un comando más de Redis.
       `st` = stats · `sc` = segundos jugados · `ns` = temporadas totales. Nombres cortos porque esto
       se guarda una vez por jugador y no hay por qué engordarlo. */
    const disp = JSON.stringify({ n: nm, f: fl, c: co, g: gloria, ts: Date.now(), e: era || undefined,
      st: { f1, constr, wins, podiums, poles, subcamp, seasons }, sc: secs, ns: ns, ch: ch || undefined });
    // Tablas: la GLOBAL histórica no se toca (nadie pierde su puesto) y se añaden las de época y reto,
    // que arrancan limpias. Todo en UN pipeline → sigue siendo un solo viaje a la base de datos.
    /* 🧑‍💼 EL MODO JEFE NO ENTRA NI EN LA GLOBAL NI EN LA SEMANAL. Es la misma decisión que ya se
       tomó con el retro pero llevada hasta el final: con 436 puntos por una partida corta y fallida,
       dejarlo entrar en la global habría barrido en una tarde la tabla histórica de los pilotos, y esa
       tabla tiene una promesa: nadie pierde el puesto que ya tenía. Compite consigo mismo. */
    const soloSuTabla = String(body.era || "") === "tp";
    const cmds = soloSuTabla
      ? [["SET", "pl:" + id, disp]]
      : [
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
