/* Verifica que todos los href/src de un HTML existan en disco. */
const fs = require("fs");
const path = require("path");

function verificar(htmlPath) {
  const dir = path.dirname(htmlPath);
  const html = fs.readFileSync(htmlPath, "utf8");
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((u) => !u.startsWith("#") && !u.startsWith("http") && !u.startsWith("mailto"));
  const rotos = [];
  for (const r of refs) {
    if (!fs.existsSync(path.join(dir, r))) rotos.push(r);
  }
  console.log(`${htmlPath}: ${rotos.length ? "ROTOS -> " + rotos.join(", ") : "OK (" + refs.length + " enlaces)"}`);
}

[
  "proyectos/SXtech/index.html",
  "proyectos/SXamigo/index.html",
  "proyectos/SXlibros/index.html",
  "proyectos/SXnutria/index.html",
  "proyectos/SXlibros/educacion-inclusiva/pagina-1.html",
  "proyectos/SXlibros/educacion-inclusiva/pagina-2.html",
  "proyectos/SXlibros/educacion-inclusiva/pagina-3.html",
  "index.html",
  "proyectos/Proyectos.html",
  "servicios/servicios.html",
  "comunidad/comunidad.html",
].forEach(verificar);
