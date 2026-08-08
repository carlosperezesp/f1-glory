Notas de mejoras de F1 Glory — para ver cómo vamos. (Actualizado 31/07/2026)

═══════════════════════════════════════
🧭 VISIÓN / HOJA DE RUTA (hacia dónde vamos — definida por Carlos, 31/07/2026)
═══════════════════════════════════════
PANTALLA INICIAL / MENÚ DE MODOS: ✅ base montada (1-ago) — bajo "Iniciar carrera" hay 3 tarjetas atenuadas con pegatina "Próximamente":
  1. 🏁 NUEVA CARRERA (activo = "Iniciar carrera", el juego clásico).
  2. 📅 RETO SEMANAL [Próximamente] — encaja con la idea del amigo de "revivir carreras de pilotos reales" (¿Vettel a Mercedes? ¿Kubica a Ferrari?): un escenario nuevo cada semana. ⬇️ DISEÑO EMPEZADO, ver sección propia al final.
  3. 🧑‍💼 MODO TEAM PRINCIPAL [Próximamente] — director de escudería: "ficha a los mejores pilotos, desarrolla el mejor coche y lleva a tu equipo a la gloria".
  4. 🕰️ MODO RETRO [Próximamente] — pilota en décadas pasadas.
  PENDIENTE: activar cada modo (diseño+build) · 📝 sección BLOG · mover 🏆 Ranking aquí (ahora sale al final) · el KO-FI está en la pantalla FINAL (☕ "Invítame a un café", 3 niveles).
  NOTA: el párrafo "Últimas novedades / What's new" está OCULTO (display:none, no borrado) — reactivar cuando haya novedades grandes.

GRANDES AMBICIONES (más adelante):
  * 🕰️ MODO RETRO — ser piloto pero en décadas anteriores (70s/80s/90s…).
  * 🏛️ MODO GLORY — el modo director pero en décadas anteriores.

═══════════════════════════════════════
🟢 PENDIENTE
═══════════════════════════════════════

🏆 RANKING — ✅ PUBLICADO EL 1-AGO-2026 (botón 🏆 para todos, tablas Semanal+Global desde cero, datos de prueba limpiados):
- Más adelante: ranking POR PAÍS (trivial con Redis; con público AR+ES sería un pelotazo).
- Colocarlo también en la futura PANTALLA INICIAL (ahora sale al terminar la carrera).

🎤 DILEMAS PENDIENTES (diseñados, con textos ya escritos):
- Despido a mitad de temporada (solo Nº2 sin galones; variante Red Bull→Racing Bulls).
- Veterano-reserva, el ocaso ("La última bala", "El aprendiz").
- Variante de PAZ: si acabas de COMPAÑERO de tu ex-enemigo, dilema para triunfar juntos / él / tú. (El "fichaje del enemigo" YA está hecho y se consuma.)
- Sanciones / pilotos sancionados.
- País rico sin tradición funda equipo y te quiere de figura, pero son malos (estilo Sato-Toyota).

🎤 DILEMAS NUEVOS (revisado 1-ago: el 1er brainstorm YA EXISTÍA casi idéntico → descartado. REVISAR SIEMPRE el catálogo antes).

✅ HECHOS Y SUBIDOS (2-ago, commit 438dd3b · verificados 300 iter/each, 0 errores):
- 🏎️ FORZAR EL COCHE ×2 (exprimirQuali «Al filo en la Q3» + exprimirCarrera «Ordeñar el coche»): coche regulín (perf<83), sale bien o mal; SIN lesiones (eso es `limite`). Ambos pueden salir en la misma partida.
- 👨‍👩‍👧 EMERGENCIA FAMILIAR (emergenciaFamiliar «Lejos de casa»): vida personal vs profesión, 1/partida, 4 sabores al azar. Volar a casa = te pierdes 1 carrera.
- 🏢 NUEVO TEAM PRINCIPAL (nuevoJefe): 3 sabores (ganador/tecnócrata-recorte/joven). REPERCUSIÓN REAL: mueve el f1target (rumbo del coche) ±8/12 → se nota a lo largo de 2-3 temporadas.
- 🗣️ ATAQUE DE LA LEYENDA (ataqueLeyenda «El desprecio de la leyenda»): un MULTICAMPEÓN mayor que tú (nombre real de la partida, helper `oldChampion`) te llama blando. Nunca inventado ni del karting.
- 💥 PESO DE LA CULPA (pesoCulpa): hermano GRAVE y RARO de `toqueCulpable` (rival al hospital; sin perdón → enemigo garantizado vía feudBurn). Gated ovr≥84 + ch(.5). ⚠️ OJO: solapa con toqueCulpable (ambos "mandas a un rival contra el muro"); si algún día molesta tener los dos, fusionar.

❌ DESCARTADOS: el muro mental/burnout (quitado por el usuario); el último baile del ídolo (no molaba).
⏳ PARA MÁS ADELANTE: 🎰 EL ASIENTO CAÍDO DEL CIELO (a mitad de temporada un TOP pierde a su estrella y te ofrece el volante YA, pero dejas tirado a tu equipo: ¿saltas o cumples tu palabra?).

YA EXISTEN ~40 dilemas (grep 'id:"' en index.html): espionaje·lesion·pelea·mecanicos·sponsor·ordenes·estrategia·ingeniero·docu·lemans·metodo·recorte·filtracion·alianza·fiesta·jerarquia·novato·rumor·espalda·embajador·crashgate·safetycar·titlecrash·frenazo·aparcado·zonagris·companeros·lluvia·reglamento·pupilo·contrato·gesto·dakarcameo·radiocaliente·cuentas·limite·toques·fichajeEnemigo·falloFIA·recordPregunta.

🚪 RETIRADAS:
- Retirarte siendo campeón aunque mayor · al final de temporada (reconsiderar) · retirarte ya.

🏎️ EQUIPOS:
- Más equipos ficticios · cambiar identidad de equipos · ¿realista estar >6-8 años en un equipo?

🌎 OTRAS CATEGORÍAS (IndyCar/WEC/FE/NASCAR/DTM/Super Fórmula…):
- MÁS REALISMO: ahora las aventuras son stat-based sin parrilla con nombres. Dar textura — rivales reales de cada serie, campeonatos/joyas propias más creíbles, eventos específicos, etc.

👥 POOL DE PILOTOS (ampliar con calma):
- Crossovers reales: Mick Schumacher. Jóvenes reales: Boya, Fittipaldi, Maloney. Algún argentino ficticio más.

📚 BIOGRAFÍAS DE CAMPEONES → DILEMAS · 25 CANDIDATOS (Schumacher, Alonso, Räikkönen, Button — 4-ago-2026)
MÉTODO: leer la bio de Wikipedia buscando DECISIONES. ⚠️ Los PDF de Wikipedia no dejan extraer texto (fuentes incrustadas) → ir al artículo web.
CRITERIO DEFINITIVO DEL USUARIO: saltarse la infancia y el dinero de la familia. Interesan DOS familias, ambas de la VIDA PROFESIONAL:
  (1) CIRCUNSTANCIAS que te caen encima y te obligan a elegir · (2) ESTILO ROSBERG: cómo haces tu trabajo.
Organizado por FAMILIA (no por piloto) para construirlo. ⭐ = prioridad.

