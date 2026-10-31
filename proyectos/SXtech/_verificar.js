/* Verificación: carga completa de las 3 rutas de SXtech */
/* (cada lección se divide en "pasos": cada paso se muestra en el navegador) */
const rutasCargadas = [rutaPython, rutaIngles, rutaAdmin];

for (const ruta of rutasCargadas) {
  let lecciones = 0, pasos = 0, minPasos = 99;
  ruta.modulos.forEach((m) =>
    m.lecciones.forEach((l) => {
      lecciones++;
      const n = l.pasos ? l.pasos.length : 0;
      pasos += n;
      if (n < minPasos) minPasos = n;
    })
  );
  console.log(
    `${ruta.nombre}: ${ruta.modulos.length} módulos, ${lecciones} lecciones, ${pasos} pasos (mínimo por lección: ${minPasos})`
  );
}
console.log("OK: 3 rutas cargadas sin errores.");
