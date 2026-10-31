/* ============================================
   Nutria — nutria.js
   Calculadora nutricional. Todo con JS puro, sin librerías.

   CÓMO FUNCIONA:
   1. El usuario llena sus datos (edad, sexo, peso, altura).
   2. Elige su nivel de actividad física (4 opciones).
   3. Marca las condiciones de salud que tiene (checkboxes).
   4. Elige su tipo de alimentación (5 opciones).
   5. Al pulsar "Calcular", Nutria estima:
      - Calorías diarias (fórmula Mifflin-St Jeor + factor de actividad)
      - Macronutrientes (proteína, grasas, carbos)
      - IMC y su categoría
      - Consejos según sus condiciones y alimentación
      - Alertas educativas según sus condiciones

   CÓMO AGREGAR UNA CONDICIÓN NUEVA:
   Agrega un objeto al array "condicionesSalud" (abajo). Cada condición
   tiene: id, nombre, consejos (lista) y alerta (texto de riesgo).

   CÓMO AGREGAR UN TIPO DE ALIMENTACIÓN NUEVO:
   Agrega un objeto al objeto "tiposAlimentacion" (abajo).
   ============================================ */

// ---------- Datos: condiciones de salud ----------
/* Cada condición define consejos personalizados y una alerta de riesgo.
   "alerta" puede ser null si no requiere advertencia especial. */
const condicionesSalud = [
  {
    id: "diabetes",
    nombre: "Diabetes",
    consejos: [
      "Prioriza carbohidratos de absorción lenta: avena, legumbres, pan integral.",
      "Evita azúcares simples y bebidas azucaradas; revisa las etiquetas.",
      "Come en horarios regulares para evitar picos de glucosa.",
    ],
    alerta: "Con diabetes, controla tus carbohidratos y consulta tu plan de alimentación con tu médico: los cálculos generales pueden no ajustarse a tu tratamiento.",
  },
  {
    id: "hipertension",
    nombre: "Hipertensión (presión alta)",
    consejos: [
      "Reduce la sal: usa hierbas, limón y especias para sazonar.",
      "Evita ultraprocesados, embutidos y caldos en cubo (sodio oculto).",
      "Aumenta potasio con plátano, espinaca, aguacate y frijoles (si no tienes restricción renal).",
    ],
    alerta: "Con hipertensión, el objetivo general es menos de 5 g de sal al día; tu médico puede darte un límite más estricto.",
  },
  {
    id: "colesterol",
    nombre: "Colesterol alto",
    consejos: [
      "Prefiere grasas buenas: aceite de oliva, aguacate, frutos secos.",
      "Aumenta fibra soluble: avena, manzana, legumbres.",
      "Reduce frituras, embutidos y grasas saturadas.",
    ],
    alerta: null,
  },
  {
    id: "celiaquia",
    nombre: "Enfermedad celíaca (gluten)",
    consejos: [
      "Evita trigo, cebada, centeno y sus derivados; revisa siempre la etiqueta 'sin gluten'.",
      "Cuida la contaminación cruzada: usa utensilios y superficies separados.",
      "Aprovecha arroz, maíz, quinoa y papas como bases seguras.",
    ],
    alerta: "Con celiaquía, cualquier cantidad de gluten puede causar daño; verifica certificados de 'sin gluten' en los productos.",
  },
  {
    id: "lactosa",
    nombre: "Intolerancia a la lactosa",
    consejos: [
      "Prueba lácteos sin lactosa o bebidas vegetales enriquecidas con calcio.",
      "Muchos quesos maduros (parmesano, manchego) tienen poca lactosa; observa tu tolerancia.",
      "Cubre el calcio con brócoli, sardinas, almendras y productos fortificados.",
    ],
    alerta: null,
  },
  {
    id: "anemia",
    nombre: "Anemia",
    consejos: [
      "Incluye hierro: carnes magras, lentejas, espinaca, garbanzos.",
      "Acompaña el hierro vegetal con vitamina C (limón, naranja, pimiento) para absorberlo mejor.",
      "Evita café y té justo con las comidas: reducen la absorción de hierro.",
    ],
    alerta: "Si tienes anemia diagnosticada, la alimentación apoya pero no reemplaza el tratamiento médico (suplementos, estudios de causa).",
  },
  {
    id: "obesidad",
    nombre: "Sobrepeso u obesidad",
    consejos: [
      "Enfócate en cambios sostenibles, no en dietas extremas.",
      "Aumenta vegetales y proteína magra: generan saciedad con menos calorías.",
      "Cuida las porciones y come despacio: el cerebro tarda ~20 min en registrar saciedad.",
    ],
    alerta: null,
  },
  {
    id: "renal",
    nombre: "Enfermedad renal",
    consejos: [
      "El control de potasio, fósforo y sodio es individual: sigue las indicaciones de tu nefrólogo.",
      "Cuida la cantidad de proteína: ni demasiada ni muy poca; tu equipo médico debe definirla.",
    ],
    alerta: "Con enfermedad renal NO apliques consejos generales de proteína o potasio sin consultar a tu nefrólogo: tu caso requiere plan individualizado.",
  },
  {
    id: "gastritis",
    nombre: "Gastritis o reflujo",
    consejos: [
      "Come porciones pequeñas y frecuentes; evita estar con el estómago vacío por mucho tiempo.",
      "Reduce café, alcohol, picantes, frituras y cítricos en exceso.",
      "No te recuestes inmediatamente después de comer.",
    ],
    alerta: null,
  },
];