═══ FAMILIA 1 · CIRCUNSTANCIAS QUE TE OBLIGAN A DECIDIR ═══
⭐ 🏭 TU EQUIPO SE RETIRA DE LA F1 [Button/Honda, dic-2008] EL MEJOR: en diciembre tu equipo cierra y te quedas sin asiento. Button RECHAZÓ un Toro Rosso (asiento seguro, coche malo), esperó meses sin garantías, en marzo Brawn compró el equipo por una libra, se bajó el sueldo… y ganó el Mundial. ¿Coges lo primero o esperas? → Enlaza con `killTeam` del retro, que hoy solo te expulsa sin dejarte elegir.
⭐ 💰 TE PAGAN POR IRTE [Ferrari-Räikkönen, 2009]: tu equipo te compra el contrato para fichar a una estrella. Cobras una fortuna y te quedas sin asiento con el mercado cerrado. ¿Aceptas o peleas? [Kimi se fue al RALLY → disparador nuevo para "conquistar otro mundo": te han echado.]
⭐ 💸 EL EQUIPO NO TE PAGA [Lotus-Räikkönen, 2013]: crisis financiera, meses sin cobrar. ¿Sigues por el proyecto, lo denuncias o te plantas? [Distinto de la quiebra: el equipo sobrevive, el que no cobra eres tú.]
⭐ ⏸️ EL AÑO EN BLANCO [Alonso, 2002]: Briatore le IMPUSO un año de probador en Renault en vez de correr; no fue decisión suya. ¿Pierdes un año de carreras para entrar por la puerta grande o corres en un equipo malo? → El juego YA tiene la categoría TEST.
⭐ 🥈 EL MEJOR NÚMERO DOS DEL MUNDO [Schumacher, 1999]: vuelves de una lesión larga, tu título es imposible y tu compañero pelea el suyo. ¿Te pones a su servicio media temporada? [No es una orden puntual como `ordenes`/`multi21`: es aceptar un ROL.]
🤝 EL QUE TE DESCUBRIÓ Y EL QUE TE QUIERE [Schumacher, 1991]: debutas de sustituto en un equipo pequeño, deslumbras, y un grande te ficha ANTES de que el pequeño formalice el contrato; hubo pleito. ¿Palabra dada o el asiento bueno?
🦁 EL GIGANTE DORMIDO [Schumacher/Ferrari, 1996]: en tu MEJOR momento, un histórico que lleva 17 años sin ganar te ofrece una fortuna por resucitarlo. Dejas un coche ganador por un proyecto. [Distinto del "equipo de tus sueños en el ocaso" (Hamilton'24): aquel es al final, este en la cima.]
🃏 LA CARTA BAJO LA MANGA [Alonso/Spygate, 2007]: tienes correos comprometedores y los usas como palanca NEGOCIANDO CON TU PROPIO JEFE. [Distinto de `espionaje` (recibes datos del rival) y `filtracion` (un periodista te tiene pillado): aquí la sartén la tienes tú, contra los tuyos.]
⚖️ EL TRIBUNAL DE CONTRATOS [Button/BAR/Williams, 2004]: firmaste con otro creyendo que el tuyo se hundía; te reclaman y un tribunal decide. Button PERDIÓ y tuvo que quedarse; Williams cobró ~18M£.
💻 EL SOFTWARE DEL EQUIPO / ⛽ TU EQUIPO HACE TRAMPAS Y TÚ PAGAS [Schumacher-Benetton 1994 + Button-BAR 2005]: control de salida oculto en el software; depósito ilegal → DOS carreras de sanción para piloto y equipo sin haber hecho nada. FUSIONAR los dos: ¿callas, preguntas o lo destapas… y qué pasa cuando lo pagas tú?
🏆 EL CAMPEÓN QUE SE VA [Button, 2010]: ganas el Mundial pero el equipo no garantiza seguir invirtiendo. ¿Lealtad o proyecto ambicioso? [Distinto de `cimaRosberg`: allí te retiras, aquí cambias de equipo siendo campeón.]
📄 UN AÑO O TRES [Alonso, 2023]: se fue a Aston porque Alpine solo le renovaba UN año. ¿Seguridad de contrato largo o libertad? → Enlaza con CONTRATOS LARGOS.
🪪 LA LICENCIA EN DUDA [Räikkönen, 2001]: te suben a la F1 con 23 carreras de coches y la federación no quiere darte la superlicencia; tu jefe sale de garante. ¿Aceptas con lupa y presión o esperas un año?
🛣️ EL CAMINO RARO [Schumacher, 1990]: te ofrecen un programa de FÁBRICA en resistencia en vez de la escalera clásica ("inusual para un joven piloto"). Encaja con el sistema de aventuras, en versión junior.
🎁 SER EL BENEFICIADO DE LA ORDEN [Alonso, 2010]: no te piden ceder, te REGALAN la posición. ¿Aceptas el regalo aunque la afición te lo afee? (inversión de `ordenes`/`multi21`)
🚧 BLOQUEAR A TU COMPAÑERO [Alonso/Hungría, 2007]: le bloqueó deliberadamente en el pit lane. Sabotaje interno — hay rivalidades en el juego, pero no ESTO.
👴 LA VUELTA [Schumacher 2010 a los 41 · Alonso 2021 a los 40]: llevas años retirado y te ofrecen volver. ⚠️ NECESITA MECÁNICA NUEVA (hoy al retirarte acaba la partida) → encaja en RETOS SEMANALES.

— añadidos de Rosberg y Hamilton (4-ago) —
✅✅ HECHOS Y VERIFICADOS (7-ago-2026) — LOS DOS DEL REGLAMENTO, que eran el par estrella. Ver sección propia al final: «EL ARCO DEL REGLAMENTO».
⭐⭐ 📜 APOSTAR POR EL CAMBIO DE REGLAMENTO [Hamilton→Mercedes, 2013] EL MEJOR DE TODA LA SERIE: dejó a McLaren (ganador) por un Mercedes que había ganado UNA carrera. Todo el mundo dijo que era una locura… y el motivo era el reglamento híbrido de 2014, para el que Mercedes estaba mejor preparado. → Un equipo mediocre te ficha jurando que ha descifrado el reglamento que viene. ¿Te la juegas? ENGANCHA CON MECÁNICA QUE YA EXISTE: `regReg` (la revolución técnica) y el efecto Brawn del 3%. No es texto: es apostar de verdad.
⭐ 🧠 EL COMPAÑERO QUE TE COME LA CABEZA [Rosberg vs Schumacher, 2010]: tu compañero es una leyenda que vuelve y que "constantemente hacía cosas para estresarte o marcar dominio"; Rosberg tuvo que exigir que SU estrategia se hablara con él directamente y no filtrada por Schumacher. → ¿Te plantas y exiges tu propio canal con el equipo, o tragas y te concentras en la pista? [Distinto de `jerarquia` (te exige ser Nº1): esto es guerra psicológica y control de la información.]
⭐ 💥 CHOCAR CON TU PROPIO COMPAÑERO [Rosberg/Spa, 2014]: le pegaste a los TUYOS y el equipo os impone reglas de convivencia. → El juego tiene toques con RIVALES (`toqueVictima`/`toqueCulpable` excluyen expresamente al compañero) pero NO con tu compañero. Hueco real.
⭐ 📜 EL CONTRATO DE POR VIDA [McLaren-Hamilton, 1998]: un equipo grande te ficha con 12-13 años, te paga la escalera entera y se queda una OPCIÓN sobre tu futuro asiento. Le ató casi dos décadas. → ¿Seguridad y carrera pagada, o libertad para elegir después? PERFECTO PARA LA ETAPA JUNIOR y sin ser biografía de infancia: es un contrato.
🚪 LA CLÁUSULA DE SALIDA [Hamilton, 2024]: activó una cláusula para irse un año antes porque el coche no encajaba con su pilotaje. → Enlaza con CONTRATOS LARGOS: si metemos contratos de 2-3 años, la cláusula de escape es su dilema natural.

— añadidos de Verstappen, Vettel y Norris (4-ago) —
⭐⭐ 📉 EL REGLAMENTO QUE TE HUNDE [Vettel, 2014] EL ESPEJO PERFECTO del de Hamilton: llegan los híbridos, el coche y su estilo no encajan, su compañero (Ricciardo) le supera en clasificación POR PRIMERA VEZ en su carrera, y el campeón vigente acaba el año sin ganar una sola carrera → se fue a Ferrari un año antes de que acabara su contrato. → ¿Te quedas a pelear con un coche que ya no es el tuyo, o te largas? JUNTO CON EL DE HAMILTON forman un par: uno apuesta por el reglamento nuevo y gana, al otro lo entierra.
⭐ 🚦 LA REGLA QUE LLEVA TU NOMBRE [Verstappen, 2016]: pilotaba tan al límite defendiendo que la FIA acabó PROHIBIENDO moverse bajo frenada — una regla cambiada por su conducta, tras las quejas del resto de pilotos. → Tu forma de defender saca de quicio a media parrilla y la federación amenaza con legislar contra ti. ¿Moderas o sigues igual? [Engancha con el sistema de ESTILOS; premia/castiga al agresivo.]
⭐ ⏫ EL ASCENSO A MITAD DE TEMPORADA [Verstappen, 2016]: tras SOLO 4 carreras, Red Bull le subió al equipo grande y bajó a Kvyat al filial… y ganó en su debut, el más joven de la historia. → El juego ya tiene el pipeline del filial, pero solo entre temporadas: a mitad de año es nuevo. Y su REVERSO (ser el degradado) es el "despido a mitad de temporada" que ya estaba en la lista de pendientes: son el mismo suceso visto desde los dos lados.
⭐ 🔄 DEVOLVER EL FAVOR [Norris y Piastri, 2024-2025]: en Hungría 2024 McLaren le ordenó ceder la victoria a Piastri; en el sprint de Qatar él se dejó pasar "para devolver el favor"; en Monza 2025 fue Piastri quien tuvo que cederle a él. → Un dilema CON MEMORIA: si un día cediste, ¿te lo devuelven? Y si te lo devolvieron, ¿cedes tú? El juego ya guarda enemistades (`feuds`) y respetos (`respects`, sin usar) → aquí `respects` por fin tendría sentido.
🎮 TU OTRA VIDA EN EL SIMULADOR [Verstappen desde 2015 · Norris]: compiten PROFESIONALMENTE en sim racing (iRacing, Le Mans Virtual) mientras corren en F1. → ¿Dedicas tus horas libres a competir en el simulador (afilas reflejos, te expones a que digan que no estás centrado) o desconectas?
CONFIRMACIONES de estas tres bios: la SEQUÍA de Norris (110 carreras y récord de podios sin ganar) = "el récord que no querías" de Hülkenberg, ya en la lista 2010-2025 · sus dos choques con Piastri (Canadá y Singapur 2025) = "chocar con tu propio compañero" de Rosberg · su descalificación por desgaste del plank en Las Vegas 2025 = "tu equipo hace trampas y tú pagas" (BAR 2005) · el debut de Vettel sustituyendo al lesionado Kubica ya lo cubre la vía de PROBADOR con GPs de sustituto que el juego tiene.
💡 AÑADIR A `gesto`: a Vettel le acusaron de HIPÓCRITA por hacer campaña ecologista siendo piloto de F1 → desenlace nuevo para ese dilema.

═══ FAMILIA 2 · ESTILO ROSBERG: CÓMO HACES TU TRABAJO ═══
⭐⭐ 🛞 LAS GOMAS NO VAN CON TU ESTILO [Button, 2011-2012] EL MEJOR HALLAZGO: su pilotaje suave era oro con unos Pirelli y veneno con otros — no metía temperatura en el delantero y tuvo que probar materiales de freno y rehacer el reglaje. ¿Cambias TU PILOTAJE (arriesgado: es tu identidad) o rediseñas el coche a tu alrededor (lento, y tu compañero se adapta antes)? → ENGANCHA CON EL SISTEMA DE ESTILOS QUE YA EXISTE (agresivo/técnico/consistente): no es solo texto, toca algo real.
🔧 LLÉVATE A TU GENTE [Schumacher, 1997]: convences al ingeniero jefe y al diseñador de tu antiguo equipo para que se vengan contigo (Brawn y Byrne). Reverso exacto del `ingeniero` existente: aquí el que construye equipo eres tú.
🎭 EL PLAYBOY [Button, 2001]: tras un mal año la prensa le llamó playboy; cambió sus hábitos y se puso a entrenar. ¿Le das la vuelta a tu imagen o sigues a lo tuyo? [Roza `fiesta`, pero aquello es UNA noche; esto es una crisis de reputación.]
⛵ EL YATE [Räikkönen/Mónaco, 2006]: abandonó, se fue andando con el casco puesto, pasó del box y de la prensa y se subió a un yate. Tras un domingo desastroso, ¿das la cara ante los medios o desapareces? (los aficionados lo adoran, los patrocinadores no).
🖥️ SIMULADOR O PISTA [Button, 2017]: preparó Mónaco en el simulador en vez de test en Baréin porque "no aprendería nada". Pequeño, de sabor.
😤 ENCARARTE EN EL BOX DEL RIVAL [Schumacher/Spa, 1998]: tras el choque se plantó en el garaje de McLaren acusando a Coulthard de querer matarlo. De sabor.
(+ EL MÉTODO ROSBERG original, sección aparte más abajo: 8 decisiones de su invierno de 2016)

🔁 RECALIBRAR A MITAD DE TEMPORADA [Rosberg, 2016]: tras perder el liderato en las rondas 5-12 CAMBIÓ LA DIETA a mitad de año. → Vas perdiendo el título: ¿cambias algo de tu método ahora mismo o confías en lo que te trajo hasta aquí? (versión "en caliente" del método Rosberg)
🎭 FAMA VS FOCO [Hamilton 2011 + Button 2001]: el peor año de Hamilton, con su vida de celebridad señalada como causa ("prometió volver a su nivel"). MISMO dilema que "el playboy" de Button → fusionar en uno solo, con dos sabores.
🚧 SABOTEAR LA VUELTA DE TU COMPAÑERO [Rosberg/Mónaco 2014 + Alonso/Hungría 2007]: irse largo aposta para arruinarle la vuelta / bloquearle en el pit lane. Fusionar los dos.
NOTA: el 2016 de Rosberg trae MÁS detalle del que ya teníamos: perdió 1 kg de músculo de pierna dejando la bici, quitó azúcares y alcohol. Sumar al arco del método.

═══ APARCADOS · PERSONALES O DE INFANCIA (no encajan en el criterio, salvo que se reformulen) ═══
🌧️ SIN NEUMÁTICOS DE LLUVIA [Alonso]: la familia no podía pagarlos y entrenaba en mojado con gomas de seco — de ahí salió un maestro de la lluvia. ⚠️ REFORMULABLE a profesional: "tu equipo junior no tiene presupuesto para gomas de lluvia en los test". Con premio mecánico: maestría en mojado.
💸 EL MOTOR QUE NO PODÉIS PAGAR [Schumacher] · 🎓 DEJAR LOS ESTUDIOS [Schumacher] · 🪪 LICENCIA DE LUXEMBURGO A LOS 12 [Schumacher] · 🧭 EL PADRINO QUE APARECE [Alonso + Schumacher, mismo tema].

═══ DESCARTADOS POR DUPLICADO ═══
Jerez'97 (=`titlecrash`) · Macau'90 y toque a Warwick'91 (=toques) · Weber/Briatore pagando su temporada (=`manager`) · sanción de 2 carreras del 94 (=`sancionGP`) · Crashgate'08 (=`crashgate`) · guerra con el novato Hamilton (=`novato`/`jerarquia`/`cuentas`) · recorte de sueldo de Button en Brawn (=`recorte`) · rancho en Kenia y coach de rendimiento (=`metodo`/`invierno`) · reglaje con los ingenieros (=`setup`/`mecanicos`) · título por 1 punto + investigación FIA (=`falloFIA`) · heredar el asiento de una leyenda (ya en la lista 2010-2025, confirmado por Kimi tras retirarse Schumacher) · Triple Corona y dejar la F1 por Indy/Le Mans/Dakar (=`dakarcameo` + "conquistar otro mundo", confirmado por Alonso) · "GP2 engine" (ya en la lista 2010-2025).
💡 MEJORA BARATA suelta: añadir a `titlecrash` un desenlace raro con la consecuencia REAL del 97 — la FIA te borra la temporada ENTERA.
❓ PENDIENTE DE MIRAR: la conversión del artículo de Schumacher se cortó en 2002 → faltan Austria'02, Indianápolis'05 y sobre todo RASCASSE'06 (aparcar el coche para bloquear la pista y conservar la pole).

🏋️ EL MÉTODO ROSBERG (idea del usuario, 5-ago — de la bio de Wikipedia de su 2016; quiere METERLOS TODOS). Cada decisión de aquel invierno da para dilema/mini-evento de pretemporada, seguramente como ARCO de «sacrificio total» (estilo `invierno` pero de élite, para cuando peleas el título):
- 📵 Dejar de leer prensa y 5 meses sin redes sociales (foco vs desconexión del mundo)
- 😴 Médico del sueño / jet-lag (dormir como ciencia)
- 🧤 Modificar los guantes para mejorar las SALIDAS (detalle obsesivo)
- ⚖️ Rascar la pintura del casco: 80 gramos menos (la décima está en todas partes)
- 🥊 Entrenador mental para aumentar la agresividad + 8h/semana de psicólogo deportivo + meditación
- 🧠 Estudiar filosofía (perspectiva para soportar la presión)
- 🏎️ Karting en el tiempo libre para mantener el toque
- 🔩 Empollarse la técnica con los mecánicos en la fábrica
→ Posible mecánica: eliges 2-3 sacrificios del menú; cada uno da un buff distinto (salidas/OVR/consistencia/mental) con un coste (fama/vida personal). Si ganas el título ese año, desbloquea el dilema de la cima (cimaRosberg). 
- 📚 Y AÑADIDO GENERAL: REVISAR BIOGRAFÍAS DE PILOTOS (Wikipedia) buscando decisiones adaptables a dilemas — la de Rosberg dio para 8; Alonso/Button/Räikkönen/Kubica prometen.

📝 CONTRATOS LARGOS (idea del usuario, 5-ago — para MÁS ADELANTE): poder firmar por 2-3 años con una escudería (mejor coche o más sueldo/fama a cambio de compromiso) y NO poder elegir equipo hasta cumplirlos. Afecta al mercado (sin ofertas mientras dure), con posible cláusula de escape dramática (dilema).

📅 DILEMAS INSPIRADOS EN HECHOS REALES 2010-2025 (preparado 5-ago). ✅ HECHOS los 4 elegidos (6-ago): muroRival (2010), sancionGP (2012, sanción = 1 GP de suspensión tipo Grosjean-Spa), rebelion (2013, correr o no correr), cimaRosberg (2016: PRIMER título con 30+ → ¿retirarte en la cima?; seguir tiene coste de OVR/fama, prioridad sobre recordPregunta). El resto APARCADOS (el usuario no ve la mecánica aún; les gustan sprint/cost-cap/dominador/Ferrari-en-el-ocaso/heredar-asiento). Todos VERIFICADOS como NO duplicados de los 63 ids existentes. Los descartados por duplicar: órdenes de equipo Hockenheim'10 y Multi-21'13 (`ordenes`/`multi21`), Crashgate (`crashgate`), Netflix'19 (`docu`), Abu Dabi'21 (`falloFIA` ya tiene el escenario que decide el título), revolución híbrida'14 (`reglamento`/`estrategia`), difusor soplado'11 (`zonagris`), apendicitis de Sainz'24 (`lesion`), guerra Hamilton-Rosberg'14 (`companeros`/`cuentas`), techo de gasto'21 (`recorte`).
- **2010** 🧮 EL MURO SE EQUIVOCA DE RIVAL (Ferrari cubrió a Webber y perdió el título de Alonso en Abu Dabi): vas líder, el box quiere cubrir a un rival que NO es la amenaza real. ¿Impones tu criterio por radio o confías en el muro?
- **2011** 🛞 LAS GOMAS DE USAR Y TIRAR (llega Pirelli con degradación buscada): ¿te reinventas gestionando (más lento pero llegas) o sigues atacando y pagas en la última vuelta? [= la idea de "gestionar neumáticos" del usuario]
- **2012** 🚩 LA SANCIÓN DE UN GRAN PREMIO (Grosjean, un GP de suspensión tras el accidente de Spa): ¿recurres en público o aceptas y trabajas en silencio?
- **2013** 🦺 LA REBELIÓN DE LOS PILOTOS (reventones de Silverstone; la GPDA amenazó con no correr): ¿firmas la protesta por seguridad (te juegas la relación con FIA y equipos) o corres igual?
- **2014** 🎰 PUNTOS DOBLES EN LA FINAL (la FIA lo inventó de verdad ese año): mejor como FIA_SCENARIO nuevo que como dilema.
- **2015** 🔧 EL MOTOR ES UN DESASTRE (Alonso y el "GP2 engine" de Honda): tu proveedor de motor te hunde carrera tras carrera. ¿Lo humillas en público o tragas y ayudas a arreglarlo? [distinto de `radiocaliente`: ahí la bronca es con TU muro]
- **2016** 🏁 RETIRARTE EN LA CIMA (Rosberg se retiró 5 días después de ganar el Mundial): acabas de ser campeón y sientes que ya no tienes nada que demostrar. ¿Cuelgas el casco en lo más alto?
- **2017** 🛡️ EL HALO (la FIA lo impuso pese a la división del paddock): seguridad vs tradición y estética. ¿Qué defiendes en público?
- **2018** 💸 EL EQUIPO ENTRA EN QUIEBRA (Force India, en concurso de acreedores a mitad de año): ¿te quedas cobrando tarde y peleas por salvarlo, o saltas del barco? [complementa el `killTeam` del retro]
- **2019** 📉 EL RÉCORD QUE NO QUERÍAS (Hülkenberg, el que más GPs acumula sin podio): la prensa te lo recuerda cada finde. [espejo negativo de `recordPregunta`]
- **2020** 📸 COPIAR AL CAMPEÓN (el "Mercedes rosa" de Racing Point): tu equipo quiere clonar el coche del campeón a base de fotos. Legal… pero te llamarán copión. [distinto de `espionaje`: ahí son datos robados]
- **2021** 🏃 LA CARRERA AL SPRINT (formato estrenado ese año): ¿arriesgas el sábado o proteges la parrilla del domingo?
- **2022** 💰 TU EQUIPO SE PASÓ DEL LÍMITE (Red Bull y el cost cap): sanción y escándalo; en rueda de prensa te preguntan si ganasteis haciendo trampas.
- **2023** 😴 EL PRECIO DE DOMINAR (los 19 triunfos de Verstappen y el debate del aburrimiento): ganas todo y te acusan de hundir el espectáculo. ¿Pides que cambien las reglas, te da igual, o juegas a hacerlo más vistoso?
- **2024** ❤️ EL EQUIPO DE TUS SUEÑOS, EN EL OCASO (Hamilton ficha por Ferrari a los 39): te ofrece asiento el equipo con el que soñabas de niño… pero ya no es el mejor coche y a ti te quedan dos telediarios.
- **2025** 👑 HEREDAR EL ASIENTO DE UNA LEYENDA (Antonelli sustituye a Hamilton en Mercedes): te dan el volante que deja un mito y te van a comparar con él cada domingo.
- Extras si hacen falta: 2012 la victoria imposible de un modesto · 2017 el golpe de rabia de Bakú (roza `toqueCulpable`) · 2022 el porpoising que te destroza la espalda (roza `espalda`) · 2023 el circuito nuevo que es un desastre (Las Vegas) · 2024 el asiento a mitad de temporada (= "asiento caído del cielo", ya aparcado).
- ⚠️ EVITAR por respeto: el accidente de Bianchi (2014) y cualquier cosa ligada a tragedias reales.

👑 DILEMAS DE JERARQUÍA — EL JOVEN INSOLENTE (idea del usuario, 4-ago, PARA MÁS ADELANTE). Ya existe `jerarquia` («Guerra por el Nº1»), pero es el veterano exigiendo estatus. Falta el ÁNGULO CONTRARIO: ser tú el chaval que llega y desafía el statu quo del equipo.
  - 😤 DESAFIAR AL VETERANO: eres el novato y el equipo tiene un Nº1 intocable con galones. ¿Le respetas la jerarquía y aprendes (te ganas al box, creces más despacio) o le desafías desde el primer día (te ganas enemigos dentro, pero si le ganas te comes el mundo)?
  - 📢 HABLAR MÁS DE LA CUENTA: de novato, decir en prensa que tú deberías ser el Nº1. Los veteranos lo odian, la afición joven lo adora.
  - 🧊 EL VETERANO TE HACE EL VACÍO: si le desafías, que el equipo/el compañero te cierren el grifo de información (datos, reglajes) — enlaza con «el compañero que te come la cabeza» de Rosberg.
  - Debería enlazar con: `alphaClash` (los gallos), el pacto de no agresión (`pactoInterno`, ya hecho) y `respects`/`feuds`.

🤝 PROFUNDIZAR EN LOS ALIADOS (pendiente, 4-ago). YA HECHO: el «pacto entre pilotos» nombra a un rival real de los tres mejores coches; si te traiciona → enemigo (`feudBurn`), si cumple → aliado (`respectBuild`); y un aliado en un equipo SUBE la probabilidad de que te ofrezcan asiento (espejo de las enemistades, que ya bloquean ofertas vía `feudFilter`).
  PENDIENTE de decidir con calma qué MÁS hace un aliado:
  - Que te defienda en prensa cuando la lías (amortiguar una pérdida de fama).
  - Que te avise de un fichaje o de un movimiento del mercado antes que nadie.
  - Que en la pelea por el título te deje pasar / no te estorbe (el pacto que se mantiene solo).
  - Que si acabáis de compañeros, la convivencia sea buena (lo contrario del «fichaje del enemigo»).
  - Reciprocidad: dilema «devolver el favor» (Norris-Piastri) — si él cedió una vez, ¿cedes tú?
  ⚠️ OJO al diseñarlo: los desenlaces NO deben afirmar quién gana el título, porque la temporada se
  simula DESPUÉS del dilema (mismo error que tuvo el «desinfle» y el texto viejo del pacto).

🤝 DINÁMICAS SOCIALES — ALIADOS / PADRINOS (idea del usuario, 5-ago). El juego YA tiene `S.feuds` (enemigos, muy usado: bloquea fichajes, dilema del fichaje del enemigo) y **`S.respects` (aliados) que SE CONSTRUYE PERO NUNCA SE USA** — respectBuild() se llama al resolver bien un toque, y ahí muere. Ahí está el hueco:
- 🤝 EL FAVOR DEL VETERANO (novato, 1-2 temporadas en F1): un campeón veterano DE OTRA ESCUDERÍA te pide que le ayudes en la pelea por el título (dejarle pasar, no estorbarle en una lucha que no es tuya). ¿Le ayudas (te ganas un padrino: te recomienda a equipos grandes, te apadrina en el paddock) o compites sin regalar nada (te respetan pero vas solo)?
- 🧑‍🏫 APADRINAR A UN JOVEN (veterano): el reverso del anterior — tomas bajo tu ala a un rookie. Puede volverse tu mejor aliado… o el que te quite el asiento.
- Usos de `respects` una vez existan aliados: +prob de oferta de SU equipo, te defiende en la prensa cuando la lías, te avisa de un fichaje, o aparece como aliado en la pelea por el título (variante del `alianza` actual).

🎤 DILEMAS CANDIDATOS (del usuario, 5-ago, jugando el retro):
- 🩺 MOLESTIAS FÍSICAS: el evento "molestias a mitad de temporada" hoy es solo texto sin efecto → convertirlo en mini-dilema (¿lo callas y corres mermado / lo tratas y te pierdes 1-2 GPs?). OJO no solapar con `lesion` (grave) ni `espalda` (veterano).
- 🛞 GESTIONAR NEUMÁTICOS: dilema de estrategia de carrera (¿parada única gestionando gomas / dos paradas al ataque?). Distinto de `estrategia` (concepto de coche) y `lluvia`.

⚖️ RIESGO LEGAL Y PLAN B (evaluado 6-ago-2026 · NO es asesoramiento legal: para algo vinculante, abogado)
Situación: usamos nombres reales de pilotos y equipos + ~20 escudos reales. Lo normal en un proyecto pequeño de fan es que llegue primero un AVISO (cese y desistimiento / petición de retirada), no una demanda. Pero hay tres cosas que suben la exposición:
  1. LOS ESCUDOS son lo más delicado (marca registrada usada como identificador). Los nombres son terreno mucho más gris.
  2. YA MONETIZAMOS (Ko-fi con membresías) → decae el argumento "fan sin ánimo de lucro".
  3. "F1" EN EL DOMINIO (f1-glory.com) → expuesto a una reclamación de dominio, y perder el dominio duele MUCHO más que cambiar nombres (tráfico, enlaces compartidos, posicionamiento).
✅ MITIGACIÓN HECHA (6-ago): aviso legal al pie de la portada, bilingüe y discreto: "Proyecto personal de un aficionado, sin relación con la Fórmula 1. No está afiliado ni respaldado por la Fórmula 1, la FIA ni ninguna escudería. Los nombres, marcas y escudos pertenecen a sus respectivos titulares."
  ⚠️ OJO (lo cazó Carlos): NO poner "sin ánimo de lucro" mientras haya Ko-fi con membresías — es falso y una afirmación falsa en un disclaimer da munición en vez de quitarla. Lo que importa es la NO AFILIACIÓN.
🌐 DOMINIO (pendiente de decidir): comprar YA un dominio de reserva sin "F1" (~10 €/año) y tenerlo aparcado. Si algún día llega una reclamación de dominio, se redirige en una hora en vez de improvisar. Candidatos: glory-racing.com, pilotoglory.com, racingglory.com.
🔧 PLAN B — SI LLEGA EL AVISO (todo en index.html; estimado: UNA TARDE):
  a) ESCUDOS (lo primero y más urgente): borrar el contenido de `TEAM_LOGOS` y `TEAM_LOGOS_ERA` → el juego cae SOLO a la pastilla bicolor con siglas (ya es el comportamiento por defecto de badge()/teamBadge(), no hay que tocar nada más) + borrar los .png del repo.
  b) EQUIPOS: renombrar en 5 sitios → `F1_TEAMS` (2026), `TEAMS_2010`, `TEAMS_2020`, `EXPANSION`, `ENTRIES_2010/2020`, y las claves de `GRID2026/GRID2010/GRID2020` + `LINEAGE_*` (key/to.name) + `JUNIOR_OF` + `NAT_AFFINITY`. Nombres ficticios plausibles (Cavallino, Silberpfeil, Albion…).
  c) PILOTOS: `GRID2026/2010/2020`, `ARRIVALS_2010/2020`, `ROOKIE_POOL`, `ROOKIE_2010/2020`, `CROSSOVERS`, `LEGENDS*`. Nota: `GEN_NAMES` ya es ficticio, sirve de modelo.
  d) TEXTOS con nombres propios: el párrafo de la portada ("contra Verstappen, Norris, Antonelli"), `recordPregunta`/`recordHolders` (ya es dinámico: usa las leyendas de la era), el cameo de Alonso y el de APXGP.
  e) DOMINIO: si la reclamación va por ahí, tener pensado un nombre alternativo (p. ej. "glory-racing.com") y redirección.
  ⚠️ Lo que NO hay que tocar: toda la simulación es agnóstica de nombres; el juego funciona igual con datos ficticios.

