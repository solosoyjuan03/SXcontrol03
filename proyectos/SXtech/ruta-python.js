/* Contenido nuevo de la ruta "Programación Básica (Python)".
   Cada módulo = UNA lección larga de 10+ pasos con pasos mezclados:
   - { texto: "..." }                → leer
   - { piensa: "...", opciones: [...], correcta: n } → pensar (opción múltiple)
   - { completa: {...} }             → completar código
   - { construye: {...} }            → construir código desde cero (ordenar)
   - { escribe: {...} }              → escribir código línea por línea
   Cada paso nuevo conecta con lo ya visto (repaso continuo). */

const rutaPython = {
  id: "python",
  icono: "🐍",
  nombre: "Programación Básica (Python)",
  descripcion: "De cero a POO: textos para leer, pensar, completar, construir y escribir código Python.",
  modulos: [
    {
      titulo: "Python Basics (Fundamentos)",
      lecciones: [
        {
          titulo: "Sintaxis básica: print, comentarios y variables",
          tipo: "larga",
          pasos: [
            { texto: "Bienvenido a tu primera lección de Python. Un programa es una lista de instrucciones que la computadora ejecuta en orden, una por una. Python es uno de los lenguajes más populares del mundo porque sus instrucciones se escriben casi como en inglés, línea por línea, sin símbolos extraños." },
            { texto: "Para mostrar algo en pantalla usamos la función print(). Todo lo que pongas dentro de los paréntesis aparecerá en la consola. Por ejemplo: print('Hola mundo') muestra el texto Hola mundo. Las comillas simples o dobles indican que se trata de texto (una cadena)." },
            { piensa: "¿Qué mostrará en pantalla la línea: print('Hola mundo')?", opciones: ["Nada, falta un punto y coma", "Hola mundo", "'Hola mundo'", "Un error"], correcta: 1 },
            { texto: "Los comentarios son notas para humanos: Python los ignora por completo. Se escriben con el símbolo # y sirven para explicar qué hace tu código. Por ejemplo: # esto es una nota. Comentar tu código es una buena costumbre desde el día uno." },
            { texto: "Una variable es una caja con nombre donde guardas un dato para usarlo después. En Python creas una variable simplemente asignando: edad = 25. Aquí la caja se llama edad y guarda el número 25. No necesitas decir de qué tipo es: Python lo descubre solo." },
            { piensa: "Después de ejecutar nombre = 'Ana', ¿qué guarda la variable nombre?", opciones: ["La palabra nombre", "El número 3", "El texto Ana", "Nada, marca error"], correcta: 2 },
            { texto: "Puedes combinar variables y print para construir mensajes: nombre = 'Ana' y luego print('Hola', nombre) muestra Hola Ana. La coma dentro de print agrega un espacio entre los valores. Esto lo usarás en casi todos tus programas." },
            { completa: {
                instrucciones: "Completa el programa para que salude a Ana usando la variable.",
                plantilla: ["nombre = 'Ana'\nprint('Hola', ", ")\n# el programa muestra: Hola Ana"],
                huecos: [1],
                piezas: ["nombre", "'nombre'", "print", "Ana"],
                correctas: [0],
              } },
            { texto: "Fíjate en la diferencia: print(nombre) usa la variable (muestra Ana), mientras que print('nombre') usa texto literal (muestra nombre). Las comillas deciden si es texto o variable. Este detalle causa muchos errores de principiante, así que obsérvalo bien." },
            { piensa: "¿Qué muestra: ciudad = 'Lima' y luego print('ciudad')?", opciones: ["Lima", "ciudad", "Error", "'Lima'"], correcta: 1 },
            { construye: {
                instrucciones: "Construye un programa que guarda tu edad y la muestra con un mensaje.",
                lineas: [
                  "# Mi primer programa con variables",
                  "edad = 25",
                  "mensaje = 'Tengo', edad",
                  "print('Tengo', edad)",
                ],
                ordenCorrecto: [0, 1, 3],
              } },
            { escribe: {
                instrucciones: "Escribe línea por línea un programa que cree la variable fruta con el valor 'manzana' y la muestre con print.",
                solucion: ["fruta = 'manzana'", "print(fruta)"],
                pista: "Primero crea la variable con = y luego muéstrala con print(), sin comillas dentro del print.",
              } },
            { texto: "Repaso de la lección: print() muestra cosas en pantalla, # escribe comentarios, y una variable guarda un dato con un nombre que eliges tú. En la próxima lección aprenderás los tipos de datos y cómo compararlos. ¡Vas muy bien!" },
          ],
        },
      ],
    },
    {
      titulo: "Types & Comparisons (Tipos y comparaciones)",
      lecciones: [
        {
          titulo: "Tipos de datos y comparaciones",
          tipo: "larga",
          pasos: [
            { texto: "En la lección anterior creaste variables como edad = 25 y nombre = 'Ana'. Pero no todos los datos son iguales: Python clasifica cada valor en un tipo. El tipo decide qué puedes hacer con ese dato: a los números los puedes sumar, al texto no." },
            { texto: "Los tipos básicos son: int para enteros (25, -3, 0), float para decimales (1.5, 3.14), str para texto ('Hola') y bool para valores lógicos que solo pueden ser True o False. Con type(25) Python te dice el tipo: <class 'int'>." },
            { piensa: "¿Qué tipo tiene el valor 3.14?", opciones: ["int", "str", "float", "bool"], correcta: 2 },
            { texto: "Cuidado con una trampa común: 25 y '25' NO son lo mismo. El primero es un número y el segundo es texto. Por eso '5' + '3' no da 8, sino '53': Python une los textos. Para convertir texto a número se usa int('5'), y para convertir número a texto, str(25)." },
            { completa: {
                instrucciones: "Completa el programa para convertir los textos a números y sumarlos bien.",
                plantilla: ["a = '5'\nb = '3'\nresultado = ", "(a) + ", "(b)\nprint(resultado)  # muestra 8"],
                huecos: [1, 2],
                piezas: ["int", "str", "float", "print"],
                correctas: [0, 0],
              } },
            { texto: "Ahora los comparadores. Cuando comparas dos valores obtienes un bool: True o False. Los comparadores son: == igualdad, != distinto, > mayor, < menor, >= mayor o igual y <= menor o igual. Por ejemplo: 5 > 3 devuelve True." },
            { piensa: "¿Qué devuelve: 7 == 7.0?", opciones: ["False, porque uno es int y otro float", "True, porque valen lo mismo", "Error", "7"], correcta: 1 },
            { texto: "No confundas = con ==. Un solo = asigna (guarda un valor en una variable); doble == compara (pregunta si dos valores son iguales). Escribir if x = 5 en vez de if x == 5 es uno de los errores más frecuentes al empezar." },
            { piensa: "Después de es_mayor = 10 > 5, ¿qué guarda es_mayor?", opciones: ["10", "5", "True", "Error"], correcta: 2 },
            { texto: "Los resultados de las comparaciones se pueden guardar en variables y combinar con operadores lógicos: and (verdadero si AMBAS condiciones son verdaderas), or (si AL MENOS una lo es) y not (invierte el valor). Ejemplo: edad >= 13 and edad < 18 describe a un adolescente." },
            { completa: {
                instrucciones: "Completa la condición para que sea True solo si la edad está entre 13 y 17 (adolescente).",
                plantilla: ["edad = 15\nadolescente = edad >= 13 ", " edad < 18\nprint(adolescente)  # True"],
                huecos: [1],
                piezas: ["and", "or", "not", "=="],
                correctas: [0],
              } },
            { construye: {
                instrucciones: "Construye un verificador de entrada: guarda la edad, compara si es mayor o igual a 18 y muestra el resultado.",
                lineas: [
                  "edad = 20",
                  "puede_entrar = edad >= 18",
                  "print(puede_entrar)",
                ],
              } },
            { escribe: {
                instrucciones: "Escribe un programa con la variable temperatura en 30 que muestre True si hace calor (temperatura > 25).",
                solucion: ["temperatura = 30", "print(temperatura > 25)"],
                pista: "Guarda el número en la variable y dentro del print escribe la comparación directamente.",
              } },
            { texto: "Repaso: los tipos (int, float, str, bool) deciden qué puedes hacer con un dato; int() y str() convierten entre tipos; == compara mientras = asigna; y las comparaciones producen True o False, que puedes guardar y combinar con and, or y not. Con esto listo, puedes tomar decisiones en tus programas: es la siguiente lección." },
          ],
        },
      ],
    },
    {
      titulo: "Conditional Statements (Sentencias condicionales)",
      lecciones: [
        {
          titulo: "if, elif y else",
          tipo: "larga",
          pasos: [
            { texto: "Ya sabes comparar valores y obtener True o False. Ahora viene la parte poderosa: usar esas comparaciones para que tu programa TOME DECISIONES. Una sentencia condicional ejecuta un bloque de código solo cuando una condición es verdadera." },
            { texto: "La estructura básica es if: if edad >= 18: y en la línea siguiente, con sangría, print('Puedes entrar'). La sangría (4 espacios al inicio de la línea) le indica a Python qué instrucciones pertenecen al if. En otros lenguajes se usan llaves {}; en Python, espacios." },
            { piensa: "Con edad = 20, ¿qué imprime: if edad >= 18: print('adulto')?", opciones: ["Nada", "adulto", "edad", "Error"], correcta: 1 },
            { texto: "Si la condición es falsa, puedes ofrecer un plan B con else: if edad >= 18: print('adulto') else: print('menor'). Solo se ejecuta UNO de los dos bloques. else no lleva condición: simplemente cubre todos los casos restantes." },
            { completa: {
                instrucciones: "Completa el programa para que responda correctamente con if y else.",
                plantilla: ["nota = 6\n", " nota >= 6:\n    print('Aprobado')\n", ":\n    print('Reprobado')"],
                huecos: [1, 2],
                piezas: ["if", "else", "elif", "when"],
                correctas: [0, 1],
              } },
            { texto: "Cuando necesitas más de dos caminos, usa elif (contracción de 'else if'). Python revisa las condiciones EN ORDEN y ejecuta solo el primer bloque cuya condición sea verdadera; el resto se ignora, incluso si también fueran verdaderas." },
            { piensa: "Con nota = 85, ¿qué imprime: if nota >= 90: print('A') elif nota >= 80: print('B') else: print('C')?", opciones: ["A", "B", "C", "A y B"], correcta: 1 },
            { texto: "Recuerda los operadores lógicos de la lección anterior: and, or y not. Se combinan de maravilla con if: if edad >= 13 and edad <= 17: print('adolescente'). Así una sola condición puede depender de varias comparaciones a la vez." },
            { completa: {
                instrucciones: "Completa la condición para que entre quien tenga 18 o más Y además tenga entrada.",
                plantilla: ["edad = 19\ntiene_entrada = True\n", " edad >= 18 ", " tiene_entrada:\n    print('Bienvenido')"],
                huecos: [1, 2],
                piezas: ["if", "and", "or", "print"],
                correctas: [0, 1],
              } },
            { construye: {
                instrucciones: "Construye un clasificador de edad: niño si es menor a 13, adolescente entre 13 y 17, adulto desde 18.",
                lineas: [
                  "edad = 15",
                  "if edad < 13:",
                  "    print('niño')",
                  "elif edad < 18:",
                  "    print('adolescente')",
                  "else:",
                  "    print('adulto')",
                ],
              } },
            { escribe: {
                instrucciones: "Escribe un programa: con temperatura = 35, muestra 'calor' si supera 30, y 'fresco' en caso contrario.",
                solucion: ["temperatura = 35", "if temperatura > 30:", "    print('calor')", "else:", "    print('fresco')"],
                pista: "Usa if con la comparación, sangría de 4 espacios en el print, y luego else con su bloque.",
              } },
            { texto: "Repaso: if ejecuta un bloque solo si la condición es True; elif agrega caminos intermedios revisados en orden; else cubre el resto; y la sangría define qué pertenece a cada bloque. Ya sabes tomar decisiones. Lo siguiente: repetir acciones sin escribir el mismo código mil veces: los bucles." },
          ],
        },
      ],
    },
    {
      titulo: "Loops (Bucles)",
      lecciones: [
        {
          titulo: "for, while y range",
          tipo: "larga",
          pasos: [
            { texto: "Imagina escribir print('Hola') cien veces. Insoportable, ¿verdad? Para eso existen los bucles: estructuras que repiten un bloque de código automáticamente. Son la herramienta perfecta para contar, recorrer datos y automatizar tareas repetitivas." },
            { texto: "El bucle más usado en Python es for, que itera sobre una secuencia. La forma más común usa range: for i in range(5): repite el bloque 5 veces, con i tomando los valores 0, 1, 2, 3 y 4. Ojo: range(5) empieza en 0 y NUNCA incluye el 5." },
            { piensa: "¿Cuántas veces se ejecuta: for i in range(4)?", opciones: ["3", "4", "5", "Infinitas"], correcta: 1 },
            { texto: "Dentro del bucle puedes usar la variable del contador: for i in range(3): print(i) muestra 0, luego 1 y luego 2, uno por línea. También puedes recorrer textos letra a letra: for letra in 'hola': imprime h, o, l, a. En Python, casi cualquier secuencia se puede recorrer con for... in." },
            { completa: {
                instrucciones: "Completa el bucle para contar del 1 al 5 usando range.",
                plantilla: ["for i in ", "(1, 6):\n    ", "(i)"],
                huecos: [1, 2],
                piezas: ["range", "print", "while", "loop"],
                correctas: [0, 1],
              } },
            { texto: "El otro bucle importante es while, que repite mientras una condición sea verdadera: n = 3, luego while n > 0: print(n) y n -= 1. Muestra 3, 2, 1 y se detiene cuando la condición se vuelve falsa. Úsalo cuando no sabes de antemano cuántas repeticiones necesitas." },
            { piensa: "¿Qué imprime: n = 2; while n > 0: print(n); n -= 1?", opciones: ["0 1 2", "2 1", "2 2 2...", "Nada"], correcta: 1 },
            { texto: "Cuidado con el bucle infinito: si la condición de while nunca se vuelve falsa (porque olvidas actualizar la variable), el programa se queda repitiendo para siempre. Por eso dentro de un while casi siempre modificas la variable de la condición." },
            { texto: "Dos palabras especiales controlan el flujo de un bucle: break lo termina completamente de inmediato, y continue salta a la siguiente repetición ignorando el resto del bloque. Además, puedes combinar bucles con los if de la lección pasada para filtrar dentro de la repetición." },
            { completa: {
                instrucciones: "Completa el bucle para que se detenga al llegar al 3 usando break.",
                plantilla: ["for i in range(10):\n    if i == 3:\n        ", "\n    print(i)"],
                huecos: [1],
                piezas: ["break", "continue", "stop", "return"],
                correctas: [0],
              } },
            { construye: {
                instrucciones: "Construye una cuenta regresiva del 3 al 1 usando while.",
                lineas: [
                  "n = 3",
                  "while n > 0:",
                  "    print(n)",
                  "    n -= 1",
                ],
              } },
            { escribe: {
                instrucciones: "Escribe un bucle for con range que muestre solo los números 0, 1 y 2.",
                solucion: ["for i in range(3):", "    print(i)"],
                pista: "range(3) genera exactamente 0, 1 y 2. Recuerda sangrar el print con 4 espacios.",
              } },
            { texto: "Repaso: for recorre secuencias (range, textos, y muy pronto, listas); while repite mientras una condición sea verdadera; break corta y continue salta. Ahora imagina repetir acciones sobre MUCHOS datos a la vez: para eso necesitas listas, el tema de la próxima lección." },
          ],
        },
      ],
    },
    {
      titulo: "Lists (Listas)",
      lecciones: [
        {
          titulo: "Crear, indexar y recorrer listas",
          tipo: "larga",
          pasos: [
            { texto: "Hasta ahora cada variable guardaba UN solo dato. Pero la vida real está llena de colecciones: una lista de compras, las notas de un estudiante, los usuarios de una app. La lista de Python guarda muchos valores ordenados en una sola variable: frutas = ['manzana', 'pera', 'uva']." },
            { texto: "Cada elemento ocupa una posición numerada llamada índice, que empieza en 0 (no en 1). frutas[0] es 'manzana', frutas[1] es 'pera'. Los índices negativos cuentan desde el final: frutas[-1] es 'uva'. Intentar frutas[5] lanza un IndexError porque esa posición no existe." },
            { piensa: "Con colores = ['rojo', 'verde', 'azul'], ¿qué devuelve colores[1]?", opciones: ["'rojo'", "'verde'", "'azul'", "Error"], correcta: 1 },
            { texto: "Las listas son MUTABLES: puedes cambiarlas después de crearlas. colores[0] = 'amarillo' reemplaza el primer elemento. Puedes incluso mezclar tipos en una misma lista: [25, 'Ana', True], aunque lo habitual es mantener un solo tipo por lista." },
            { completa: {
                instrucciones: "Completa el programa para cambiar el primer elemento de la lista.",
                plantilla: ["colores = ['rojo', 'verde', 'azul']\n", "[0] = 'amarillo'\nprint(", ")  # amarillo, verde, azul"],
                huecos: [1, 2],
                piezas: ["colores", "colores[0]", "print", "list"],
                correctas: [0, 0],
              } },
            { texto: "La función len() dice cuántos elementos hay: len(frutas) devuelve 3. Y aquí conectamos con los bucles de la lección anterior: puedes recorrer una lista completa con for fruta in frutas:. Cada vuelta del bucle, la variable toma el valor de un elemento." },
            { piensa: "¿Qué imprime: for n in [10, 20, 30]: print(n)?", opciones: ["10 20 30 en una línea", "10, 20 y 30, uno por línea", "0 1 2", "Error"], correcta: 1 },
            { texto: "También puedes recorrer por índice combinando range y len: for i in range(len(frutas)): print(frutas[i]). Es útil cuando necesitas la posición además del valor, por ejemplo para modificar elementos mientras recorres." },
            { construye: {
                instrucciones: "Construye un programa con tu lista de tareas y muéstralas una por una con un bucle.",
                lineas: [
                  "tareas = ['estudiar', 'ejercitarse', 'leer']",
                  "for tarea in tareas:",
                  "    print(tarea)",
                ],
              } },
            { escribe: {
                instrucciones: "Escribe: crea la lista notas con 15, 18 y 12; muestra la segunda nota usando su índice.",
                solucion: ["notas = [15, 18, 12]", "print(notas[1])"],
                pista: "La segunda nota está en el índice 1, porque los índices empiezan en 0.",
              } },
            { texto: "Repaso: una lista guarda colecciones ordenadas; los índices empiezan en 0 y los negativos cuentan desde el final; las listas son mutables; len() cuenta elementos; y for recorre cada elemento. Pero crear y recorrer es solo el comienzo: las listas tienen métodos para buscar, ordenar y modificar. Eso es lo siguiente." },
          ],
        },
      ],
    },
    {
      titulo: "List Operations (Operaciones con listas)",
      lecciones: [
        {
          titulo: "append, pop, sort, reverse, in y slicing",
          tipo: "larga",
          pasos: [
            { texto: "Ya sabes crear y recorrer listas. Ahora las manipularemos como un profesional. El método .append(x) agrega un elemento al final: numeros.append(40) convierte [10, 20, 30] en [10, 20, 30, 40]. Los métodos se escriben con un punto después de la variable." },
            { texto: "Para quitar elementos: .pop() extrae y devuelve el último elemento (y la lista queda sin él), .pop(1) extrae el del índice 1, y .remove(x) borra la primera aparición del valor x. Diferencia clave: pop trabaja por posición, remove por valor." },
            { piensa: "Con n = [1, 2, 3], ¿qué queda en n después de n.pop()?", opciones: ["[1, 2]", "[2, 3]", "[1, 3]", "[1, 2, 3]"], correcta: 0 },
            { texto: "Ordenar e invertir: .sort() ordena los elementos de menor a mayor (o alfabéticamente), .reverse() invierte el orden actual, y sorted(lista) devuelve una NUEVA lista ordenada sin tocar la original. Es sutil pero importante: sort modifica, sorted devuelve una copia." },
            { completa: {
                instrucciones: "Completa para ordenar la lista de menor a mayor y mostrarla.",
                plantilla: ["numeros = [30, 10, 20]\nnumeros.", "()\nprint(numeros)  # [10, 20, 30]"],
                huecos: [1],
                piezas: ["sort", "reverse", "append", "sorted"],
                correctas: [0],
              } },
            { texto: "Buscar: el operador in pregunta si un valor existe en la lista ('pera' in frutas devuelve True o False), y .index(x) devuelve la posición de la primera aparición de x. Recuerda: in también funciona con textos y lo usarás muchísimo junto con if." },
            { piensa: "¿Qué devuelve: 5 in [2, 5, 9]?", opciones: ["2", "True", "5", "False"], correcta: 1 },
            { texto: "El slicing (rebanado) extrae partes de la lista: numeros[1:3] devuelve los elementos de los índices 1 y 2 (el 3 es exclusivo), numeros[:2] los dos primeros y numeros[-2:] los dos últimos. Funciona igual con textos, así que ya dominas dos estructuras con una sola idea." },
            { completa: {
                instrucciones: "Completa el slicing para obtener los dos primeros elementos.",
                plantilla: ["numeros = [10, 20, 30, 40]\nprint(numeros[", ":2])  # [10, 20]"],
                huecos: [1],
                piezas: ["0", "1", "-1", "2"],
                correctas: [0],
              } },
            { texto: "Conectemos todo: puedes mezclar bucles, condicionales y métodos. Por ejemplo, recorrer una lista con for y usar if con in para procesar solo ciertos elementos. Este combo (lista + for + if) aparece en casi todos los programas reales de Python." },
            { construye: {
                instrucciones: "Construye: parte de una lista, agrega un elemento, ordena y muestra el resultado.",
                lineas: [
                  "numeros = [30, 10, 20]",
                  "numeros.append(5)",
                  "numeros.sort()",
                  "print(numeros)",
                ],
              } },
            { escribe: {
                instrucciones: "Escribe: con la lista letras = ['c', 'a', 'b'], muestra True si 'a' está en ella usando in dentro del print.",
                solucion: ["letras = ['c', 'a', 'b']", "print('a' in letras)"],
                pista: "La comparación con in va dentro del print, igual que hacíamos con > y ==.",
              } },
            { texto: "Repaso: append agrega, pop/remove quitan, sort/reverse ordenan e invierten, in busca y index localiza, y el slicing extrae porciones. Manejas las listas completas. En la próxima lección haremos lo mismo con el texto: las cadenas tienen trucos muy parecidos." },
          ],
        },
      ],
    },
    {
      titulo: "String Operations (Operaciones con cadenas)",
      lecciones: [
        {
          titulo: "Concatenar, dividir, buscar y formatear texto",
          tipo: "larga",
          pasos: [
            { texto: "Ya recorriste textos con for letra in 'hola' y usaste in sobre listas. Buenas noticias: una cadena (string) se comporta como una lista de caracteres. 'python'[0] es 'p', 'python'[-1] es 'n', 'python'[1:4] es 'yth', y len('python') es 6. Todo lo que aprendiste de slicing aplica aquí." },
            { texto: "Concatenar es unir cadenas con +: 'Hola ' + 'mundo' da 'Hola mundo'. También puedes repetir con *: 'ab' * 3 da 'ababab'. Pero ojo: no puedes sumar texto con número directamente; 'Tengo ' + 25 lanza un TypeError. La solución es str(25), que convierte el número a texto." },
            { piensa: "¿Qué resulta de: '5' * 3?", opciones: ["15", "'555'", "Error", "'5 5 5'"], correcta: 1 },
            { texto: "Dividir y unir: .split(',') corta una cadena y devuelve una LISTA: 'a,b,c'.split(',') devuelve ['a', 'b', 'c']. Al revés, ' '.join(lista) une una lista de textos en una sola cadena. Este par split/join es básico para procesar cualquier texto real, como archivos CSV." },
            { completa: {
                instrucciones: "Completa para dividir la frase en palabras y contar cuántas hay.",
                plantilla: ["frase = 'aprender python es genial'\npalabras = frase.", "( )\nprint(", "(palabras))  # 4"],
                huecos: [1, 2],
                piezas: ["split", "len", "count", "join"],
                correctas: [0, 1],
              } },
            { texto: "Buscar subcadenas: 'th' in 'python' devuelve True, y .find('th') devuelve la posición donde empieza (aquí 2), o -1 si no aparece. También tienes .upper() y .lower() para mayúsculas/minúsculas, .strip() para quitar espacios de los bordes y .replace(viejo, nuevo) para sustituir." },
            { piensa: "¿Qué devuelve 'python'.find('xz')?", opciones: ["0", "2", "True", "-1"], correcta: 3 },
            { texto: "Muy importante: las cadenas son INMUTABLES. Los métodos como upper() NO cambian la original: devuelven una nueva. Por eso debes guardar el resultado: saludo = 'hola'.upper(). Si solo escribes 'hola'.upper() sin guardarlo, el cambio se pierde. (Con las listas, en cambio, sort() SÍ modifica la original: ¿recuerdas la diferencia?)" },
            { completa: {
                instrucciones: "Completa para guardar en mayúsculas el nombre limpio de espacios.",
                plantilla: ["nombre = '  ana  '\nlimpio = nombre.strip().", "()\nprint(limpio)  # ANA"],
                huecos: [1],
                piezas: ["upper", "reverse", "append", "split"],
                correctas: [0],
              } },
            { texto: "Formatear con f-strings: poniendo una f antes de las comillas, puedes incrustar variables directo: nombre = 'Ana'; edad = 20; print(f'{nombre} tiene {edad} años') muestra Ana tiene 20 años. Es la forma moderna y preferida de construir mensajes, mejor que sumar pedazos con +." },
            { construye: {
                instrucciones: "Construye una presentación con f-string usando nombre y edad.",
                lineas: [
                  "nombre = 'Ana'",
                  "edad = 20",
                  "print(f'{nombre} tiene {edad} años')",
                ],
              } },
            { escribe: {
                instrucciones: "Escribe: con correo = 'ana@mail.com', muestra True si contiene '@'.",
                solucion: ["correo = 'ana@mail.com'", "print('@' in correo)"],
                pista: "Igual que buscábamos en listas, pero ahora sobre una cadena.",
              } },
            { texto: "Repaso: las cadenas se indexan y rebanan como listas; + concatena (convierte números con str); split divide y join une; find/in buscan; upper, strip y replace transforman (devolviendo NUEVAS cadenas); y las f-strings incrustan variables. Ya manejas datos sueltos y colecciones. ¿Y si pudieras empaquetar código reutilizable? Eso son las funciones." },
          ],
        },
      ],
    },
    {
      titulo: "Functions (Funciones)",
      lecciones: [
        {
          titulo: "Definir y llamar funciones",
          tipo: "larga",
          pasos: [
            { texto: "Has escrito muchos programas... y a veces repetido código parecido. Una función empaqueta un bloque de código bajo un nombre para reutilizarlo cuantas veces quieras. Se define con def, se llama escribiendo su nombre con paréntesis, y hace el código modular, legible y fácil de corregir." },
            { texto: "Estructura: def saludar(): y con sangría print('Hola'). Luego la LLAMAS escribiendo saludar(). Definir no ejecuta nada: solo prepara la receta. Cada llamada cocina el plato. Entre paréntesis puedes recibir datos, llamados PARÁMETROS: def saludar(nombre): recibe un nombre." },
            { piensa: "¿Qué palabra declara una función en Python?", opciones: ["function", "def", "fun", "define"], correcta: 1 },
            { texto: "return DEVUELVE un resultado al quien llamó: def doble(n): return n * 2. Al llamar doble(5) obtienes 10, que puedes guardar: resultado = doble(5). Diferencia clave: print solo MUESTRA en pantalla; return ENTREGA el valor para seguir trabajándolo." },
            { completa: {
                instrucciones: "Completa la función para que devuelva el área de un rectángulo.",
                plantilla: ["def area(base, altura):\n    ", " base * altura\n\nprint(area(4, 5))  # 20"],
                huecos: [1],
                piezas: ["return", "print", "def", "if"],
                correctas: [0],
              } },
            { texto: "Los parámetros pueden tener valores por defecto: def saludar(nombre, saludo='Hola') permite llamar saludar('Ana') (usa 'Hola') o saludar('Ana', 'Buenos días'). Y si una función no tiene return, devuelve None, un valor especial que significa 'nada'." },
            { piensa: "¿Qué devuelve una función sin return?", opciones: ["0", "Cadena vacía", "None", "Error"], correcta: 2 },
            { texto: "Ahora el gran combo: funciones + listas + bucles + condicionales, todo lo que ya dominas. Ejemplo clásico: una función que recibe una lista y devuelve los pares: def pares(numeros): resultado = []; for n in numeros: if n % 2 == 0: resultado.append(n); return resultado. Cada pieza que aprendiste encaja aquí." },
            { completa: {
                instrucciones: "Completa la función que cuenta cuántos elementos de la lista son mayores a 10 (usa lo visto en listas y bucles).",
                plantilla: ["def contar_mayores(numeros):\n    total = 0\n    for n in numeros:\n        ", " n > 10:\n            total += 1\n    ", " total\n\nprint(contar_mayores([5, 15, 20]))  # 2"],
                huecos: [1, 2],
                piezas: ["if", "for", "return", "print"],
                correctas: [0, 2],
              } },
            { construye: {
                instrucciones: "Construye una función que reciba un nombre y devuelva el saludo completo; luego muéstralo.",
                lineas: [
                  "def saludo(nombre):",
                  "    return 'Hola ' + nombre",
                  "mensaje = saludo('Ana')",
                  "print(mensaje)",
                ],
              } },
            { escribe: {
                instrucciones: "Escribe una función triple(n) que devuelva n por 3, y muestra triple(4).",
                solucion: ["def triple(n):", "    return n * 3", "print(triple(4))"],
                pista: "Primero def con su parámetro, sangría para el return, y por último la llamada dentro de print.",
              } },
            { texto: "Repaso: def define, los parámetros reciben datos, return entrega resultados (None si falta), y los valores por defecto dan flexibilidad. Las funciones son el ladrillo con el que se construye todo programa serio. Pero primero nos faltan unas estructuras de datos clave: tuplas, diccionarios y conjuntos." },
          ],
        },
      ],
    },
    {
      titulo: "Tuples, Dictionaries & Sets (Tuplas, diccionarios y conjuntos)",
      lecciones: [
        {
          titulo: "Elegir la estructura correcta",
          tipo: "larga",
          pasos: [
            { texto: "Python tiene cuatro formas principales de guardar colecciones, y ya dominas la lista []. Hoy conocerás las otras tres, cada una con una personalidad distinta: la tupla es una lista congelada, el diccionario guarda con etiquetas y el conjunto solo admite elementos únicos." },
            { texto: "La TUPLA () es ordenada pero INMUTABLE: después de crearla no puedes cambiarla. punto = (3, 5); punto[0] es 3, pero punto[0] = 9 lanza un TypeError. Úsala para datos fijos que van juntos: coordenadas, fechas, colores RGB. Además consume menos memoria que una lista." },
            { piensa: "¿Qué estructura NO se puede modificar después de crearla?", opciones: ["list", "tuple", "dict", "set"], correcta: 1 },
            { texto: "El DICCIONARIO {} guarda pares clave-valor, como un diccionario real: buscas la palabra (clave) y obtienes su definición (valor). user = {'nombre': 'Ana', 'edad': 20}; accedes con user['nombre'], que devuelve 'Ana'. Perfecto para objetos con muchas propiedades, como un usuario o un producto." },
            { completa: {
                instrucciones: "Completa el acceso y la modificación de un diccionario.",
                plantilla: ["user = {'nombre': 'Ana', 'edad': 20}\nprint(user[", "])  # Ana\nuser[", "] = 21  # actualiza la edad"],
                huecos: [1, 2],
                piezas: ["'nombre'", "'edad'", "nombre", "0"],
                correctas: [0, 1],
              } },
            { texto: "Los diccionarios son mutables: puedes agregar claves nuevas simplemente asignándolas (user['ciudad'] = 'Lima'), borrar con del user['edad'] y recorrerlas con for clave in user:. También existe .get('clave') que devuelve None (en vez de error) si la clave no existe." },
            { texto: "El CONJUNTO o set {} guarda elementos ÚNICOS, sin repetir: {1, 2, 2, 3} en realidad es {1, 2, 3}, por eso len({1, 2, 2, 3}) da 3. Se usa para eliminar duplicados (set(lista)) y para operaciones matemáticas: unión |, intersección &, diferencia -." },
            { piensa: "¿Qué devuelve: len({'a', 'b', 'a', 'c'})?", opciones: ["4", "3", "2", "1"], correcta: 1 },
            { texto: "Cómo elegir: ¿ordenada y modificable? → lista. ¿ordenada y fija? → tupla. ¿datos con etiquetas? → diccionario. ¿valores únicos o pertenencia rápida? → conjunto. Esta decisión se toma decenas de veces al día en programas reales, así que conviene tenerla automática." },
            { construye: {
                instrucciones: "Construye: dada una lista con repetidos, conviértela en conjunto para eliminarlos.",
                lineas: [
                  "numeros = [1, 2, 2, 3, 3, 3]",
                  "unicos = set(numeros)",
                  "print(unicos)",
                ],
              } },
            { escribe: {
                instrucciones: "Escribe: crea el diccionario producto con nombre 'Teclado' y precio 25; muestra el precio.",
                solucion: ["producto = {'nombre': 'Teclado', 'precio': 25}", "print(producto['precio'])"],
                pista: "Las claves van entre comillas; para acceder también uses corchetes con la clave entre comillas.",
              } },
            { texto: "Repaso: tupla = fija, diccionario = clave-valor, set = únicos, y cada uno resuelve un problema distinto. Próxima parada: las comprehensions de lista, una forma elegante de generar y filtrar listas en una sola línea usando los bucles que ya dominas." },
          ],
        },
      ],
    },
    {
      titulo: "List Comprehensions (Comprensión de listas)",
      lecciones: [
        {
          titulo: "Generar y filtrar listas en una sola línea",
          tipo: "larga",
          pasos: [
            { texto: "Patrón que ya conoces: partir de una lista, recorrerla con for, filtrar con if y construir una nueva con append. Es TAN común que Python le dedicó una sintaxis propia: la comprensión de lista (list comprehension). Hace en una línea lo que antes tomaba cinco." },
            { texto: "Estructura: [expresión for elemento in secuencia]. Ejemplo: [n * 2 for n in [1, 2, 3]] devuelve [2, 4, 6]. Se lee: 'por cada n en la lista, calcula n * 2 y junt todo en una lista nueva'. Es un bucle for comprimido." },
            { piensa: "¿Qué devuelve: [n * n for n in [1, 2, 3]]?", opciones: ["[1, 2, 3]", "[1, 4, 9]", "[2, 4, 6]", "6"], correcta: 1 },
            { texto: "Puedes agregar una condición al final para FILTRAR: [n for n in range(10) if n % 2 == 0] devuelve solo los pares [0, 2, 4, 6, 8]. Se lee: 'por cada n en 0..9, quédate solo con los pares'. Fíjate cómo combina comprehension + módulo + comparación: todo lo que ya sabes." },
            { completa: {
                instrucciones: "Completa la comprehension para quedarte solo con las palabras largas (más de 3 letras).",
                plantilla: ["palabras = ['sol', 'luna', 'mar', 'estrella']\nlargas = [p for p in palabras if ", "(p) > 3]\nprint(largas)  # ['luna', 'estrella']"],
                huecos: [2],
                piezas: ["len", "count", "sum", "find"],
                correctas: [0],
              } },
            { texto: "Compara ambos estilos. Con bucle clásico: resultado = []; for n in numeros: if n > 0: resultado.append(n). Con comprehension: [n for n in numeros if n > 0]. Mismo resultado, pero la segunda se lee como una frase. Ninguna es 'mejor': usa la que haga el código más claro en cada caso." },
            { texto: "La expresión puede ser cualquier cosa, incluso una llamada a función. ¿Recuerdas las funciones de hace unas lecciones? def limpiar(t): return t.strip().lower() y luego [limpiar(p) for p in frases] limpia toda la lista de golpe. Funciones + comprehensions es una combinación muy poderosa." },
            { completa: {
                instrucciones: "Completa la comprehension que convierte todos los nombres a mayúsculas.",
                plantilla: ["nombres = ['ana', 'luis', 'eva']\nmayusculas = [n.", "() for n in nombres]\nprint(mayusculas)  # ['ANA', 'LUIS', 'EVA']"],
                huecos: [1],
                piezas: ["upper", "lower", "strip", "join"],
                correctas: [0],
              } },
            { texto: "Existen comprehensions de diccionarios ({n: n * n for n in range(3)} crea {0: 0, 1: 1, 2: 4}) y de conjuntos ({n % 3 for n in range(6)}). La idea es idéntica: expresión + for + filtro opcional. Aprender una te regala las tres." },
            { construye: {
                instrucciones: "Construye: de una lista de números, genera en una línea solo los mayores a 10.",
                lineas: [
                  "numeros = [5, 12, 8, 20, 3]",
                  "mayores = [n for n in numeros if n > 10]",
                  "print(mayores)",
                ],
              } },
            { escribe: {
                instrucciones: "Escribe una comprehension que duplique cada número de [1, 2, 3].",
                solucion: ["resultado = [n * 2 for n in [1, 2, 3]]", "print(resultado)"],
                pista: "Corchetes, expresión n * 2, luego for n in la lista.",
              } },
            { texto: "Repaso: [expresión for x in secuencia if filtro] genera y filtra listas en una línea; existen versiones para diccionarios y sets. Tu caja de herramientas de datos está casi completa. Falta la pieza más grande: modelar el mundo con clases y objetos." },
          ],
        },
      ],
    },
    {
      titulo: "Classes (Clases)",
      lecciones: [
        {
          titulo: "Clases, objetos y constructores",
          tipo: "larga",
          pasos: [
            { texto: "Los diccionarios agrupan datos ('nombre', 'edad')... pero los datos sin comportamiento son solo la mitad de la historia. Una CLASE es una plantilla que define AMBOS: qué datos tiene algo (atributos) y qué puede hacer (métodos). Cada objeto creado desde la clase es una INSTANCIA." },
            { texto: "Sintaxis: class Perro: y con sangría los métodos. El constructor especial __init__ se ejecuta automáticamente al crear cada objeto: def __init__(self, nombre): self.nombre = nombre. La palabra self representa al objeto actual, y es SIEMPRE el primer parámetro de los métodos." },
            { piensa: "¿Qué método es el constructor de una clase en Python?", opciones: ["__start__", "__init__", "constructor", "__new__"], correcta: 1 },
            { texto: "Crear objetos es llamar a la clase como si fuera una función: mi_perro = Perro('Rex'). Python pasa 'Rex' al __init__, que lo guarda en self.nombre. Luego cada objeto tiene sus propios datos: otro_perro = Perro('Luna') tiene SU propio nombre, independiente del primero." },
            { completa: {
                instrucciones: "Completa la clase para que cada perro guarde su nombre y pueda ladrar.",
                plantilla: ["class Perro:\n    def ", "(self, nombre):\n        self.nombre = nombre\n\n    def ladrar(self):\n        return '¡Guau!'\n\nmi_perro = Perro('Rex')\nprint(mi_perro.nombre)"],
                huecos: [1],
                piezas: ["__init__", "__start__", "init", "constructor"],
                correctas: [0],
              } },
            { texto: "Los métodos se llaman con punto: mi_perro.ladrar() devuelve '¡Guau!'. Nota que NO pasas self al llamar: Python lo hace solo. Dentro de los métodos, self.nombre te da acceso a los datos del objeto, igual que user['nombre'] en los diccionarios, pero más elegante." },
            { piensa: "Dentro de un método, ¿qué representa self?", opciones: ["La clase entera", "El objeto actual que ejecuta el método", "Una variable global", "El intérprete de Python"], correcta: 1 },
            { texto: "Puedes combinar todo lo aprendido: una clase que recibe una LISTA en su constructor, guarda los métodos de siempre, y usa bucles y condicionales internamente. Por ejemplo, una clase Estudiante con una lista de notas y un método promedio() que las recorre con for y las suma." },
            { completa: {
                instrucciones: "Completa el método promedio que recorre la lista de notas del estudiante.",
                plantilla: ["class Estudiante:\n    def __init__(self, notas):\n        self.notas = notas\n\n    def promedio(self):\n        total = 0\n        ", " n in self.notas:\n            total += n\n        return total / ", "(self.notas)"],
                huecos: [1, 2],
                piezas: ["for", "while", "len", "sum"],
                correctas: [0, 2],
              } },
            { construye: {
                instrucciones: "Construye: crea la clase Libro con título, y un método leer() que devuelve un mensaje.",
                lineas: [
                  "class Libro:",
                  "    def __init__(self, titulo):",
                  "        self.titulo = titulo",
                  "    def leer(self):",
                  "        return 'Leyendo ' + self.titulo",
                  "mi_libro = Libro('Python fácil')",
                  "print(mi_libro.leer())",
                ],
              } },
            { escribe: {
                instrucciones: "Escribe una clase Gato con método maullar() que devuelva '¡Miau!', crea un gato y hazlo maullar.",
                solucion: ["class Gato:", "    def maullar(self):", "        return '¡Miau!'", "michi = Gato()", "print(michi.maullar())"],
                pista: "class + nombre, sangría, def maullar(self): con sangría otra vez, return, y luego instancia y llamada.",
              } },
            { texto: "Repaso: class define la plantilla, __init__ construye cada objeto, self es el objeto actual, los métodos son sus acciones y la instancia se crea con Perro('Rex'). Ya modelas cosas individuales. La POO de verdad aparece cuando las clases colaboran entre sí: esa es la última lección de la ruta." },
          ],
        },
      ],
    },
    {
      titulo: "Object-Oriented Programming (POO)",
      lecciones: [
        {
          titulo: "Encapsulamiento, herencia y polimorfismo",
          tipo: "larga",
          pasos: [
            { texto: "Ya creaste clases y objetos. La Programación Orientada a Objetos (POO) va más allá: es una forma de estructurar programas GRANDES haciendo que las clases colaboren, con cuatro pilares: encapsulamiento, abstracción, herencia y polimorfismo. Hoy verás los que más se usan." },
            { texto: "El ENCAPSULAMIENTO protege los datos internos del objeto. Convención en Python: atributos con _guion_bajo son 'de uso interno' y con __doble guion son 'privados'. La clase ofrece métodos (como obtener_saldo()) para acceder de forma controlada, en lugar de tocar los datos crudos desde afuera." },
            { piensa: "¿Qué pilar de la POO protege los datos internos del objeto?", opciones: ["Herencia", "Encapsulamiento", "Polimorfismo", "Abstracción"], correcta: 1 },
            { texto: "La HERENCIA permite que una clase reutilice otra: class Cachorro(Perro) significa que Cachorro hereda todos los atributos y métodos de Perro, y puede AGREGAR los suyos o SOBRESCRIBIR los del padre. Se lee: 'un cachorro ES UN perro'. Evita copiar y pegar código entre clases parecidas." },
            { completa: {
                instrucciones: "Completa la clase hija que hereda del padre y sobrescribe su método.",
                plantilla: ["class Animal:\n    def hablar(self):\n        return '...'\n\nclass Gato(", "):\n    def ", "(self):\n        return '¡Miau!'  # sobrescribe al padre\n\nprint(Gato().hablar())  # ¡Miau!"],
                huecos: [2, 3],
                piezas: ["Animal", "hablar", "self", "hereda"],
                correctas: [0, 1],
              } },
            { texto: "El POLIMORFISMO aparece de la herencia: distintas clases responden AL MISMO método con comportamientos distintos. Si Gato y Perro tienen hablar(), puedes recorrer [gato, perro] con for animal in animales: animal.hablar() y cada uno responde a su manera. El mismo mensaje, respuestas diferentes." },
            { piensa: "Si Gato define su propio hablar() y lo llamas sobre un gato, ¿qué versión se ejecuta?", opciones: ["Marca un error", "Siempre la del padre", "Su propia versión (sobrescritura)", "Las dos versiones"], correcta: 2 },
            { texto: "La ABSTRACCIÓN expone solo lo necesario y oculta la complejidad. Cuando llamas mi_lista.sort() no sabes (ni te importa) qué algoritmo usa por dentro: solo sabes que ordena. Así diseñan las clases para que otros las usen: interfaz simple, detalles escondidos." },
            { construye: {
                instrucciones: "Construye una jerarquía: clase base Animal y clase hija Perro que sobrescribe hablar.",
                lineas: [
                  "class Animal:",
                  "    def hablar(self):",
                  "        return '...'",
                  "class Perro(Animal):",
                  "    def hablar(self):",
                  "        return '¡Guau!'",
                  "print(Perro().hablar())",
                ],
              } },
            { escribe: {
                instrucciones: "Escribe la clase Vehiculo con atributo ruedas en el constructor; crea uno con 4 ruedas y muestra su atributo.",
                solucion: ["class Vehiculo:", "    def __init__(self, ruedas):", "        self.ruedas = ruedas", "auto = Vehiculo(4)", "print(auto.ruedas)"],
                pista: "Primero __init__ con self y ruedas; guarda en self.ruedas; instancia pasando 4.",
              } },
            { texto: "Repaso final: encapsulamiento protege los datos, herencia reutiliza entre clases, polimorfismo da respuestas distintas al mismo método y abstracción oculta la complejidad. Con esto dominas desde print() hasta POO completa: los fundamentos de Python para seguir hacia APIs, archivos y proyectos reales. ¡Felicidades por terminar la ruta!" },
          ],
        },
      ],
    },
  ],
};
