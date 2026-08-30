// GET /api/leaderboard?scope=w|g&limit=500&id=<playerId>
// Ranking SEMANAL (se renueva) o GLOBAL (histórico) por "Puntos de leyenda". Vercel KV (Upstash Redis) vía REST.
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

/* 🕰️ LAS ÉPOCAS QUE ACEPTA EL RANKING. ⚠️ ESTA LISTA ESTÁ EN CUATRO SITIOS: submit.js,
   leaderboard.js, me.js y el array de sub-pestañas de index.html. Al abrir una época nueva hay
   que tocar LOS CUATRO. El 26-ago-2026 se descubrió que 1990 llevaba cinco días abierta al
   público —con su etiqueta «¡nuevo!»— y no estaba en ninguno: las carreras de los 90 no entraban
   en su tabla, y al terminar, el ranking se abría en `e:1990`, el servidor respondía «scope
   inválido» y el jugador leía «Aún no hay puntuaciones» justo después de acabar su carrera. */
const ERAS_OK = ["1990", "2000", "2010", "2020", "2026"];
/* 🏷️ EL NOMBRE SE COMPONE AL LEER, NO AL GUARDAR (30-ago-2026, lo cazó Carlos: «los rankings están
   mal hechos, hay mezclas»). El display es UNO POR JUGADOR (`pl:<id>`) y se sobrescribe con su última
   carrera, así que cada tabla enseñaba el nombre de la ÚLTIMA partida, viniera de donde viniera la
   marca: VEDELLE salía como «PECHITO (VEDELLE)» en la tabla del CLÁSICO —su 3992 es de una carrera
   normal— y ANTEK como «ALONSO (ANTEK)» dentro de la tabla del reto de PECHITO.
   Las puntuaciones siempre estuvieron en la tabla correcta; mentía el rótulo.
   Arreglo sin migrar datos ni gastar un comando más: se guarda igual, pero al LEER se extrae el apodo
   limpio y se le pone el personaje que corresponde A ESTA TABLA. Los registros viejos quedan bien
   solos. ⚠️ Si se añade un reto con `persona`, hay que añadirlo aquí. */
const PERSONAS = { alonso01: "ALONSO", pechito: "PECHITO", valentino: "VALENTINO" };
const PERSONAS_LISTA = Object.keys(PERSONAS).map((k) => PERSONAS[k]);
function apodoLimpio(n) {
  const s = String(n || "").trim();
  /* solo se despega el prefijo si es un PERSONAJE conocido: un apodo con paréntesis puestos por el
     jugador («PEPE (X)») se queda tal cual en vez de quedarse en «X». */
  const m = /^([^()]+?)\s*\(([^()]+)\)$/.exec(s);
  if (m && PERSONAS_LISTA.indexOf(m[1].trim().toUpperCase()) >= 0) return m[2].trim();
  return s;
}
function nombrePara(scope, n) {
  const apodo = apodoLimpio(n) || "—";
  const c = /^c:(.+)$/.exec(scope);
  const persona = c && PERSONAS[c[1]];
  return persona ? persona + " (" + apodo + ")" : apodo;
}

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
    // Ámbitos: g = global histórica · w = semanal · e:<época> = por época · c:<reto> = por reto.
    // Las claves se construyen SOLO desde listas blancas: nada del cliente llega crudo a Redis.
    const scope = String(req.query.scope || "w");
    const key = scopeKey(scope);
    if (!key) { res.status(400).json({ error: "scope inválido" }); return; }
    const limit = Math.max(1, Math.min(500, parseInt(req.query.limit) || 100));
    const id = req.query.id ? String(req.query.id).slice(0, 64) : null;

    const top = (await redis(["ZREVRANGE", key, 0, limit - 1, "WITHSCORES"])) || [];
    const rows = [], ids = [];
    for (let i = 0; i < top.length; i += 2) {
      ids.push(top[i]);
      rows.push({ rank: rows.length + 1, gloria: Number(top[i + 1]) });
    }
    if (ids.length) {
      // ⚡ UN SOLO comando MGET en vez de un GET por jugador. Antes, con 100 filas, cada visita al
      // ranking costaba ~103 comandos de Redis y eso reventó la cuota mensual (4-ago-2026).
      const disp = (await redis(["MGET"].concat(ids.map((x) => "pl:" + x)))) || [];
      rows.forEach((row, i) => {
        let d = {}; try { d = JSON.parse(disp[i] || "{}"); } catch (e) {}
        row.name = nombrePara(scope, d.n); row.flag = d.f || "🏁"; row.country = d.c || "";
      });
    }
    let me = null;
    if (id) {
      // ZREVRANK + ZSCORE en un único pipeline (2 comandos, 1 viaje)
      const r = await pipe([["ZREVRANK", key, id], ["ZSCORE", key, id]]);
      const rk = r[0] && r[0].result;
      if (rk != null) me = { rank: rk + 1, gloria: Number(r[1] && r[1].result) };
    }
    // caché más larga: la mayoría de visitas se sirven desde el CDN sin tocar la base de datos
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    res.status(200).json({ scope, key, count: rows.length, rows, me });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