🚀 SE HIZO VIRAL (7-ago-2026) — y el susto de facturación
Datos del día: 14.532 visitantes (+438%), 51.278 páginas vistas (+366%), 631 jugando A LA VEZ, rebote 41%.
Referidos: t.co 4.900 (alguien lo tuiteó) + google.com 3.900 (gente buscándolo POR SU NOMBRE, que es lo bueno).
España 28% / Argentina 27% · móvil 84% (iOS 46%) · funciones del ranking 0% errores, 0% timeouts.
Vercel avisó al 50% del presupuesto. ⚠️ AL 100% EL SITIO SE PAUSA (queda inaccesible), ese es el riesgo real, no el dinero.
❌ MI PRIMER DIAGNÓSTICO FUE ERRÓNEO: culpé a mis 13 despliegues del día. No era eso, era el subidón de tráfico.
✅ ARREGLADO (7-ago, commit e670ba7): los ESCUDOS estaban a 400×400 y se ven a 24px (50px en la imagen de
   compartir, su uso más grande) → bajados a 128px: 2.425 KB → 746 KB (−69%). Verificado en producción
   (ferrari.png: 93.331 → 26.193 bytes) y visualmente a 24px y 50px, sin pérdida de nitidez.
   + caché de imágenes de 1 día → 30 días con stale-while-revalidate de 1 año (el que vuelve ya no se las baja).
🚨 REGLA NUEVA A NO OLVIDAR: si se cambia el DIBUJO de un escudo hay que cambiarle el NOMBRE del fichero
   (como ya se hizo con williamsok / virgin-new). Con la caché a 30 días, si no, la gente seguirá viendo el viejo.
📌 DECISIÓN DE CARLOS: esperar y vigilar antes de tocar el presupuesto; y NO publicar la década de 2000 todavía,
   para no echar más leña mientras el tráfico está disparado.
💡 SI HACE FALTA MÁS AHORRO: quitar los comentarios en español del index.html al publicar ahorra otros ~23 KB
   comprimidos por visita (16%). Sin hacer: hay que montar un paso de publicación, y de momento no compensa.

🔔 RECORDATORIOS CON FECHA
- ⏰ **VIGILAR LOS «COMMANDS» DE UPSTASH** (consola → base f1-glory-kv → tarjeta COMMANDS). El 4-ago se agotó la cuota gratuita (500K/mes en ~3 días) y se optimizó mucho: mirar cómo crece AHORA el contador día a día. Referencia del incidente: 837K comandos con 664K lecturas vs 173K escrituras (las lecturas eran el problema). Si el crecimiento diario NO ha bajado mucho, algo se escapó → revisar.
- ⏰ **1-SEP-2026: ¿volver al plan Free?** Mirar el consumo real de agosto. Si está holgadamente por debajo de 500K comandos → downgrade a Free y dejar de pagar. Ahora está en Pay As You Go con presupuesto tope de 20 $ (que es TECHO, no cobro: el gasto real iba por 0,29 $).
- ⏰ **DOMINIO DE RESERVA** sin "F1" (~10 €/año), aparcado. Es el único riesgo legal con daño difícil de revertir (ver sección ⚖️).

📦 VARIOS / FUTURO:
- 🌍 ✅ HECHO (5-ago) BUSCADOR DE PAÍSES BILINGÜE. Lo confirmó un amigo NEOZELANDÉS de Carlos jugando con el
  botón en inglés: no encontraba su país porque la lista solo tenía nombres en español. Ahora COUNTRIES es
  [ES, bandera, EN], se muestra y se ORDENA en el idioma activo, y el buscador acepta español, inglés y el
  código de nacionalidad ("New Zealand", "Nueva Zelanda" y "NZL" llegan al mismo sitio).
  ⚠️ CLAVE DE DISEÑO: `sel.country` sigue guardando SIEMPRE el nombre en ESPAÑOL, porque de él cuelgan
  NAT_AFFINITY, el cameo de Alonso (sel.country==="España") y el país del ranking. El inglés es solo para
  mostrar y buscar; si algún día se cambia esto, se rompen esas tres cosas a la vez.
  + de paso, búsqueda SIN ACENTOS: "mexico" encuentra México y "banglades" encuentra Bangladés (antes no).
- 🌍 PAÍSES: ampliados a 130 el 5-ago (+28: Bahréin, Hong Kong, Macao, Kosovo, Mongolia, Sri Lanka,
  Trinidad, Zimbabue…) con códigos IOC verificados (BRN, HKG, MAC, KOS, MGL, SRI, TTO, ZIM…).
- 🇪🇸 EPSILON EUSKADI: descartado para el retro 2010 (decisión 4-ago). RESERVADO para cuando exista la DÉCADA DE 2000: ahí sí podría aparecer como entrada ~2010.
- ☕ KO-FI (https://ko-fi.com/carlosperezesp): ✅ botón "Invítame a un café" YA en la portada (1-ago, bilingüe, con evento analytics kofi_click). PENDIENTE: optimizar el PERFIL de Ko-fi (bio, imagen, objetivos/goals) + ⭐ NIVELES TIPO PATREON (membresías mensuales de Ko-fi con recompensas por tramo — ideas: tu nombre en los créditos/muro de mecenas · nombrar un piloto regen que sale en las partidas de todos · acceso anticipado a modos nuevos (preview) · voto en la hoja de ruta · tu escudería ficticia con tu nombre como equipo de expansión raro. Definir 2-3 tramos, no más).
  🎉 PRIMER MECENAS (7-ago-2026): **Braisferso**, tramo Mecánico (3 €). Sin bandera porque no la sabemos → el muro
  ya no pinta bandera genérica cuando falta (antes metía 🏁 por defecto, que era inventarse una). Con el tramo
  Piloto (5 €) su apellido entraría además al pool y correría en las partidas de todo el mundo.
- 📝 Sección BLOG: novedades del juego + apuntes personales del autor.
- Link de "compartir carrera" (deep-link a una carrera concreta; la imagen ya está).
- Logos de las competiciones (Indy, NASCAR, DTM…).
- Promoción en Instagram / Twitter.
- "Medias altas progresando" (nota antigua, aclarar qué quería decir — quizá cubierto ya por la salud de parrilla).
- 🏆 Triple Corona de carrera suelta (Indy 500 / Le Mans en pretemporada sin dejar la F1, a riesgo de perderte un finde o lesión) — GUARDADO, a pensar.
- 🧑‍💼 Modo DIRECTOR DE ESCUDERÍA (futuro): fichas 2 pilotos + reserva cada año, ~10 temporadas.

═══════════════════════════════════════
🎲 EL ARCO DEL REGLAMENTO — ✅ HECHO Y VERIFICADO (7-ago-2026)
═══════════════════════════════════════
Tres dilemas encadenados + una pieza de sistema nueva (el COMPROMISO de varios años).

1) `apuestaReglamento` «La apuesta del reglamento» (Hamilton→Mercedes 2013). Sale DOS años antes de la
   revolución técnica, si tienes coche TOP-3 y OVR≥84. Un equipo modesto te enseña los planos.
   ⚠️ NO recrea la revolución: se ENGANCHA a la que ya existía (`regResetOffers`). El texto no afirma
   ningún resultado — la apuesta la cobra `regReset()` dos temporadas después.
   · El texto usa NOMBRES y POSICIONES REALES de esa partida (helpers `gridRank` + `ordCar`):
     «Tienes el tercer mejor coche de la parrilla. Williams tiene el sexto.»
   · El candidato (`regBetTeam`) pasa por CUATRO filtros: feudFilter (enemigos), burned, neverHire y rbOk.
     Si no queda ninguno, el dilema NO sale. Medido: 0 de 85 apariciones con un equipo enemistado.
   · Es ESTABLE dentro del año (cond/d/opts piden el candidato por separado → no puede cambiar a mitad).
   · 3 opciones: firmar · quedarte donde se gana (te apunta a quién rechazaste) · exigir a los tuyos.
2) COMPROMISO (`S.commitTeam`/`S.commitYears`) — pieza NUEVA de sistema, primera piedra de CONTRATOS LARGOS.
   Firmar = DOS temporadas sin mercado. Se implementa como pantalla de UNA sola oferta (no saltándose la
   pantalla), para que el fichaje pase por el camino normal y no haya que replicar asiento/rol/compañero.
   Retirarse sigue permitido: nunca se atrapa al jugador.
   · El mercado de LOS DEMÁS sigue moviéndose: npcSeason/checkExpansion corren dentro de simSeason, no en
     la pantalla de ofertas (duda de Carlos, comprobada).
   · Flecos cerrados: si el equipo se RENOMBRA el compromiso le sigue (rebrandTeam); si MUERE quedas libre
     (killTeam); si pierdes el asiento (forceMove) o dejas de ser titular de F1, decae. Medido: 0 compromisos
     colgados en partidas vivas (300 carreras).
3) `aguantarApuesta` «El año de la verdad» — cae en el hueco de dilema del año del premio, cuando NO puedes
   elegir equipo. No puedes irte (contrato firmado), pero puedes ENVENENARLO: pedir la puerta te baja a Nº2
   y te cierra ese equipo para siempre. Volcarte da coche/OVR/rumbo.
4) `reglamentoHunde` «El reglamento que te hunde» (Vettel 2014) — el espejo. Ventana regYear+1..+3.
   Solo sale si el CARÁCTER del coche choca de verdad contigo (carAffinity<0). 3 salidas: reinventarte
   (reutiliza `reinventTo`, no se duplicó nada) · aguantar (se apoya en el suavizado por años de carAffinity)
   · romper el contrato un año antes.
5) 🔧 AGUJERO TAPADO: `regReset()` reseteaba el RENDIMIENTO de los coches pero NO su CARÁCTER. Sin eso, un
   cambio radical de reglamento no podía dejar de encajar con tu pilotaje → el caso Vettel era IMPOSIBLE.
   Ahora la revolución rebaraja también `f1char`. Una línea, y sin ella el dilema 4 era literatura.
6) 🎰 LA APUESTA SE COBRA EN TRES GRADOS (decisión de Carlos, 55% de acierto partido en dos):
   30% PLENO (90-94: el coche a batir) · 25% A MEDIAS (84-88: suben arriba pero no arrasan, «el Alonso-Aston»
   que el juego no sabía producir) · 45% RIDÍCULO (68-78). Cada grado con su texto en el destape.
   Medido en 300 carreras: 14 / 15 / 23 (esperado 15,6 / 13 / 23,4). Clavado.
   + si RECHAZASTE y aquello arrasa, puñalada («el proyecto al que dijiste que no es el coche a batir»);
     si se estrella, «esquivaste la bala». Medido: 5 puñaladas / 7 balas esquivadas.
🐞 DOS FALLOS DEL ARCO, CAZADOS POR CARLOS Y AL REVISARLOS (5-ago):
  a) ⚠️ EL FILIAL NO PUEDE SER EL COCHAZO (lo cazó Carlos: «¿Racing Bulls va a ganar el reglamento?»).
     No era estético: evolveF1() TOPA al filial a (marca madre − 6) y a 83. Si la revolución lo ponía en
     90-94, al año siguiente el tope lo devolvía a mitad de tabla → te anunciaba un pelotazo y te dejaba
     tirado. Nuevo helper `isJrTeam()`: los filiales quedan fuera del "brawn" Y de ser el equipo de la
     apuesta. Medido en 200 partidas: 0 filiales de cochazo, 0 apuestas ofrecidas por un filial.
     ⏳ QUEDA UN CASO RARO SIN CUBRIR: en la era 2000, Minardi NO es filial al principio pero lo será al
     convertirse en Toro Rosso. Si apuestas por Minardi y lo compra Red Bull, el tope entra en juego.
     Es raro, lento y hasta realista (pasó de verdad) → se deja así a propósito.
  b) ⚠️ CONTRADICCIÓN EN EL DESTAPE (mía): si el azar elegía como "brawn" al MISMO equipo por el que
     apostabas y luego la apuesta salía "a medias" o "mal", el destape decía a la vez que arrasa y que
     tu apuesta falló. Ahora, si no sale redonda, se busca otro cochazo. Medido: 0 contradicciones en 400
     partidas, y los grados salen 29/19/39 frente a 26/22/39 esperados.

🐞 TERCER REPASO (5-ago, Carlos jugando: «¿cuál es la diferencia entre la B y la C?»). La pregunta
   destapó DOS fallos: la B y la C no se distinguían porque la C, además, estaba mal calibrada.
  a) La opción C (exigir a los tuyos) NO apuntaba `regBetRefused`, así que quien la elegía se perdía el
     desenlace de dos años después (la puñalada / la bala esquivada). Solo lo registraba la B.
     Ahora ambas lo apuntan: medido 92% de desenlaces en 400 partidas forzando la C (antes: 0%).
  b) ⚠️ LA C ERA UN MAL NEGOCIO, y de forma invisible: como el dilema EXIGE que ya tengas coche top-3,
     tu f1target ya ronda el tope de 93 → el premio de +4/+8 se comía el Math.min y de media subía +1,
     con un 30% de veces en que el efecto era EXACTAMENTE CERO. El castigo (−2/−5), en cambio, se
     aplicaba entero. Premiar con "más coche" a quien ya tiene el mejor coche no puede funcionar.
     ARREGLADO cambiando el premio por un SEGURO (`S.regPrepared`): tu fábrica llega preparada al cambio
     y regReset() le pone un SUELO de 80-88 (y la exime del hundimiento de los ex-grandes). No es el
     pelotazo —eso sigue siendo el "brawn" a 90-94—: es NO HUNDIRTE.
     Medido con y sin seguro al llegar la revolución: media 84 vs 71,4 · hundidos (<75) 0/250 vs 178/250 ·
     coche decente (≥80) 250/250 vs 42/250. Reparto 60/40 confirmado (181 seguros / 119 castigos de 300).
  c) Etiquetas más legibles: «Quedarte y no tocar nada» vs «Quedarte, pero preparar YA el cambio 🛡️».
  d) ⚠️ EL TEXTO DABA POR HECHO QUE LLEVABAS AÑOS ARRIBA (2º aviso de Carlos, jugando: venía de ser 7º y
     8º con BAR y el juego le hablaba de «quedarte donde se gana»; y encima la opción C le pedía a sus
     ingenieros que «se pusieran las pilas» justo cuando le acababan de construir el mejor coche).
     · La descripción ahora MIRA TU ÚLTIMA TEMPORADA: si acabaste 5º o peor, empieza con «Tus ingenieros
       acaban de darle la vuelta a todo…»; si venías de arriba, mantiene el texto seco de antes.
     · MEDIDO: el caso «recién llegado» es el 70% de las veces. O sea que el texto viejo estaba mal LA
       MAYORÍA DEL TIEMPO → lección: no dar por supuesta la trayectoria del jugador en ningún dilema.
     · La opción C se reescribió sin reproche: ya no es «ponerse las pilas» (insultante para unos
       ingenieros que acaban de darte el mejor coche) sino llevarles los planos y avisar de que el
       reglamento que viene se prepara AHORA. Funciona vengas de donde vengas.

🐞 4º REPASO (5-ago, Carlos jugando otra vez — dos cosas más):
  e) LA FIRMA ERA PARA EL AÑO SIGUIENTE, pero el texto no lo decía: ganaba el Mundial con BAR y el
     desenlace le soltaba «Firmas por Benetton», como si se cambiara de mono a mitad de temporada.
     Ahora lo dice explícito: «A PARTIR DEL AÑO QUE VIENE: esta temporada la terminas donde estás»,
     y la etiqueta es «Firmar por ellos para el año que viene».
  f) ⚠️⚠️ EL Nº2 QUE GANA EL MUNDIAL SEGUÍA SIENDO Nº2 (fallo GORDO, y viejo, no del arco nuevo).
     Carlos: campeón en 2009 → ficha por Sauber donde ya está Vettel (campeón vigente) → le ofrecen
     Nº1 → en 2010 Vettel gana el Mundial SIENDO EL Nº2 → en 2011 le vuelven a ofrecer Nº1.
     CAUSA: toda la jerarquía se decidía con `gap = (OVR + títulos·2) − skill del compañero`, o sea
     solo NIVEL. Los RESULTADOS no entraban en la ecuación en ningún sitio. Y encima el rol era
     «pegajoso»: roleFor() solo permitía subir de 2→1, nunca bajar, y chooseOffer() conservaba el rol
     al renovar con el mismo compañero. Resultado: un Nº1 batido por su compañero lo era para siempre.
     ARREGLO: simF1 guarda `row.matePos`/`row.mateName` (posición del compañero en el campeonato), y
     · si tu compañero es CAMPEÓN y tú no → te quita el Nº1, con evento propio;
     · el blindaje del Nº1 se cae si te batió en el campeonato (se recalcula de verdad).
     MEDIDO en 300 carreras (3.558 temporadas de F1): matePos registrada en el 100%; de las 51 veces
     en que seguías en el mismo equipo tras un compañero campeón, ahora te degradan 51 y mantienes el
     Nº1 CERO (antes: siempre). El ascenso normal 2→1 sigue vivo (61 casos).
     💡 Queda para pensar: ¿debería un campeón vigente aceptar ser Nº2? Hoy `alphaClash` acaba
     resolviendo la convivencia, pero la OFERTA inicial puede seguir siendo rara.

📊 VERIFICACIÓN: 540+ carreras, 4 eras (2000/2010/2020/2026), 0 errores de consola, 0 asientos mal, 0 pilotos
   duplicados. Frecuencias: apuesta 28% de las carreras, hunde ~7%. Las tres van en el BLOQUE DE PRIORIDAD de
   pickDilemma (ventanas de 1 año: sin prioridad no se veían nunca) y sin el descanso de 1 año entre dilemas.
🅿️ APARCADO (idea de Carlos): dar más SABOR TECNOLÓGICO/REGLAMENTARIO a los cambios de reglamento — explicar
   al fan qué cambia exactamente (efecto suelo, híbridos, motores...). Para el futuro.

═══════════════════════════════════════
📅 RETO SEMANAL — DISEÑO (Carlos, 7-ago-2026) · EN CURSO
═══════════════════════════════════════
IDEA DE CARLOS: retos tipo «Eres Alonso» (empiezas en Minardi en su año de debut, con su edad y personalidad)
o «Eres Hamilton» (empiezas en McLaren). Y retos genéricos de regla: One-club man, no puedes fichar por equipos
británicos, un rival a 99 OVR cada temporada, etc.
DUDAS QUE PLANTEÓ: (1) si eres Alonso, ¿dónde pones tu nombre para el ranking? (2) ¿es aburrido replicar su
trayectoria tal cual (Minardi→Renault→McLaren→Renault…)?

RESPUESTAS ACORDADAS:
- ❗ NO se replica la trayectoria: se copia LA CASILLA DE SALIDA, no el guion. Edad, nacionalidad, OVR inicial,
  techo, personalidad y equipo de debut. A partir de ahí el juego es el juego (historia alternativa, como el retro).
