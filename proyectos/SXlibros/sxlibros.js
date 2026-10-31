/* ============================================
   SXlibros — sxlibros.js
   Catálogo de libros. Cada tarjeta enlaza a la primera página del libro.

   PARA AGREGAR UN LIBRO NUEVO:
   Agrega un objeto al array "libros":
   {
     icono: "📚",           // emoji de la portada
     titulo: "Nombre",
     descripcion: "Breve descripción.",
     paginas: 3,            // cuántas páginas tiene
     url: "mi-libro/pagina-1.html",  // primera página
   }
   ============================================ */

// ---------- Datos: catálogo ----------
const libros = [
  {
    icono: "♿",
    titulo: "Educación Inclusiva",
    descripcion:
      "Qué es la educación inclusiva, cómo identificar barreras y qué prácticas la hacen posible en el aula.",
    paginas: 3,
    url: "educacion-inclusiva/pagina-1.html",
  },
  // Agrega aquí los próximos libros.
];

// ---------- Render del catálogo ----------
const librosGrid = document.getElementById("librosGrid");

if (librosGrid) {
  librosGrid.innerHTML = libros
    .map(
      (b) => `
    <a href="${b.url}" class="card card-link-card">
      <div class="portada">${b.icono}</div>
      <h3>${b.titulo}</h3>
      <p>${b.descripcion}</p>
      <span class="card-link">${b.paginas} ${b.paginas === 1 ? "página" : "páginas"} — Leer →</span>
    </a>`
    )
    .join("");
}
