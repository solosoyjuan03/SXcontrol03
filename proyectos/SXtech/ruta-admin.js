/* Contenido de la ruta "Gestión" — capacidades técnicas de gestión.
   Mismo formato que ruta-python.js: lecciones largas con pasos mezclados:
   - { texto: "..." } → leer
   - { piensa: "...", opciones: [...], correcta: n } → pensar
   - { completa: {...} } → completar la plantilla/formulario
   - { construye: {...} } → construir el flujo ordenando sus pasos
   - { escribe: {...} } → redactar/escribir la respuesta final
   Cada paso nuevo conecta con lo ya visto (repaso continuo). */

const rutaGestion = {
  id: "admin",
  icono: "📊",
  nombre: "Gestión",
  descripcion: "Capacidades técnicas de gestión: planeación, finanzas, indicadores, procesos y negociación.",
  modulos: [
    {
      titulo: "Planeación estratégica",
      lecciones: [
        {
          titulo: "De la misión a las metas SMART",
          tipo: "larga",
          pasos: [
            { texto: "La primera capacidad técnica de un gestor es PLANEAR. Todo plan comienza con la misión (para qué existe la empresa) y la visión (qué quiere ser en el futuro). De ahí bajan los objetivos estratégicos: 3 a 5 metas grandes a 1-3 años que orientan todas las decisiones." },
            { texto: "Un objetivo vago como 'queremos vender más' no sirve: no se puede medir ni saber cuándo se cumplió. La técnica profesional son las metas SMART: Specific (específica), Measurable (medible), Achievable (alcanzable), Relevant (relevante) y Time-bound (con plazo). Ejemplo: 'Aumentar las ventas de la línea A un 15% en 6 meses'." },
            { piensa: "¿Cuál de estas metas cumple SMART?", opciones: ["Ser los mejores del mercado", "Vender más el próximo año", "Incrementar la venta de la línea A un 15% en 6 meses", "Crecer rápido y bien"], correcta: 2 },
            { texto: "Para ejecutar la meta se usa un plan de acción: cada tarea con responsable (una sola persona, no 'el equipo'), fecha límite y recurso necesario. Herramienta común: el diagrama de Gantt, que pone las tareas en una línea de tiempo para ver qué va antes de qué y detectar cuellos de botella." },
            {
              completa: {
                instrucciones: "Completa la meta SMART de apertura de sucursal.",
                plantilla: ["Abrir la sucursal norte ", " mayo 30, con ", " de 3 personas y presupuesto de $50,000."],
                huecos: [1, 2],
                piezas: ["antes del", "un equipo", "dinero extra", "algún día"],
                correctas: [0, 1],
              }
            },
            { texto: "Un gestor también SWOTea: el análisis FODA (SWOT en inglés) cruza lo interno — Fortalezas y Oportunidades... cuidado: F = Fortalezas internas, O = Oportunidades externas, D = Debilidades internas, A = Amenazas externas. La estrategia correcta ataca debilidades usando fortalezas mientras aprovecha oportunidades." },
            { piensa: "'La competencia abrió una tienda al lado' es:", opciones: ["Fortaleza", "Oportunidad", "Debilidad", "Amenaza"], correcta: 3 },
            {
              construye: {
                instrucciones: "Ordena el ciclo de planeación de un proyecto trimestral.",
                lineas: [
                  "Definir la meta SMART del trimestre",
                  "Listar las tareas necesarias",
                  "Asignar responsables y fechas",
                  "Revisar avance cada semana",
                ],
              }
            },
            {
              escribe: {
                instrucciones: "Escribe la meta SMART completa para un restaurante: subir la calificación de Google de 3.8 a 4.5 estrellas en 90 días.",
                solucion: ["Subir la calificación de Google de 3.8 a 4.5 estrellas en 90 días"],
                pista: "Debe incluir qué (calificación), cuánto (3.8 a 4.5) y cuándo (90 días).",
              }
            },
            { texto: "Repaso: misión y visión orientan; las metas SMART (específicas, medibles, alcanzables, relevantes, con plazo) se traducen en planes de acción con responsables y fechas; el FODA da el diagnóstico. La planeación dice QUÉ se quiere lograr. Lo siguiente: organizar los recursos para lograrlo." },
          ],
        },
      ],
    },
    {
      titulo: "Organización y procesos",
      lecciones: [
        {
          titulo: "Estructura, organigrama y procesos",
          tipo: "larga",
          pasos: [
            { texto: "Planeaste la meta; ahora toca ORGANIZAR: decidir quién hace qué con qué autoridad. El organigrama dibuja esa estructura: cada caja es un puesto, cada línea una relación de reporte. Lo esencial es la unidad de mando: cada persona reporta a UN solo jefe directo para evitar órdenes contradictorias." },
            { piensa: "Un empleado recibe órdenes opuestas de dos jefes distintos. ¿Qué principio se violó?", opciones: ["Departamentalización", "Unidad de mando", "Cadena de valor", "Presupuesto base cero"], correcta: 1 },
            { texto: "La herramienta técnica de la organización es la descripción de puesto: nombre, objetivo del puesto, responsabilidades (verbo + qué + para qué), a quién reporta y a quién supervisa. Sin ella, las personas inventan su trabajo y nacen los 'huecos de responsabilidad' donde nadie responde." },
            {
              completa: {
                instrucciones: "Completa la responsabilidad de un supervisor de piso (formato verbo + qué + para qué).",
                plantilla: ["", " el inventario diario ", " detectar faltantes antes del cierre."],
                huecos: [1, 2],
                piezas: ["Verificar", "para", "porque sí", "Comprar"],
                correctas: [0, 1],
              }
            },
            { texto: "Los procesos son la segunda pata: una secuencia de pasos que convierte una entrada en una salida. Un proceso bien diseñado tiene dueño (proces owner), pasos definidos en orden, y puntos de control. Si un proceso se hace distinto cada vez que lo toca una persona distinta, no es un proceso: es improvisación." },
            { texto: "Técnica clave: el diagrama de flujo. Rectángulo = paso/acción, rombo = decisión (sí/no), flecha = orden. Mapear el proceso real (no el ideal) revela pasos duplicados, esperas y retrabajos. Ahí es donde el gestor recorta costos sin despedir a nadie: eliminando desperdicio." },
            {
              completa: {
                instrucciones: "Completa el flujo de atención de una solicitud de cliente.",
                plantilla: ["Recibir solicitud → ", " completa? → NO: devolver al cliente / SÍ: procesar → ", " al cliente"],
                huecos: [1, 2],
                piezas: ["¿documentación", "confirmar entrega", "firmar contrato", "ignorar"],
                correctas: [0, 1],
              }
            },
            {
              construye: {
                instrucciones: "Ordena el proceso de compra de un negocio pequeño.",
                lineas: [
                  "Detectar la necesidad de compra",
                  "Solicitar cotizaciones (mínimo 2)",
                  "Comparar precio, calidad y plazo",
                  "Emitir la orden de compra",
                  "Recibir y verificar la mercancía",
                ],
              }
            },
            {
              escribe: {
                instrucciones: "Redacta la regla de unidad de mando para tu equipo en una sola frase.",
                solucion: ["Cada colaborador reporta únicamente a su jefe directo"],
                pista: "Debe incluir 'cada colaborador', 'reporta' y 'un solo jefe directo'.",
              }
            },
            { texto: "Repaso: la organización define estructura (organigrama, unidad de mando) y roles (descripciones de puesto con verbo + qué + para qué); los procesos convierten entradas en salidas con dueño y puntos de control, y se documentan con diagramas de flujo. Organizaste el QUÉ y el QUIÉN. Ahora viene el idioma de los negocios: los números." },
          ],
        },
      ],
    },
    {
      titulo: "Finanzas básicas",
      lecciones: [
        {
          titulo: "Leer números: ingresos, costos, utilidad y punto de equilibrio",
          tipo: "larga",
          pasos: [
            { texto: "Un gestor que no lee números gestiona a ciegas. La cadena básica: Ingresos (dinero que entra por vender) − Costos directos (lo que cuesta producir lo vendido) = Utilidad bruta. De la utilidad bruta se restan los gastos operativos (renta, sueldos de gesti�ns, servicios) y aparece la utilidad neta: la que de verdad queda." },
            { piensa: "Ingresos 10,000; costos directos 4,000; gastos operativos 3,500. ¿Utilidad neta?", opciones: ["6,000", "2,500", "3,500", "500"], correcta: 1 },
            { texto: "Distingue costos fijos (no cambian con las ventas: renta, salarios base) de costos variables (suben y bajan con las ventas: materia prima, comisiones). Esta división alimenta la herramienta más útil del gestor: el punto de equilibrio, el nivel de ventas donde no se gana ni se pierde." },
            { texto: "Fórmula del punto de equilibrio en unidades: Costos fijos ÷ (Precio − Costo variable unitario). El denominador se llama margen de contribución: lo que cada venta 'aporta' para cubrir los fijos. Si los fijos son 30,000, el precio 100 y el costo variable 60, el margen es 40 y necesitas vender 750 unidades para no perder." },
            {
              completa: {
                instrucciones: "Completa el cálculo del punto de equilibrio.",
                plantilla: ["Costos fijos 40,000; precio 200; costo variable 120. Margen de contribución = ", " → Punto de equilibrio = ", " unidades."],
                huecos: [1, 2],
                piezas: ["80", "500", "120", "200"],
                correctas: [0, 1],
              }
            },
            { texto: "El otro documento vital es el flujo de efectivo: cuánto dinero entra y sale SEMANA A SEMANA. Una empresa puede ser rentable en papel y morir por falta de caja si los clientes pagan a 90 días y la renta vence hoy. Regla práctica: proyecta siempre el efectivo mínimo de los próximos 90 días." },
            { piensa: "El negocio vendió mucho este mes pero cobrará todo en 90 días y hoy vence la renta. ¿Qué problema tiene?", opciones: ["Problema de rentabilidad", "Problema de liquidez (flujo de efectivo)", "Problema de planeación", "No tiene problema"], correcta: 1 },
            {
              construye: {
                instrucciones: "Ordena la estructura del estado de resultados.",
                lineas: [
                  "Ingresos por ventas",
                  "− Costos directos",
                  "= Utilidad bruta",
                  "− Gastos operativos",
                  "= Utilidad neta",
                ],
              }
            },
            {
              escribe: {
                instrucciones: "Calcula y escribe el punto de equilibrio: fijos 20,000, precio 50, costo variable 30.",
                solucion: ["Punto de equilibrio: 1,000 unidades"],
                pista: "Margen = 50 − 30 = 20; fijos 20,000 ÷ 20 = 1,000.",
              }
            },
            { texto: "Repaso: utilidad bruta = ingresos − costos directos; utilidad neta resta además los gastos operativos; fijos vs variables alimentan el punto de equilibrio (fijos ÷ margen de contribución); y el flujo de efectivo protege la liquidez. Ya lees los números. Siguiente capacidad: dirigir personas con base en datos, no en corazonadas." },
          ],
        },
      ],
    },
    {
      titulo: "Dirección e indicadores",
      lecciones: [
        {
          titulo: "KPIs, delegación y retroalimentación",
          tipo: "larga",
          pasos: [
            { texto: "Dirigir es guiar el equipo hacia la meta planeada, y se hace con DATOS. Un KPI (indicador clave de desempeño) es un número que resume si vas bien o mal. Regla de oro: pocos y accionables — si un indicador no se puede mover con decisiones de tu equipo, es decoración, no KPI." },
            { piensa: "¿Cuál es un buen KPI para un restaurante?", opciones: ["El clima de hoy", "Clientes atendidos por hora por mesero", "El número de sillas", "La opinión del dueño"], correcta: 1 },
            { texto: "Cada indicador necesita meta y frecuencia: 'Ventas semanales: objetivo 50,000, se revisa cada lunes'. El ciclo de dirección es PDCA: Plan (planear), Do (hacer), Check (verificar con el KPI), Act (ajustar). Lo conectas con la planeación de la primera lección: la meta SMART define el Plan, y el Check cierra el círculo con datos." },
            {
              completa: {
                instrucciones: "Completa el ciclo de seguimiento semanal.",
                plantilla: ["Lunes: revisar ", " vs meta. Si está bajo: ", " el plan (paso Act del ciclo PDCA)."],
                huecos: [1, 2],
                piezas: ["el KPI", "ajustar", "celebrar", "olvidar"],
                correctas: [0, 1],
              }
            },
            { texto: "Delegar es la capacidad que multiplica tu alcance: transferir una tarea CON autoridad y CON contexto. Delegar no es abdicar: el responsable sigue reportando avance. Técnica simple: (1) explica el resultado esperado, (2) acuerda fecha, (3) define puntos de control, (4) da autonomía en el cómo." },
            { texto: "La retroalimentación cierra la dirección. Modelo efectivo: situación específica + comportamiento observado + impacto + acuerdo. 'En la reunión de ayer interrumpiste al cliente tres veces; se fue sin cerrar; acordemos que tomarás notas y preguntarás al final'. Específico y orientado al futuro, nunca un ataque a la persona." },
            { piensa: "¿Cuál es retroalimentación efectiva?", opciones: ["Eres un desastre con los clientes", "Nunca me has caído bien", "Ayer no confirmaste el pedido y perdimos la venta; acordemos confirmar siempre por escrito", "Hay que trabajar más"], correcta: 2 },
            {
              construye: {
                instrucciones: "Ordena los pasos para delegar una tarea correctamente.",
                lineas: [
                  "Elegir la persona adecuada",
                  "Explicar el resultado esperado y el contexto",
                  "Acordar fecha y puntos de control",
                  "Dar autonomía y dar seguimiento",
                  "Retroalimentar el resultado",
                ],
              }
            },
            {
              escribe: {
                instrucciones: "Define un KPI con meta y frecuencia para un área de ventas.",
                solucion: ["Ventas semanales: objetivo 50,000, se revisa cada lunes"],
                pista: "Debe tener indicador + objetivo + frecuencia de revisión.",
              }
            },
            { texto: "Repaso: pocos KPIs accionables con meta y frecuencia; ciclo PDCA para ajustar; delegación con resultado esperado, fecha, puntos de control y autonomía; retroalimentación específica (situación + comportamiento + impacto + acuerdo). Diriges con datos y personas. Última capacidad técnica: negociar y controlar los resultados." },
          ],
        },
      ],
    },
    {
      titulo: "Negociación y control",
      lecciones: [
        {
          titulo: "Negociar con método y cerrar el ciclo con control",
          tipo: "larga",
          pasos: [
            { texto: "Todo gestor negocia: con proveedores, clientes, jefes y el propio equipo. El método profesional separa POSICIONES (lo que cada parte dice querer) de INTERESES (lo que realmente necesita). 'Quiero 10% de descuento' es posición; 'mi margen está apretado' es el interés: y ahí hay mil soluciones que no son el descuento." },
            { piensa: "El proveedor no puede bajar el precio. ¿Qué opción ataca el INTERÉS del comprador (margen apretado)?", opciones: ["Insistir en el 10%", "Irse corriendo", "Plazo más largo de pago o flete gratis", "Aceptar de una vez"], correcta: 2 },
            { texto: "Antes de sentarte, define tu BATNA: la mejor alternativa si no hay acuerdo. Tu poder de negociación NO viene del volumen de voz: viene de tener alternativas. Con dos proveedores cotizando idéntico, tu BATNA es fuerte y puedes negociar con calma; sin alternativas, cualquier precio parece bueno." },
            {
              completa: {
                instrucciones: "Completa la preparación de una negociación.",
                plantilla: ["Antes de negociar: lista mis ", " (lo que necesito de verdad) y mi ", " (mi mejor alternativa sin acuerdo)."],
                huecos: [1, 2],
                piezas: ["intereses", "BATNA", "gritos", "posiciones"],
                correctas: [0, 1],
              }
            },
            { texto: "El CONTROL es la última función de gesti�n y cierra el círculo: comparar lo ejecutado contra lo planeado y corregir. Herramientas: el presupuesto vs real (desviaciones por partida), las auditorías internas y el tablero de KPIs de la lección anterior. Control no es desconfianza: es la brújula que detecta desvíos cuando aún son baratos de corregir." },
            { texto: "Cierre del ciclo completo: Planeaste la meta SMART (lección 1), Organizaste estructura y procesos (lección 2), calculaste finanzas y punto de equilibrio (lección 3), Dirigiste con KPIs y delegación (lección 4) y ahora Controlas con presupuesto vs real y ajustas el plan. Las cuatro funciones del gestor — planear, organizar, dirigir, controlar — son un ciclo infinito, no una línea recta." },
            {
              construye: {
                instrucciones: "Ordena el ciclo mensual de control de gesti�n.",
                lineas: [
                  "Comparar presupuesto vs gasto real",
                  "Identificar las desviaciones mayores",
                  "Investigar sus causas",
                  "Ajustar el plan del mes siguiente",
                  "Comunicar resultados al equipo",
                ],
              }
            },
            {
              escribe: {
                instrucciones: "Redacta la pregunta clave de la negociación basada en intereses.",
                solucion: ["¿Cuál es tu principal interés en este acuerdo?"],
                pista: "Debe apuntar al interés/necesidad real, no a la posición o el precio.",
              }
            },
            { texto: "Repaso final: negocia separando posiciones de intereses y preparando tu BATNA; controla comparando plan vs real y ajustando a tiempo. Con esto completaste las capacidades técnicas del gestor: planeación SMART y FODA, organización con procesos, finanzas con punto de equilibrio y flujo, dirección con KPIs y delegación, y negociación con control. ¡Ruta completada! Felicidades." },
          ],
        },
      ],
    },
  ],
};
