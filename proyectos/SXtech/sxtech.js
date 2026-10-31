/* ============================================
   SXtech — sxtech.js
   Rutas técnicas tipo Duolingo: programación, inglés para el trabajo
   y gestión. Todo con JS puro, sin librerías.

   CÓMO AGREGAR CONTENIDO:
   - Una ruta nueva: agrega un objeto a "rutas".
   - Un módulo nuevo: agrega un objeto a "modulos" de la ruta.
   - Una lección nueva: agrega un objeto a "lecciones" del módulo.
   - Preguntas nuevas: agrega objetos al array "preguntas" de la lección.

   El progreso se guarda en localStorage con la clave "sxtech_progreso".
   ============================================ */

// ---------- Datos: rutas, módulos y lecciones ----------
/* Cada ruta tiene:
   id, icono, nombre, descripcion
   modulos: lista de módulos, cada uno con:
     titulo, lecciones
   Y cada lección tiene:
     titulo, tipo ("teoria" | "practica")
     contenido: texto (para teoría) o preguntas (para práctica)
*/
// Las rutas viven en archivos propios (contenido largo con lecciones completas):
// ruta-python.js, ruta-ingles.js y ruta-admin.js
const rutas = [
  rutaPython,
  rutaIngles,
  rutaGestion,
];

// ---------- Progreso guardado en el navegador (localStorage) ----------
/* Guarda un objeto con las lecciones completadas, por ruta:
   { "programacion": ["¿Qué es programar?", ...], ... }
   Nota: localStorage guarda datos en el navegador del usuario,
   funciona sin servidor y sin librerías. */
const CLAVE_PROGRESO = "sxtech_progreso";

function cargarProgreso() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_PROGRESO)) || {};
  } catch {
    return {};
  }
}

function guardarLeccion(rutaId, tituloLeccion) {
  const progreso = cargarProgreso();
  if (!progreso[rutaId]) progreso[rutaId] = [];
  if (!progreso[rutaId].includes(tituloLeccion)) progreso[rutaId].push(tituloLeccion);
  localStorage.setItem(CLAVE_PROGRESO, JSON.stringify(progreso));
}

// ---------- Estado de la app ----------
let rutaActual = rutas[0].id;       // ruta mostrada en el panel
let leccionActual = null;           // lección abierta en la práctica
let preguntaIndice = 0;             // índice de la pregunta en curso
let respuestaElegida = null;        // opción seleccionada por el usuario

// ---------- Referencias del DOM ----------
const rutaTabs = document.getElementById("rutaTabs");
const rutaPanel = document.getElementById("rutaPanel");
const practicaZona = document.getElementById("practicaZona");
const practicaTitulo = document.getElementById("practicaTitulo");
const practicaTituloAntes = document.getElementById("practicaTituloAntes");
const progresoRelleno = document.getElementById("progresoRelleno");
const progresoTexto = document.getElementById("progresoTexto");
const preguntaCard = document.getElementById("preguntaCard");
const teoriaCard = document.getElementById("teoriaCard");
const puntosPasos = document.getElementById("puntosPasos");
const teoriaPasos = document.getElementById("teoriaPasos");
const btnContinuar = document.getElementById("btnContinuar");
const ordenarCard = document.getElementById("ordenarCard");
const ordenarInstr = document.getElementById("ordenarInstr");
const ordenarLineas = document.getElementById("ordenarLineas");
const ordenarRespuesta = document.getElementById("ordenarRespuesta");
const feedbackOrdenar = document.getElementById("feedbackOrdenar");
const btnControlar = document.getElementById("btnControlar");
const completarCard = document.getElementById("completarCard");
const completarInstr = document.getElementById("completarInstr");
const completarCodigo = document.getElementById("completarCodigo");
const feedbackCompletar = document.getElementById("feedbackCompletar");
const btnVerificar = document.getElementById("btnVerificar");
const btnCompletarReiniciar = document.getElementById("btnCompletarReiniciar");
const preguntaTexto = document.getElementById("preguntaTexto");
const opciones = document.getElementById("opciones");
const feedback = document.getElementById("feedback");
const btnSiguiente = document.getElementById("btnSiguiente");
const leccionFinal = document.getElementById("leccionFinal");
const finalTitulo = document.getElementById("finalTitulo");
const finalTexto = document.getElementById("finalTexto");
const btnCerrar = document.getElementById("btnCerrar");
const btnCerrarTop = document.getElementById("btnCerrarTop");
const btnRepetir = document.getElementById("btnRepetir");
const btnSiguienteLeccion = document.getElementById("btnSiguienteLeccion");

