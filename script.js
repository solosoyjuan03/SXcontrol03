/* ============================================
   SXcontrol — script.js (compartido por todas las páginas)
   --------------------------------------------
   QUÉ HAY AQUÍ:
   1. Datos (noticias, proyectos, servicios)  -> EDITA AQUÍ para agregar contenido
   2. Funciones que pintan esos datos en las páginas
   3. Menú móvil, filtros y contadores animados

   CÓMO AGREGAR CONTENIDO:
   - Noticia nueva: agrega un objeto al array "noticias" (más abajo).
   - Proyecto nuevo: agrega un objeto al array "proyectos".
   - Servicio nuevo: agrega un objeto al array "servicios".
   Cada función comprueba si su sección existe en la página actual,
   así que este mismo archivo funciona en las 4 páginas sin cambios.
   ============================================ */

// ---------- Datos: Noticias y novedades (Comunidad) ----------
/* Aún no hay noticias reales: el proyecto está en 0.
   Cuando quieras publicar la primera, copia este formato:

   {
     tag: "Evento",        // etiqueta corta: Evento / Anuncio / Hito / Novedad
     titulo: "Título de la noticia",
     texto: "Descripción breve de la noticia.",
     fecha: "12 Oct 2026", // fecha en formato "DD Mes AAAA"
   },

   Mientras el array esté vacío, la página de comunidad muestra
   el mensaje "Aún no hay noticias publicadas" que está escrito
   directamente en comunidad/comunidad.html.
*/
const noticias = [
  // Agrega aquí tus noticias reales cuando existan.
];

// ---------- Datos: Proyectos ----------
/* Aún no hay proyectos publicados en GitHub (el proyecto está en 0).
   Cuando subas el primero a GitHub, agrega un objeto así:

   {
     cat: "web",       // categoría: "web", "cli" o "librerias"
     titulo: "Nombre del proyecto",
     texto: "Descripción breve del proyecto.",
     stars: 123,       // número de estrellas reales en GitHub
   },

   OJO: las categorías deben coincidir con los botones de filtro de
   proyectos/Proyectos.html (data-filter="web", "cli", "librerias").
   Si creas una categoría nueva, agrega también su botón de filtro.
   Si el array está vacío, la página muestra el mensaje de
   "Aún no hay proyectos publicados" escrito en proyectos/Proyectos.html.

   IMPORTANTE — UBICACIÓN DE LOS PROYECTOS:
   Todos los proyectos del sitio viven DENTRO de la carpeta "proyectos/",
   cada uno en su propia subcarpeta:

     proyectos/SXamigo/    → guía de migración y denuncias
     proyectos/SXtech/     → rutas técnicas (Python, inglés, administración)
     proyectos/SXlibros/   → libros web (Educación Inclusiva)
     proyectos/SXnutria/   → calculadora nutricional

   Por eso las "url" de abajo usan "proyectos/Nombre/index.html"
   (rutas relativas desde proyectos/Proyectos.html). Si mueves o renombras
   una carpeta de proyecto, actualiza aquí su "url" y los enlaces internos
   del proyecto ("../../" hacia la raíz del sitio).
*/
const proyectos = [
  // Proyectos internos del sitio (cada uno tiene su carpeta y página propia).
  // "url" apunta a la página dentro del propio sitio, no a GitHub
  // (los repositorios todavía no existen).
  {
    cat: "web",
    titulo: "SXamigo",
    texto: "Guía de información sobre migración y denuncias: temas de importancia ciudadana.",
    url: "SXamigo/index.html",
  },
  {
    cat: "librerias",
    titulo: "SXtech",
    texto: "Rutas técnicas tipo Duolingo: programación, inglés para el trabajo y administración de empresas.",
    url: "SXtech/index.html",
  },
  {
    cat: "librerias",
    titulo: "SXlibros",
    texto: "Libros tipo página web sobre diferentes temas. El primero: Educación Inclusiva.",
    url: "SXlibros/index.html",
  },
  {
    cat: "web",
    titulo: "Nutria",
    texto: "Calculadora nutricional: calorías, macronutrientes, IMC y consejos según tus condiciones de salud y tipo de alimentación.",
    url: "SXnutria/index.html",
  },
];

// ---------- Datos: Servicios ----------
/* Aún no hay servicios activos.
   Cuando ofrezcas uno real, agrega un objeto así:

   { icono: "🎓", titulo: "Mentorías", texto: "Descripción del servicio." },

   "icono" es un emoji que se muestra grande en la tarjeta.
   Si el array está vacío, la página muestra el mensaje de
   "Aún no hay servicios activos" escrito en servicios/servicios.html.
*/
const servicios = [
  // Agrega aquí tus servicios reales cuando los ofrezcas.
];