- 🏁 EL GANCHO ES EL LISTÓN REAL: al terminar, comparar con lo que hizo él de verdad ("Alonso: 2 títulos,
  32 victorias · Tú: 4 y 51") → «¿lo has hecho mejor que él?». Se explica solo y se comparte solo.
- 🎚️ La dificultad sale gratis y variada: Minardi 2001 = supervivencia con coche horrible; McLaren 2007 = cochazo
  pero si no ganas has fracasado.
- 🏆 RANKING: dentro de la partida te llamas Alonso, pero en el ranking SALES CON TU APODO DE SIEMPRE + el reto
  como etiqueta ("Carlos · Eres Alonso · 1.240 pts"). No cambia nada del flujo actual (el nombre se pide al final).
  ⭐ RAZÓN DE PESO DEL MODO: hoy el ranking global compara partidas incomparables (uno empezó en karting en 2026,
  otro en el retro de 2010). Con un reto semanal TODOS juegan el mismo escenario → por primera vez es JUSTO.
- 🧩 DOS FAMILIAS QUE SE COMBINAN: (A) «Eres X» = casilla de salida · (B) «Reglas» = restricciones/hándicaps.
  Mezclables ("Eres Alonso + One-club man" = toda la vida en Minardi). Empezar por A (más vistoso), B da
  rejugabilidad barata después.

✅ RETO 1 «ERES ALONSO» — HECHO Y EN PRUEBAS (5-ago-2026, solo con ?preview=glory26)
- Arranca en MINARDI 2001, 19 años, OVR 74, techo 95, 🇪🇸, estilo CONSISTENTE (que es el que el propio
  juego describe como «estilo Alonso») y de PILOTO Nº2 (un debutante de 19 no llega de Nº1 ni al peor coche).
- El Alonso real se BORRA de las llegadas y de la parrilla: su asiento es el tuyo. Verificado 0/80.
- El APELLIDO lo pones tú: es el que va al ranking. Lo demás (país, estilo, dorsal 21) lo hereda de él.
  La pantalla de identidad oculta país y estilo y muestra una tarjeta con el reto y sus datos fijos.
- Se presenta como UNA sola oferta y el fichaje va por renderOffers/chooseOffer, el camino de siempre
  (asiento, rol, compañero, años en el equipo, evento de firma) → hereda estrellas, tendencia, carácter
  del coche y encaje con tu pilotaje. Minardi sale ★☆☆☆☆, como debe ser.
- VEREDICTO FINAL contra su palmarés real (2 títulos, 32 victorias, 22 poles, 106 podios): «LO HAS HECHO
  MEJOR QUE ÉL» / «A SU ALTURA» / «ÉL LLEGÓ MÁS LEJOS». Medido con bot al azar: 11 mejor / 5 igual / 64 peor.
  Un jugador humano debería superarlo bastante más a menudo; revisar tras jugarlo.
⭐ PIEZA REUTILIZABLE `advanceEraTo(year)` (petición de Carlos): adelanta una era hasta un año concreto
  (envejece la parrilla, resuelve renombrados, mete entradas y hace debutar a los pilotos que tocan).
  ES LO QUE HARÁ FALTA para que el MODO RETRO pueda arrancar en 2001, 2002… y algún día en cualquier
  temporada suelta. Se apoya en processLineage/processEntries/processArrivals, y para eso se extrajo
  `processEntries()` de checkExpansion.
🐞 FALLO CAZADO DE CAMINO: la regla que protege a los jóvenes prometedores de ser desplazados impedía que
  MONTOYA llegara nunca a Williams (el más flojo era Button, 21 años y 78) — en la realidad fue justo a
  quien sustituyó. Ahora se permite el desplazamiento si el que llega tiene un techo 12+ por encima.
  Medido: Montoya 0/60 → 80/80, y 80 partidas normales de las 4 eras sin regresión.
🐞 Y OTRO: APXGP (el equipo de la película de 2025) aparecía en 2018 en la era 2000 porque solo miraba la
  edad, no el año. Ahora exige 2025+.

PUNTOS TÉCNICOS:
1. ⚙️ EL GRUESO DEL TRABAJO: hoy cada era arranca en su año base (2000/2010/2020). Alonso-Minardi es 2001 y
   Hamilton-McLaren es 2007 → hay que poder ARRANCAR EN UN AÑO CUALQUIERA dentro de una era. Factible
   (`S.baseYear` y `S.startAge` ya son campos del estado; `yearNow()` = baseYear + (age − startAge)), pero hay que
   "adelantar" la era a ese año: saltarse los `arrivals` anteriores y los pasos de `lineage` con ventana ya pasada.
   ⚠️ ESTO HACE QUE LA DÉCADA DE 2000 PASE DE OPCIONAL A IMPRESCINDIBLE: Alonso y Hamilton viven ahí.
2. 💸 LA ROTACIÓN SEMANAL NO NECESITA SERVIDOR: se calcula del número de semana del año, en el cliente.
   Coste de infraestructura CERO, que con el susto de facturación no es un detalle menor.
3. ❓ PENDIENTE DE DECIDIR (Carlos): ¿el mundo evoluciona IGUAL para todos esa semana (justicia total, pero
   se spoilea en Twitter) o ALEATORIO para cada uno (mismo punto de partida, mundos distintos)?
   → RECOMENDADO: aleatorio. Un reto que se resuelve leyendo un tuit se muere en dos días.
4. 👴 «LA VUELTA DEL RETIRADO» (Schumacher 2010 / Alonso 2021) encaja aquí: hoy retirarte acaba la partida.

═══════════════════════════════════════
💡 IDEAS DE UN AMIGO (por email, jul 2026)
═══════════════════════════════════════
1. REVIVIR carreras de pilotos reales: empiezas con los datos iniciales de un piloto real + su potencial de crecimiento, y ves dónde acaba con TUS decisiones (¿Vettel dice no y se va a Mercedes? ¿Hamilton empieza en Williams? ¿Kubica ficha al fin por Ferrari?). Mini-partidas de historia alternativa, una nueva cada semana como "save". Muy interesante.
2. ~~QUITAR jóvenes que realmente no van a llegar a F1 (Verschoor/Jakobsen ganando 5 mundiales chirría)~~ ✅ HECHO (31/07): techo de los rookies normales capado a 93 (antes hasta 96); la élite 94-97 queda casi solo para los "talentos generacionales". Medido: los de relleno solo ganan el 11% de los títulos y casi nunca 3+. Los karting talentosos siguen llegando (eso se mantiene, como le gustaba).
3. FICHAJES realistas y VISIBLES: más detalle de quién está en cada equipo y poder ver la PARRILLA COMPLETA. Los fichajes ya le parecen muy buenos, pero vio a Hamilton quedarse hasta 2035 en una partida y le chirrió (¿glitch?). [Nota: es la cola rara de la retirada de NPCs muy viejos; se podría endurecer el retiro a 45+ para que no se eternicen. + montar un visor de parrilla.]
4. Jugar como EQUIPO en vez de piloto (= Modo Director de Escudería, YA en la lista): fichar pilotos + programas de jóvenes, sencillo como ahora, y ver si llevas a Hyundai a lo más alto. [El amigo valida la idea que ya teníamos.]

═══════════════════════════════════════
✅ HECHO (en producción)
═══════════════════════════════════════

RECIENTE (jul 2026):
- 📉 Declive suavizado (feedback de jugador: "a los 31-32 caes muy rápido"): ya no es precipicio (-0.5/-1.2/-2 por año en 30→33, progresivo estilo Alonso). Verificado que NO regala títulos: 0% de mundiales ganados con 35+, el coche sigue rompiendo dinastías tardías.
- 🏁 Reserva realista: si corres GPs de sustituto, posición FINAL real en el mundial según tus puntos (calibrado con datos reales: Hülkenberg'20, Gasly'23…) + las poles de sustituto ya suman al palmarés.
- 🏆 RANKING de jugadores online: Semanal + Global, backend Vercel KV (Upstash Redis), puntuación = "Puntos de leyenda". Real pero OCULTO tras flag preview; el público arranca el 1-ago. Verificado end-to-end.
- 🎤 Dilema "¿vas a por el récord?" + arco completo (bocazas / intermedio / redención "callado la boca"), reloj por temporadas de F1. Traducido a inglés.
- 👥 +43 pilotos reales verificados con fuentes: 6 crossovers (FE/WEC/IndyCar) + 37 promesas (F2/F3/FREC/F4/karting). Correcciones: Monteiro portugués, Mirón español, Olivieri = Emanuele.
- 🇪🇸 Cameo de Alonso: si un prodigio español sube pronto a la F1 y el peor coche (no Racing Bulls) tiene hueco, Alonso disputa ahí su última temporada como tu compañero. Sin textos, se descubre en la oferta.
- 🐂 Racing Bulls no ficha veteranos/crossovers (regla férrea, 3 vectores cerrados).
- 📊 Salud de parrilla: "talento generacional" (anti-erosión: el top se sostiene ~95-96 en toda época) + "generación dorada" (~15%: tus compatriotas +3/+5 → raro pero posible ver a Sainz/Colapinto ganar mundiales). Diversidad de campeones validada (6-12 distintos por 20 años, como la F1 real).
- 🏁 EQUIPO-BRAWN: un equipo de expansión puede debutar con cochazo (Brawn'09) y "corregirse" al año siguiente.
- 🆕 Penalización de adaptación al llegar a equipo nuevo (escalada por OVR: un crack la domina rápido; un cochazo la supera igual).

HISTÓRICO:
- Dilema de la FIA (9 escenarios con opciones propias; un fallo puede decidir el mundial → solo candidatos reales, máx 2/partida).
- Lesiones realistas (fuera de pista = "—" no clasificado; accidentazo en carrera = temporada cortada con posición real).
- 5ª vía joven (Super Fórmula/IndyCar/FE si te atascas → te desarrollas → vuelves a la F1; finales dignos si no).
- Déficit de coche por estatus/rol (si eres Nº2) y declive gradual al envejecer (rompe dinastías de décadas).
- Custom events analytics · compartir carrera (imagen) · call-up de reserva a mitad de temporada · "que no te jubilen siendo bueno" · declive de OVR personalizado (pico/estilo/campeón/reinvención).

═══════════════════════════════════════

📊 NOTA analytics (28/07/2026): ~1.200 jugadores reales, ~4 carreras/jugador, 96% llegan a F1, 90% las terminan. Público: Argentina 32% + España 21%, 95% en español (inglés 5%). Balance de títulos SANO — decisión tomada: NO meter rivales-estrella. ~72% ganan algún mundial pero solo 13% llegan a 6+ títulos (leyenda) y 3% a 8+ → "todos catan la gloria, la leyenda de verdad se suda".

🐞 BUGS REPORTADOS Y YA ARREGLADOS: "pole por milésimas" no sumaba la pole (e0d1a2d) · dilemas que dicen "ganas" (muro de control / órdenes) no sumaban la victoria (c101ed9, vía S.dilWin).

═══════════════════════════════════════
🔄 MERCADO DE LOS NPC — ARREGLADO (5-ago-2026)
═══════════════════════════════════════
Lo cazó Carlos jugando: «me dio la impresión de que Fisichella se tiró toda la vida en Benetton».
CAUSA: el único mercado entre NPC era que los 4 MEJORES equipos pescaran talento de abajo, y solo con
un 20% de probabilidad → menos de UN traspaso por temporada en toda la parrilla. En la F1 real cambian
de equipo 4-8 pilotos por año.
1er INTENTO (descartado): intercambiar pilotos por parejas. Lo tumbó Carlos con razón — «no tiene
sentido intercambiar pilotos, lo suyo es que fichen segun lo que haya disponible». Era una comodidad
para no romper la integridad, no un modelo de mercado. Nadie cambia cromos en la F1.
ARREGLO BUENO: `npcMercadoOrdinario()` por HUECOS Y FICHAJES, en cascada como en la realidad:
  1. Se abren HUECOS: retiradas (¡el asiento queda LIBRE, ya no se tapa con un novato de oficio!) y
     no-renovaciones (pesa la antigüedad `d.yrs` y rendir por debajo de lo que da el coche).
  2. Los equipos eligen POR ORDEN DE COCHE, el mejor primero:
     cabeza → el mejor disponible · media → de la mitad buena al azar · cola → jóvenes, y la mitad de
     las veces directamente un DEBUTANTE.
  3. Los huecos restantes se cubren con novatos y quien no encuentra asiento se cae de la F1.
  Red de seguridad al final: ningún asiento puede quedar vacío. Se respeta la regla de Racing Bulls.
  ⚠️ ORDEN IMPORTANTE: se llama ANTES del bloque de «los 4 grandes pescan talento», porque ese bloque
  da por hecho una parrilla llena y petaría con los huecos de las retiradas.
MEDIDO (25 carreras por rama, misma metodología en ambas):
                     ANTES   AHORA
  mediana              3       3
  p90 (cola larga)     9       7
  máximo              21      18
  estancias 8+ años  13,7%   7,4%
  estancias 12+ años  4,7%   0,8%
  campeones distintos  67      62      (la diversidad se mantiene)
  duplicados/asientos mal: 0 en ambas ramas.
MEDIDO del modelo definitivo (25 carreras, 598 temporadas): integridad 0 duplicados / 0 asientos mal /
0 asientos vacíos · permanencia mediana 3, p90 7, máx 18, 12+ años 1,6% · campeones distintos 67.
¿FICHAN LOS EQUIPOS MALOS A JÓVENES? (2ª pregunta de Carlos) SÍ, y se ve en los datos:
  · DÓNDE DEBUTAN los novatos: cabeza 17% · media 26% · COLA 57%
  · plantilla resultante: cabeza 29,9 años y nivel 87,3 (20% <25) · media 28,7 y 82,2 (30% <25) ·
    COLA 27,5 años y nivel 80,7 (42% <25). El gradiente sale solo de la cascada, no está forzado.
⚠️ AVISO METODOLÓGICO PARA EL FUTURO: mi primera medición decía «25% de estancias de 12+ años» y estaba
MAL — no cerraba la estancia cuando un piloto se RETIRABA, así que contaba hasta el final de la partida.
La cifra real era 4,7%. Al medir permanencias hay que cerrar la estancia cuando el piloto desaparece de
la parrilla, no solo cuando cambia de equipo.

📝 TEXTOS RETOCADOS (5-ago, todos por avisos de Carlos jugando):
- «Firmar por ellos para el año que viene» → «Firmar con ellos al acabar la temporada» (más claro).
- `nuevoJefe` ya NOMBRA al equipo: «McLaren ficha como Team Principal a un hombre que viene de ganarlo
  todo…» en vez del eufemismo «Un peso pesado se sienta en el muro».
- El reto pasa a llamarse «El Nano» en LOS DOS idiomas, con subtítulo «Alonso en Minardi · 2001 · 19 años».
- La rejilla de retos se REPINTA al cambiar de idioma (se construye una vez al cargar y se quedaba en
  español; los data-es/data-en no sirven porque es dinámica).
- Ko-fi: quitado el reclamo de los 5 € del párrafo de portada, a petición de Carlos.

═══════════════════════════════════════
🏛️ CACHÉ + GALLOS v2 + COMEBACKS — HECHO (5-ago-2026, diseño acordado con Carlos)
═══════════════════════════════════════
1) GALLOS SOLO MIENTRAS SON LEONES (pega de Carlos: «Alonso escudero de Antonelli podría darse»).
   isElite: nivel 87+ a cualquier edad, o título con <34 años. Un campeón crepuscular (34+, <87) pasa a
   ser MAESTRO/ESCUDERO y alphaClash ya no lo rompe (Schumacher-Rosberg 3 años, Räikkönen-Vettel 4).
   Medido: 485 temporadas-dúo león+escudero conviviendo en 60 partidas, 9 dúos de 2+ años.
2) CACHÉ DE EQUIPO (secreto, 0-100): semilla por era (CACHE_SEED) + deriva lenta hacia el nivel del
   coche (media vida ~8 años: el gigante caído sigue siendo grande una década) + planta al ganar
   constructores (+4). Migra en renombrados, muere con el equipo, los equipos nuevos entran sin pedigrí
   (≤60). La revolución técnica NO lo toca. SOLO gobierna a los GALÁCTICOS EN SU PRIME (<34 y 90+, o
   multicampeón 87+): esos solo fichan por caché ≥72. El resto del mercado, libre.
   ⭐ EL CREPUSCULAR ESTÁ EXENTO (2ª pega de Carlos: Alonso→Aston, Kimi→Alfa): medido, 90 traslados de
   campeones 34+ a equipos sin caché en 60 partidas. Vive.
   ⭐⭐ EL MIEDO DEL HRT CAMPEÓN, DESPEJADO CON A/B: % de títulos de pilotos ganados con coche ≤82:
   17,2% con caché vs 17,1% sin él. IGUAL. Los mundiales underdog vienen del coche (revolución), no de
   fichar galácticos, y poachStar sin caché ficha al mejor 86-89, que basta para ganar.
   HONESTIDAD: el freno muerde poco en volumen (los traslados de galácticos prime a equipos sin caché
   apenas bajan 62→59) porque el simulador ya enviaba a las estrellas casi siempre a los grandes; las
   vías de RUPTURA (alphaClash, oustTeammate) siguen libres a propósito — un expulsado coge lo que hay,
   como Ricciardo→Renault 2019. El caché bloquea el caso escandaloso (cochazo sin pedigrí comprándose a
   un multicampeón en su prime vía poachStar) y da la base del futuro modo Team Principal.
3) 🎓 CANTERA: equipo con caché ≥85 → sus promesas generadas nacen con +2 de techo (Antonelli-Mercedes).
4) 🔙 COMEBACKS (idea de Carlos): retirados NOTABLES (título o 86+, retirados ≤38) van a un bolsillo y
   pueden volver a los 2-4 años, máx UNO por partida (~25% de partidas), con óxido (−2−años) y siempre a
   equipo con caché ≥70 o cochazo ≥85 (nadie vuelve para un HRT). Guardia de respeto NO_TAUNT (nada de
   Schumacher volviendo tras 2014). La vuelta de Schumacher: en la era 2010 YA era el punto de partida
   (parrilla de salida: Schumacher 41 años en Mercedes GP); en la era 2000 ahora puede EMERGER sola —
   visto en pruebas: «🔙 BOMBAZO: M. Schumacher vuelve del retiro a los 39 años y correrá con Renault».
📊 VERIFICADO: 240 partidas (2 tandas A/B de 60+60), 4 eras, 0 errores, 0 duplicados, 0 asientos mal,
   0 vacíos; campeones distintos 110 vs 108 (diversidad intacta); comebacks 15/60 partidas.

🔎 REVISIÓN FINAL DEL PAQUETE (5-ago, a petición de Carlos antes de probarlo) — 4 fallos cazados:
  1. La regla del gallo NO aplicaba al jugador: el playerElite de alphaClash seguía usando «título =
     gallo para siempre». Un Carlos campeón crepuscular no podía ser escudero. Espejado con isElite.
  2. Un equipo podía NO RENOVAR a su propio galáctico en su prime («flojo» = rendir por debajo del
     coche: un 89 en un Ferrari de 96 contaba como flojo) y, con el caché activo, si ningún equipo con
     pedigrí tenía hueco ese año, DESAPARECÍA de la F1 en silencio. Ahora nadie echa a su superestrella.
  3. El comeback podía CLONAR a un piloto: los regens repiten nombre a veces, y dpool.find por nombre
     podía agarrar a uno SENTADO y ponerlo en dos equipos a la vez. Guardia: si hay alguien sentado con
     ese nombre, no hay comeback.
  4. VÍA ALBON: el bueno que se quedaba sin asiento en el mercado se esfumaba para siempre. Ahora los
     mejores sin sitio (84+, ≤34 años, máx 3) esperan en la nevera y reentran en la bolsa al año siguiente.
  📊 Verificado tras los parches: 120 partidas, 4 eras — 0 errores/duplicados/asientos mal/vacíos ·
  0 galácticos despedidos por su equipo · 68 regresos vía Albon · 35 comebacks (~29% de partidas, máx 1) ·
  970 temporadas-dúo escudero · underdogs 16,4% (en línea con el 17,2% medido antes) · 144 campeones
  distintos · el reto de Alonso arranca 15/15.