// ---------- Datos: tipos de alimentación ----------
/* Cada tipo agrega consejos propios de ese patrón alimenticio. */
const tiposAlimentacion = {
  omnivora: {
    nombre: "Omnívora",
    consejos: [
      "Llena la mitad del plato con vegetales y frutas de colores variados.",
      "Prefiere proteínas magras (pollo, pescado) y pescado 2 veces por semana (omega-3).",
      "Limita ultraprocesados y bebidas azucaradas a ocasiones ocasionales.",
    ],
  },
  vegetariana: {
    nombre: "Vegetariana",
    consejos: [
      "Combina legumbres + cereales (frijol con arroz) para proteína completa.",
      "Cubre B12 con huevos, lácteos o suplementos (consultalo con tu médico).",
      "Incluye hierro vegetal con vitamina C para absorberlo mejor.",
    ],
  },
  vegana: {
    nombre: "Vegana",
    consejos: [
      "La vitamina B12 REQUIERE suplemento o alimentos fortificados: no se encuentra en alimentos vegetales.",
      "Asegura calcio con bebidas fortificadas, tofu, almendras y brócoli.",
      "Incluye fuentes de omega-3 vegetal: chía, linaza, nueces.",
    ],
  },
  "sin-gluten": {
    nombre: "Sin gluten",
    consejos: [
      "Aprovecha arroz, maíz, quinoa, papas y legumbres como bases de tus comidas.",
      "Muchos productos 'sin gluten' son ultraprocesados y pobres en fibra: compensa con vegetales.",
      "Revisa siempre etiquetas: el gluten se esconde en salsas, embutidos y dulces.",
    ],
  },
  "sin-lactosa": {
    nombre: "Sin lactosa",
    consejos: [
      "Cubre el calcio con bebidas fortificadas, tofu, sardinas y vegetales de hoja verde.",
      "Lee etiquetas: la lactosa aparece en pan, embutidos y productos preparados.",
    ],
  },
};

// ---------- Estado de la app ----------
let factorActividad = null;    // factor seleccionado (1.2, 1.375, 1.55, 1.725)
let alimentacion = null;       // clave de tiposAlimentacion seleccionada

// ---------- Referencias del DOM ----------
const btnCalcular = document.getElementById("btnCalcular");
const resultados = document.getElementById("resultados");

