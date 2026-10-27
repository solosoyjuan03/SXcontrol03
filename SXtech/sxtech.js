/* ============================================
   SXtech — sxtech.js
   Rutas técnicas tipo Duolingo: programación, inglés para el trabajo
   y administración de empresas. Todo con JS puro, sin librerías.

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
const rutas = [
  {
    id: "programacion",
    icono: "💻",
    nombre: "Programación",
    descripcion: "Fundamentos de programación desde cero, lección a lección.",
    modulos: [
      {
        titulo: "Fundamentos",
        lecciones: [
          {
            titulo: "¿Qué es programar?",
            tipo: "teoria",
            contenido:
              "Programar es escribir instrucciones que una computadora puede entender y ejecutar. " +
              "Un programa es una secuencia ordenada de pasos: tomar datos, procesarlos y devolver un resultado. " +
              "Los lenguajes de programación (JavaScript, Python, etc.) nos permiten escribir esos pasos en un formato que la máquina interpreta.",
          },
          {
            titulo: "Variables y datos",
            tipo: "practica",
            preguntas: [
              {
                pregunta: "¿Qué es una variable?",
                opciones: [
                  "Un espacio con nombre donde se guarda un dato",
                  "Un tipo de archivo",
                  "Un error del programa",
                  "Un dispositivo físico",
                ],
                correcta: 0,
              },
              {
                pregunta: "En JavaScript, ¿qué guarda la variable en: let edad = 25;",
                opciones: ["Texto", "El número 25", "La palabra edad", "Nada"],
                correcta: 1,
              },
              {
                pregunta: "¿Cuál de estos es un tipo de dato booleano?",
                opciones: ["42", "Hola", "true", "1.5"],
                correcta: 2,
              },
            ],
          },
          {
            titulo: "Condiciones (if)",
            tipo: "practica",
            preguntas: [
              {
                pregunta: "¿Para qué sirve una condición if?",
                opciones: [
                  "Para repetir código",
                  "Para ejecutar código solo cuando se cumple una condición",
                  "Para guardar datos",
                  "Para borrar variables",
                ],
                correcta: 1,
              },
              {
                pregunta: "Si edad = 15, ¿qué imprime: if (edad >= 18) { console.log('adulto') } else { console.log('menor') }",
                opciones: ["adulto", "menor", "Nada", "Error"],
                correcta: 1,
              },
            ],
          },
          {
            titulo: "Ciclos (bucles)",
            tipo: "teoria",
            contenido:
              "Un ciclo repite un bloque de código mientras una condición sea verdadera. " +
              "El ciclo for es el más común: for (let i = 0; i < 5; i++) { ... } repite el bloque 5 veces. " +
              "Los ciclos son útiles para recorrer listas, contar o repetir tareas sin escribir el mismo código varias veces.",
          },
        ],
      },
      {
        titulo: "Funciones",
        lecciones: [
          {
            titulo: "¿Qué es una función?",
            tipo: "practica",
            preguntas: [
              {
                pregunta: "¿Qué es una función?",
                opciones: [
                  "Un bloque de código reutilizable que hace una tarea",
                  "Una variable numérica",
                  "Un archivo del sistema",
                  "Un tipo de ciclo",
                ],
                correcta: 0,
              },
              {
                pregunta: "En la función function saludo(nombre) { return 'Hola ' + nombre }, ¿qué devuelve saludo('Ana')?",
                opciones: ["Hola nombre", "Hola Ana", "Ana", "Error"],
                correcta: 1,
              },
              {
                pregunta: "¿Qué es un parámetro?",
                opciones: [
                  "Un dato que la función recibe para trabajar",
                  "Un error",
                  "Un bucle",
                  "Un archivo",
                ],
                correcta: 0,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "ingles",
    icono: "🗣️",
    nombre: "Inglés para el trabajo",
    descripcion: "Inglés práctico para atención al cliente, hotelería y servicio.",
    modulos: [
      {
        titulo: "Recepción y saludos",
        lecciones: [
          {
            titulo: "Saludos del hotel",
            tipo: "teoria",
            contenido:
              "En hotelería se usan frases cortas y amables: \"Welcome to our hotel\" (bienvenido a nuestro hotel), " +
              "\"How may I help you?\" (¿en qué puedo ayudarte?), \"Good morning / Good afternoon / Good evening\" " +
              "(buenos días / buenas tardes / buenas noches), \"Have a nice stay\" (que tengas una buena estadía).",
          },
          {
            titulo: "Check-in",
            tipo: "practica",
            preguntas: [
              {
                pregunta: "Un huésped llega al frente de recepción. ¿Qué dices primero?",
                opciones: [
                  "Good afternoon, welcome. How may I help you?",
                  "Give me your passport.",
                  "Wait.",
                  "What do you want?",
                ],
                correcta: 0,
              },
              {
                pregunta: "¿Cómo preguntas por el nombre del huésped al hacer check-in?",
                opciones: [
                  "May I have your name, please?",
                  "Who are you?",
                  "Name now.",
                  "Your name?",
                ],
                correcta: 0,
              },
              {
                pregunta: "¿Qué significa \"Do you have a reservation?\"",
                opciones: [
                  "¿Tienes una reserva?",
                  "¿Dónde está tu habitación?",
                  "¿Cuánto cuesta?",
                  "¿A qué hora llegas?",
                ],
                correcta: 0,
              },
            ],
          },
        ],
      },
      {
        titulo: "Servicio al huésped",
        lecciones: [
          {
            titulo: "Pedidos comunes",
            tipo: "practica",
            preguntas: [
              {
                pregunta: "Un huésped dice: \"Could I have more towels, please?\". ¿Qué pidió?",
                opciones: ["Más toallas", "Más comida", "Otra llave", "Un taxi"],
                correcta: 0,
              },
              {
                pregunta: "¿Cómo ofreces ayuda con la maleta?",
                opciones: [
                  "May I help you with your luggage?",
                  "Take your bag.",
                  "Luggage where?",
                  "Give me the bag.",
                ],
                correcta: 0,
              },
              {
                pregunta: "¿Qué significa \"The pool opens at 8 a.m.\"?",
                opciones: [
                  "La piscina abre a las 8 a.m.",
                  "La piscina cierra a las 8 p.m.",
                  "El desayuno es a las 8.",
                  "El gimnasio abre a las 8.",
                ],
                correcta: 0,
              },
            ],
          },
          {
            titulo: "Recomendaciones locales",
            tipo: "teoria",
            contenido:
              "Para recomendar lugares usa frases como: \"I recommend...\" (yo recomiendo...), " +
              "\"It's about ten minutes from here\" (está a unos diez minutos de aquí), " +
              "\"You can take a taxi or walk\" (puedes tomar un taxi o caminar), " +
              "\"It's very popular with tourists\" (es muy popular entre turistas).",
          },
        ],
      },
    ],
  },

  {
    id: "admin",
    icono: "📊",
    nombre: "Administración de empresas",
    descripcion: "Fundamentos de gestión, finanzas y trabajo en equipo.",
    modulos: [
      {
        titulo: "Fundamentos",
        lecciones: [
          {
            titulo: "¿Qué es administrar?",
            tipo: "teoria",
            contenido:
              "Administrar es planear, organizar, dirigir y controlar recursos (personas, dinero, tiempo) para alcanzar objetivos. " +
              "Estas cuatro funciones son la base de la administración moderna: la planeación define qué se quiere lograr, la organización " +
              "define quién hace qué, la dirección guía al equipo y el control verifica los resultados.",
          },
          {
            titulo: "Ingresos y gastos",
            tipo: "practica",
            preguntas: [
              {
                pregunta: "¿Qué es un ingreso?",
                opciones: [
                  "Dinero que entra al negocio",
                  "Dinero que sale del negocio",
                  "Un impuesto",
                  "Un préstamo",
                ],
                correcta: 0,
              },
              {
                pregunta: "Si ingresos = 1000 y gastos = 800, la utilidad es:",
                opciones: ["1800", "200", "800", "0"],
                correcta: 1,
              },
              {
                pregunta: "¿Qué es un gasto fijo?",
                opciones: [
                  "Un gasto que no cambia según las ventas (como la renta)",
                  "Un gasto que sube con las ventas",
                  "Una inversión",
                  "Un ingreso",
                ],
                correcta: 0,
              },
            ],
          },
        ],
      },
      {
        titulo: "Trabajo en equipo",
        lecciones: [
          {
            titulo: "Comunicación",
            tipo: "practica",
            preguntas: [
              {
                pregunta: "¿Qué es la comunicación asertiva?",
                opciones: [
                  "Expresar ideas con claridad y respeto, sin agredir",
                  "Hablar más fuerte que los demás",
                  "Evitar decir lo que piensas",
                  "Escribir correos largos",
                ],
                correcta: 0,
              },
              {
                pregunta: "En una reunión de equipo, ¿qué es lo primero que debe quedar claro?",
                opciones: [
                  "El objetivo de la reunión",
                  "Quién trajo el café",
                  "El horario de vacaciones",
                  "El nombre del jefe",
                ],
                correcta: 0,
              },
            ],
          },
        ],
      },
    ],
  },
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
const progresoRelleno = document.getElementById("progresoRelleno");
const progresoTexto = document.getElementById("progresoTexto");
const preguntaCard = document.getElementById("preguntaCard");
const preguntaTexto = document.getElementById("preguntaTexto");
const opciones = document.getElementById("opciones");
const feedback = document.getElementById("feedback");
const btnSiguiente = document.getElementById("btnSiguiente");
const leccionFinal = document.getElementById("leccionFinal");
const finalTitulo = document.getElementById("finalTitulo");
const finalTexto = document.getElementById("finalTexto");
const btnCerrar = document.getElementById("btnCerrar");

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

  rutaPanel.innerHTML = `
    <p class="section-sub">${ruta.descripcion}</p>
    ${ruta.modulos
      .map(
        (m, i) => `
      <div class="modulo">
        <h3 class="modulo-titulo"><span class="num">${i + 1}</span> ${m.titulo}</h3>
        <div class="lecciones">
          ${m.lecciones
            .map(
              (l) => `
            <button class="leccion ${completadas.includes(l.titulo) ? "completada" : ""}"
                    data-leccion="${m.lecciones.indexOf(l)}" data-modulo="${i}">
              ${l.titulo}
            </button>`
            )
            .join("")}
        </div>
      </div>`
      )
      .join("")}
  `;
}

/* Al hacer clic en una lección, abre su contenido en la zona de práctica. */
rutaPanel.addEventListener("click", (e) => {
  const btn = e.target.closest(".leccion");
  if (!btn) return;
  const moduloIndice = +btn.dataset.modulo;
  const leccionIndice = +btn.dataset.leccion;
  abrirLeccion(rutas.find((r) => r.id === rutaActual).modulos[moduloIndice].lecciones[leccionIndice]);
});