🎮 PRIMERA PARTIDA COMPLETA DE CARLOS AL RETO (5-ago) → 13 ARREGLOS de una tacada:
 1. La tarjeta del reto en la pantalla de identidad NO se traducía al pulsar ES/EN (es contenido puesto
    por JS, los data-es/en no la cubren) → setLang repinta la pantalla entera. + país del chip traducido.
 2. `toqueCulpable` decía «su carrera, acabada» (parecía retirada) → ahora «Un cierre tuyo en Monza manda
    a X contra el muro: fuera en el acto». Nuevo helper GLOBAL `gpAt(año)` con años de estreno de cada
    circuito (Abu Dabi 2009, Singapur 2008, Yeda 2021…) — la lista vieja de maybeEvent tenía Abu Dabi SIN
    año y podía salir en 2001. Medido: 0 circuitos anacrónicos en 120 partidas.
 3. Chips del carné se partían en dos líneas → .tag con white-space:nowrap.
 4. «Borra tu número tras años grises» tras UNA temporada → ahora mira S.yearsAtTeam: <3 años dice «se
    toman tu marcha tan pronto como un desprecio».
 5. Dilema `contrato`: «Romper y fichar por el mejor» sin nombre (y el "mejor" por coche puede no ser el
    campeón) → etiqueta «Firmar con Williams para el año que viene 💔» con nombre real.
 6. ⚠️ EL MISMO DILEMA prometía «te vas YA»… pero mecánicamente el fichaje ocurre AL ACABAR la temporada
    (forceMove+poachTeam actúan en el mercado siguiente). Carlos corrió todo 2006 en Williams creyendo que
    la decisión no había hecho nada. El texto ahora dice explícito «esta la terminas en X».
 7. Recién fichado por McLaren, la apuesta del reglamento le ofrecía comprometerse con OTRO equipo en la
    misma pantalla → cond exige yearsAtTeam≥2. Medido: 0 apariciones con menos de 2 años.
 8. Quiebra de Toyota → el mercado decía «Tras la ruptura» → S.forceReason: «Toyota ha quebrado y
    desaparece de la F1: te quedas sin volante». Medido 5/5 con el texto nuevo.
 9. Comparación final ilegible → tabla real de 3 columnas (etiqueta · ALONSO · TÚ, CSS .cmp-row) y la
    pantalla final lleva el nombre del reto («📅 El Nano · Carrera: 2001-2022»).
10. Equipo «Prost» → «Prost GP» (5 sitios: TEAMS/GRID/LINEAGE/LOGOS/CACHE_SEED) para no confundir con el
    piloto A. Prost de las leyendas.
11. «Cochazo bajo el culo» eliminado (sonaba feo) → «uno de los mejores coches de la parrilla».
12. Línea de tiempo: 👑 top-3 pilotos y 🏭 constructores en DOS líneas (estaba apelotonado).
13. Ficha de cada año en dos líneas: «Ferrari · 2003 · F1» / «249 pts · 🏭 Constructores: 2º» (antes el
    año/categoría/puntos/constructores iban todos en la segunda línea).
📊 Verificación: 120 partidas 4 eras 0 errores/dup/asientos; reto jugado entero por bot (21 temporadas,
   endYears y tabla comprobados visualmente); toggle ES/EN de la tarjeta verificado en ambos sentidos.
⚠️ QUEDA ABIERTO (dicho por Carlos en la misma partida, no tocado aún): nada — los 13 puntos cubiertos.

🎮 SEGUNDA PARTIDA DE CARLOS (5-ago) → 8 ARREGLOS más:
 1. Los años JUNIOR ahora enseñan el top-3 de la F1 CON ESCUDOS (antes: evento de texto plano «🌍 F1
    2003: Schumacher · McLaren»). La fila junior guarda top3d/top3c y la línea de tiempo pinta la misma
    tarjeta que en F1. Medido: 548/548 temporadas junior con tarjeta.
 2. `ingeniero`: ya NOMBRA el equipo al que se va («ficha por Aston Martin») y si te vas con él vas A ESE
    equipo (poachTeam), no al mercado genérico. Y «de toda la vida» → «de confianza» (podías llevar 1 año).
    Solo salta siendo titular de F1 (antes salía de probador).
 3. 👑 pilotos y 🏭 constructores: dos líneas pero UNA tarjeta (con <br>, line-height 2).
 4. Apellidos repetidos en el top-3 (M. y R. Schumacher) → se muestra la inicial. En la línea de tiempo
    Y en el panel del mundial (lastTop3, los 3 sitios). Medido: 14 casos con inicial, 0 sin resolver.
 5. `companeros` («guerra a muerte») nombra al compañero: si es famoso, te lo piensas.
 6. ⏱️ El PUNTO por vuelta rápida solo existió 2019-2024: fuera de ahí el evento no da punto ni lo
    menciona. Medido: 0 anacronismos en 32 apariciones.
 7. Ofertas: fuera la palabra «Temporada» («F1 · 2011 · Compañero: X») y la renovación lleva ✍️.
 8. `renderDilemma` acepta `noTag` para no poner TU equipo en el título cuando el protagonista es otro
    (la apuesta decía «· Sauber» cuando quien tentaba era Super Aguri). Aplicado a apuestaReglamento.
 📊 Verificado: 100 partidas 4 eras, 0 errores/dup/asientos mal/vacíos + capturas visuales de tarjeta
 única, oferta con ✍️ y top3 junior con escudos.

📣 NOVEDADES DE PORTADA REACTIVADAS (5-ago). El párrafo «Últimas novedades» llevaba OCULTO (display:none)
desde julio; ahora vuelve a estar visible con el texto de esta tanda: mercado por huecos y fichajes, el
campeón manda en su equipo aunque fuera Nº2, comebacks de leyendas, y los dos dilemas del reglamento.
⚠️ NO menciona nada en pruebas (era 2000, reto «El Nano»): verificado que no filtra secretos.
⚠️ Para ocultarlo cuando caduque: volver a poner display:none en el style (el comentario del HTML lo dice).
🐞 De paso: los textos que NOMBRAN al compañero ahora dicen que lo es («Tu compañero Norris y tú…»),
   porque con el nombre suelto no sabías si era tu compañero o un rival (lo cazó Carlos). Revisados los
   CINCO dilemas que lo nombran (companeros, pactoInterno ×2 variantes, pupilo, ordenes, cuentas) en ES y
   EN: 10/10 con contexto. pupilo/ordenes/cuentas ya lo tenían («tu joven compañero», «en el mismo garaje»).

🌐 CAMBIO DE IDIOMA EN MARCHA (5-ago, 2ª pasada) — lo que se repinta y lo que NO:
✅ AHORA SE REPINTA: el DILEMA que tengas delante (renderDilemma acepta `repintar` para no volver a
   contarlo como dilema nuevo — verificado que dilemmaCount no sube) · las TARJETAS DE OFERTA enteras
   (S._lastOffers memoriza la lista y renderOffers regenera todas las etiquetas) · las NOTAS de oferta,
   que pasan de L(a,b) a par [a,b] (las 14) porque se guardaban ya resueltas: «✍️ Renovación» se quedaba
   en español · la pantalla de identidad y la rejilla de retos (ya estaban).
❌ NO SE REPINTA, A PROPÓSITO:
   · El HISTORIAL de temporadas. Los eventos se guardan como TEXTO ya escrito, no como datos; para
     retraducirlos habría que guardar cada evento estructurado (id + parámetros) y reconstruirlo. Es un
     refactor grande de simSeason/maybeEvent y de las partidas ya guardadas. Aparcado a propósito.
   · El TITULAR de la pantalla de mercado (setDecision ya acepta par [es,en] y lo memoriza, pero los ~30
     `title=L(...)`/`sub=L(...)` de nextOffers siguen resolviéndose al vuelo). Convertirlos es mecánico
     pero toca 30 ramas; si algún día molesta, ese es el camino.
🎨 COMPARATIVA DEL RETO rehecha: cada línea es un duelo con DOS BARRAS (él y tú) y fondo verde/rojo según
   quién gana esa métrica. Mucho más legible que la tabla de números.
🖥️ PANTALLA DEL RETO en escritorio: con solo dos tarjetas la rejilla de 3 columnas las dejaba descolgadas
   → clase `.duo` que las centra y estrecha, y `.challenge` centra también la fila de botones. Las 4
   etiquetas fijas van en 2×2 (país+edad / estilo+equipo). ⚠️ El `style` en línea de #chFixed pisaba el
   CSS: hubo que quitarlo.
📊 Verificado: 60 partidas alternando idioma CADA 5 pantallas (267 cambios en marcha), 0 errores,
   0 duplicados, 0 asientos mal, 0 vacíos; reto 10/10.

📅 PENDIENTE ACORDADO CON CARLOS (semana que viene): reorganizar los rankings → GLOBAL de todos los
   jugadores + sustituir el SEMANAL por el ranking DEL RETO. Nada de más tablas.
💡 Y confirmado que la rotación automática del reto semanal es FÁCIL: se calcula del número de semana en
   UTC, 100% en el cliente, sin servidor ni cron ni coste. Cuenta atrás = resta de fechas.

🐞 ESCUDOS QUE FALTABAN EN EL HISTORIAL (5-ago, lo cazó Carlos con Priaulx y Wirdheim sin distintivo):
teamBadge() hacía `if(!T) return ""` ANTES de mirar el logo → cualquier equipo que ya no esté en la
parrilla actual (murió o se renombró) salía SIN escudo en las temporadas viejas. Nuevo orden:
logo por nombre+año (funciona aunque el equipo haya desaparecido: los .png siguen ahí) → pastilla del
equipo vivo → pastilla neutra con iniciales. Así NUNCA falta el distintivo.
Medido: 0 sin escudo en 741 filas de top-3 (3.705 distintivos) y 0 en la regresión de 80 partidas.

📅 RETOS NUMERADOS: nuevo `challengeLabel()` → «Reto I · El Nano» (números romanos desde el orden del
registro CHALLENGES, así los siguientes se numeran solos). Aplicado en los 4 sitios: tarjeta del menú,
pantalla de identidad, cabecera del dilema de arranque y pantalla final.
📸 La TARJETA COMPARTIBLE de un reto ya dice cuál es: línea dorada «📅 Reto semanal · Reto I · El Nano»
encima de los años de carrera (antes no había forma de saber que era un escenario fijo).
🎯 El párrafo del reto acaba con el objetivo: «¿Crees que puedes ganar más de 2 Mundiales?» (idea de Carlos:
da diana desde el minuto uno). Bilingüe.
📊 Verificado: 80 partidas 4 eras alternando idioma cada 7 pantallas (236 cambios), 0 errores/dup/asientos
mal/vacíos/escudos ausentes; reto 12/12 con su etiqueta en la pantalla final.

🐞 «PARA ACOMPAÑAR A TÚ» (5-ago) — las CUATRO variantes del mensaje de alphaClash metían el literal «TÚ»
en posiciones donde no es español: «la veteranía de TÚ», «construye sobre TÚ», «bets on TÚ's youth».
Ahora cada variante tiene su forma en 2ª persona (tu veteranía / sobre ti / tu compañero / your youth).
Medido: 0 fallos en 1.078 mensajes de gallos.

🪪 IDENTIDAD EN LOS RETOS (idea de Carlos): en un reto NO eres tú con su coche, ERES ÉL → nuevo `pName()`
que devuelve «ALONSO (PEPITO)» en la pantalla final, la tarjeta compartible, el ranking y el salón de la
fama. ⚠️ `sel.name` sigue siendo SOLO el apodo, porque de él dependen surname() en los dilemas y el filtro
de nombres del backend. Verificado: reto → «ALONSO (PEPITO)», partida normal → «PEPITO».
⚠️ EFECTO COLATERAL DETECTADO A TIEMPO: api/submit.js cortaba los nombres a 14 caracteres y «ALONSO
(PEPITO)» se quedaba en «ALONSO (PEPITO» sin cerrar el paréntesis. Subido el corte a 26 (el apodo que
teclea el jugador sigue capado a 14 por el maxlength del input).
🤔 LA COMPARATIVA, NO BORRADA: Carlos propuso quitarla porque «si somos Alonso, comparar con Alonso es
raro». En vez de eliminar el gancho del modo, se reetiquetó a «EL ALONSO REAL · TÚ», que era el origen de
la rareza. Si aun así la quiere fuera, es UNA línea (el bloque `if(_CHend && _CHend.bench)`).

⚠️ JERARQUÍA ASIMÉTRICA (lo cazó Carlos: «Rosberg bicampeón y me ofrecen ir de Nº1, ¿es realista?»). NO lo
era: roleFor() sumaba 6 por cada título TUYO pero NO contaba los del compañero, y el palmarés no decaía
con la edad. Un veterano de 35 años y 82 OVR con 3 mundiales salía Nº1 sobre un bicampeón de 27 con 90.
ARREGLO: comparación SIMÉTRICA (ambos suman por título) y el peso del palmarés DECAE con la edad
(6 → 4 a los 34 → 2 a los 36): a esa edad manda el crono, no la vitrina.
MEDIDO (barrido A/B de 12.740 combinaciones): «serías Nº1» pasa del 77,6% al 33,8%. El caso de Carlos
(35 años, 82, 3 títulos vs Rosberg 27, 90, 2 títulos) pasa de Nº1 a Nº2 ✅, y el caso legítimo (campeón
de 29 en forma) SIGUE siendo Nº1 ✅.

📐 OFERTAS EN DOS LÍNEAS de verdad: «F1 · 2032» arriba y «Compañero: Colapinto · ✍️ Renovación» debajo.
📊 Verificado: 120 partidas 4 eras, 0 errores/dup/asientos mal/vacíos.

⏳ LANZAMIENTOS PROGRAMADOS (6-ago) — se abren SOLOS, sin desplegar nada:
  RELEASES = { dec2000: 10-ago 10:00Z, retos: 17-ago 10:00Z }.  10:00 UTC = 12:00 en España (CEST) y
  7:00 en Argentina → los dos públicos despiertos (28% + 27%). Decidido por Carlos tras avisar de que
  las 8:00 de España eran las 3:00 de la madrugada allí.
  Ciclo de la pegatina, verificado viajando en el tiempo:
    «En 6 días» → «En 2 días» → «¡Mañana!» → cronómetro EN VIVO «En 02:35:09» → «¡Nuevo!» (14 días) → nada.
  · Los días se cuentan por CALENDARIO local, no por duración: si sale mañana a las 6:00 y son las 23:00,
    faltan 7 horas pero para el jugador es MAÑANA. Primer intento lo hacía por duración y «¡Mañana!» NO
    LLEGABA A SALIR NUNCA (el cronómetro de <24 h se lo comía).
  · El cronómetro solo late (setInterval de 1 s) cuando de verdad hay una cuenta atrás el mismo día;
    se apaga solo. Nada de temporizadores corriendo de fondo para siempre.
  · La década de 2000 y el modo Retos se DESBLOQUEAN SOLOS en su fecha. Con ?preview=glory26 siguen
    abiertos desde ya, y la pegatina dice «🔒 Solo tú».
  · La cuenta atrás va DENTRO del botón de la década de 2000 (no en la tarjeta del Modo Retro), en
    dorado y a plena opacidad para que no parezca deshabilitada. La tarjeta del retro se queda limpia.
    El ¡NUEVO! de la tarjeta del Modo Retro SE MANTIENE (petición de Carlos): es el reclamo que hace
    abrir la sección, y dentro está la cuenta atrás del botón. Los dos se complementan.
  · 🎬 La tarjeta del RETO adelanta CUÁL será: «Reto semanal / Empieza con «Reto I · El Nano»» hasta que
    abre, y luego vuelve a «Un escenario nuevo cada semana». Antes solo decía la frase genérica y no
    enganchaba: nadie sabía qué iba a caer.
🐞 Y un fallo MÍO que cazó Carlos: pulsar EN/ES desde la portada te llevaba a la pantalla de identidad.
   setLang comprobaba `#identity.style.display!=="none"`, pero #identity está oculto POR CSS, así que su
   estilo EN LÍNEA está vacío y la condición era verdadera SIEMPRE. Ahora se usa offsetParent===null, que
   es la forma fiable de saber si un elemento está realmente visible. Verificado: desde portada no salta,
   y estando en identidad sí se repinta al idioma nuevo.

📅 RETOS — DECISIONES DE CARLOS (6-ago):
  · Orden: DÉCADA 2000 el 10-ago, RETO I «El Nano» el 17-ago. Motivo: el reto vive DENTRO de la era 2000,
    así se prueba con público real una semana antes de que el reto dependa de ella.
  · Reto II: descarta Hamilton y Schumacher («con 7 títulos se solapa con el objetivo del modo normal»).
    Se inclina por LA BESTIA (rival ficticio de 99 OVR que debuta el mismo año que tú llegas a la F1).
    CONFIRMA MAÑANA. Alternativa viva: Button (Williams 2000, listón de 1 título y 15 victorias).
  · ⭐ RETO IV (idea de Carlos, apuntada): «EL CAMPEÓN TARDÍO». Gana tu PRIMER Mundial lo más viejo
    posible. Vas aceptando ofertas malas a propósito; el reto TERMINA en cuanto ganas el título. Tensión:
    cuanto más tardas, peor OVR y peores asientos → hay que ser paciente pero no suicida. Sin comparativa.
  · 📚 ARCHIVO DE RETOS: solo se ve el actual + enlace «ver retos pasados». Sale casi gratis porque cada
    reto tendrá su tabla permanente en Redis.

🏆 RANKINGS — DECIDIDO (opción 3 de Carlos, 6-ago): UN ranking global con PESTAÑA DE ÉPOCA
  (Clásico / Retro) + una tabla por reto (lb:ch:<id>), permanente. Se elimina el semanal por fecha.
  ⚠️ MOTIVO MEDIDO (400 partidas, 100 por era): hay un 67% de brecha entre eras —
     media de puntos: 2010=354 · 2000=343 · 2020=299 · 2026=212
     mundiales/carrera: 2010=1,00 · 2000=0,89 · 2020=0,79 · 2026=0,50
  En el retro se gana el DOBLE de mundiales que en la era actual (en 2026 la parrilla está cargada de
  jóvenes con techo altísimo que dominan décadas; en retro los Schumacher/Häkkinen envejecen y dejan
  hueco). Mezclarlo todo en una tabla vaciaría competitivamente el modo clásico. PENDIENTE DE CONSTRUIR.

🐞 3 ARREGLOS MÁS DE PORTADA (6-ago, todos cazados por Carlos):
 a) El botón de la década con cuenta atrás iba en DORADO y llamaba demasiado → ahora ROJO como las
    jugables, con la cuenta en pequeño debajo. Solo cambia el texto, no el color.
 b) ⚠️ CAMBIAR DE IDIOMA DEVOLVÍA EL «PRÓXIMAMENTE» a la pegatina del reto. applyLang() reescribe TODO lo
    que tiene data-es/data-en, y la pegatina los tiene como valor por defecto → machacaba la cuenta atrás.
    Ahora setLang llama a refreshReleases() DESPUÉS de applyLang. Regla general: cualquier cosa pintada
    por JS sobre un elemento con data-es/data-en hay que repintarla después de applyLang.
 c) La cabecera de IMPRESIÓN («imprimir carrera») estaba ENTERA en español sin par en inglés: un jugador
    inglés que imprimiera su carrera se la encontraba en castellano. Traducida.
    (Lo destapó Carlos preguntando si «Constructors» estaba bien puesto — sí lo estaba en la pantalla
    final; el hueco estaba en la de impresión.)
 📊 Barrido de idioma: 25 partidas JUGADAS EN INGLÉS por las 4 eras revisando dilemas, ofertas, tendencia,
    coche, pantalla final y cabecera de impresión → 0 textos en español.

═══════════════════════════════════════
🎮 MULTIJUGADOR — INVESTIGADO Y APARCADO (6-ago-2026)
Decisión de Carlos: PARA CUANDO ESTÉN TODAS LAS DÉCADAS. Antes o después del modo Team Principal.
═══════════════════════════════════════
LO QUE PIDE CARLOS: DOS HUMANOS EN EL MISMO UNIVERSO. No dos carreras paralelas que se comparan: los
dos pilotos EN LA MISMA PARRILLA, corriendo el mismo mundo.

