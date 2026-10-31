/* Contenido de la ruta "Inglés para el trabajo" — nivel A1 + verbo TO BE (ser/estar).
   Mismo formato que ruta-python.js: lecciones largas con pasos mezclados:
   - { texto: "..." } → leer
   - { piensa: "...", opciones: [...], correcta: n } → pensar
   - { completa: {...} } → completar la frase/código de inglés
   - { construye: {...} } → construir la frase ordenando sus bloques
   - { escribe: {...} } → escribir la frase línea por línea
   Cada paso nuevo conecta con lo ya visto (repaso continuo). */

const rutaIngles = {
  id: "ingles",
  icono: "🗣️",
  nombre: "Inglés para el trabajo",
  descripcion: "El nivel A1 del MCER: el verbo TO BE (ser/estar), saludos, presentaciones, números, días, colores y frases del trabajo.",
  modulos: [
    {
      titulo: "A1 Básico — saludos y presentaciones",
      lecciones: [
        {
          titulo: "Saludos: hello, good morning, goodbye",
          tipo: "larga",
          pasos: [
            { texto: "En inglés hay saludos para CADA momento del día. Hello funciona a cualquier hora y en cualquier lugar: es el saludo universal. Good morning (buenos días, hasta las 12), good afternoon (buenas tardes, de 12 a 6), good evening (buenas noches al saludar, después de las 6). Fíjate: good night NO es un saludo: es una despedida para dormir. Nunca uses good night para saludar." },
            { texto: "Las despedidas: goodbye (adiós, formal), bye (adiós, casual), see you (nos vemos), see you tomorrow (hasta mañana). En el trabajo oirás y dirás constantemente: Good morning! How are you? (¡buenos días! ¿cómo estás?) y See you tomorrow (hasta mañana). " },
            { piensa: "Son las 9 de la mañana y entras al trabajo. ¿Qué saludo usas?", opciones: ["Good night", "Good morning", "Good evening", "Goodbye"], correcta: 1 },
            { texto: "La pregunta social más común: How are you? (¿cómo estás?). Las respuestas formales: I'm fine, thank you (estoy bien, gracias), I'm good, thanks (estoy bien, gracias casual), not bad (no está mal). Fíjate: las respuestas usan I'm, la contracción de I am que verás en la próxima lección. En inglés, How are you? es un saludo, no una pregunta médica: nadie espera detalles. " },
            { piensa: "Alguien dice 'How are you?'. ¿Qué respuesta es más natural en el trabajo?", opciones: ["I have a headache", "I'm fine, thank you", "My dog is sick", "I don't understand"], correcta: 1 },
            {
              completa: {
                instrucciones: "Completa el saludo del recepcionista.",
                plantilla: ["", " morning! How are you?  →  I'm fine, thank you."],
                huecos: [1],
                piezas: ["Good", "Night", "Bye", "See"],
                correctas: [0],
              }
            },
            {
              construye: {
                instrucciones: "Construye la despedida: 'Hasta mañana' (see you tomorrow).",
                lineas: ["see", "you", "tomorrow"],
              }
            },
            {
              escribe: {
                instrucciones: "Escribe la escena completa: saludo, pregunta y respuesta (Good morning! How are you? / I'm fine, thank you).",
                solucion: ["Good morning! How are you?", "I'm fine, thank you"],
                pista: "Good morning! (saludo) + How are you? (pregunta social) + I'm fine, thank you (respuesta formal).",
              }
            },
            { texto: "Repaso: hello universal; good morning/afternoon/evening según la hora; good night solo para dormir; despedidas goodbye/bye/see you; y How are you? con respuestas I'm fine/I'm good. En la próxima lección te presentarás: My name is..." },
          ],
        },
        {
          titulo: "Presentaciones: my name is, nice to meet you",
          tipo: "larga",
          pasos: [
            { texto: "Presentarte es la primera habilidad profesional. My name is Ana = Mi nombre es Ana. Su contracción: My name's. Otra forma común en el trabajo: I'm Ana (soy Ana). Preguntas: What's your name? (¿cómo te llamas?), Where are you from? (¿de dónde eres?). Respuesta: I'm from Mexico (soy de México)." },
            { piensa: "¿Cómo preguntarías el nombre de alguien?", opciones: ["What your name is?", "What's your name?", "How is your name?", "Who you are?"], correcta: 1 },
            { texto: "Después del nombre: Nice to meet you = un placer conocerte. La respuesta: Nice to meet you too (un placer conocerte también). Fíjate: nice to meet you se usa AL CONOCER, no al despedir. También oirás: Pleased to meet you (más formal) y How do you do? (muy formal, casi solo en negocios tradicionales)." },
            { texto: "Tu presentación profesional completa en el trabajo: Good morning! My name is Ana, I'm the receptionist. Nice to meet you. (¡buenos días! Mi nombre es Ana, soy recepcionista. Un placer.) Fíjate: My name is + nombre, y la profesión usa I'm + profesión, que aprenderás con to be en las próximas lecciones." },
            {
              completa: {
                instrucciones: "Completa la presentación profesional.",
                plantilla: ["My name ", " Ana and I'm ", " receptionist. Nice to meet you."],
                huecos: [1, 2],
                piezas: ["is", "the", "are", "a"],
                correctas: [0, 1],
              }
            },
            {
              construye: {
                instrucciones: "Construye la respuesta: 'Un placer conocerte también' (nice to meet you too).",
                lineas: ["Nice", "to meet you", "too"],
              }
            },
            {
              escribe: {
                instrucciones: "Escribe tu presentación: '¡Buenos días! Mi nombre es Ana. Un placer conocerte.' (Good morning! My name is Ana. Nice to meet you.)",
                solucion: ["Good morning! My name is Ana.", "Nice to meet you."],
                pista: "Good morning! + My name is + nombre + Nice to meet you.",
              }
            },
            { texto: "Repaso: My name is/My name's + nombre; What's your name? pregunta el nombre; Where are you from? pregunta el origen (I'm from + país); Nice to meet you con la respuesta too. En la próxima lección: los números, días y colores del vocabulario A1." },
          ],
        },
        {
          titulo: "Números, días y colores: el vocabulario A1",
          tipo: "larga",
          pasos: [
            { texto: "Los NÚMEROS 1-20 son el vocabulario más usado del nivel A1: one, two, three, four, five, six, seven, eight, nine, ten; eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty. Trampas del oído: three (no tree), thirteen vs thirty (la diferencia: la -teen siempre lleva énfasis al final), fifteen vs fifty. En el trabajo los usas para habitaciones: Room 15 (habitación quince), extension 8 (extensión ocho)." },
            { piensa: "Un huésped pide 'Room thirty'. ¿Qué número es?", opciones: ["13", "30", "3", "300"], correcta: 1 },
            { texto: "Los DÍAS de la semana: Monday (lunes), Tuesday (martes), Wednesday (miércoles — ¡se escribe con d pero no se pronuncia!), Thursday (jueves), Friday (viernes), Saturday (sábado), Sunday (domingo). Frases clave: on Monday (el lunes — los días llevan on), today (hoy), tomorrow (mañana), yesterday (ayer), the weekend (el fin de semana). Pregunta común: What day is it today? (¿qué día es hoy?)." },
            { piensa: "'La reunión es el viernes' se dice:", opciones: ["The meeting is in Friday", "The meeting is on Friday", "The meeting is at Friday", "The meeting is Friday's"], correcta: 1 },
            { texto: "Los COLORES: red (rojo), blue (azul), green (verde), yellow (amarillo), black (negro), white (blanco), brown (café/marrón), orange (naranja), pink (rosa), gray (gris). Frases con to be: The folder is blue (la carpeta es azul), the walls are white (las paredes son blancas). Fíjate: los colores van DESPUÉS del sustantivo en inglés: a red car, NUNCA a car red." },
            { piensa: "'La carpeta es roja' se dice:", opciones: ["The folder red is", "The folder is red", "The red folder is", "Is the folder red"], correcta: 1 },
            {
              completa: {
                instrucciones: "Completa la frase del hotel con número, día y color.",
                plantilla: ["Room ", " is ready on ", " morning. The key card is ", " blue."],
                huecos: [1, 2, 3],
                piezas: ["fifteen", "Friday", "dark", "ready"],
                correctas: [0, 1, 2],
              }
            },
            {
              construye: {
                instrucciones: "Construye la pregunta del día: '¿Qué día es hoy?' (What day is it today?).",
                lineas: ["What day", "is it", "today?"],
              }
            },
            {
              escribe: {
                instrucciones: "Escribe la frase: 'Mi carpeta es azul y la reunión es el lunes' (My folder is blue and the meeting is on Monday).",
                solucion: ["My folder is blue", "and the meeting is on Monday"],
                pista: "My folder is + color (después del sustantivo) + on + día de la semana.",
              }
            },
            { texto: "Repaso del vocabulario A1: números 1-20 con la trampa thirteen/thirty; días con on (on Monday); today/tomorrow/yesterday para el tiempo; colores después del sustantivo (a blue folder); y What day is it today? como pregunta del día. En la próxima lección unirás este vocabulario con el verbo to be: I am, you are, he is." },
          ],
        },
      ],
    },
    {
      titulo: "A1 Básico — objects y possessivos",
      lecciones: [
        {
          titulo: "Objects del trabajo: this/that, these/those",
          tipo: "larga",
          pasos: [
            { texto: "Para señalar objetos hay dos pares. Cerca: this (esto, singular) y these (estos, plural). Lejos: that (eso, singular) y those (esos, plural). This pen is mine (esta pluma es mía: cerca), that folder is yours (esa carpeta es tuya: lejos), these keys are new (estas llaves son nuevas), those rooms are ready (esas habitaciones están listas)." },
            { piensa: "Una carpeta está lejos de ti. ¿Qué palabra usas?", opciones: ["this", "that", "these", "those"], correcta: 1 },
            { texto: "Preguntas con objects: What is this? (¿qué es esto?), What is that? (¿qué es eso?). Respuestas: It's a folder (es una carpeta), It's my desk (es mi escritorio). Fíjate: la respuesta siempre usa It's (it is), aunque preguntes por this o that." },
            {
              completa: {
                instrucciones: "Completa la frase de la oficina.",
                plantilla: ["", " keys are new (cerca, plural).", ", folder is yours (lejos, singular)"],
                huecos: [1, 2],
                piezas: ["These", "That", "This", "Those"],
                correctas: [0, 1],
              }
            },
            {
              construye: {
                instrucciones: "Construye la pregunta: '¿Qué es esto?' (what is this?).",
                lineas: ["What", "is", "this?"],
              }
            },
            {
              escribe: {
                instrucciones: "Escribe la frase: 'Estas llaves son nuevas y esa carpeta es tuya' (These keys are new and that folder is yours).",
                solucion: ["These keys are new", "and that folder is yours"],
                pista: "These + plural (cerca) y that + singular (lejos).",
              }
            },
            { texto: "Repaso: this/these cerca, that/those lejos; el par cambia con singular/plural; What is this? pregunta el objeto y la respuesta usa It's. En la próxima lección: my, your, his, her — los possessivos." },
          ],
        },
        {
          titulo: "Possessivos: my, your, his, her",
          tipo: "larga",
          pasos: [
            { texto: "Los possessivos indican DE QUIÉN es cada cosa: my (mi), your (tu), his (su de él), her (su de ella), its (su de cosa), our (nuestro), their (su de ellos). My desk is new (mi escritorio es nuevo), your name is Ana (tu nombre es Ana), her car is red (su carro es rojo: de ella), his office is big (su oficina es grande: de él)." },
            { piensa: "'Su oficina es grande' hablando de una mujer se dice:", opciones: ["His office is big", "Her office is big", "Your office is big", "Its office is big"], correcta: 1 },
            { texto: "Trampa: his y her significan SU en español: la diferencia está en el dueño. His + de un hombre, her + de una mujer. Fíjate: los possessivos NUNCA llevan -s en inglés: my books, NUNCA mys books." },
            {
              completa: {
                instrucciones: "Completa las frases con possessivos.",
                plantilla: ["", " name is Ana (de ella).", ", desk is new (mío)"],
                huecos: [1, 2],
                piezas: ["Her", "My", "His", "Your"],
                correctas: [0, 1],
              }
            },
            {
              construye: {
                instrucciones: "Construye: 'Tu habitación está lista' (your room is ready).",
                lineas: ["Your room", "is", "ready"],
              }
            },
            {
              escribe: {
                instrucciones: "Escribe: 'Mi escritorio es nuevo y su carro es rojo (de ella)' (My desk is new and her car is red).",
                solucion: ["My desk is new", "and her car is red"],
                pista: "My + objeto (mío) y her + objeto (de ella).",
              }
            },
            { texto: "Repaso: my/your/his/her/its/our/their; his de hombre y her de mujer; sin -s nunca; y la frase your room is ready es la más usada del hotel. En la próxima lección: profesiones y Family — my job is..." },
          ],
        },
      ],
    },
    {
      titulo: "Presente Simple — am, is, are",
      lecciones: [
        {
          titulo: "El verbo TO BE en presente: I am, you are, he is",
          tipo: "larga",
          pasos: [
            { texto: "En español tienes dos verbos para 'ser y estar'. En inglés solo hay UNO: el verbo to be, que significa las dos cosas. I am a receptionist = Soy recepcionista (identidad). I am tired = Estoy cansado (estado). Mismo verbo, dos usos: el contexto decide si se traduce como 'ser' o 'estar'." },
            { texto: "En el presente cambia según la persona: I am (yo soy/estoy), you are (tú eres/estás), he is (él es), she is (ella es), it is (para cosas), we are (nosotros somos), they are (ellos son). Los contracciones más comunes: I'm, you're, he's, she's, it's, we're, they're. En el trabajo se usan las contracciones casi siempre." },
            { piensa: "¿Cómo se dice 'Ella es la gerente' en inglés?", opciones: ["She is the manager", "She are the manager", "She am the manager", "She be the manager"], correcta: 0 },
            { texto: "La forma negativa agrega not después del verbo: I am not busy (no estoy ocupado), she is not here (no está aquí), they are not ready (no están listos). En contracciones: isn't (is not) y aren't (are not). Ojo: con I am no existe 'amn't', se dice I'm not." },
            { piensa: "¿Cuál es la forma correcta de 'No estoy ocupado'?", opciones: ["I amn't busy", "I'm not busy", "I not busy", "I don't busy"], correcta: 1 },
            { texto: "La pregunta invierte el orden: verbo primero, persona después. Are you ready? (¿estás listo?), Is the room clean? (¿está limpia la habitación?), Where is the manager? (¿dónde está el gerente?). Esta inversión es la estructura base de todas las preguntas con verbos auxiliares en inglés." },
            {
              completa: {
                instrucciones: "Completa la pregunta del recepcionista.",
                plantilla: ["", " you the manager?  →  Yes, I am."],
                huecos: [1],
                piezas: ["Are", "Is", "Do", "Am"],
                correctas: [0],
              }
            },
            { texto: "Conectando con el trabajo: en un hotel usas to be constantemente. The hotel is full (el hotel está lleno), we are open (estamos abiertos), the meeting is at 3 pm (la reunión es a las 3), I am sorry (lo siento). Fíjate: 'at 3 pm' usa is porque en inglés los horarios 'están/son' con to be." },
            {
              completa: {
                instrucciones: "Completa la frase del check-in.",
                plantilla: ["Welcome! Your room ", " on the third floor."],
                huecos: [1],
                piezas: ["is", "are", "am", "be"],
                correctas: [0],
              }
            },
            {
              construye: {
                instrucciones: "Construye la respuesta del huésped: 'Mi reserva está a nombre de Ana'.",
                lineas: [
                  "My",
                  "reservation",
                  "is",
                  "under Ana",
                ],
              }
            },
            {
              escribe: {
                instrucciones: "Escribe la frase completa: 'Estoy listo para ayudarte' (I am ready to help you).",
                solucion: ["I am ready to help you"],
                pista: "Empieza con I am (estoy), luego ready (listo) y to help you (para ayudarte).",
              }
            },
            { texto: "Repaso: to be significa ser y estar; en presente es am (yo), is (él/ella/eso) y are (tú/nosotros/ellos); la negativa usa not (isn't/aren't) y la pregunta invierte el orden (Are you...?). En la próxima lección lo usarás para hablar del pasado: was y were." },
          ],
        },
      ],
    },
    {
      titulo: "Pasado Simple — was, were",
      lecciones: [
        {
          titulo: "El pasado de TO BE: was y were",
          tipo: "larga",
          pasos: [
            { texto: "Ya dominas el presente (am/is/are). El pasado solo tiene DOS formas: was (para I, he, she, it) y were (para you, we, they). I was at the meeting (estuve/fui en la reunión), they were busy (estaban ocupados). Es más fácil que el presente: solo dos opciones." },
            { piensa: "¿Cuál es la forma correcta: 'She ___ at the office yesterday'?", opciones: ["were", "was", "is", "am"], correcta: 1 },
            { texto: "La negativa en pasado: was not (wasn't) y were not (weren't). The hotel wasn't full (el hotel no estaba lleno), we weren't open (no estábamos abiertos). Igual que en presente: not va después del verbo." },
            { texto: "Las preguntas del pasado también invierten: Were you at work yesterday? (¿estuviste en el trabajo ayer?), Was the service good? (¿fue bueno el servicio?), How was your stay? (¿cómo fue tu estadía?). Esta última la oirás todos los días en un hotel." },
            {
              completa: {
                instrucciones: "Completa la pregunta típica del check-out.",
                plantilla: ["", " your stay comfortable?  →  Yes, it was."],
                huecos: [1],
                piezas: ["Was", "Were", "Is", "Did"],
                correctas: [0],
              }
            },
            { texto: "Was/were sirven para describir estados pasados del trabajo: I was the manager last year (fui gerente el año pasado — identidad), the meeting was at noon (la reunión fue al mediodía), the guests were happy (los huéspedes estaban felices). El contexto decide entre 'ser' y 'estar'." },
            { piensa: "'Los huéspedes estaban contentos' se dice:", opciones: ["The guests was happy", "The guests were happy", "The guests are happy", "The guests was glad"], correcta: 1 },
            { texto: "Ojo con las palabras de tiempo del pasado: yesterday (ayer), last night (anoche), last week (la semana pasada), ago (hace): two days ago (hace dos días). Cuando ves estas palabras, la frase va en was/were, no en am/is/are. I was busy yesterday, NUNCA I am busy yesterday." },
            {
              completa: {
                instrucciones: "Completa con el tiempo correcto (palabra clave: yesterday).",
                plantilla: ["The manager ", " in a meeting yesterday."],
                huecos: [1],
                piezas: ["was", "is", "were", "are"],
                correctas: [0],
              }
            },
            {
              construye: {
                instrucciones: "Construye: 'Las habitaciones no estaban listas ayer' (negativa).",
                lineas: [
                  "The rooms",
                  "weren't",
                  "ready",
                  "yesterday",
                ],
              }
            },
            {
              escribe: {
                instrucciones: "Escribe la frase: 'Yo no estuve en el trabajo ayer' (I wasn't at work yesterday).",
                solucion: ["I wasn't at work yesterday"],
                pista: "I wasn't (no estuve) + at work (en el trabajo) + yesterday (ayer).",
              }
            },
            { texto: "Repaso: pasado = was (I/he/she/it) y were (you/we/they); negativa wasn't/weren't; preguntas invierten (Was it...? Were you...?); y las palabras yesterday, last y ago señalan el pasado. Siguiente parada: el futuro con will be, para hablar de lo que vendrá." },
          ],
        },
      ],
    },
    {
      titulo: "Futuro — will be",
      lecciones: [
        {
          titulo: "El futuro de TO BE: will be",
          tipo: "larga",
          pasos: [
            { texto: "Buenas noticias: el futuro es lo MÁS fácil del verbo to be. Solo una forma para todas las personas: will be. I will be busy (estaré ocupado), she will be here (ella estará aquí), they will be ready (estarán listos). Sin excepciones: será SIEMPRE will be." },
            { piensa: "¿Cuál es la forma correcta: 'Nosotros estaremos abiertos mañana'?", opciones: ["We will be open tomorrow", "We will am open tomorrow", "We will are open tomorrow", "We is open tomorrow"], correcta: 0 },
            { texto: "La contracción de will es 'll pegada al sujeto: I'll, you'll, she'll, we'll, they'll. The meeting'll... no se suele usar con it; mejor it will. En el trabajo oirás I'll be there in 5 minutes (estaré ahí en 5 minutos) constantemente." },
            { texto: "La negativa del futuro: will not = won't (¡cambia la palabra!). I won't be late (no llegaré tarde), the hotel won't be open (el hotel no estará abierto). No digas 'willn't': no existe. Won't es la contracción correcta de will not." },
            { piensa: "'El gerente no estará disponible' se dice:", opciones: ["The manager willn't be available", "The manager won't be available", "The manager will not be available o won't be available", "The manager not will be available"], correcta: 2 },
            { texto: "Las preguntas del futuro: Will + sujeto + be...? Will you be at the office tomorrow? (¿estarás en la oficina mañana?), Will the room be ready? (¿estará lista la habitación?). Mismo patrón de inversión que en presente y pasado: el verbo auxiliar siempre va primero." },
            {
              completa: {
                instrucciones: "Completa la pregunta del hotel.",
                plantilla: ["", " the room be ready by 2 pm?  →  Yes, it will."],
                huecos: [1],
                piezas: ["Will", "Is", "Does", "Are"],
                correctas: [0],
              }
            },
            { texto: "Conecta los tres tiempos que ya sabes: presente (I am busy), pasado (I was busy), futuro (I will be busy). Es el mismo esqueleto: to be + estado, cambiando solo la marca de tiempo. Domina esto y puedes contar tu historia completa en inglés: ayer, hoy y mañana." },
            {
              completa: {
                instrucciones: "Completa la línea de tiempo: presente → pasado → futuro.",
                plantilla: ["I ", " busy today. I ", " busy yesterday. I will ", " busy tomorrow."],
                huecos: [1, 2, 3],
                piezas: ["am", "was", "be", "were"],
                correctas: [0, 1, 2],
              }
            },
            {
              construye: {
                instrucciones: "Construye: 'La reunión será en la sala grande'.",
                lineas: [
                  "The meeting",
                  "will",
                  "be",
                  "in the big room",
                ],
              }
            },
            {
              escribe: {
                instrucciones: "Escribe la frase: 'No estaré en la reunión' (negativa, contracción).",
                solucion: ["I won't be in the meeting"],
                pista: "I won't (no estaré) + be + in the meeting (en la reunión).",
              }
            },
            { texto: "Repaso: futuro = will be para TODAS las personas; contracción 'll; negativa won't be; preguntas con Will primero. Ya tienes presente, pasado y futuro de to be. En la próxima lección aprenderás a usarlos para hablar de ubicación y lugar: where is...?" },
          ],
        },
      ],
    },
    {
      titulo: "Preguntas de lugar — Where is / Where are",
      lecciones: [
        {
          titulo: "Preguntar dónde está cada cosa: where is/are",
          tipo: "larga",
          pasos: [
            { texto: "En un hotel o una oficina, la habilidad más usada es preguntar DÓNDE están las cosas. La estructura: Where + is/are + lugar? Where is the bathroom? (¿dónde está el baño?), Where are the towels? (¿dónde están las toallas?). Is para una cosa, are para varias." },
            { piensa: "¿Cuál es correcta: '¿Dónde están mis maletas'?", opciones: ["Where is my luggage?", "Where are my luggage?", "Where my luggage is?", "Where are my luggages?"], correcta: 0 },
            { texto: "Trampa clásica: 'luggage' (equipaje) y 'equipment' son INCOUNTABLES: aunque contengan muchas cosas, van con is y nunca agregan -s. Where is my luggage? es correcta aunque lleves tres maletas. Otros así: information, money, furniture, news." },
            { texto: "Las respuestas usan las formas cortas: Where is the manager? → He's in his office (está en su oficina). Where are the keys? → They're on the desk (están en el escritorio). Fíjate: la respuesta repite is/are en contracción: he's, they're." },
            {
              completa: {
                instrucciones: "Completa la respuesta a 'Where are the keys?'.",
                plantilla: ["They", " on the desk."],
                huecos: [1],
                piezas: ["'re", "is", "was", "are"],
                correctas: [0],
              }
            },
            { texto: "Preposiciones de lugar que acompañan a to be: in (dentro: in the office), on (encima: on the table), at (en un punto: at reception), next to (al lado de), in front of (enfrente de), behind (detrás de). La combinación is/are + preposición describe cualquier ubicación." },
            { piensa: "'Las toallas están en el baño' se dice:", opciones: ["The towels are on the bathroom", "The towels are in the bathroom", "The towels is in the bathroom", "The towels are at the bathroom"], correcta: 1 },
            { texto: "Was/were también funcionan con where para el pasado: Where was the meeting? (¿dónde fue la reunión?), Where were you last night? (¿dónde estuviste anoche?). Y para el futuro: Where will the party be? (¿dónde será la fiesta?). Misma estructura, cambia solo el tiempo." },
            {
              completa: {
                instrucciones: "Completa las tres preguntas de lugar en distintos tiempos.",
                plantilla: ["Where ", " the keys today? Where ", " the keys yesterday? Where ", " the keys be tomorrow?"],
                huecos: [1, 2, 3],
                piezas: ["are", "were", "will", "is"],
                correctas: [0, 1, 2],
              }
            },
            {
              construye: {
                instrucciones: "Construye la respuesta: 'El desayuno es en el comedor, al lado de la recepción'.",
                lineas: [
                  "Breakfast",
                  "is",
                  "in the dining room,",
                  "next to reception",
                ],
              }
            },
            {
              escribe: {
                instrucciones: "Escribe la pregunta: '¿Dónde está el gimnasio?' (Where is the gym?).",
                solucion: ["Where is the gym?"],
                pista: "Where + is + el lugar + signo de interrogación.",
              }
            },
            { texto: "Repaso: Where is/are pregunta por lugares (is para inccontables y singulares, are para plurales); las respuestas usan it's/they're; las preposiciones in/on/at/next to dan la ubicación exacta; y la misma pregunta funciona en pasado (was/were) y futuro (will). En la próxima lección: el condicional, para hablar con cortesía: would be." },
          ],
        },
      ],
    },
    {
      titulo: "Condicional — would be (cortesía profesional)",
      lecciones: [
        {
          titulo: "would be: la forma más cortés de to be",
          tipo: "larga",
          pasos: [
            { texto: "En el trabajo, la cortesía vale oro. would be es el condicional de to be y suaviza cualquier frase: It would be possible (sería posible), That would be great (eso sería genial), I would be grateful (estaría agradecido). Su contracción es 'd: I'd, she'd, it'd." },
            { piensa: "Un huésped pide algo. ¿Qué respuesta suena más profesional?", opciones: ["It is possible", "It would be possible", "It will be possible", "It was possible"], correcta: 1 },
            { texto: "would be es la clave de las peticiones educadas: Would it be possible to change rooms? (¿sería posible cambiar de habitación?) es MUCHO más cortés que Can I change rooms?. En recepción, esta estructura te hará sonar profesional en cada interacción." },
            { texto: "La pregunta con would invierte: Would + sujeto + be...? Would you be available at 3 pm? (¿estaría disponible a las 3?), Would that be okay? (¿estaría bien eso?). Es el nivel de cortesía más alto: perfecto con clientes y jefes." },
            {
              completa: {
                instrucciones: "Completa la petición cortés del huésped.",
                plantilla: ["", " it be possible to have a late check-out?"],
                huecos: [1],
                piezas: ["Would", "Will", "Is", "Did"],
                correctas: [0],
              }
            },
            { texto: "La negativa: would not = wouldn't. It wouldn't be a problem (no sería un problema), I wouldn't be late (no llegaría tarde). Fíjate en la familia de contracciones que ya dominas: isn't, wasn't, won't, wouldn't: una por cada tiempo." },
            { piensa: "¿Cuál es la contracción correcta de would not?", opciones: ["won't", "wouldn't", "willn't", "don't"], correcta: 1 },
            { texto: "Conecta todo lo aprendido en una escena de hotel: Was your stay okay? (pasado), Is everything okay? (presente), Would you like...? y It would be my pleasure (condicional cortés). Las cuatro formas de to be trabajan juntas en una sola conversación real." },
            {
              completa: {
                instrucciones: "Completa la escena completa de servicio al huésped.",
                plantilla: ["How ", " your stay? Everything ", " okay? ", " you like to come back? It ", " be a pleasure to see you again."],
                huecos: [1, 2, 3, 4],
                piezas: ["was", "is", "Would", "would"],
                correctas: [0, 1, 2, 3],
              }
            },
            {
              construye: {
                instrucciones: "Construye la respuesta profesional: 'Eso sería genial, no sería un problema'.",
                lineas: [
                  "That",
                  "would",
                  "be great,",
                  "it wouldn't be a problem",
                ],
              }
            },
            {
              escribe: {
                instrucciones: "Escribe la petición cortés: '¿Sería posible hablar con el gerente?' (Would it be possible to speak with the manager?).",
                solucion: ["Would it be possible to speak with the manager?"],
                pista: "Would it be possible + to + verbo + complemento.",
              }
            },
            { texto: "Repaso final de la ruta: would be = sería/estaría (cortés); contracción 'd; negativa wouldn't; y Would you...? para peticiones profesionales. Ya dominas el verbo to be en presente (am/is/are), pasado (was/were), futuro (will be) y condicional (would be), más las preguntas de lugar. ¡Ruta de inglés completada! Felicidades." },
          ],
        },
      ],
    },
  ],
};