// ---------- Pestañas de rutas ----------
/* Pinta un botón por cada ruta y marca la activa. */
function renderTabs() {
  rutaTabs.innerHTML = rutas
    .map(
      (r) => `
    <button class="ruta-tab ${r.id === rutaActual ? "active" : ""}" data-ruta="${r.id}">
      ${r.icono} ${r.nombre}
    </button>`
    )
    .join("");
}

/* Cuando se hace clic en una pestaña, cambia la ruta y repinta todo. */
rutaTabs.addEventListener("click", (e) => {
  const btn = e.target.closest(".ruta-tab");
  if (!btn) return;
  rutaActual = btn.dataset.ruta;
  renderTabs();
  renderPanel();
});

// ---------- Panel de módulos y lecciones ----------
/* Pinta los módulos de la ruta actual con sus lecciones.
   Las lecciones ya completadas llevan la clase "completada". */
function renderPanel() {
  const ruta = rutas.find((r) => r.id === rutaActual);
  const progreso = cargarProgreso();
  const completadas = progreso[rutaActual] || [];
  // Lista plana de lecciones para calcular el desbloqueo en orden (como Mimo)
  const todas = ruta.modulos.flatMap((m) => m.lecciones);
  // La primera lección NO completada queda desbloqueada; las demás, con candado
  const indiceDesbloqueada = todas.findIndex((l) => !completadas.includes(l.titulo));
/* Lección global consecutiva (como Mimo: 01, 02, 03... por toda la ruta) */
let numLeccion = 0;

rutaPanel.innerHTML = `
    <p class="section-sub">${ruta.descripcion}</p>
    ${ruta.modulos
      .map(
        (m, i) => {
          // Progreso del módulo: cuántas lecciones completadas de su total
          const hechas = m.lecciones.filter((l) => completadas.includes(l.titulo)).length;
          const pct = Math.round((hechas / m.lecciones.length) * 100);
          // Filas numeradas de lecciones (01, 02, ...) como en Mimo
          const filas = m.lecciones
            .map((l, j) => {
              numLeccion++;
              const n = String(numLeccion).padStart(2, "0");
              const etiqueta = l.tipo === "larga" ? "🎓 Lección" : l.tipo === "teoria" ? "📖 Aprender" : "⚡ Práctica";
              const idxGlobal = numLeccion - 1;
              // Desbloqueada: las completadas y la primera sin completar
              const desbloqueada = idxGlobal <= indiceDesbloqueada;
              return `
            <button class="leccion ${completadas.includes(l.titulo) ? "completada" : ""} ${desbloqueada ? "" : "bloqueada"}"
                    data-leccion="${j}" data-modulo="${i}" ${desbloqueada ? "" : "disabled"}>
              <span class="leccion-num">${n}</span>
              <span class="leccion-nombre">${l.titulo}</span>
              <span class="leccion-tipo ${l.tipo}">${etiqueta}</span>
              <span class="leccion-check">${completadas.includes(l.titulo) ? "✓" : desbloqueada ? "" : "🔒"}</span>
            </button>`;
            })
            .join("");
          return `
      <div class="modulo">
        <div class="modulo-cabecera">
          <h3 class="modulo-titulo">${m.titulo}</h3>
          <span class="modulo-progreso">${hechas}/${m.lecciones.length} · ${pct}%</span>
        </div>
        <div class="modulo-barra"><div class="modulo-relleno" style="width:${pct}%"></div></div>
        ${filas}
      </div>`;
        }
      )
      .join("")}
  `;
}

/* Al hacer clic en una lección, abre su contenido en la zona de práctica.
   Las bloqueadas no abren (están disabled, pero se filtra por seguridad). */
rutaPanel.addEventListener("click", (e) => {
  const btn = e.target.closest(".leccion");
  if (!btn || btn.classList.contains("bloqueada")) return;
  const moduloIndice = +btn.dataset.modulo;
  const leccionIndice = +btn.dataset.leccion;
  abrirLeccion(rutas.find((r) => r.id === rutaActual).modulos[moduloIndice].lecciones[leccionIndice]);
});

// ---------- Práctica de lecciones ----------
/* Lecciones de teoría: solo muestran el texto.
   Lecciones de práctica: preguntas de opción múltiple, una a una. */
/* Devuelve la lista plana de lecciones de la ruta actual (para navegar entre ellas) */
function leccionesDeRuta() {
  return rutas.find((r) => r.id === rutaActual).modulos.flatMap((m) => m.lecciones);
}

let pasoIndice = 0; // paso actual dentro de la lección de teoría
let pasosActuales = []; // texto dividido en pasos

