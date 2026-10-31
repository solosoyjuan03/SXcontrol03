/* ============================================
   SXamigo — sxamigo.js
   JS propio del proyecto SXamigo.
   El menú móvil ya lo controla ../script.js; este archivo existe
   para que la página funcione si se abre sola (sin el resto del sitio).
   ============================================ */

// Menú móvil: agrega la clase "open" al menú cuando se pulsa ☰
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}