// ---------- Práctica de lecciones ----------
/* Lecciones de teoría: solo muestran el texto.
   Lecciones de práctica: preguntas de opción múltiple, una a una. */
function abrirLeccion(leccion) {
  leccionActual = leccion;
  practicaTitulo.textContent = leccion.titulo;
  practicaZona.hidden = false;
  practicaZona.scrollIntoView({ behavior: "smooth" });

  if (leccion.tipo === "teoria") {
    // Lección de teoría: muestra el texto y guarda como completada al cerrar.
    preguntaCard.innerHTML = `
      <p class="pregunta-texto">${leccion.titulo}</p>
      <p>${leccion.contenido}</p>
      <button class="btn btn-solid" id="btnTerminarTeoria">Terminé de leer ✓</button>
    `;
    document.getElementById("btnTerminarTeoria").addEventListener("click", () => {
      guardarLeccion(rutaActual, leccion.titulo);
      cerrarPractica();
      renderPanel(); // refresca la marca de completada
    });
  } else {
    // Lección de práctica: arranca en la primera pregunta.
    preguntaIndice = 0;
    respuestaElegida = null;
    leccionFinal.hidden = true;
    preguntaCard.hidden = false;
    renderPregunta();
  }
}

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

/* Botón "Volver a la ruta": cierra la zona de práctica. */
btnCerrar.addEventListener("click", () => {
  cerrarPractica();
  // Devuelve la vista al panel de rutas
  document.getElementById("rutas").scrollIntoView({ behavior: "smooth" });
});

function cerrarPractica() {
  practicaZona.hidden = true;
}

// ---------- Inicialización ----------
renderTabs();
renderPanel();