/* Divide el contenido de teoría en pasos cortos (2-3 frases cada uno) */
function dividirEnPasos(texto) {
  const frases = texto.split(/(?<=\.)\s+(?=[A-Z¿¡0-9"'])/);
  const pasos = [];
  for (let i = 0; i < frases.length; i += 2) {
    pasos.push(frases.slice(i, i + 2).join(" "));
  }
  return pasos.length ? pasos : [texto];
}

function abrirLeccion(leccion) {
  leccionActual = leccion;
  practicaTitulo.textContent = leccion.titulo;
  practicaZona.hidden = false;
  practicaZona.scrollTop = 0; // la modal siempre abre arriba
  leccionFinal.hidden = true;
  // Reinicia la barra de progreso de la lección anterior
  progresoRelleno.style.width = "0%";
  progresoTexto.textContent = "";

  if (leccion.tipo === "larga") {
    // Lección larga: mezcla de leer / pensar / completar / construir / escribir.
    abrirLeccionLarga(leccion);
    return;
  }

  if (leccion.tipo === "teoria") {
    // Lección de teoría: pasos cortos con botón Continuar, como Mimo.
    practicaTituloAntes.textContent = "Aprende: ";
    pasosActuales = dividirEnPasos(leccion.contenido);
    pasoIndice = 0;
    teoriaCard.hidden = false;
    preguntaCard.hidden = true;
    ordenarCard.hidden = true;
    renderPaso();
  } else if (leccion.tipo === "completar") {
    // Lección de completar código: huecos con piezas.
    practicaTituloAntes.textContent = "Completa: ";
    teoriaCard.hidden = true;
    preguntaCard.hidden = true;
    ordenarCard.hidden = true;
    completarCard.hidden = false;
    abrirCompletar(leccion);
  } else if (leccion.tipo === "ordenar") {
    // Lección de ordenar código: editor script.py interactivo.
    practicaTituloAntes.textContent = "Construye: ";
    teoriaCard.hidden = true;
    preguntaCard.hidden = true;
    ordenarCard.hidden = false;
    abrirOrdenar(leccion);
  } else {
    // Lección de práctica: arranca en la primera pregunta.
    practicaTituloAntes.textContent = "Práctica: ";
    teoriaCard.hidden = true;
    ordenarCard.hidden = true;
    preguntaCard.hidden = false;
    preguntaIndice = 0;
    respuestaElegida = null;
    renderPregunta();
  }
}

// ---------- Lecciones largas (mezcla de pasos) ----------
/* Una lección "larga" contiene pasos de varios tipos:
   { texto }     → leer
   { piensa, opciones, correcta }  → pregunta de opción múltiple
   { completa }  → completar código con piezas
   { construye } → ordenar líneas (construir desde cero)
   { escribe }   → escribir código línea por línea (con verificación) */
let pasosLargos = [];      // pasos de la lección en curso
let pasoLargoIdx = 0;      // paso actual

function abrirLeccionLarga(leccion) {
  practicaTituloAntes.textContent = "Lección: ";
  pasosLargos = leccion.pasos;
  pasoLargoIdx = 0;
  teoriaCard.hidden = true;
  preguntaCard.hidden = true;
  ordenarCard.hidden = true;
  completarCard.hidden = true;
  ocultarCardsLargas();
  renderPasoLargo();
}

/* Oculta las tarjetas propias de la lección larga */
function ocultarCardsLargas() {
  const zona = document.getElementById("zonaLarga");
  if (zona) zona.remove();
}

/* Crea (o devuelve) el contenedor de la lección larga dentro de la modal */
function zonaLarga() {
  let zona = document.getElementById("zonaLarga");
  if (!zona) {
    zona = document.createElement("div");
    zona.id = "zonaLarga";
    // Se inserta dentro del área de práctica, después de la tarjeta de teoría
    teoriaCard.parentNode.insertBefore(zona, teoriaCard.nextSibling);
  }
  return zona;
}

/* Pinta el paso actual según su tipo */
function renderPasoLargo() {
  const paso = pasosLargos[pasoLargoIdx];
  const zona = zonaLarga();

  // Barra de progreso de la lección
  progresoRelleno.style.width = `${(pasoLargoIdx / pasosLargos.length) * 100}%`;
  progresoTexto.textContent = `Paso ${pasoLargoIdx + 1} de ${pasosLargos.length}`;

  if (paso.texto !== undefined) {
    // Paso de lectura (aprovecha la tarjeta de teoría existente)
    zona.innerHTML = "";
    practicaTituloAntes.textContent = "Lee: ";
    pasosActuales = [paso.texto];
    pasoIndice = 0;
    teoriaCard.hidden = false;
    renderPaso();
  } else if (paso.piensa !== undefined) {
    // Paso "piensa": pregunta de opción múltiple inline.
    // No se puede avanzar sin acertar: si falla, reintenta con las opciones reactivadas.
    teoriaCard.hidden = true;
    practicaTituloAntes.textContent = "Piensa: ";
    const opcionesMezcladas = paso.opciones.map((o, i) => ({ o, i })).sort(() => Math.random() - 0.5);
    zona.innerHTML = `
      <div class="pregunta-card">
        <p class="pregunta-texto">${paso.piensa}</p>
        <div class="opciones">
          ${opcionesMezcladas.map((x) => `<button class="opcion" data-idx="${x.i}">${x.o}</button>`).join("")}
        </div>
        <p class="feedback" id="feedbackLargo"></p>
        <button class="btn-primario" id="btnLargoContinuar" hidden disabled>Continuar →</button>
      </div>`;
    const btnCont = zona.querySelector("#btnLargoContinuar");
    zona.querySelector(".opciones").addEventListener("click", (e) => {
      const btn = e.target.closest(".opcion");
      if (!btn || btn.disabled) return;
      const elegida = +btn.dataset.idx;
      const fb = zona.querySelector("#feedbackLargo");
      if (elegida === paso.correcta) {
        // Acertó: marca verde, bloquea todo y habilita Continuar
        zona.querySelectorAll(".opcion").forEach((b) => {
          if (+b.dataset.idx === paso.correcta) b.classList.add("correcta");
          b.disabled = true;
        });
        fb.textContent = "¡Correcto! 🎉";
        fb.className = "feedback ok";
        btnCont.hidden = false;
        btnCont.disabled = false;
      } else {
        // Falló: marca su elección en rojo y deja reintentar (solo la errónea queda deshabilitada)
        btn.classList.add("incorrecta");
        btn.disabled = true;
        fb.textContent = "No es correcta. Inténtalo de nuevo: toca otra opción.";
        fb.className = "feedback mal";
      }
    });
    btnCont.addEventListener("click", avanzarPasoLargo);
  } else if (paso.completa !== undefined) {
    // Paso de completar código: reutiliza el motor "completar" existente
    teoriaCard.hidden = true;
    practicaTituloAntes.textContent = "Completa: ";
    const leccionCompleta = {
      titulo: leccionActual.titulo,
      instrucciones: paso.completa.instrucciones,
      plantilla: paso.completa.plantilla,
      huecos: paso.completa.huecos,
      piezas: paso.completa.piezas,
      correctas: paso.completa.correctas,
    };
    preguntaCard.hidden = true;
    ordenarCard.hidden = true;
    completarCard.hidden = false;
    abrirCompletar(leccionCompleta);
    // Redefine "Continuar" para que avance al siguiente paso largo, no termine la lección
    redefinirBotonCompletar(avanzarPasoLargo);
  } else if (paso.construye !== undefined) {
    // Paso de construir: reutiliza el motor "ordenar" existente
    teoriaCard.hidden = true;
    practicaTituloAntes.textContent = "Construye: ";
    const leccionOrdena = {
      titulo: leccionActual.titulo,
      instrucciones: paso.construye.instrucciones,
      lineas: paso.construye.lineas,
    };
    preguntaCard.hidden = true;
    completarCard.hidden = true;
    ordenarCard.hidden = false;
    abrirOrdenar(leccionOrdena);
    redefinirBotonOrdenar(avanzarPasoLargo);
  } else if (paso.escribe !== undefined) {
    // Paso de escribir código línea por línea
    teoriaCard.hidden = true;
    practicaTituloAntes.textContent = "Escribe: ";
    renderEscribe(paso.escribe, zona);
  }
}

/* Pasa al siguiente paso, o termina la lección */
function avanzarPasoLargo() {
  ocultarCardsLargas();
  completarCard.hidden = true;
  ordenarCard.hidden = true;
  if (pasoLargoIdx + 1 < pasosLargos.length) {
    pasoLargoIdx++;
    renderPasoLargo();
  } else {
    // Lección terminada: guarda progreso y muestra la pantalla final
    guardarLeccion(rutaActual, leccionActual.titulo);
    progresoRelleno.style.width = "100%";
    progresoTexto.textContent = "Lección completada";
    finalTitulo.textContent = `Completaste: ${leccionActual.titulo}`;
    finalTexto.textContent = "La lección quedó marcada con ✓ en tu ruta.";
    teoriaCard.hidden = true;
    preguntaCard.hidden = true;
    leccionFinal.hidden = false;
    renderPanel();
  }
}

/* Redefine temporalmente el flujo del botón del motor "completar"
   para que al acertar avance al siguiente paso largo en vez de terminar. */
let btnCompletarOriginal = null;
function redefinirBotonCompletar(avance) {
  if (btnCompletarOriginal) return; // ya redefinido
  btnCompletarOriginal = btnVerificar.onclick;
  btnVerificar.addEventListener("click", function alAvanzar() {
    if (btnVerificar.textContent.startsWith("Continuar")) {
      btnVerificar.removeEventListener("click", alAvanzar);
      btnVerificar.onclick = btnCompletarOriginal;
      btnCompletarOriginal = null;
      completarCard.hidden = true;
      avance();
    }
  }, true); // captura: se ejecuta antes del handler original
}

/* Igual para el motor "ordenar" */
let btnOrdenarOriginal = null;
function redefinirBotonOrdenar(avance) {
  if (btnOrdenarOriginal) return;
  btnOrdenarOriginal = btnControlar.onclick;
  btnControlar.addEventListener("click", function alAvanzar() {
    if (btnControlar.textContent.startsWith("Continuar")) {
      btnControlar.removeEventListener("click", alAvanzar);
      btnControlar.onclick = btnOrdenarOriginal;
      btnOrdenarOriginal = null;
      ordenarCard.hidden = true;
      avance();
    }
  }, true);
}

/* ---------- Escribir código línea por línea ---------- */
let escribeLineas = [];      // líneas que el usuario lleva escritas
let escribeActual = null;    // actividad en curso

function renderEscribe(act, zona) {
  escribeActual = act;
  escribeLineas = [];
  zona.innerHTML = `
    <div class="pregunta-card">
      <p class="pregunta-texto">${act.instrucciones}</p>
      <p class="pista-codigo" id="escribePista">💡 ${act.pista || ""}</p>
      <div class="escribe-editor">
        <div class="escribe-codigo" id="escribeCodigo"><span class="respuesta-vacia">Tu código aparecerá aquí...</span></div>
        <input type="text" class="escribe-input" id="escribeInput" placeholder="Escribe una línea y presiona Enter..." autocomplete="off" />
        <div class="escribe-acciones">
          <button class="btn-secundario" id="escribeDeshacer">↩ Deshacer línea</button>
          <button class="btn-primario" id="escribeVerificar" hidden>Continuar →</button>
        </div>
      </div>
      <p class="feedback" id="feedbackEscribe"></p>
    </div>`;

  const input = zona.querySelector("#escribeInput");
  const codigoDiv = zona.querySelector("#escribeCodigo");
  const feedbackEl = zona.querySelector("#feedbackEscribe");
  const btnVerif = zona.querySelector("#escribeVerificar");
  const btnDesh = zona.querySelector("#escribeDeshacer");
  input.focus();

  function pintar() {
    codigoDiv.innerHTML = escribeLineas.length
      ? escribeLineas.map((l) => `<pre class="respuesta-linea">${resaltar(l)}</pre>`).join("")
      : `<span class="respuesta-vacia">Tu código aparecerá aquí...</span>`;
  }

  btnDesh.addEventListener("click", () => {
    escribeLineas.pop();
    pintar();
    btnVerif.hidden = true;
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";
  });

  input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const linea = input.value;
    if (!linea.trim()) return;
    if (linea === escribeActual.solucion[escribeLineas.length]) {
      escribeLineas.push(linea);
      pintar();
      input.value = "";
      feedbackEl.textContent = escribeLineas.length === escribeActual.solucion.length
        ? "¡Perfecto! El programa está completo. 🎉"
        : "¡Línea correcta! Sigue así.";
      feedbackEl.className = "feedback ok";
      if (escribeLineas.length === escribeActual.solucion.length) {
        input.disabled = true;
        btnVerif.hidden = false;
      }
    } else {
      feedbackEl.textContent = "Esa línea no es la esperada. Revisa la pista e inténtalo de nuevo.";
      feedbackEl.className = "feedback mal";
    }
  });

  btnVerif.addEventListener("click", avanzarPasoLargo);
}

// ---------- Completar código (huecos con piezas) ----------
let completarActual = null;   // lección en curso
let completarElegidas = [];   // pieza elegida por hueco (índice en piezas)

/* Coloreado básico de sintaxis Python para el editor */
function resaltar(codigo) {
  return codigo
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/'([^']*)'/g, "<span class='tok-cadena'>'$1'</span>")
    .replace(/\b(print|input|def|return|if|elif|else|for|while|in|range|import|int|str|len|append)\b/g, "<span class='tok-palabra'>$1</span>")
    .replace(/(?<!tok-numero'>)(?<!-)\b(\d+)\b(?!<)/g, "<span class='tok-numero'>$1</span>");
}

/* Abre la actividad: pinta el código con huecos tocables y las piezas mezcladas */
function abrirCompletar(leccion) {
  completarActual = leccion;
  completarElegidas = new Array(leccion.huecos.length).fill(null);
  completarInstr.textContent = leccion.instrucciones;
  feedbackCompletar.textContent = "";
  feedbackCompletar.className = "feedback";
  btnVerificar.hidden = false;
  btnVerificar.textContent = "Controlar ✓";
  renderCompletar();
}

/* Pinta el código con huecos (________________) y las piezas disponibles */
function renderCompletar() {
  const l = completarActual;
  // Un hueco por elemento de huecos: pinta el texto entre huecos con los elegidos
  let html = "";
  let pos = 0; // posición en la lista de huecos
  // La plantilla es una lista de segmentos; cada hueco se inserta tras el segmento indicado
  l.plantilla.forEach((segmento, i) => {
    html += `<span class="comp-texto">${resaltar(segmento)}</span>`;
    if (pos < l.huecos.length && i === l.huecos[pos]) {
      const elegida = completarElegidas[pos];
      html += elegida === null
        ? `<button class="comp-hueco" data-pos="${pos}"></button>`
        : `<button class="comp-hueco lleno" data-pos="${pos}">${resaltar(l.piezas[elegida])}</button>`;
      pos++;
    }
  });
  // Piezas restantes (no usadas), mezcladas
  const usadas = completarElegidas.filter((x) => x !== null);
  const libres = l.piezas.map((_, i) => i).filter((i) => !usadas.includes(i));
  const mezcladas = libres.slice().sort(() => Math.random() - 0.5);
  html += `<div class="comp-piezas">${mezcladas
    .map((i) => `<button class="comp-pieza" data-idx="${i}">${l.piezas[i]}</button>`)
    .join("")}</div>`;
  completarCodigo.innerHTML = html;
}

/* Botón Reiniciar del pie del editor: vacía todos los huecos */
btnCompletarReiniciar.addEventListener("click", () => {
  abrirCompletar(completarActual);
});

/* Tocar una pieza: la coloca en el primer hueco vacío */
completarCodigo.addEventListener("click", (e) => {
  const pieza = e.target.closest(".comp-pieza");
  if (pieza) {
    const huecoLibre = completarElegidas.indexOf(null);
    if (huecoLibre === -1) return;
    completarElegidas[huecoLibre] = +pieza.dataset.idx;
    renderCompletar();
    return;
  }
  // Tocar un hueco lleno: lo vacía
  const hueco = e.target.closest(".comp-hueco.lleno");
  if (hueco) {
    completarElegidas[+hueco.dataset.pos] = null;
    renderCompletar();
  }
});

/* Controlar: verifica los huecos o avanza si ya acertó */
btnVerificar.addEventListener("click", () => {
  if (btnVerificar.textContent.startsWith("Continuar")) {
    guardarLeccion(rutaActual, completarActual.titulo);
    completarCard.hidden = true;
    finalTitulo.textContent = `Completaste: ${completarActual.titulo}`;
    finalTexto.textContent = "La lección quedó marcada con ✓ en tu ruta.";
    leccionFinal.hidden = false;
    renderPanel();
    btnVerificar.textContent = "Controlar ✓";
    return;
  }
  if (completarElegidas.some((x) => x === null)) {
    feedbackCompletar.textContent = "Te faltan huecos por completar.";
    feedbackCompletar.className = "feedback mal";
    return;
  }
  const correcto = completarActual.correctas.every((c, pos) => completarElegidas[pos] === c);
  if (correcto) {
    feedbackCompletar.textContent = "¡Perfecto! El programa funciona. 🎉";
    feedbackCompletar.className = "feedback ok";
    btnVerificar.textContent = "Continuar →";
  } else {
    feedbackCompletar.textContent = "Algunas piezas no son correctas. Toca un hueco para cambiarla.";
    feedbackCompletar.className = "feedback mal";
  }
});

// ---------- Ordenar código (tipo Mimo) ----------
/* Estado de la actividad de ordenar líneas */
let ordenarActual = null;      // lección en curso
let ordenarElegidas = [];      // índices de líneas ya seleccionadas

/* Coloreado básico de sintaxis Python para el editor */
function resaltar(codigo) {
  return codigo
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/'([^']*)'/g, "<span class='tok-cadena'>'$1'</span>")
    .replace(/\b(print|input|def|return|if|elif|else|for|while|in|range|import|int|str|len|append)\b/g, "<span class='tok-palabra'>$1</span>")
    .replace(/(?<!tok-numero'>)\b(\d+)\b(?!<)/g, "<span class='tok-numero'>$1</span>");
}

/* Abre la actividad: mezcla las líneas y las pinta como bloques tocables */
function abrirOrdenar(leccion) {
  ordenarActual = leccion;
  ordenarElegidas = [];
  ordenarInstr.textContent = leccion.instrucciones;
  feedbackOrdenar.textContent = "";
  feedbackOrdenar.className = "feedback";
  btnControlar.hidden = false;
  btnControlar.textContent = "Controlar ✓";
  // Mezcla de líneas desordenadas
  const mezcladas = leccion.lineas.map((_, i) => i).sort(() => Math.random() - 0.5);
  ordenarLineas.innerHTML = mezcladas
    .map((i) => `<button class="linea-codigo" data-idx="${i}">${resaltar(leccion.lineas[i])}</button>`)
    .join("");
  renderRespuesta();
}

/* Pinta las líneas ya elegidas, en orden, dentro de la respuesta */
function renderRespuesta() {
  if (!ordenarElegidas.length) {
    ordenarRespuesta.innerHTML = `<span class="respuesta-vacia">Toca las líneas de abajo en el orden correcto...</span>`;
    return;
  }
  ordenarRespuesta.innerHTML = ordenarElegidas
    .map((i, pos) => `<span class="respuesta-linea" data-pos="${pos}">${resaltar(ordenarActual.lineas[i])}</span>`)
    .join("");
}

/* Tocar una línea: la agrega a la respuesta (y deshabilita el bloque) */
ordenarLineas.addEventListener("click", (e) => {
  const btn = e.target.closest(".linea-codigo");
  if (!btn || btn.disabled) return;
  btn.disabled = true;
  ordenarElegidas.push(+btn.dataset.idx);
  renderRespuesta();
});

/* Tocar una línea de la respuesta: la quita y re-habilita su bloque abajo */
ordenarRespuesta.addEventListener("click", (e) => {
  const span = e.target.closest(".respuesta-linea");
  if (!span) return;
  const pos = +span.dataset.pos;
  const idx = ordenarElegidas[pos];
  ordenarElegidas.splice(pos, 1);
  ordenarLineas.querySelectorAll(".linea-codigo").forEach((b) => {
    if (+b.dataset.idx === idx) b.disabled = false;
  });
  renderRespuesta();
});

/* Controlar: verifica el orden, o avanza si ya acertó */
btnControlar.addEventListener("click", () => {
  if (btnControlar.textContent.startsWith("Continuar")) {
    // Ya acertó: completa la lección y muestra la pantalla final
    guardarLeccion(rutaActual, ordenarActual.titulo);
    ordenarCard.hidden = true;
    finalTitulo.textContent = `Completaste: ${ordenarActual.titulo}`;
    finalTexto.textContent = "La lección quedó marcada con ✓ en tu ruta.";
    leccionFinal.hidden = false;
    renderPanel();
    btnControlar.textContent = "Controlar ✓";
    return;
  }
  if (ordenarElegidas.length < ordenarActual.lineas.length) {
    feedbackOrdenar.textContent = "Te faltan líneas por colocar.";
    feedbackOrdenar.className = "feedback mal";
    return;
  }
  const correcto = ordenarElegidas.every((idx, pos) => idx === pos);
  if (correcto) {
    feedbackOrdenar.textContent = "¡Perfecto! El programa funciona. 🎉";
    feedbackOrdenar.className = "feedback ok";
    btnControlar.textContent = "Continuar →";
  } else {
    feedbackOrdenar.textContent = "El orden no es correcto. Toca las líneas de arriba para corregir.";
    feedbackOrdenar.className = "feedback mal";
  }
});

/* Pinta el paso actual de la teoría con sus puntos de progreso */
function renderPaso() {
  const total = pasosActuales.length;
  // Puntos de progreso arriba (rellenos hasta el paso actual)
  puntosPasos.innerHTML = pasosActuales
    .map((_, i) => `<span class="punto ${i <= pasoIndice ? "activo" : ""}"></span>`)
    .join("");
  // Contenido del paso, con animación de entrada
  teoriaPasos.innerHTML = `<p class="paso-texto" key="${pasoIndice}">${pasosActuales[pasoIndice]}</p>`;
  // En lecciones largas, cada lectura es un paso individual: siempre "Continuar"
  if (leccionActual && leccionActual.tipo === "larga") {
    btnContinuar.textContent = "Continuar →";
    return;
  }
  // Último paso: cambia el botón a "Terminar"
  btnContinuar.textContent = pasoIndice + 1 === total ? "Terminar ✓" : "Continuar →";
}

/* Botón Continuar: avanza de paso, y en el último termina la lección */
btnContinuar.addEventListener("click", () => {
  // En lecciones largas, cada texto es un solo paso: avanza al paso largo siguiente
  if (leccionActual && leccionActual.tipo === "larga") {
    teoriaCard.hidden = true;
    avanzarPasoLargo();
    return;
  }
  if (pasoIndice + 1 < pasosActuales.length) {
    pasoIndice++;
    renderPaso();
  } else {
    // Teoría terminada: guarda progreso y muestra la pantalla final
    guardarLeccion(rutaActual, leccionActual.titulo);
    teoriaCard.hidden = true;
    finalTitulo.textContent = `Completaste: ${leccionActual.titulo}`;
    finalTexto.textContent = "La lección quedó marcada con ✓ en tu ruta.";
    leccionFinal.hidden = false;
    renderPanel();
  }
});

/* Pinta la pregunta actual con sus opciones. */
function renderPregunta() {
  const p = leccionActual.preguntas[preguntaIndice];
  const total = leccionActual.preguntas.length;

  // Barra de progreso
  progresoRelleno.style.width = `${(preguntaIndice / total) * 100}%`;
  progresoTexto.textContent = `Pregunta ${preguntaIndice + 1} de ${total}`;

  preguntaTexto.textContent = p.pregunta;
  feedback.textContent = "";
  feedback.className = "feedback";
  btnSiguiente.hidden = true;
  respuestaElegida = null;

  // Opciones en orden aleatorio para que no se memorice la posición
  const indices = p.opciones.map((_, i) => i).sort(() => Math.random() - 0.5);
  opciones.innerHTML = indices
    .map(
      (i) => `
    <button class="opcion" data-idx="${i}">${p.opciones[i]}</button>`
    )
    .join("");
}

/* Al elegir una opción: marca si fue correcta y muestra el botón "Siguiente". */
opciones.addEventListener("click", (e) => {
  const btn = e.target.closest(".opcion");
  if (!btn || respuestaElegida !== null) return; // solo una respuesta por pregunta
  respuestaElegida = +btn.dataset.idx;
  const p = leccionActual.preguntas[preguntaIndice];

  // Marca visualmente todas las opciones: correcta en verde, la elegida mal en rojo
  opciones.querySelectorAll(".opcion").forEach((b) => {
    const idx = +b.dataset.idx;
    if (idx === p.correcta) b.classList.add("correcta");
    else if (idx === respuestaElegida) b.classList.add("incorrecta");
  });

  if (respuestaElegida === p.correcta) {
    feedback.textContent = "¡Correcto! 🎉";
    feedback.classList.add("ok");
  } else {
    feedback.textContent = "Casi... la respuesta correcta está en verde.";
    feedback.classList.add("mal");
  }
  btnSiguiente.hidden = false;
});

/* Botón "Siguiente": avanza a la próxima pregunta o termina la lección. */
btnSiguiente.addEventListener("click", () => {
  if (preguntaIndice + 1 < leccionActual.preguntas.length) {
    preguntaIndice++;
    renderPregunta();
  } else {
    // Lección completada: guarda el progreso y muestra la pantalla final
    guardarLeccion(rutaActual, leccionActual.titulo);
    progresoRelleno.style.width = "100%";
    progresoTexto.textContent = "Lección completada";
    preguntaCard.hidden = true;
    finalTitulo.textContent = `Completaste: ${leccionActual.titulo}`;
    finalTexto.textContent = "La lección quedó marcada con ✓ en tu ruta.";
    leccionFinal.hidden = false;
    renderPanel(); // refresca la marca de completada en el panel
  }
});

/* Botones para cerrar la práctica y volver a la ruta. */
btnCerrar.addEventListener("click", () => {
  cerrarPractica();
  document.getElementById("rutas").scrollIntoView({ behavior: "smooth" });
});

btnCerrarTop.addEventListener("click", () => {
  cerrarPractica();
  renderPanel();
});

/* Botón "Repetir lección": reinicia la misma lección desde la primera pregunta. */
btnRepetir.addEventListener("click", () => {
  abrirLeccion(leccionActual);
});

/* Botón "Siguiente lección": abre la lección que sigue en la ruta. */
btnSiguienteLeccion.addEventListener("click", () => {
  const lista = leccionesDeRuta();
  const i = lista.indexOf(leccionActual);
  const siguiente = lista[i + 1];
  if (siguiente) abrirLeccion(siguiente);
  else cerrarPractica();
});

function cerrarPractica() {
  practicaZona.hidden = true;
}

// ---------- Inicialización ----------
renderTabs();
renderPanel();