⚠️ DOS CORRECCIONES A MI PRIMERA RESPUESTA (las dos me las hizo Carlos, las dos eran justas):
 1. Dije que el turno asíncrono mataba la experiencia («si tu amigo tarda 3 días, te bloquea»).
    FALSO: así funciona BoardGameArena desde hace años. Con aviso de turno y varias partidas a la vez
    nadie se bloquea, y aquí UN TURNO SON 30 SEGUNDOS (elegir equipo + responder un dilema), no 20
    minutos. Punto retirado.
 2. Dije que sembrar el azar era un refactor enorme (182 usos repartidos). FALSO, y lo medí mal:
    hay 237 usos de rnd()/irnd()/ch() pero TODOS pasan por CUATRO ayudantes (rnd, ch, gauss, roll).
    Fuera de ellos quedan 11 llamadas sueltas a Math.random(), y una es la del id de jugador.
    → HACER EL MUNDO REPRODUCIBLE SON ~14 LÍNEAS. Barato.

🔑 LA ARQUITECTURA BUENA (gracias a lo anterior): REPETICIÓN SINCRONIZADA, no simulación en servidor.
   Si el mundo es reproducible desde una semilla, el servidor NO tiene que simular nada: guarda solo
   la SEMILLA + la LISTA DE DECISIONES de ambos, y cada navegador reconstruye el mundo repitiéndola.
   Los dos ven la misma parrilla, los mismos fichajes y los mismos campeones. Coste en Redis: unos
   bytes por turno, no un mundo entero (importa, con el susto de la cuota de Upstash del 4-ago).

💰 LO QUE SIGUE SIENDO CARO Y NO LO ARREGLA LA SEMILLA: 490 sitios del motor dan por hecho UN SOLO
   humano — 52 usos del marcador "PLAYER" en la parrilla, 148 de S.team, 101 de S.titles, 75 de sel.,
   22 de isP… `S` tendría que dejar de ser «el jugador» y pasar a ser «un mundo con dos jugadores
   dentro»: dos asientos humanos, dos rondas de ofertas, dos dilemas por temporada y una simulación
   que resuelva a ambos. Ese es el trabajo de verdad (motor: 4.819 líneas de JS).

📋 HOJA DE RUTA ACORDADA (en este orden):
  1. 🌱 SEMBRAR EL AZAR (~14 líneas). Barato, no rompe nada, y REGALA algo que Carlos ya quería y
     descartó por imposible: RETOS CON MUNDO IDÉNTICO PARA TODOS. (Ver la nota del reto semanal: se
     eligió mundo aleatorio «porque un reto que se resuelve leyendo un tuit se muere en dos días» —
     con semilla se puede elegir, incluso por reto.)
  2. 🏆 Rankings (pestaña de época) y rankings por reto. Fontanería compartida con lo de abajo.
  3. ⚔️ DUELO ASÍNCRONO: dos carreras, MUNDO IDÉNTICO (gracias al paso 1), comparación al final.
     Código corto tipo f1-glory.com/?duelo=7K2M, tabla privada `lb:duel:<código>` — mismo endpoint que
     los rankings de reto. Esto ya es CASI lo que pide Carlos, por una fracción del coste.
  4. 🌍 UNIVERSO COMPARTIDO DE VERDAD (los dos en la misma parrilla). La diferencia con el 3 es si os
     veis EN LA MISMA CLASIFICACIÓN o corréis el mismo universo por separado.
  💡 ALTERNATIVA BARATA SI EL 4 NO LLEGA NUNCA: «EL FANTASMA DEL AMIGO» — la carrera terminada de tu
     amigo se inyecta en TU parrilla como un piloto más, con su nombre real y su curva de nivel real.
     Reutiliza la tubería de debuts históricos (ARRIVALS), cero sincronización y cero espera. Le ves en
     tu Mundial y puedes picarte con él.

═══════════════════════════════════════
🐲 RETO II · LA BESTIA + ROTACIÓN SEMANAL — HECHO (6-ago-2026, en pruebas)
═══════════════════════════════════════
CALENDARIO (corregido por Carlos: yo daba por hecho que el Reto II salía el 17):
  10-ago 12:00 → década de 2000 · 17-ago 12:00 → Reto I · El Nano · 24-ago 12:00 → Reto II · La Bestia
📅 FECHA POR RETO, no una para todo el modo: cada entrada de CHALLENGES trae su `at`, y RELEASES.retos
   la deriva del más temprano. Añadir un reto nuevo NO obliga a tocar el calendario.
📚 ARCHIVO: solo se ve EL RETO ACTUAL; los anteriores quedan tras «📚 Ver retos pasados (n)», plegados y
   en estilo discreto, y se siguen pudiendo jugar. La nota de abajo anuncia el siguiente por llegar.
🐞 FALLO DE DISEÑO CAZADO AL MEDIR: el ¡NUEVO! del modo caducaba 14 días después del PRIMER reto, así que
   el Reto III ya no se habría anunciado como novedad. Ahora se reactiva con CADA reto publicado.

🐲 LA BESTIA. Primer reto de la familia «REGLAS» (sin comparativa, como preveía la taxonomía):
   · Partida NORMAL desde el karting, en la era 2026, con TU país y TU estilo — no suplantas a nadie.
   · El año que pisas la F1 debuta un piloto de 99 llamado «La Bestia» / «The Beast» (el nombre se fija
     en el idioma de la partida, como los eventos del historial). NO envejece, NO baja de nivel, NO se
     retira y NO lo echa su equipo. Entra en el mejor coche disponible desplazando al más flojo.
   · Como es un «galáctico en su prime», el sistema de CACHÉ ya lo mantiene solo en equipos grandes.
⚙️ CAMBIO ESTRUCTURAL NECESARIO: showIdentity() y startCareer() daban por hecho que TODO reto trae un
   piloto al que suplantar (`who`) y petaban con La Bestia. Ahora distinguen las dos familias:
   con `who` → heredas país/estilo/dorsal/edad y arrancas en su asiento; sin `who` → juegas desde el
   karting siendo tú, y la regla se aplica sola cuando toca.
📊 MEDIDO (50 partidas de La Bestia): aparece en 50/50 y SIEMPRE el mismo año que tú · nivel 99 en las
   806 observaciones · edad máxima 20 (no envejece) · 0 veces sin asiento · corre en Red Bull/Aston/Audi ·
   gana 4,74 Mundiales de media por partida frente a 0,32 del jugador (bot al azar) · sin comparativa
   50/50 · integridad limpia.
   ⚖️ CALIBRACIÓN A DECIDIR POR CARLOS: con bot aleatorio el jugador gana algo en 12/50 (24%) frente a
   ~0,79 títulos de media en partida normal. O sea, la Bestia hace el juego ~40% más duro pero NO es
   invencible: cuando ella cae en un coche mediocre, ahí está tu ventana. Si Carlos la quiere más muro,
   se puede forzar que solo fiche por top-3.
📊 REGRESIÓN: 80 partidas normales en las 4 eras alternando idioma → La Bestia NO se cuela en ninguna
   (0/80), 0 errores, integridad limpia. El Nano intacto: 15/15 arranca en Minardi 2001 con su
   comparativa y «ALONSO (X)» en el ranking.

🐞 TANDA DE LA DÉCADA DE 2000 (6-ago, Carlos jugando) — 4 fallos, uno GRAVE:
 1. ⚠️⚠️ LA OFERTA PROMETÍA UN COMPAÑERO Y TE SALÍA OTRO (fotos 4 y 5, el mismo fallo). occupySeat
    desplaza al MÁS FLOJO de los dos, pero la oferta mostraba `teammateOf()`, que devuelve el PRIMERO
    de la lista. Si el primero era el flojo, lo echabas al entrar y corrías con el otro. Y como
    `roleFor()` usaba el mismo dato, el ROL también mentía: te ofrecían Nº1 «junto a Glock» y acababas
    de Nº2 de Räikkönen.
    ARREGLO: nuevo `mateIfJoin()` con el MISMO criterio que occupySeat; lo usan la oferta y roleFor.
    MEDIDO A/B (70 partidas por rama, comparando contra el compañero REAL de la temporada `row.mateName`):
    fallos 39,9% → 7,6%, y los fallos de ROL a CERO.
 2. Y el 7,6% restante NO era casualidad: los 67 casos eran del MISMO equipo, y el culpable era
    `processArrivals` — un debut histórico (Antonelli a Mercedes) desplazaba a tu compañero recién
    prometido ANTES de rodar una vuelta, porque checkExpansion corre antes que simF1.
    ARREGLO: los debuts no tocan tu equipo en tu PRIMER año allí; desde el segundo, mercado normal.
    MEDIDO: 39,9% → 2,4% final, con los 246 debuts históricos intactos.
 3. 🔢 SISTEMA DE PUNTOS POR ÉPOCA. El juego usaba SIEMPRE el actual (25-18-15…) y en el retro salían
    marcadores imposibles (319 puntos en la F3000 de 2005). Nueva `ptsTable(año)` con los repartos
    reales: …-1990 9-6-4-3-2-1 · 1991-2002 10-6-4-3-2-1 · 2003-2009 10-8-6-5-4-3-2-1 · 2010- 25-18-15…
    Aplicada en los CUATRO sitios que repartían puntos. Medido: 0 temporadas pre-2010 por encima de 200.
 4. 🌐 TEXTO EN LOS DOS IDIOMAS PEGADO en las academias de karting («…tierra de nadie,Good car: if you
    WIN titles…»): `o.note` es un par [es,en] y la línea del perfil lo interpolaba tal cual. Medido: 0.
 5. 👥 APELLIDOS COMPARTIDOS: `surname()` quitaba SIEMPRE la inicial, así que los hermanos Schumacher
    eran indistinguibles. Auditados los datos: hay SIETE apellidos compartidos por dos o tres pilotos
    (Schumacher, Hill, Fittipaldi, Rossi, Senna, Verstappen, Monteiro). En esos se conserva el nombre
    entero; «Mick Schumacher» ya venía completo. Medido: 0 «Schumacher» pelados en 90 partidas.
 ✅ Häkkinen a Ferrari con Schumacher y saliendo al año siguiente: NO es fallo, es `alphaClash` en su
    modo «veterano» (el equipo apuesta por el más joven). A Carlos le pareció realista; se deja.
 📊 Regresión: 90 partidas, 4 eras, alternando idioma — 0 errores, 0 duplicados, 0 asientos mal, 0 vacíos.

🆘 MERCADO DE RESCATE + LA BESTIA SIEMPRE ARRIBA (6-ago, tras auditar el mercado entero)
AUDITORÍA DEL MERCADO (40 partidas, 931 temporadas). Lo bueno: correlación talento↔coche 0,46 (ni
aleatorio ni determinista), el campeón vigente sigue en su equipo el 78%, ofertas incumplidas 2,4%.
Lo malo, y eran dos cosas:
 1. ⚠️ LOS PILOTAZOS SE PUDRÍAN EN COCHES DE COLA: Tsunoda 13 temporadas seguidas, Hamilton 10, y el
    Alonso de 90 que Carlos vio 3 años en un Minardi. Causa: solo había dos vías para subir de equipo
    (los 4 grandes pescando al 20%, y el mercado por huecos que exige vacante). Faltaba la vía obvia:
    que un equipo de arriba VAYA A POR un talento desaprovechado aunque tenga que echar a alguien.
    ARREGLO: `npcRescateTalento()` — élite (87+) con 2+ años en un coche de cola entra en el radar de
    los 4 mejores; 55% de probabilidad, respeta caché y la regla de Racing Bulls, y va por intercambio.
    MEDIDO A/B (40 partidas por rama): rachas de 6+ años 20 → 0 · peor racha 10 → 5 años · casos
    atrapados 125 → 77 · campeones distintos 92 → 88 (diversidad intacta) · integridad limpia.
 2. ⚠️ POCOS TRASPASOS: 2,2 por temporada frente a los 4-8 de la F1 real, y solo 1,15 caras nuevas.
    ❗ ESTO SIGUE SIN ARREGLAR: el rescate no lo mueve (2,18 → 2,23). La parrilla cambia un ~15% al año
    cuando la real cambia un 25-30%. PENDIENTE de decidir si se toca.

🐲 LA BESTIA SIEMPRE EN UN COCHE DE ARRIBA (lo cazó Carlos viendo un ▲20 en la clasificación).
El texto del reto promete «estará ahí cada domingo, en uno de los mejores coches» y NO se cumplía:
estaba en top-3 solo el 70,8% de las temporadas, así que tenía años malos, subía 20 puestos al
siguiente y el reto se desinflaba. Nueva `beastKeepTop()`: si su coche se cae del top-3, se muda al
mejor sitio libre (intercambio, sin tocar el tamaño de la parrilla).
MEDIDO A/B (30 partidas por rama): en top-3 el 70,8% → 93,1% · títulos de la Bestia 4,77 → 5,23.
⚖️ COSTE PARA EL JUGADOR, A DECIDIR POR CARLOS: gana algún Mundial en 7/30 partidas → 4/30 con bot al
azar. Más fiel a la promesa y a la fantasía, pero bastante más duro. Si se quiere suavizar: permitirle
caer al top-5 en vez de al top-3, o rescatarla solo tras 2 años malos como al resto de la élite.

🔄 ROTACIÓN DEL MERCADO CALIBRADA (6-ago, petición de Carlos tras la auditoría).
Los mandos de las no-renovaciones ahora son parámetros (`ROT`) para poder medirlos A/B. Probados tres
niveles con 36 partidas por rama: viejos 2,29 traspasos · medios 2,63 · FUERTES 3,18 (elegidos) ·
muy fuertes 3,49 (descartados: las estancias de 8+ años caían al 3,9%).
Con los elegidos (base .09, +.06/año desde el 2º, flojo +.20, tope .50):
  traspasos 2,3 → 3,1 · +1,84 debuts ≈ 22-23% de la parrilla al año (real: 25-30%, antes ~15%)
  estancias de 8+ años: 4,9% (los Massa/Button siguen existiendo) · mediana 2-3 años
  élites atrapados 6+ años: 4 casos en 60 partidas (antes 20 en 40) · rescates 🆘 funcionando (103)
  ofertas incumplidas 2,1% (la promesa del compañero aguanta la rotación) · dúos escudero vivos (491)
  129 campeones distintos · integridad limpia · 0 errores en 60 partidas alternando idioma.
El siguiente escalón (si un día se quiere más movimiento) queda anotado en el comentario del código.

🐲 ACLARACIÓN A CARLOS sobre «qué suavizar» en La Bestia: NADA está roto ahora. El mercado no la movía
porque sus vías son probabilísticas y lentas (pesca 20%/año, rescate solo cola tras 2 años) y su coche
DECAÍA bajo sus pies — de ahí el ▲20. beastKeepTop ya la mantiene en top-3 (93%). La única decisión
pendiente es de DIFICULTAD: como muro top-3 el bot gana algo en 4/30; «suavizar» = dejarla caer a top-5
(7/30). RECOMENDACIÓN dada: dejarla de muro — el reto es arrancarle Mundiales, y la ventana real del
jugador es compartir equipo con ella o pillar el cochazo de la revolución. Carlos la probará.

🗞️ EL «TRAS LA RUPTURA» YA DICE POR QUÉ (6-ago, lo cazó Carlos: tenía que ir a los eventos de la
temporada a descubrir que Ferrari le había echado). La pantalla «Buscando equipo» ahora lleva el MOTIVO:
 · ruptura de gallos → el texto exacto («Ferrari apuesta por la juventud de X: agradecen tus
   servicios…»), guardado como par [es,en] en S.forceReasonTxt;
 · dilema que te deja sin asiento → renderDilemma detecta que ESA decisión encendió forceMove y guarda
   su desenlace como motivo;
 · quiebra → ya lo hacía («X ha quebrado y desaparece de la F1»).
 MEDIDO: 30 de 32 pantallas con motivo (94%); los 2 restantes son forceMove de eventos menores sin texto.
🥊 Y el 🐓 de los gallos pasa a 🥊 (10 sitios): Carlos no entendía el pollo, y con razón — el chiste del
«corral» solo existía en los comentarios del código.

🐲 LA BESTIA — CALIBRADO APROBADO POR CARLOS (6-ago, tras jugarla): «Me ganó 12 mundiales pero yo le
hice 1. Mola. Eso sí es un reto: que siempre sea cojonudamente buena.» DECISIÓN CERRADA: se queda de
MURO (top-3 siempre, sin suavizar a top-5). El listón humano de referencia: ~1 Mundial arrancado en una
carrera entera. NO TOCAR su dificultad sin hablarlo.

✅✅ HECHO: 🕰️ TU EQUIPO SE RETIRA DE LA F1 — «la apuesta de Button» (7-ago). Era el dilema marcado como
EL MEJOR de los ~45 de la lista de biografías, y ya está construido.
DÓNDE VIVE: no es un dilema del catálogo, es una PUERTA MÁS en la pantalla de la quiebra. El juego ya
mataba equipos y ya te avisaba un año antes («X está en quiebra, busca asiento YA»), pero solo te
empujaba al mercado sin darte voz. Ahora, junto a las 3 puertas normales, aparece «⏳ Esperar sin firmar
nada» — que es exactamente lo que hizo Button en diciembre de 2008 al rechazar el Toro Rosso.
TRES DESENLACES (una vez por partida, `S.esperaQuiebra`):
  · 40% EL MILAGRO — unos inversores rescatan a un equipo hundido y sale un misil (coche 88-92, medido:
    90 de media). Es el Brawn comprado por una libra. Entras de Nº1.
  · 35% TARDE Y REGULAR — encuentras asiento en media tabla. Ni drama ni gloria.
  · 25% TE QUEDAS FUERA — el mercado se cierra y solo hay banquillo: temporada de probador.
🐞 FALLO CAZADO AL MEDIR (y solo aparecía en 7 de cada 11 clics): `pick` es una función LOCAL de
nextOffers, así que dentro del onClick de la opción NO existía → el clic petaba en silencio y no pasaba
nada. Sustituida por un `tomar()` propio. LECCIÓN: al mover código a un callback, comprobar el ámbito de
los ayudantes; el error no se veía porque el onClick se traga la excepción.
📊 MEDIDO: 300 partidas en las 4 eras alternando idioma. La quiebra con jugador dentro sale en ~5% de las
carreras (es rara a propósito); los 13 casos dieron 6 milagros / 6 regulares / 1 fuera, los 13 siguieron
jugando después, 0 errores, 0 duplicados, 0 asientos mal, 0 vacíos.

🧪 BANCO DE PRUEBAS DE ESCENARIOS (idea de Carlos, 7-ago) — «¿puedes crear una partida secreta test donde
este dilema suceda sí o sí? creo que es una forma que podemos hacer de probar dilemas».
Con `?preview=glory26&test=<id>` arrancas YA COLOCADO en la situación y el escenario ocurre seguro.
La barra de preview lista los escenarios disponibles como enlaces, así no hay que recordar URLs.
Primer escenario: `test=quiebra` (te sienta en el peor equipo y programa su quiebra para el final de esa
temporada → un clic y tienes el aviso, la pantalla de mercado y la puerta de «esperar sin firmar»).
Añadir escenarios nuevos = una entrada más en TESTS. ⚠️ Solo con PREVIEW: el público no lo ve.

