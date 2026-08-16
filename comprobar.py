#!/usr/bin/env python3
"""
Comprobador de humo de F1 Glory.  Uso:  python3 comprobar.py

Nació el 16-ago-2026, después de que una beta llegara desplegada y rota porque una
constante (BETA) se usaba sin estar declarada: el error tumbaba una función que no
tenía nada que ver, y no se descubrió hasta abrir el navegador.

NO sustituye a probar el juego. Lo que hace es cazar en dos segundos los fallos que
antes se descubrían en producción. Devuelve 0 si todo va bien, 1 si algo falla.
"""
import io, re, subprocess, sys, os

RAIZ = os.path.dirname(os.path.abspath(__file__))
HTML = os.path.join(RAIZ, "index.html")

ROJO, VERDE, GRIS, FIN = "\033[31m", "\033[32m", "\033[90m", "\033[0m"
fallos, avisos = [], []

def ok(m):    print(f"  {VERDE}✓{FIN} {m}")
def mal(m):   fallos.append(m); print(f"  {ROJO}✗ {m}{FIN}")
def aviso(m): avisos.append(m); print(f"  {GRIS}· {m}{FIN}")

html = io.open(HTML, encoding="utf-8").read()
bloques = re.findall(r"<script>(.*?)</script>", html, re.S)
js = "\n".join(bloques)
print(f"\n📄 index.html · {len(html)//1024} KB · {len(bloques)} bloques de script · {js.count(chr(10))} líneas de JS\n")

# ── 1 · sintaxis ────────────────────────────────────────────────────────────
print("1 · Sintaxis")
tmp = "/tmp/_f1g_check.js"
io.open(tmp, "w", encoding="utf-8").write(js)
r = subprocess.run(["osascript", "-l", "JavaScript", "-e",
    f'var f=$.NSString.stringWithContentsOfFileEncodingError("{tmp}",4,null).js;'
    'try{ new Function(f); "OK" }catch(e){ "ERROR: "+e.message }'],
    capture_output=True, text=True)
sal = (r.stdout or "").strip()
ok("el JavaScript compila") if sal == "OK" else mal(f"no compila → {sal}")

# ── 2 · constantes globales ─────────────────────────────────────────────────
# El fallo del 16-ago: se usaba BETA sin declararla y eso tumbaba initTPCard, una función
# que no tiene nada que ver. Detectar TODA variable no declarada exigiría un analizador de
# JavaScript de verdad; separar código de texto a base de expresiones regulares da falsos
# positivos («CONSTRUCTORS' CHAMPION» lleva un apóstrofo dentro). Así que se comprueban a
# conciencia LAS QUE MANDAN —las que, si faltan, rompen el arranque— y del resto solo se avisa.
print("\n2 · Constantes globales")
CRITICAS = ["PREVIEW", "TEST_MODE", "TP_MODE", "CHALLENGE", "LANG", "LANGS", "THEME",
            "SELECTED_ERA", "F1_TEAMS", "ERAS", "DILEMAS", "TP_DILEMAS", "CHALLENGES", "RELEASES"]
if "const BETA" in js or re.search(r"\bBETA\b", solo := re.sub(r"//.*", "", js)):
    CRITICAS.append("BETA")          # solo se exige si la rama la usa

sinDeclarar = []
for c in CRITICAS:
    usada = re.search(r"(?<![\w$.])" + c + r"(?![\w$])", js)
    declarada = re.search(r"\b(?:const|let|var|function)\s+" + c + r"\b", js)
    if usada and not declarada: sinDeclarar.append(c)
if sinDeclarar:
    mal(f"se usan sin declarar: {', '.join(sinDeclarar)}  ← esto rompe el arranque")
else:
    ok(f"las {len(CRITICAS)} globales críticas están declaradas")

# ── 3 · funciones que no pueden faltar ──────────────────────────────────────
print("\n3 · Funciones esenciales")
ESENCIALES = ["startCareer", "simSeason", "nextOffers", "signContract", "renderOffers",
              "pickDilemma", "bgF1Season", "endCareer", "submitScore", "applyLang",
              "startTPFlow", "initTPState", "simTP", "tpYearStart", "renderTimeline"]
faltan = [f for f in ESENCIALES if not re.search(r"\bfunction\s+" + f + r"\s*\(", js)]
ok(f"las {len(ESENCIALES)} están") if not faltan else mal(f"faltan: {', '.join(faltan)}")

# ── 4 · reglas que ya nos han mordido una vez ───────────────────────────────
print("\n4 · Reglas aprendidas a golpes")
REGLAS = [
 ("el desplegable del Mundial es SOLO del modo jefe",
  lambda: "function fsPuedeDesplegar" in js and 'S.cat==="TP"' in js),
 ("submit.js exige secs (el agujero de la puntuación falsa)",
  lambda: "faltan datos de la partida" in io.open(os.path.join(RAIZ,"api","submit.js"),encoding="utf-8").read()),
 ("un equipo quemado no ofrece renovación",
  lambda: js.count("!S.burned[cur.name]") >= 1),
 ("repetir carrera conserva el reto y el modo jefe",
  lambda: "const retoPrevio" in js and "const eraDeJefe" in js),
]
for nombre, prueba in REGLAS:
    try: ok(nombre) if prueba() else mal(nombre)
    except Exception as e: mal(f"{nombre} (no se pudo comprobar: {e})")

# ── 5 · nada de beta en producción ──────────────────────────────────────────
print("\n5 · Higiene de rama")
rama = subprocess.run(["git","-C",RAIZ,"rev-parse","--abbrev-ref","HEAD"],
                      capture_output=True, text=True).stdout.strip()
if rama == "main":
    sucio = [m for m in ("const BETA","betaBar","!PREVIEW && !BETA") if m in html]
    ok("main limpio de código de beta") if not sucio else mal(f"main lleva código de beta: {', '.join(sucio)}")
else:
    aviso(f"rama «{rama}»: no se comprueba la higiene de beta")

# ── veredicto ───────────────────────────────────────────────────────────────
print()
if fallos:
    print(f"{ROJO}✗ {len(fallos)} fallo(s). NO subir.{FIN}\n")
    sys.exit(1)
print(f"{VERDE}✓ Todo en orden.{FIN}  {GRIS}(esto no sustituye a jugar una partida){FIN}\n")
sys.exit(0)