// ---------- Render de noticias ----------
/* Pinta las noticias dentro del elemento con id="newsGrid"
   (página comunidad/comunidad.html). Si el elemento no existe en la
   página actual, no hace nada. */
function renderNoticias() {
  const grid = document.getElementById("newsGrid");
  if (!grid) return;
  grid.innerHTML = noticias.map((n) => `
    <article class="card">
      <span class="tag">${n.tag}</span>
      <h3>${n.titulo}</h3>
      <p>${n.texto}</p>
      <div class="meta"><span>📅</span> ${n.fecha}</div>
      <a href="#" class="card-link">Leer más →</a>
    </article>
  `).join("");
  // TODO: cuando cada noticia tenga su propia URL, cambia el href="#" de arriba.
}

// ---------- Render de proyectos ----------
/* Pinta los proyectos dentro del elemento con id="projectsGrid"
   (página proyectos/Proyectos.html). Acepta un filtro: "todos",
   "web", "cli" o "librerias". */
function renderProyectos(filtro = "todos") {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  const lista = filtro === "todos" ? proyectos : proyectos.filter((p) => p.cat === filtro);
  grid.innerHTML = lista.map((p) => `
    <article class="card">
      <span class="tag">${p.cat}</span>
      <h3>${p.titulo}</h3>
      <p>${p.texto}</p>
      <a href="${p.url}" class="card-link">Abrir proyecto →</a>
    </article>
  `).join("");
  // TODO: cuando cada proyecto tenga su repositorio, agrega una propiedad
  // "url" al objeto y usa ${p.url} en el href de arriba.
  // TODO: si algún proyecto no es MIT, agrega una propiedad "licencia" y úsala aquí.
}

// ---------- Filtros de proyectos ----------
/* Activa los botones de filtro de proyectos/Proyectos.html.
   Al hacer clic en "Web", "CLI" o "Librerías", vuelve a pintar
   solo los proyectos de esa categoría. */
function initFiltros() {
  const filtros = document.getElementById("projectFilters");
  if (!filtros) return;
  filtros.addEventListener("click", (e) => {
    if (!e.target.classList.contains("filter")) return;
    document.querySelectorAll(".filter").forEach((f) => f.classList.remove("active"));
    e.target.classList.add("active");
    renderProyectos(e.target.dataset.filter);
  });
}

// ---------- Render de servicios ----------
/* Pinta los servicios dentro del elemento con id="servicesGrid"
   (página servicios/servicios.html). */
function renderServicios() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;
  grid.innerHTML = servicios.map((s) => `
    <article class="card">
      <div class="card-icon">${s.icono}</div>
      <h3>${s.titulo}</h3>
      <p>${s.texto}</p>
    </article>
  `).join("");
}

// ---------- Menú móvil (todas las páginas) ----------
/* Abre y cierra el menú en pantallas pequeñas. El botón ☰
   alterna la clase "open" en la navegación (ver styles.css).
   Al hacer clic en un enlace, el menú se cierra solo. */
function initMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (!menuToggle || !navLinks) return;
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

// ---------- Contadores animados (página de inicio) ----------
/* NOTA: esta función ya no se usa porque quitamos las estadísticas
   (120 contribuidores, 35 proyectos, 900 estrellas) que eran datos
   inventados. La dejamos aquí por si más adelante quieres mostrar
   estadísticas REALES. Para usarla de nuevo, agrega en index.html:

   <div class="stats">
     <div class="stat"><strong data-count="NUMERO_REAL">0</strong><span>Etiqueta</span></div>
   </div>

   y reemplaza NUMERO_REAL por el dato real que quieras animar. */
function animarContadores() {
  document.querySelectorAll("[data-count]").forEach((el) => {
    const objetivo = +el.dataset.count;
    let actual = 0;
    const paso = Math.ceil(objetivo / 60);
    const timer = setInterval(() => {
      actual += paso;
      if (actual >= objetivo) { actual = objetivo; clearInterval(timer); }
      el.textContent = actual + "+";
    }, 25);
  });
}

// ---------- Inicialización automática ----------
/* Cuando la página termina de cargar, se ejecuta solo lo que la
   página actual necesita. No hay que tocar nada aquí al agregar
   contenido: solo llena los arrays de arriba. */
document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  if (document.getElementById("newsGrid")) renderNoticias();
  if (document.getElementById("projectsGrid")) { renderProyectos(); initFiltros(); }
  if (document.getElementById("servicesGrid")) renderServicios();
  if (document.querySelector("[data-count]")) animarContadores();
});