🇪🇸 CAMPOS META — HISTORIA ALTERNATIVA (idea de Carlos, 7-ago). En la realidad Adrián Campos montó
«Campos Meta 1» para 2010 pero no llegó al inicio de temporada: vendió a Carabante y el equipo corrió
como Hispania/HRT, que murió en 2012. Si hubiera aguantado habría sido el «Campos Meta F1 Team».
Ahora se sortea POR PARTIDA (45%): cuando sale, el equipo lleva su nombre y su amarillo desde el minuto
uno, con los mismos pilotos (Senna y Chandhok) y el mismo coche flojo. Afecta a las eras 2010 (está en la
parrilla) y 2000 (entra como expansión 2009-2012).
⚠️ PENDIENTE: Carlos tiene un LOGO de Campos Meta. Mientras no esté, sale la pastilla «CAM» en amarillo.
🐞 FALLO GORDO CAZADO AL MEDIR (y de los que envenenan a largo plazo): `S.expansion` NO es una copia, es
una REFERENCIA a los datos compartidos de la era (ENTRIES_2000/2010). Al renombrar ahí dentro, el cambio
se quedaba pegado para TODAS las partidas siguientes → Campos salía el 72% en vez del 45%. Ahora se clona
la entrada antes de tocarla. LECCIÓN: antes de mutar algo colgado de S, comprobar si es copia o
referencia — lineage y arrivals SÍ se copian con .map(), expansion NO.
📊 MEDIDO: 200 partidas (100 por era) → 45% Campos / 55% HRT, 0 partidas con los dos a la vez, 0 asientos
huérfanos, colores y abreviatura correctos, y los pilotos correctos en sus asientos. Integridad limpia.

🔧 RETOQUES (7-ago, Carlos probando):
· 🇪🇸 LOGO DE CAMPOS META colocado (camposmeta.png, redimensionado a 128 px como el resto: 18 KB → 10 KB).
· 🧪 El escenario `test=quiebra` ahora da DOS temporadas normales antes de hundirse (antes saltaba nada
  más empezar y no daba tiempo a ver cómo surge).
· 🖼️ La pantalla de identidad de los retos de REGLAS tenía CUATRO tarjetas en una rejilla de 3 columnas
  → la última caía suelta. Nueva clase `.cuatro` con 2×2 centrado; el móvil sigue en una columna.
❓ RESPUESTA A CARLOS sobre si Ferrari/McLaren pueden quebrar: NO, y no es cuestión de suerte. Las muertes
  de equipo están cableadas POR NOMBRE en los linajes de cada era: solo mueren los que murieron de verdad
  (Arrows, Prost GP, HRT, Lotus/Caterham, Virgin/Marussia) más los entrantes frágiles (Stefan GP, USF1).
  Un histórico no puede quebrar en ninguna era. Si algún día se quiere para épocas futuras, habría que
  añadirlo explícitamente.

🐞 «TRAS LA RUPTURA» — SEGUNDA PASADA (7-ago, Carlos lo volvió a cazar). Mi arreglo anterior cubría los
dilemas y la quiebra, pero NO los EVENTOS: perder el asiento por una lesión sin galones seguía dando el
texto genérico. Auditados los 13 sitios que encienden `forceMove`: 11 ya estaban cubiertos (los dilemas,
vía renderDilemma; la quiebra y la ruptura de gallos, con su propio motivo) y solo faltaba ese.
Nuevo ayudante `perderAsiento(row, es, en)` que apunta el motivo Y lo narra de una vez, para que el
próximo evento que quite el asiento no pueda olvidarse de explicarlo.
📊 MEDIDO: 120 partidas, 4 eras, alternando idioma → 47 de 47 pantallas «Buscando equipo» con su motivo
concreto, 0 genéricos (antes: 2 de cada 32). Integridad limpia.
✅ Carlos ha probado el dilema de la quiebra con el banco de pruebas y lo aprueba.

🏆 EL TROFEO SIGNIFICABA DOS COSAS DISTINTAS (7-ago, lo cazó Carlos: «¿la Super Fórmula va sin trofeo?»).
En las filas de F1 el 🏆 era CAMPEÓN, pero en las de AVENTURA era «ganaste la carrera mítica», y el
título de la serie salía como «1º» a secas. Resultado absurdo: un campeón de Super Fórmula se veía peor
que un ganador del Dakar. Ahora el criterio es único en la línea de tiempo Y en el resumen de aventuras:
  🏆 = CAMPEÓN (de la F1 o de la serie) · 🥇 = ganaste la joya (Le Mans, Indy 500, Dakar…) sin el título.
Verificado con las 8 combinaciones posibles + 160 partidas: 0 campeones sin trofeo.

═══════════════════════════════════════
🏆 RANKINGS POR ÉPOCA Y POR RETO — HECHO (7-ago-2026)
═══════════════════════════════════════
POR QUÉ hacía falta separar (MEDIDO, 400 partidas, 100 por época — mediana de gloria):
  2010: 245 · 2000: 203 · 2020: 150 · CLÁSICO 2026: 90
El retro puntúa 2-3× más que el clásico, así que el global mezclado medía «en qué modo jugaste» más que
«cómo de bien jugaste». Causa: 2026 tiene CINCO pilotos de 90+ (96-93-92-91-90) y 2000 solo dos (y luego
cae a 87), más el trasiego de equipos del retro.
DECISIÓN (acordada con Carlos): NO resetear nada.
  · 🌍 Global — la tabla histórica de siempre, intacta. Nadie pierde su puesto.
  · 🕰️ Por época — `lb:era:<era>`, cuatro tablas que arrancan limpias, con sub-pestañas.
  · 📅 Reto — `lb:ch:<id>`, una por reto. Justa por construcción: mismo escenario para todos.
  · La pestaña SEMANAL desaparece: su relevo natural es la del reto de la semana.
⚖️ REGLA: una carrera de RETO **no** entra en la tabla de su época (escenario fijado, no comparable).
   Va solo a la del reto y a la global.
🛡️ SEGURIDAD: las claves de Redis se construyen SOLO desde listas blancas en el servidor (épocas
   permitidas + reto con /^[a-z0-9]{3,16}$/). Nada del cliente llega crudo a una clave.
💸 COSTE (la lección del 4-ago sigue vigente — Carlos avisó de no hacer locuras):
  · submit: +1 comando por carrera (un ZADD más DENTRO del pipeline que ya existía).
  · ⚠️ El riesgo eran las LECTURAS: 6 pestañas × 2 peticiones = hasta 12 por visita, y /api/me NO se
    cachea en el CDN (es por jugador). DOS frenos: (1) caché en el navegador de 60 s por ámbito
    (−50% de peticiones al pasear entre pestañas) y (2) /api/me SOLO se pide en las tablas que el
    jugador ha jugado de verdad (se sabe por su marca local): en el caso realista, 3 de 6 → −50% más.
    Resultado: 6 comandos por visita completa en vez de 12, y las listas siguen cacheadas para todos.
🐞 FALLO PROPIO CAZADO AL MEDIR: el ahorro de envíos («no mandes si no mejora tu global») dejaba fuera
   carreras que SÍ eran tu mejor marca en una época o en un reto → nunca habrías aparecido en esas
   tablas. Ahora el guardado local lleva una marca por tabla (g/w/e<era>/c<reto>).
📊 VERIFICADO: los 4 tipos de carrera envían su era y su reto correctos; las pestañas y sub-pestañas se
   pintan bien; el ámbito por defecto tras terminar es el del reto (si jugabas uno) o el de su época.

✅✅ HECHOS: 🛞 «LAS GOMAS NO PERDONAN» y 💥 «OS HABÉIS TOCADO» (7-ago, diseñados con Carlos en el chat).
🛞 GOMAS (Button 2011-12): tu estilo deja de funcionar con el compuesto nuevo. Distinto de
   `reglamentoHunde` por condición (aquel exige revolución técnica; este exige que NO la haya).
   · A · Cambiar tu pilotaje → probabilidad por TALENTO Y EDAD (`probReinvencion`, idea de Carlos):
     base 30% + hasta 35 por talento + hasta 25 por plasticidad. 22 años: 57/74/86% (OVR 80/86/92);
     34 años: 40/57/69%. Un veterano BUENO se reinventa mejor que un joven flojo.
     Y el fallo YA NO ES PERMANENTE: −2 OVR y dos temporadas para recuperar +1 cada una con esa misma
     probabilidad (`tickOxido`). Si eres viejo y flojo, te puedes quedar el lastre.
   · B · Que el coche venga a ti → 55% sube el rumbo (+5/9) con −1 coche este año; el texto ya PROMETE
     que «el coche MEJORARÁ», que era la pega de Carlos.
   · C · Apretar los dientes → sin cambios / +1 OVR / −fama.
💥 TOQUE CON TU COMPAÑERO (Rosberg-Spa 2014): hueco real, el juego excluía al compañero de los toques.
   Solo salta si el compañero te discute el sitio de verdad (±5 de nivel) y llevas 2+ temporadas en F1.
   · A · Dar la cara · B · Culparle (enemistad dentro del garaje) · C · Al despacho (30% te ganas el Nº1).
   LO IMPORTANTE SON LAS CONSECUENCIAS, que es lo que pidió Carlos:
   · 👑 `pPerderGalones()`: la probabilidad de perder el Nº1 BAJA con tu peso — Nº2 sin nada con un
     compañero mejor 30% · Nº1 sin títulos 17% · Nº1 con 1 título 11% · Nº1 multicampeón 5% (suelo).
     Nunca 0 a propósito: Alonso-McLaren 2007 existió. Y si caes SIENDO alguien, el texto lo subraya
     («Ni tu palmarés te salva»), así que cuando sale, significa algo.
   · 🔒 `roleLock`: quitados los galones, 3 años SIN ascenso automático en ese equipo. Sin esto, el mismo
     equipo te devolvía al año siguiente lo que acababa de quitarte (lo anticipó Carlos).
   · 🏆 REDENCIÓN: ganar el Mundial ABRE la puerta, no la cruza (matiz de Carlos: Alonso acabó a un punto
     en 2007 y se fue igual). Decide cómo le fue a tu compañero: si él también hizo top-5, 35% recuperas
     los galones; si fue mediocre, 70%. Y si no te los devuelven, SALES AL MERCADO con su motivo.
   · 🚪 `echarMateTocado()`: el que sale mal parado pide salida… salvo que tenga <24 años, que se traga
     el sapo y se queda a aprender.
   · `darGalones()`: ganarte el Nº1 (plantándote, pasándole por encima, echándole) LEVANTA el castigo —
     el bloqueo impide el ascenso automático por OVR, no que te lo ganes tú.
🐞 De paso: tres dilemas viejos y `oustTeammate` daban el Nº1 sin limpiar el bloqueo → estado incoherente.
🧪 Dos escenarios nuevos: `?test=gomas` y `?test=toque`. Los TESTS ahora pueden FORZAR su dilema (`dilema:`)
   y ajustar tras el fichaje (`after()`), porque chooseOffer reinicia años en el equipo y rol.
⚠️ AVISO METODOLÓGICO: mi primera medición dio «toque en el 100% de las partidas» y era FALSO — la página
   seguía cargada con ?test=toque y yo mismo forzaba el dilema. Al medir, comprobar que TEST_MODE es null.
📊 MEDIDO (300 partidas, 4 eras, alternando idioma): gomas 33% de las carreras · toque 54% · óxido
   recuperado 23 / perdido 3 · galones perdidos 26 · el compañero se va 10 · 0 errores, 0 duplicados,
   0 asientos mal, 0 vacíos, 1 solo estado incoherente (de un dilema que SÍ te gana los galones).
❓ A DECIDIR POR CARLOS: el toque sale en el 54% de las carreras. Si le parece repetitivo, bajar la
   prioridad de .12; si le parece poco, subirla.
📌 PENDIENTE (idea de Carlos): EL DILEMA INVERSO — el toque es culpa de TU COMPAÑERO y decides si le
   perdonas. Tiene mecánica propia (ahí se construye o se rompe un aliado) y no se mezcla con este.

## 🗓️ 2026-08-07 · El mercado hablaba en presente (repaso de Carlos con capturas)

🐞 **EL FICHAJE ANUNCIADO QUE NUNCA LLEGABA.** El resumen decía «Norris se va a Ferrari, Hamilton llega
   a McLaren» y al año siguiente Norris seguía ahí. No era el texto: `alphaClash` recorre TODOS los
   equipos sobre la MISMA parrilla, así que McLaren mandaba a Norris a Ferrari y acto seguido Ferrari
   veía dos gallos y lo devolvía. Saldo cero, dos noticias contrarias el mismo año.
   · Arreglo: `mktReset()` / `mktMark()` / `mktMoved()`. Quien ya se movió este invierno —piloto O
     equipo— no se vuelve a mover, y vale para las cinco funciones narradas Y para el mercado silencioso
     (tampoco lo corta ni lo jubila el mismo año). La Bestia sigue exenta del bloqueo de EQUIPO (su
     garantía de coche top manda) pero no se lleva por delante a un piloto ya movido.
   · ⚠️ MI PRIMER DETECTOR NO VALÍA: miraba el saldo NETO del año, y un piloto que se va y vuelve tiene
     saldo cero. Justo el caso de Carlos. Hubo que contar las LLAMADAS narradas, no el resultado.
   · 📊 A/B, 70 partidas por brazo: **160 pilotos movidos dos veces** en un mismo invierno (sobre 891
     movimientos narrados) → **0**. Coste: 11% menos de noticias de mercado.

🗓️ **TIEMPO VERBAL.** Todo ese mercado se juega al ACABAR la temporada: lo que se narra ya es la parrilla
   del año siguiente. Ahora va en futuro y CON EL AÑO («anuncia que se irá a Ferrari en 2028»). Antes
   decía «llega Hamilton» y la oferta de al lado te ponía a Norris de compañero: parecía un fallo del
   juego y era solo el presente. Afecta a `alphaClash` (4 variantes ×2 idiomas), `poachStar`,
   `npcRescateTalento`, `beastKeepTop` y `maybeComeback`.

⏱️ **LA CONCLUSIÓN DEL DILEMA SE IBA A MEDIA FRASE.** Eran 2.400 ms fijos (1.100 en móvil) para textos de
   80 o de 300 caracteres — por eso unos dilemas parecían rápidos y otros lentos sin motivo. Ahora el
   tiempo sale de lo que hay que leer (3 s a 7,5 s) y hay un botón **«Continuar»** para quien lee rápido.

🎲 **DETALLES VARIABLES** (petición de Carlos): las décimas de «Las gomas» (dos/tres/cuatro/varias) y el
   sitio del toque, que ahora es un circuito de la época con SUS vueltas y SUS curvas reales — `gpList()`
   sustituye a la lista suelta de `gpAt()` y nunca pide una curva 19 en Monza, que tiene 11. Se sortean
   una vez y se guardan (`dilVar`): cambiar de idioma con el dilema en pantalla ya no muda el accidente
   de circuito.

🧹 De paso: «vuelve del retiro a los 23 años» ya no puede pasar (el comeback pide 27+), y las
   descripciones del modo pruebas ya no empiezan por «Te sienta en», que no se entendía.

📊 VERIFICADO: 120 partidas en las 4 eras alternando idioma — 0 errores, 0 duplicados, 0 asientos vacíos,
   0 asientos mal, 0 textos bilingües pegados. Y en **1.411 fichajes**, el compañero prometido en la
   oferta fue SIEMPRE el que acabaste teniendo al lado.

## 🗡️ ¿Cuántos enemigos puedes tener? (pregunta de Carlos, 7-ago-2026)

📊 MEDIDO (600 partidas, 4 eras): **0 enemigos en el 82%** · 1 en el 18% · **2 en UNA sola partida (0,17%)**.
   El sistema soporta una lista sin tope, pero en la práctica es «uno por carrera y gracias».
   Razón: las enemistades solo nacen de 6 ramas de dilema y hay tope de 5 dilemas por carrera entre ~45
   candidatos, así que juntar dos es casi imposible.
   Consecuencia de tener uno: su equipo no te hace ofertas mientras él siga ahí (`feudFilter`, con red
   de seguridad para que nunca te quedes sin ofertas — medido: **0 veces se vació la lista**), y acelera
   la ruptura si lo tienes de compañero (`atWarWith` en alphaClash).
❓ A DECIDIR: si Carlos quiere que las enemistades PESEN (que un veterano llegue con 2-3 puertas cerradas),
   habría que darles más vías de nacer. Hoy el 82% de las carreras no ve ninguna.

## 🔍 Auditoría del mercado (Carlos: «me da miedo esa inconsistencia»)

🐞 **ENCONTRADO OTRO DEL MISMO TIPO.** Al RENOVAR con el mismo compañero, `chooseOffer` conservaba el rol
   viejo e ignoraba `o.role`: la tarjeta ponía «PILOTO Nº1» —te habías ganado el ascenso— y firmabas para
   seguir de Nº2. Y al revés si tu compañero era campeón vigente. `roleFor()` ya lleva dentro la
   pegajosidad del rol, así que el blindaje extra de `chooseOffer` sobraba y hacía daño.
   Medido: **40 de 2.375 firmas (1,7%), todas renovaciones → 0 de 2.408.**
⚠️ AVISO METODOLÓGICO: mi primera medición dio 22,7% de compañeros mal y era FALSA. Con `setTimeout`
   sincrónico, `signContract` no vuelve hasta que se ha jugado la temporada ENTERA y el mercado ya ha
   movido a medio mundo. Hay que mirar justo tras asignar rol/compañero (`pickDilemma` es la primera
   llamada después). Con la ventana bien puesta: 0 de 1.782.
📊 ESTADO (200 partidas, 3.692 temporadas): 2.408 firmas con compañero Y rol cumplidos al 100% ·
   0 duplicados · 0 asientos vacíos · 0 asientos mal · 0 errores · 1.334 movimientos narrados sin un
   solo piloto movido dos veces · rotación de parrilla 23,6%/año (la real, 25-30%).

## 📮 La carrera de Darkkk que nunca llegó al ranking (7-ago-2026)

🐞 **EL FALLO.** `submitScore` apuntaba tu mejor marca en `localStorage` **antes** de saber si el servidor
   la había recibido. Si el envío se caía —sin cobertura, la pestaña cerrada nada más terminar, el sitio
   en pausa por cuota (y el 7-ago hubo pico viral)— la carrera quedaba marcada como «ya enviada» y **no
   se reintentaba jamás**.
   · Comprobado que NO fue un rechazo del servidor: 14 títulos, 15 constructores, 141 victorias, 345
     podios, 182 poles, 3 subcampeonatos, 23 temporadas de F1 → 3.125 puntos. Pasa TODOS los filtros
     (techo de gloria 4.200, títulos ≤ temporadas, victorias ≤ podios, plausibilidad de tiempo). El
     envío no llegó nunca; nadie lo rechazó.
🔧 **ARREGLO.** La marca local solo se apunta cuando el servidor CONFIRMA, y lo que no llegó va a una cola
   (`f1g_pending`, hasta 5 —una por tabla— y siempre las mejores) que se reintenta al abrir el juego y al
   abrir el ranking.
   · La cola se guarda ANTES del fetch: si cierras la pestaña en la pantalla final, ya está a salvo.
   · Una carrera peor no pisa a una mejor que siga pendiente.
   · `bestApply` FUSIONA con el máximo en vez de pisar. Lo destapó la propia prueba: cada pendiente
     lleva la foto de tus marcas de cuando se encoló, y al reenviar varias la última borraba lo
     conseguido después.
   · El respaldo local guarda ahora también el desglose, para poder reenviar carreras antiguas.
😞 **LO QUE NO TIENE ARREGLO SOLO:** la carrera de Darkkk es anterior al desglose en el respaldo local, así
   que no hay forma automática de recuperarla. O la repite (ya no se pierde), o Carlos la mete a mano.

## ❓ ¿Cuántos dilemas por partida? (pregunta de Carlos)