// ---------- Render de checkboxes de condiciones ----------
const condicionesDiv = document.getElementById("condiciones");
condicionesDiv.innerHTML = condicionesSalud
  .map(
    (c) => `
  <label class="condicion-item">
    <input type="checkbox" value="${c.id}">
    <span>${c.nombre}</span>
  </label>`
  )
  .join("");

// ---------- Selección de actividad ----------
document.querySelectorAll(".actividad-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".actividad-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    factorActividad = parseFloat(btn.dataset.factor);
  });
});

// ---------- Selección de alimentación ----------
document.querySelectorAll(".alimentacion-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".alimentacion-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    alimentacion = btn.dataset.alim;
  });
});

// ---------- Cálculo principal ----------
/* Fórmula Mifflin-St Jeor:
   Hombres: TMB = 10*peso + 6.25*altura - 5*edad + 5
   Mujeres: TMB = 10*peso + 6.25*altura - 5*edad - 161
   TMB = calorías en reposo. Se multiplica por el factor de actividad
   para obtener las calorías totales diarias. */
btnCalcular.addEventListener("click", () => {
  const edad = +document.getElementById("edad").value;
  const sexo = document.getElementById("sexo").value;
  const peso = +document.getElementById("peso").value;
  const altura = +document.getElementById("altura").value;

  // Validación básica de datos
  if (!edad || !peso || !altura || !factorActividad || !alimentacion) {
    alert("Completa todos los campos: datos, actividad y tipo de alimentación.");
    return;
  }

  // 1) Metabolismo basal (Mifflin-St Jeor)
  let tmb = 10 * peso + 6.25 * altura - 5 * edad;
  tmb += sexo === "hombre" ? 5 : -161;
  const calorias = Math.round(tmb * factorActividad);

  // 2) Macronutrientes (reparto estándar: 20% proteína, 30% grasa, 50% carbos)
  const proteina = Math.round((calorias * 0.20) / 4);   // 4 kcal por gramo
  const grasas = Math.round((calorias * 0.30) / 9);     // 9 kcal por gramo
  const carbos = Math.round((calorias * 0.50) / 4);     // 4 kcal por gramo

  // 3) IMC = peso / altura² (altura en metros)
  const imc = peso / Math.pow(altura / 100, 2);
  let categoria;
  if (imc < 18.5) categoria = "Bajo peso";
  else if (imc < 25) categoria = "Peso normal";
  else if (imc < 30) categoria = "Sobrepeso";
  else categoria = "Obesidad";

  // 4) Condiciones marcadas por el usuario
  const marcadas = [...document.querySelectorAll("#condiciones input:checked")].map((i) => i.value);
  const condicionesUsuario = condicionesSalud.filter((c) => marcadas.includes(c.id));

  // 5) Consejos: de la alimentación + de cada condición
  const consejos = [...tiposAlimentacion[alimentacion].consejos];
  condicionesUsuario.forEach((c) => consejos.push(...c.consejos));

  // 6) Alertas: de cada condición que tenga una
  const alertas = condicionesUsuario.filter((c) => c.alerta).map((c) => c.alerta);

  // 7) Pintar resultados
  document.getElementById("resCalorias").textContent = calorias;
  document.getElementById("resProteina").textContent = proteina + "g";
  document.getElementById("resGrasas").textContent = grasas + "g";
  document.getElementById("resCarbos").textContent = carbos + "g";
  document.getElementById("resImc").textContent = imc.toFixed(1);
  document.getElementById("resImcCategoria").textContent = categoria;
  document.getElementById("resConsejos").innerHTML = consejos
    .map((c) => `<li>${c}</li>`)
    .join("");
  document.getElementById("resAlertas").innerHTML = alertas
    .map((a) => `<li>${a}</li>`)
    .join("");
  document.getElementById("alertasCard").hidden = alertas.length === 0;

  // Mostrar la sección de resultados y llevar la vista hasta ella
  resultados.hidden = false;
  resultados.scrollIntoView({ behavior: "smooth" });
});

// ---------- Menú móvil (por si la página se abre sola) ----------
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}