📊 MEDIDO (300 partidas, 5.501 temporadas, 4 eras): **4,58 dilemas por carrera**, uno cada **2,78 años**.
   Reparto: 0→1 · 1→5 · 2→16 · 3→41 · 4→73 · **5→88** · 6→53 · 7→20 · 8→2 · 9→1 (de 300).
   El tope de 5 se pasa porque los prioritarios (arco del reglamento, gomas, toque, pandemia, película…)
   se saltan la cuenta. **El 84% cae en F1**; en el junior casi no hay (F2 54, F3 48, FR 36, F4 27 de 300)
   y en karting, ninguno.
   Los más frecuentes: toqueMate 54% · gomas 30% · reinvención 25% · película 21% · pandemia 20%.
❓ Sigue abierto lo del toque al 54%: es el más frecuente del juego con diferencia.

## 📌 ENCARGOS DE CARLOS · 7-ago-2026

### 🎓 DILEMAS EN LOS AÑOS DE FORMACIÓN (pendiente, encargo directo)

**El problema, medido:** de 4,58 dilemas por carrera, **el 84% cae en F1**. En 300 partidas el junior
sumó F2 54 · F3 48 · FRECA 36 · F4 27… y **karting CERO**. Los años en los que el jugador se está
construyendo son los que menos vida tienen, y son los primeros que ve.

**Ideas ya apuntadas en este cuaderno que encajan aquí** (no hay que inventarlas de cero):
- 📜 **EL CONTRATO DE POR VIDA** [McLaren-Hamilton, 1998] — un grande te ficha con 12-13 años, te paga
  la escalera entera y se queda una opción sobre tu futuro asiento. ¿Seguridad o libertad? *(línea 89:
  ya marcado como «PERFECTO PARA LA ETAPA JUNIOR»)*
- 🌧️ **SIN NEUMÁTICOS DE LLUVIA** [Alonso] — reformulado a profesional: tu equipo junior no tiene
  presupuesto para gomas de lluvia en los test. Premio mecánico: maestría en mojado. *(línea 116)*
- 🛣️ **EL CAMINO RARO** [Schumacher, 1990] — programa de fábrica en resistencia en vez de la escalera
  clásica. Versión junior del sistema de aventuras. *(línea 79)*

**Ojo al implementarlo:** `stage:"jr"` ya existe y cubre todo lo que no es F1 ni probador, pero el
karting queda fuera de facto porque `pickDilemma` corta por debajo de los 18 años (`if(S.age<18) return
null`). Para que haya algo en karting hay que bajar ese suelo o darle su propia etapa.

### ⚡ TOPE DE DILEMAS 5 → 6 ✅ HECHO (7-ago-2026)
Los prioritarios siguen saltándose la cuenta a propósito: tienen ventanas de un año y o salen entonces
o no salen nunca. Medido: **4,58 → 4,72 dilemas por carrera**; el reparto se corre a la derecha
(6 pasa de 53 a 40 sobre 200… y aparecen partidas de 7 y 8).

### 💸 FRENOS DE GASTO EN LA COLA DE REENVÍO ✅ HECHO
Carlos: «me da miedo que se vuelva a disparar el gasto». Tenía razón: una carrera **rechazada** por el
servidor se habría reintentado en cada recarga y en cada apertura del ranking, para siempre.
Tres frenos: rechazo 4xx (que no sea 429) → se tira · máximo 6 intentos · nunca más de uno por hora.
Cola vacía = **0 peticiones**, que es el caso del 99,99% de los jugadores.

### 🏎️ EL PILOTO DEL MECENAS ✅ HECHO
Campo `driver`: en el muro va su nick, en la parrilla corre el nombre que ha elegido. Darkkk →
**J. Taylor 🇦🇺**. Si el nombre ya trae inicial, se respeta tal cual.
⚠️ **PERO EL PREMIO SE VE POCO:** el pool de mecenas solo entra cuando se agota la cantera real —
medido, **0,56 pilotos genéricos por partida** y, con 27 nombres en el bote, J. Taylor sale en
**1 de cada 100 carreras**. Si se quiere que el tramo Piloto se note, habría que darles prioridad
sobre los genéricos.

## 📌 ENCARGOS · 7-ago-2026 (segunda tanda)

### ✅ EL TOQUE, DEL 55% AL 28%
Era el dilema más frecuente del juego, el doble que el segundo. Prioridad `.12` → `.06`. Queda en la
banda de gomas (36%) y reinvención (25%). Sin prioridad caería al 4,8%, que es como no tenerlo. Las dos
prioridades son ahora constantes (`P_GOMAS`/`P_TOQUE`) para poder medirlas A/B.

### ✅ EL PILOTO DEL MECENAS, DE 1 A 9 DE CADA 100
⚠️ **Mi primera idea no servía y la medición lo destapó:** darle más papeletas dentro de `GEN_NAMES` no
cambiaba nada, porque ese bote SOLO se usa cuando se agota la cantera de promesas reales… y con ~24
novatos por partida casi nunca se agota (con 14 papeletas de 40 seguía saliendo en el 3%).
Mecanismo bueno: al empezar la partida se sortea con `P_SUP=.10` si a esa carrera le toca el piloto de
un mecenas; si le toca, debuta como una promesa más. Uno por carrera como máximo. **Medido: 9/100.**

### 🗡️ VÍAS PARA QUE NAZCAN ENEMISTADES (pendiente, encargo de Carlos)
Hoy el 82% de las carreras no ve ni un enemigo y solo hay **1 en 600 partidas con dos**. Nacen de 6
ramas de dilema y compiten con ~45 candidatos bajo el tope por carrera. Ideas para darles vías propias:
- **Fuera de los dilemas:** que un toque de carrera (evento, no dilema) pueda acabar en enemistad sin
  preguntar nada — hoy los incidentes generan `S._incRival` pero casi nunca `feudBurn()`.
- **Heredar el enemigo:** si le quitas el asiento a alguien al firmar (`occupySeat` desplaza al más
  flojo), ese piloto puede guardártela. Es gratis: el desplazado ya se calcula.
- **El que te quitó los galones:** el compañero que te gana el Nº1 en `quitarGalones` es candidato
  natural a enemigo.
- **Enemistad por robo de asiento en el mercado NPC:** si un equipo te enseña la puerta para fichar a X,
  X es tu enemigo.
- **Que caduquen:** hoy son para siempre. Una enemistad de hace 12 años con un piloto retirado no
  debería seguir cerrando puertas (aunque `teamHasFeud` ya mira solo a los que tienen asiento).
⚖️ OJO AL EQUILIBRIO: cada enemigo cierra un equipo en el mercado (`feudFilter`). Con 3-4 enemigos el
jugador se queda sin sitio donde ir. Hay red de seguridad (nunca 0 ofertas), pero habría que medirlo.

### ⏸️ RANKING POR PAÍS — Carlos: «todavía no». Sigue aparcado.

## 🏍️ RETO III · «VALENTINO ROSSI» (idea de Carlos, 7-ago-2026)

Historia REAL, documentada (vídeo que pasó Carlos): Rossi probó un Ferrari en Fiorano en abril de 2004
con un casco prestado de Schumacher y durmiendo en el garaje para no levantar sospechas. Volvió en 2005
—un segundo más rápido, con tandas largas y Montezemolo y Todt mirando— y en **enero-febrero de 2006 rodó
en la pretemporada de Valencia contra media parrilla**: en seco se quedó a **7 décimas de Schumacher** y
batió a los dos McLaren (De la Rosa y Montoya), al Toyota de Trulli y al BMW Sauber de Kubica. Yamaha
fichó a Lorenzo de urgencia por si se iba. **La oferta concreta fue Toro Rosso** (el antiguo Minardi) una
temporada para hacerse y luego subir a Ferrari si iba rápido; Montezemolo también habló de Sauber.
Decidió quedarse en las motos en el avión de vuelta de Valencia. En 2009, tras el accidente de Massa,
Ferrari volvió a llamarle y dijo que no porque ese año se habían prohibido los test.

⚠️ **PEGA HISTÓRICA A DECIDIR:** Carlos lo quiere en **2007 con Toro Rosso o Sauber**, pero en 2007 Sauber
ya era **BMW Sauber** (Heidfeld/Kubica), un equipo de podios, no la cantera humilde de Ferrari de la
historia. Tres salidas: (a) 2007 con Toro Rosso o BMW Sauber —dos caminos MUY distintos, y eso está bien—;
(b) 2006, el año de la decisión real; (c) tomarse la licencia y poner un Sauber pre-BMW.

🔧 **MECÁNICA NUEVA QUE HACE FALTA:**
1. **Reto con ELECCIÓN de asiento de salida** — hoy los retos te sientan en UN equipo. Este necesita dos
   puertas, y esa elección ES el reto.
2. Arranque en 2007 → era 2000 + `advanceEraTo(2007)`, que ya existe. ✅ (la década de 2000 sale el 10-ago)
3. **Veredicto contra un palmarés que NO es de F1**: quedándose en las motos ganó los mundiales de 2008 y
   2009. El `bench` tendría que comparar contra eso: «te fuiste a la F1 y dejaste 2 títulos encima de la
   mesa — ¿ha merecido la pena?».
📋 Ficha: 🇮🇹 · dorsal **46** · **28 años** en 2007 (nace 16-feb-1979) · estilo agresivo · OVR de salida
   bajo-medio con techo alto: el reto es que llega TARDE y tiene pocos años para crecer.

## 🎓 DILEMAS DE FORMACIÓN · 8 PROPUESTAS (para que Carlos elija 4-5)
1. 📜 **EL CONTRATO DE POR VIDA** [McLaren-Hamilton, 1998] — te pagan la escalera entera a cambio de una
   opción sobre tu futuro. Seguridad total contra libertad.
2. 🌧️ **SIN GOMAS DE LLUVIA** [Alonso, reformulado] — tu equipo junior no tiene presupuesto para gomas de
   agua en los test. Premio mecánico: maestría en mojado.
3. 💰 **EL COMPAÑERO DE PAGO** [universal en el junior] — tu compañero trae el presupuesto y se lleva las
   piezas nuevas. ¿Lo denuncias, buscas tu propio patrocinador o te callas y le ganas igual?
4. ⏫ **QUEMAR ETAPAS** [Verstappen, 2014-15] — te ofrecen saltarte una categoría. ¿Llegas verde o
   consolidas?
5. 🪪 **LA LICENCIA EN DUDA** [Räikkönen, 2001] — te suben a la F1 sin carreras de coches suficientes y la
   federación no quiere darte la superlicencia.
6. 🛣️ **EL CAMINO RARO** [Schumacher, 1990] — programa de fábrica en resistencia en vez de la escalera.
7. 🤝 **EL QUE TE DESCUBRIÓ Y EL QUE TE QUIERE** [Schumacher, 1991] — deslumbras de sustituto y un grande
   te ficha antes de que el pequeño formalice el contrato. Palabra dada contra asiento bueno.
8. 🎮 **TU OTRA VIDA EN EL SIMULADOR** [Verstappen · Norris] — compites en sim racing en serio.
⚠️ Para que alguno caiga en KARTING hay que bajar el suelo de `pickDilemma` (`if(S.age<18) return null`).

## 🎯 DILEMAS DE FORMACIÓN · decisiones cerradas con Carlos (7-ago-2026)

1. 📜 **«TE QUIEREN ATAR»** (el contrato de wonderkid) — ✅ ENTRA. Salta en la 2ª temporada de formación
   si vas 1º o 2º. Firmar = te pagan la escalera, ese equipo **no puede quebrar** mientras subes, y al
   llegar te deben sitio (probador seguro · Nº2 si arrasaste). A cambio: hasta que no hagas **una
   temporada completa** con ellos, nadie más puede ficharte; romperlo = `neverHire` + −fama (traición).
   · La opción «pedir tiempo» **vuelve a preguntar al año siguiente**.
   · Si NO firmas, ese equipo puede ficharte más adelante o no, como cualquier otro. Nada especial.
   · 💡 GRACIA QUE VE CARLOS: firmas con un grande… y para cuando llegas puede ser un equipo mediocre.
     El motor de rendimiento ya lo hace solo: el contrato es a ciegas.
2. 🌧️ **SIN GOMAS DE LLUVIA** — ✅ ENTRA. Matiz de Carlos: **eres un chaval, no pagas tú**. La opción de
   comprarlas es un **sacrificio de tu familia**… salvo que ya tengas el contrato de wonderkid, y
   entonces las paga el equipo y lo que gastas es crédito con ellos. Dos sabores según tu situación.
   Premio: bonus permanente en mojado (el juego ya simula lluvia en el 15% de las carreras y solo el
   estilo técnico puntúa ahí, así que se nota).
3. 💰 EL COMPAÑERO DE PAGO — ❌ DESCARTADO por Carlos: «el dinero no es realmente un factor» aquí.
4. 🪪 **LA LICENCIA EN DUDA** — ✅ ENTRA.
5. 🛣️ **EL CAMINO RARO** — ✅ ENTRA, con calibración fina (se va al sistema de aventuras 1-2 años).
6. 🤝 **EL QUE TE DESCUBRIÓ Y EL QUE TE QUIERE** — ✅ ENTRA, con el diseño de Carlos, que es mejor:
   · Debutas de **probador o Nº2 en un equipo pequeño** y disputas **una o varias carreras** (variedad
     en el motivo del debut: lesión, sanción, patrocinador… para que no sea siempre Schumacher'91).
   · **Ese año NO hay mercado**: la decisión te coloca. Te quedas → sigues en el pequeño al año
     siguiente. Te vas → estás en el grande al año siguiente. Y al final de ESE año eliges normal.
   · 🎨 PANTALLA: Carlos quiere la fila de la trayectoria **partida en dos** como la tabla de Wikipedia
     de Schumacher en 1991 (Jordan arriba, Benetton abajo, y una sola celda con el puesto final).
   · ⚖️ CALIBRAR: irte a un grande siendo un desconocido es un premio enorme → tiene que doler
     (pleito, −fama, el pequeño cerrado para siempre).
7. ⏫ QUEMAR ETAPAS — ❌ **YA EXISTE**: con OVR≥66 y top-3 en F4 el juego ya ofrece saltarse la F3.
8. 🎮 TU OTRA VIDA EN EL SIMULADOR — sin decidir.
⚠️ **EL SUELO DE EDAD (18) SE BAJA SOLO PARA ESTOS DILEMAS**, no para todo `pickDilemma` (aviso expreso
   de Carlos: «por no cagarla»). Hará falta una marca por dilema, tipo `minAge`.

## 🦋 ¿MINARDI SIEMPRE SE CONVIERTE EN TORO ROSSO? (pregunta de Carlos)
**NO.** Cada paso del linaje tira su dado UNA vez al empezar la partida (`go:ch(p)`), y el de
Minardi→Toro Rosso tiene p=.75. **Medido, 200 partidas en la era 2000:** acaba como Toro Rosso 67% ·
**sigue siendo Minardi 23%** · AlphaTauri 8% · Racing Bulls 3%.
❓ DETALLE A DECIDIR: si el paso 1 no sale, el paso 2 puede disparar igual sobre el nombre viejo →
Minardi podría pasar directamente a AlphaTauri sin haber sido nunca Toro Rosso. Hoy pasa; si se quiere
que cada paso exija el anterior, es una línea.

## 📌 ENCARGOS · 8-ago-2026 (jugando los 90)

### 🎚️ VARIANZA EN EL NÚMERO DE OFERTAS (pendiente, encargo de Carlos)
Hoy la pantalla de mercado casi siempre saca **tres puertas**, entres cuando entres y estés como estés.
Carlos quiere que el número varíe con el momento de la carrera:
- **Menos ofertas al ENTRAR en la F1** — que costar llegar se note. Hoy un campeón de F2 ve tres tops.
- **Menos ofertas al FINAL** — cuando ya vas de retirada, el teléfono suena menos. Hoy suena igual.
Ojo al implementarlo: hay red de seguridad para que nunca te quedes con 0 puertas, y varias vías de
relleno (`while(o.length<3)` en dos sitios) que habría que tocar a la vez. Y medirlo: si el mercado se
seca, la carrera se convierte en un callejón.

### 📅 RETOS APUNTADOS (para tunear más adelante)
- 🏎️ **MICK SCHUMACHER · 2021** — dos puertas: volante en Haas (lo que hizo) o probador en Ferrari.
  El listón no es el palmarés, es el apellido. Baremo real: **12 puntos, 0 podios y fuera en 2 años.**
- ⚖️ **BUTTON · Williams-BAR, 2004-05** — TENTATIVO. Firmó con Williams estando atado a BAR y un
  tribunal le obligó a quedarse; después pagó por salirse de Williams para no moverse. Como reto no
  tiene casilla de salida distinta → seguramente funcione mejor como DILEMA (ya está en la lista).
- 🇨🇦 **VILLENEUVE · 1996** — llegas de la IndyCar directo a un Williams que gana. Sin excusas: el coche
  es tuyo desde el primer día.
- 🇩🇪 **HÜLKENBERG · 2010** — pole con un Williams y a la calle por un piloto de pago. El mejor sin podio.
- 🇦🇺 **PIASTRI · 2022** — campeón de F2, sin asiento, y dos equipos peleándose por ti ante un tribunal.
- 🇫🇮 **BOTTAS · 2017** — te cae encima un Mercedes campeón porque Rosberg se largó con cinco días de aviso.
⚙️ **Rossi y Mick comparten máquina**: los dos necesitan un reto que deje ELEGIR entre dos asientos de
salida, que hoy no existe. Se construye una vez y sirve para los dos.

### 🐞 PENDIENTES DE LA TANDA DEL 8-AGO (no arreglados todavía)
- **24 GP en 1993**: el calendario es fijo (24 carreras) en todas las eras. En 1993 fueron 16, en 1990
  también 16. Habría que hacerlo depender del año — toca puntos, victorias y podios de golpe.
- **El carácter del coche cambia SIN AVISO** (`evolveF1`, 3,5% al año): tras cinco títulos con un coche
  que encajaba con tu estilo, de repente choca y nadie te lo cuenta. No hay que quitar el cambio, hay
  que NARRARLO cuando le pasa a tu equipo.
- **30º con 0 puntos**: con 19 equipos la clasificación llega a 38 plazas y los puestos de cola se leen
  raro. Revisar si un OVR 80 debería caer tan abajo o si es la varianza de un coche malo.

## ✅ AUDITORÍA DE LA ERA 1990 (8-ago-2026)

**Datos (estático):** 38 llegadas con edad de debut entre 17 y 40 y techos en rango · las tres listas
de nombres (parrilla 37, llegadas 38, cantera 34) son **disjuntas**, sin un solo solape · 16 linajes con
ventanas no invertidas, pasos en orden y cada `from` apuntando a un destino real · 13 entradas sin
colisión con la parrilla del 90 ni con destinos de linaje. **0 problemas en las cuatro.**

**En marcha (150 partidas, 2.711 temporadas):** 0 pilotos corriendo antes de los 16 de su año de
nacimiento · 0 edades imposibles · 0 equipos muertos dos veces · 0 parrillas fuera de rango (8-20) ·
0 duplicados, 0 asientos vacíos, 0 asientos mal, 0 errores.
Curva de parrilla: 1990 17,8 · 1992 14,4 · 1994 12,1 · 1996 11,7 · 1999 11,3 · 2005 10,7.

**El accidentado no vuelve (250 partidas, 71 retirados por accidente):** 0 reapariciones en asientos,
0 en el pool de pilotos, 0 en la bolsa de comebacks, 0 en las llegadas pendientes y 0 menciones en
temporadas posteriores.
⚠️ Un primer barrido dio 1 mención en texto y era falso positivo del propio detector (comparaba contra
un `Set` acumulado entre partidas). Al medirlo con el año del accidente y el orden dentro de la
temporada: 0 en las cuatro categorías.

**PENDIENTE de la década:** el calendario fijo de 24 GP (en 1990 y 1993 fueron 16).
