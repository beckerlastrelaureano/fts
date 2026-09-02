// database.js — Base de datos interna de ejercicios de GymTracker / Becker App
// Generado a partir de una lista curada de ejercicios reales de gimnasio.
// No requiere conexión a internet para el texto: todos los datos viven en este archivo.
// El campo "imagenesExternas" apunta a fotos reales de referencia alojadas en el
// proyecto de dominio público "Free Exercise DB" (github.com/yuhonas/free-exercise-db,
// licencia Unlicense). Se cargan directo desde ahí cuando hay conexión; si no hay match
// o no hay internet, la app muestra automáticamente la ilustración de línea de respaldo.

const MUSCLE_GROUPS = [
  "Pecho",
  "Espalda",
  "Hombros",
  "Bíceps",
  "Tríceps",
  "Trapecios",
  "Antebrazos",
  "Abdomen",
  "Oblicuos",
  "Cuádriceps",
  "Isquiotibiales",
  "Glúteos",
  "Gemelos",
  "Aductores",
  "Abductores",
  "Lumbares",
  "Manguito rotador",
  "Cuello",
  "Columna",
  "Cadera",
  "Tobillos"
];

const EQUIPMENT_LIST = [
  "Banda elástica",
  "Barra EZ",
  "Barra olímpica",
  "Cuerda",
  "Disco",
  "Kettlebell",
  "Landmine",
  "Mancuernas",
  "Máquina",
  "Peso corporal",
  "Polea",
  "Rodillo de espuma",
  "Smith",
  "TRX"
];

const EXERCISE_DATABASE = [
  {
    "id": "ej-001-press-de-banca-con-barra",
    "nombre": "Press de banca con barra",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps, Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press de banca con barra es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps, hombros. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas",
      "Press declinado con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-001-press-de-banca-con-barra/supino%20reto%20%20no%20cross.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-001-press-de-banca-con-barra/supino%20reto%20pegada%20aberta.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-001-press-de-banca-con-barra/Supino.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-001-press-de-banca-con-barra/Supino%20barra.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-001-press-de-banca-con-barra/Supino%20canadense.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-001-press-de-banca-con-barra/Supino%20smith.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-001-press-de-banca-con-barra/Supino%20em%20P%C3%A9%20com%20Faixa%20El%C3%A1stica.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-002-press-de-banca-con-mancuernas",
    "nombre": "Press de banca con mancuernas",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps, Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press de banca con mancuernas es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps, hombros. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso"
    ],
    "consejos": [
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press inclinado con barra",
      "Press inclinado con mancuernas",
      "Press declinado con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Bench_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Bench_Press/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-002-press-de-banca-con-mancuernas/supino%20reto%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-002-press-de-banca-con-mancuernas/Supino%20reto%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-002-press-de-banca-con-mancuernas/SUPINO%20ALTERNADO%20COM%20HALTERES.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-002-press-de-banca-con-mancuernas/Supino%20com%20halteres.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-002-press-de-banca-con-mancuernas/Supino%20fechado%20com%20halteres.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-002-press-de-banca-con-mancuernas/Supino%20incliando%20com%20halteres.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-003-press-inclinado-con-barra",
    "nombre": "Press inclinado con barra",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Hombros, Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press inclinado con barra es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de hombros, tríceps. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Hombros",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con mancuernas",
      "Press declinado con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Incline_Bench_Press_-_Medium_Grip/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-003-press-inclinado-con-barra/supino%20inclinado%20%20aparelho%20articulado.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-003-press-inclinado-con-barra/supino%20inclinado%20banco.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-003-press-inclinado-con-barra/supino%20inclinado%20banco%20cross.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-003-press-inclinado-con-barra/supino%20inclinado%20banco%20no%20smith.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-003-press-inclinado-con-barra/supino%20inclinado%20no%20smith.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-003-press-inclinado-con-barra/Supino%20inclinado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-003-press-inclinado-con-barra/Supino%20inclinado%20cabo.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-004-press-inclinado-con-mancuernas",
    "nombre": "Press inclinado con mancuernas",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Hombros, Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press inclinado con mancuernas es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de hombros, tríceps. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Hombros",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press declinado con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Grip_Incline_DB_Bench_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Grip_Incline_DB_Bench_Press/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-004-press-inclinado-con-mancuernas/Supino%20inclinado%20com%20halteres.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-005-press-declinado-con-barra",
    "nombre": "Press declinado con barra",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press declinado con barra es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Barbell_Bench_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Barbell_Bench_Press/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-005-press-declinado-con-barra/supino%20declinado%20barra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-005-press-declinado-con-barra/supino%20declinado%20barrapegada%20aberta.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-005-press-declinado-con-barra/supino%20declinado%20no%20smit.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-006-press-declinado-con-mancuernas",
    "nombre": "Press declinado con mancuernas",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press declinado con mancuernas es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Bench_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Bench_Press/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-006-press-declinado-con-mancuernas/supino%20declinado%20com%20halteres.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-007-press-de-pecho-en-maquina",
    "nombre": "Press de pecho en máquina",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps, Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Press de pecho en máquina es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps, hombros. Se ejecuta con máquina y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Chest_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Chest_Press/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-007-press-de-pecho-en-maquina/supino%20articulado%20maquina.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-007-press-de-pecho-en-maquina/supino%20horizontal%20maquina.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-007-press-de-pecho-en-maquina/Supino%20Incliado%20Maquina.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-007-press-de-pecho-en-maquina/supino%20vertical%20pegada%20neutra%20maquina.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-007-press-de-pecho-en-maquina/Supino%20m%C3%A1quina.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-008-press-inclinado-en-maquina",
    "nombre": "Press inclinado en máquina",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Press inclinado en máquina es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de hombros. Se ejecuta con máquina y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Incline_Chest_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Incline_Chest_Press/1.jpg"
    ]
  },
  {
    "id": "ej-009-press-de-banca-en-smith",
    "nombre": "Press de banca en Smith",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps, Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Smith",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-smith",
    "imagen": "",
    "video": "",
    "descripcion": "Press de banca en Smith es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps, hombros. Se ejecuta con smith y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Bench_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Bench_Press/1.jpg"
    ]
  },
  {
    "id": "ej-010-press-inclinado-en-smith",
    "nombre": "Press inclinado en Smith",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Smith",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-smith",
    "imagen": "",
    "video": "",
    "descripcion": "Press inclinado en Smith es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de hombros. Se ejecuta con smith y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Incline_Chest_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Incline_Chest_Press/1.jpg"
    ]
  },
  {
    "id": "ej-011-aperturas-con-mancuernas",
    "nombre": "Aperturas con mancuernas",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Hombros",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Aperturas con mancuernas es un ejercicio aislado enfocado principalmente en pecho, con participación secundaria de hombros. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Pecho",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Aperturas inclinadas con mancuernas",
      "Aperturas en polea alta",
      "Aperturas en polea baja",
      "Aperturas en TRX"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Flyes/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Flyes/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/crucifixo%20beixo%20no%20croos%20em%20pe.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/crucifixo%20inclinado%20banco%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20Maquina.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/crucifixo%20no%20cross%20banco%20reto.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/crucifixo%20no%20cross%20em%20p%C3%A9.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/crucifixo%20no%20cross%20polia%20alta.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/supino%20crucifixo%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/voador%20maquina.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20invertido%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20invertido%20com%20halteres%201.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20invertido%20na%20m%C3%A1qina.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20inverto%20com%20halteres%2001.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20invertido%20com%20halter.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20invertido%20com%20halteres.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20invertido%20polia%20baixa.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20inclinado%20com%20halteres.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20inclinado%20no%20cabo%202.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20m%C3%A1quina.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20pegada%20pronada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/CRUCIFIXO%20POLIA%20BAIXA.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20unilateral%20declinado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Peck%20deck.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20com%20TRX.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-011-aperturas-con-mancuernas/Crucifixo%20invertido%20com%20gymstick%20para%20deltoides%20posterior.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-012-aperturas-inclinadas-con-mancuernas",
    "nombre": "Aperturas inclinadas con mancuernas",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Hombros",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Aperturas inclinadas con mancuernas es un ejercicio aislado enfocado principalmente en pecho, con participación secundaria de hombros. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Pecho",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Aperturas con mancuernas",
      "Aperturas en polea alta",
      "Aperturas en polea baja",
      "Aperturas en TRX"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Flyes/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Flyes/1.jpg"
    ]
  },
  {
    "id": "ej-013-aperturas-en-polea-alta",
    "nombre": "Aperturas en polea alta",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Aperturas en polea alta es un ejercicio aislado enfocado principalmente en pecho. Se ejecuta con polea y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Pecho"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Aperturas con mancuernas",
      "Aperturas inclinadas con mancuernas",
      "Aperturas en polea baja",
      "Aperturas en TRX"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Cable_Flyes/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Cable_Flyes/1.jpg"
    ]
  },
  {
    "id": "ej-014-aperturas-en-polea-baja",
    "nombre": "Aperturas en polea baja",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Aperturas en polea baja es un ejercicio aislado enfocado principalmente en pecho. Se ejecuta con polea y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Pecho"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Aperturas con mancuernas",
      "Aperturas inclinadas con mancuernas",
      "Aperturas en polea alta",
      "Aperturas en TRX"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Cable_Flyes/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Cable_Flyes/1.jpg"
    ]
  },
  {
    "id": "ej-015-pec-deck-contractora",
    "nombre": "Pec deck (contractora)",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Pec deck (contractora) es un ejercicio aislado enfocado principalmente en pecho. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Pecho"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Aperturas con mancuernas",
      "Aperturas inclinadas con mancuernas",
      "Aperturas en polea alta",
      "Aperturas en polea baja"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-016-flexiones-de-brazos",
    "nombre": "Flexiones de brazos",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps, Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Flexiones de brazos es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps, hombros. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Flexiones con lastre",
      "Flexiones diamante",
      "Flexiones con manos elevadas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clock_Push-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clock_Push-Up/1.jpg"
    ]
  },
  {
    "id": "ej-017-flexiones-con-lastre",
    "nombre": "Flexiones con lastre",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Avanzado",
    "icono": "icon-chest",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Flexiones con lastre es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps. Se ejecuta con peso corporal y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Flexiones de brazos",
      "Flexiones diamante",
      "Flexiones con manos elevadas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clock_Push-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clock_Push-Up/1.jpg"
    ]
  },
  {
    "id": "ej-018-fondos-en-paralelas",
    "nombre": "Fondos en paralelas",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps, Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Fondos en paralelas es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps, hombros. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Dips/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Dips/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-018-fondos-en-paralelas/weighted-dips.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-018-fondos-en-paralelas/Dips%20na%20cadeira.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-018-fondos-en-paralelas/Impossible%20Dips.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-018-fondos-en-paralelas/Mergulho%20Coreano.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-018-fondos-en-paralelas/Mergulho%20de%20tr%C3%ADceps.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-018-fondos-en-paralelas/Mergulho%20reverso.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-019-fondos-en-maquina-asistida",
    "nombre": "Fondos en máquina asistida",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Fondos en máquina asistida es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps. Se ejecuta con máquina y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dip_Machine/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dip_Machine/1.jpg"
    ]
  },
  {
    "id": "ej-020-pullover-con-mancuerna",
    "nombre": "Pullover con mancuerna",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Espalda",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Pullover con mancuerna es un ejercicio aislado enfocado principalmente en pecho, con participación secundaria de espalda. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Pecho",
      "Espalda"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Aperturas en polea alta",
      "Aperturas en polea baja",
      "Pec deck (contractora)",
      "Pullover en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Arm_Dumbbell_Pullover/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Arm_Dumbbell_Pullover/1.jpg"
    ]
  },
  {
    "id": "ej-021-pullover-en-polea",
    "nombre": "Pullover en polea",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Espalda",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Pullover en polea es un ejercicio aislado enfocado principalmente en pecho, con participación secundaria de espalda. Se ejecuta con polea y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Pecho",
      "Espalda"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Aperturas con mancuernas",
      "Aperturas inclinadas con mancuernas",
      "Pec deck (contractora)",
      "Pullover con mancuerna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Arm_Barbell_Pullover/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Arm_Barbell_Pullover/1.jpg"
    ]
  },
  {
    "id": "ej-022-press-con-banda-elastica",
    "nombre": "Press con banda elástica",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Press con banda elástica es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Press_-_With_Bands/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Press_-_With_Bands/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-022-press-con-banda-elastica/Crucifixo%20invertido%20el%C3%A1stico.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-023-press-cerrado-en-banco",
    "nombre": "Press cerrado en banco",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press cerrado en banco es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/1.jpg"
    ]
  },
  {
    "id": "ej-024-cruce-de-poleas-alto-a-bajo",
    "nombre": "Cruce de poleas alto a bajo",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Cruce de poleas alto a bajo es un ejercicio aislado enfocado principalmente en pecho. Se ejecuta con polea y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Pecho"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Aperturas con mancuernas",
      "Aperturas inclinadas con mancuernas",
      "Pec deck (contractora)",
      "Pullover con mancuerna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crossover/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crossover/1.jpg"
    ]
  },
  {
    "id": "ej-025-cruce-de-poleas-bajo-a-alto",
    "nombre": "Cruce de poleas bajo a alto",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Cruce de poleas bajo a alto es un ejercicio aislado enfocado principalmente en pecho. Se ejecuta con polea y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Pecho"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Aperturas con mancuernas",
      "Aperturas inclinadas con mancuernas",
      "Pec deck (contractora)",
      "Pullover con mancuerna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crossover/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crossover/1.jpg"
    ]
  },
  {
    "id": "ej-026-press-banca-agarre-ancho",
    "nombre": "Press banca agarre ancho",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press banca agarre ancho es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de hombros. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/1.jpg"
    ]
  },
  {
    "id": "ej-027-press-banca-agarre-cerrado",
    "nombre": "Press banca agarre cerrado",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press banca agarre cerrado es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/1.jpg"
    ]
  },
  {
    "id": "ej-028-flexiones-diamante",
    "nombre": "Flexiones diamante",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Flexiones diamante es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Flexiones de brazos",
      "Flexiones con lastre",
      "Flexiones con manos elevadas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clock_Push-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clock_Push-Up/1.jpg"
    ]
  },
  {
    "id": "ej-029-press-inclinado-agarre-neutro-con-mancuernas",
    "nombre": "Press inclinado agarre neutro con mancuernas",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press inclinado agarre neutro con mancuernas es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de hombros. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Grip_Incline_DB_Bench_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Grip_Incline_DB_Bench_Press/1.jpg"
    ]
  },
  {
    "id": "ej-030-flexiones-con-manos-elevadas",
    "nombre": "Flexiones con manos elevadas",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Flexiones con manos elevadas es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Flexiones de brazos",
      "Flexiones con lastre",
      "Flexiones diamante"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clock_Push-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clock_Push-Up/1.jpg"
    ]
  },
  {
    "id": "ej-031-press-de-pecho-en-trx",
    "nombre": "Press de pecho en TRX",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps, Hombros",
    "tipo": "Compuesto",
    "equipamiento": "TRX",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-trx",
    "imagen": "",
    "video": "",
    "descripcion": "Press de pecho en TRX es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps, hombros. Se ejecuta con trx y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Chest_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Chest_Press/1.jpg"
    ]
  },
  {
    "id": "ej-032-press-de-pecho-con-kettlebell-en-suelo",
    "nombre": "Press de pecho con kettlebell en suelo",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Kettlebell",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-kettlebell",
    "imagen": "",
    "video": "",
    "descripcion": "Press de pecho con kettlebell en suelo es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps. Se ejecuta con kettlebell y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Chest_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Chest_Press/1.jpg"
    ]
  },
  {
    "id": "ej-033-press-banca-con-cadenas",
    "nombre": "Press banca con cadenas",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-chest",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press banca con cadenas es un ejercicio compuesto enfocado principalmente en pecho, con participación secundaria de tríceps. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Pecho",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado con barra",
      "Press inclinado con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/1.jpg"
    ]
  },
  {
    "id": "ej-034-aperturas-en-trx",
    "nombre": "Aperturas en TRX",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "TRX",
    "dificultad": "Intermedio",
    "icono": "icon-chest",
    "iconoEquipo": "icon-trx",
    "imagen": "",
    "video": "",
    "descripcion": "Aperturas en TRX es un ejercicio aislado enfocado principalmente en pecho. Se ejecuta con trx y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Pecho"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Aperturas con mancuernas",
      "Aperturas inclinadas con mancuernas",
      "Aperturas en polea alta",
      "Aperturas en polea baja"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Flyes/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Flyes/1.jpg"
    ]
  },
  {
    "id": "ej-035-dominadas",
    "nombre": "Dominadas",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps, Antebrazos",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Avanzado",
    "icono": "icon-back",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Dominadas es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps, antebrazos. Se ejecuta con peso corporal y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps",
      "Antebrazos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Dominadas supinas",
      "Dominadas asistidas en máquina",
      "Dominadas agarre ancho",
      "Dominadas agarre neutro"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/band-assisted-pull-up.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20fixa%20nuca.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20fixa%20pegada%20aberta.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/eccentric-pull-up.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/pull-up.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20fixa%20Assistida%20com%20Faixa%20El%C3%A1stica.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20fixa%20com%20Arco.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20fixa%20com%20bra%C3%A7os%20alternados.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20Fixa%20com%20Giro.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20fixa%20com%20L-sit.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20Fixa%20com%20Pegada%20Fechada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20fixa%20com%20pegada%20invertida%20assistido.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20fixa%20com%20pegada%20neutra.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20Fixa%20com%20Pegada%20por%20Tr%C3%A1s%20do%20Pesco%C3%A7o.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20Fixa%20com%20Pegada%20Supinada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20fixa%20com%20peso.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20fixa%20com%20Salto.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20Fixa%20de%20Cabe%C3%A7a%20para%20Baixo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20Fixa%20para%20o%20Braquial.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Barra%20fixa%20pegada%20invertida.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-035-dominadas/Puxada%20escapular%20na%20barra%20fixa.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-036-dominadas-supinas",
    "nombre": "Dominadas supinas",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-back",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Dominadas supinas es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Dominadas",
      "Dominadas asistidas en máquina",
      "Dominadas agarre ancho",
      "Dominadas agarre neutro"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/1.jpg"
    ]
  },
  {
    "id": "ej-037-dominadas-asistidas-en-maquina",
    "nombre": "Dominadas asistidas en máquina",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Dominadas asistidas en máquina es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con máquina y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Dominadas",
      "Dominadas supinas",
      "Dominadas agarre ancho",
      "Dominadas agarre neutro"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Assisted_Pull-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Assisted_Pull-Up/1.jpg"
    ]
  },
  {
    "id": "ej-038-dominadas-agarre-ancho",
    "nombre": "Dominadas agarre ancho",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Avanzado",
    "icono": "icon-back",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Dominadas agarre ancho es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de hombros. Se ejecuta con peso corporal y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Dominadas",
      "Dominadas supinas",
      "Dominadas asistidas en máquina",
      "Dominadas agarre neutro"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/1.jpg"
    ]
  },
  {
    "id": "ej-039-dominadas-agarre-neutro",
    "nombre": "Dominadas agarre neutro",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-back",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Dominadas agarre neutro es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Dominadas",
      "Dominadas supinas",
      "Dominadas asistidas en máquina",
      "Dominadas agarre ancho"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/1.jpg"
    ]
  },
  {
    "id": "ej-040-jalon-al-pecho-en-polea",
    "nombre": "Jalón al pecho en polea",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Jalón al pecho en polea es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con polea y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe"
    ],
    "variantes": [
      "Jalón tras nuca",
      "Jalón con agarre cerrado",
      "Jalón con brazos rectos",
      "Jalón unilateral en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/puxada%20maquina.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/puxada%20maquina%20pegada%20supinada.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/Puxada%20isom%C3%A9trica.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/close-grip-lat-pulldown-standard-bar-attachment.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/Pulldown%20com%20corda.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/Puxada%20alta%20com%20el%C3%A1stico.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/Puxada%20alta%20fechada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/Puxada%20alta%20nuca.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/Puxada%20alta%20polia.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/Puxada%20alta%20tradicional.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/Puxada%20alta%20triangulo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/Puxada%20cruzada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/wide-grip-lat-pulldown.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/Puxada%20Front%20Lever.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/Puxada%20isom%C3%A9trica-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-040-jalon-al-pecho-en-polea/Puxada%20ajoelhada%20com%20banda%20de%20resist%C3%AAncia.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-041-jalon-tras-nuca",
    "nombre": "Jalón tras nuca",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-back",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Jalón tras nuca es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de hombros. Se ejecuta con polea y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Jalón al pecho en polea",
      "Jalón con agarre cerrado",
      "Jalón con brazos rectos",
      "Jalón unilateral en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/1.jpg"
    ]
  },
  {
    "id": "ej-042-jalon-con-agarre-cerrado",
    "nombre": "Jalón con agarre cerrado",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Jalón con agarre cerrado es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con polea y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe"
    ],
    "variantes": [
      "Jalón al pecho en polea",
      "Jalón tras nuca",
      "Jalón con brazos rectos",
      "Jalón unilateral en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/1.jpg"
    ]
  },
  {
    "id": "ej-043-remo-con-barra",
    "nombre": "Remo con barra",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps, Trapecios",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-back",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Remo con barra es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps, trapecios. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps",
      "Trapecios"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo"
    ],
    "variantes": [
      "Remo con mancuerna a una mano",
      "Remo en máquina",
      "Remo en polea baja sentado",
      "Remo en polea con agarre en V"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20aberta%20no%20banco%20inclinada%20pega%20supinada.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20articulada.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20articulada%20pegada%20supinada.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20baixa%20no%20pulley%20pegada%20aberta%20supinada.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20beixa%20no%20pulley%20triangulo.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20cavalinha%20pegada%20aberta.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20cavalino%20com%20barra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20com%20banco%20inclinado%20com%20haltres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20com%20barra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20inclinada%20no%20smith.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20inclinda%20no%20banco%20pegada%20supinda%20puxada%20fechada.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20no%20banco%20inclinado%20pegada%20pronada%20com%20barra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20serrote.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/remada%20unilateral%20cavalindo%20barra%20puxada%20fechada.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20Invertida%20na%20Mesa.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20aberta%20pronada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20ajoelhado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20alta.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20alta%20barra.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20alta%20no%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20apoio%20banco%20inclinado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20apoio%20peitoral%20banco.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20cavalinho.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20cavalinho%20barra.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20com%20triangulo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20curvada%20no%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20curvada%20pronada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20curvada%20pronada%20aberta.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20fechada%20supinada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20inclinada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20invertida%20TRX.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20no%20smith.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20serrote.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20com%20o%20Peso%20do%20Corpo%20na%20Porta.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20Invertida%20Com%20Argolas.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20Invertida%20na%20Mesa-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20afastada%20com%20banda%20de%20resist%C3%AAncia.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-043-remo-con-barra/Remada%20sentada%20com%20faixa.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-044-remo-con-mancuerna-a-una-mano",
    "nombre": "Remo con mancuerna a una mano",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Remo con mancuerna a una mano es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Remo con barra",
      "Remo en máquina",
      "Remo en polea baja sentado",
      "Remo en polea con agarre en V"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row/1.jpg"
    ]
  },
  {
    "id": "ej-045-remo-en-maquina",
    "nombre": "Remo en máquina",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Remo en máquina es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con máquina y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Remo con barra",
      "Remo con mancuerna a una mano",
      "Remo en polea baja sentado",
      "Remo en polea con agarre en V"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_High_Row/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_High_Row/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-045-remo-en-maquina/remada%20maquina%20pronada.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-045-remo-en-maquina/Remada%20m%C3%A1quina.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-046-remo-en-polea-baja-sentado",
    "nombre": "Remo en polea baja sentado",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Remo en polea baja sentado es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con polea y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición"
    ],
    "consejos": [
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe"
    ],
    "variantes": [
      "Remo con barra",
      "Remo con mancuerna a una mano",
      "Remo en máquina",
      "Remo en polea con agarre en V"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elevated_Cable_Rows/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elevated_Cable_Rows/1.jpg"
    ]
  },
  {
    "id": "ej-047-remo-en-polea-con-agarre-en-v",
    "nombre": "Remo en polea con agarre en V",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Remo en polea con agarre en V es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con polea y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Remo con barra",
      "Remo con mancuerna a una mano",
      "Remo en máquina",
      "Remo en polea baja sentado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elevated_Cable_Rows/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elevated_Cable_Rows/1.jpg"
    ]
  },
  {
    "id": "ej-048-remo-en-t",
    "nombre": "Remo en T",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-back",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Remo en T es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Remo con barra",
      "Remo con mancuerna a una mano",
      "Remo en máquina",
      "Remo en polea baja sentado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/1.jpg"
    ]
  },
  {
    "id": "ej-049-remo-pendlay",
    "nombre": "Remo Pendlay",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Trapecios",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-back",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Remo Pendlay es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de trapecios. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Trapecios"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso"
    ],
    "consejos": [
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo"
    ],
    "variantes": [
      "Remo con barra",
      "Remo con mancuerna a una mano",
      "Remo en máquina",
      "Remo en polea baja sentado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/1.jpg"
    ]
  },
  {
    "id": "ej-050-remo-invertido",
    "nombre": "Remo invertido",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-back",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Remo invertido es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Remo con barra",
      "Remo con mancuerna a una mano",
      "Remo en máquina",
      "Remo en polea baja sentado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Kettlebell_Row/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Kettlebell_Row/1.jpg"
    ]
  },
  {
    "id": "ej-051-peso-muerto-convencional",
    "nombre": "Peso muerto convencional",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Isquiotibiales, Lumbares",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-back",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto convencional es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de isquiotibiales, lumbares. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Isquiotibiales",
      "Lumbares"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Peso muerto rumano",
      "Peso muerto sumo",
      "Peso muerto con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-051-peso-muerto-convencional/levantamento%20terra%20no%20smith.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-051-peso-muerto-convencional/Levantamento%20terra.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-051-peso-muerto-convencional/Terra%20barra%20hexagonal.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-051-peso-muerto-convencional/terra%20na%20m%C3%A1quina.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-051-peso-muerto-convencional/Terra%20sumo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-051-peso-muerto-convencional/Levantamento%20Terra%20Unilateral.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-051-peso-muerto-convencional/Levantamento%20Terra%20Unilateral-2.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-052-peso-muerto-rumano",
    "nombre": "Peso muerto rumano",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Isquiotibiales, Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-back",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto rumano es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de isquiotibiales, glúteos. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Isquiotibiales",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Peso muerto convencional",
      "Peso muerto sumo",
      "Peso muerto con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-052-peso-muerto-rumano/Stiff.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-052-peso-muerto-rumano/Stiff%2003.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-053-peso-muerto-sumo",
    "nombre": "Peso muerto sumo",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Glúteos, Aductores",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-back",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto sumo es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de glúteos, aductores. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Glúteos",
      "Aductores"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies"
    ],
    "consejos": [
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo"
    ],
    "variantes": [
      "Peso muerto convencional",
      "Peso muerto rumano",
      "Peso muerto con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Sumo_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Sumo_Deadlift/1.jpg"
    ]
  },
  {
    "id": "ej-054-peso-muerto-con-mancuernas",
    "nombre": "Peso muerto con mancuernas",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Isquiotibiales",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto con mancuernas es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de isquiotibiales. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Peso muerto convencional",
      "Peso muerto rumano",
      "Peso muerto sumo"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stiff-Legged_Dumbbell_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stiff-Legged_Dumbbell_Deadlift/1.jpg"
    ]
  },
  {
    "id": "ej-055-hiperextensiones-en-banco",
    "nombre": "Hiperextensiones en banco",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Lumbares",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Hiperextensiones en banco es un ejercicio aislado enfocado principalmente en espalda, con participación secundaria de lumbares. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Espalda",
      "Lumbares"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Pull-over en polea alta",
      "Face pull",
      "Jalón con brazos rectos"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_With_No_Hyperextension_Bench/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_With_No_Hyperextension_Bench/1.jpg"
    ]
  },
  {
    "id": "ej-056-pull-over-en-polea-alta",
    "nombre": "Pull-over en polea alta",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Pecho",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-back",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Pull-over en polea alta es un ejercicio aislado enfocado principalmente en espalda, con participación secundaria de pecho. Se ejecuta con polea y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Espalda",
      "Pecho"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Hiperextensiones en banco",
      "Estiramiento de dorsal ancho",
      "Estiramiento de espalda en cuadrupedia",
      "Movilidad de escápulas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-057-face-pull",
    "nombre": "Face pull",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Hombros",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Face pull es un ejercicio aislado enfocado principalmente en espalda, con participación secundaria de hombros. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Espalda",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Hiperextensiones en banco",
      "Estiramiento de dorsal ancho",
      "Estiramiento de espalda en cuadrupedia",
      "Movilidad de escápulas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/1.jpg"
    ]
  },
  {
    "id": "ej-058-remo-meadows",
    "nombre": "Remo Meadows",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-back",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Remo Meadows es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Remo con barra",
      "Remo con mancuerna a una mano",
      "Remo en máquina",
      "Remo en polea baja sentado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/1.jpg"
    ]
  },
  {
    "id": "ej-059-jalon-con-brazos-rectos",
    "nombre": "Jalón con brazos rectos",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-back",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Jalón con brazos rectos es un ejercicio aislado enfocado principalmente en espalda. Se ejecuta con polea y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Espalda"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Jalón al pecho en polea",
      "Jalón tras nuca",
      "Jalón con agarre cerrado",
      "Jalón unilateral en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/1.jpg"
    ]
  },
  {
    "id": "ej-060-remo-con-landmine",
    "nombre": "Remo con landmine",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Landmine",
    "dificultad": "Intermedio",
    "icono": "icon-back",
    "iconoEquipo": "icon-landmine",
    "imagen": "",
    "video": "",
    "descripcion": "Remo con landmine es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con landmine y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Remo con barra",
      "Remo con mancuerna a una mano",
      "Remo en máquina",
      "Remo en polea baja sentado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/1.jpg"
    ]
  },
  {
    "id": "ej-061-remo-unilateral-en-polea-baja",
    "nombre": "Remo unilateral en polea baja",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Remo unilateral en polea baja es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con polea y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Remo con barra",
      "Remo con mancuerna a una mano",
      "Remo en máquina",
      "Remo en polea baja sentado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-061-remo-unilateral-en-polea-baja/remada%20baixa%20unilateral%20no%20cross.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-061-remo-unilateral-en-polea-baja/remada%20baixa%20unilateral%20pegada%20neutra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-061-remo-unilateral-en-polea-baja/remada%20cavalinho%20unilateral.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-061-remo-unilateral-en-polea-baja/Remada%20unilateral.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-061-remo-unilateral-en-polea-baja/Remada%20unilateral%20com%20gymstick.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-062-jalon-unilateral-en-polea",
    "nombre": "Jalón unilateral en polea",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Jalón unilateral en polea es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con polea y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Jalón al pecho en polea",
      "Jalón tras nuca",
      "Jalón con agarre cerrado",
      "Jalón con brazos rectos"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-062-jalon-unilateral-en-polea/Puxada%20unilateral%201.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-062-jalon-unilateral-en-polea/Puxada%20unilateral%20cabo.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-063-remo-yates",
    "nombre": "Remo Yates",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-back",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Remo Yates es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Remo con barra",
      "Remo con mancuerna a una mano",
      "Remo en máquina",
      "Remo en polea baja sentado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/1.jpg"
    ]
  },
  {
    "id": "ej-064-remo-en-trx",
    "nombre": "Remo en TRX",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "TRX",
    "dificultad": "Intermedio",
    "icono": "icon-back",
    "iconoEquipo": "icon-trx",
    "imagen": "",
    "video": "",
    "descripcion": "Remo en TRX es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con trx y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Remo con barra",
      "Remo con mancuerna a una mano",
      "Remo en máquina",
      "Remo en polea baja sentado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Mid_Row/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Mid_Row/1.jpg"
    ]
  },
  {
    "id": "ej-065-dominadas-con-banda-asistida",
    "nombre": "Dominadas con banda asistida",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Banda elástica",
    "dificultad": "Intermedio",
    "icono": "icon-back",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Dominadas con banda asistida es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con banda elástica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Dominadas",
      "Dominadas supinas",
      "Dominadas asistidas en máquina",
      "Dominadas agarre ancho"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Assisted_Pull-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Assisted_Pull-Up/1.jpg"
    ]
  },
  {
    "id": "ej-066-cargada-con-barra",
    "nombre": "Cargada con barra",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Trapecios, Piernas",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-back",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Cargada con barra es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de trapecios, piernas. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Trapecios",
      "Piernas"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Dominadas",
      "Dominadas supinas",
      "Dominadas asistidas en máquina",
      "Dominadas agarre ancho"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_Shrug/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_Shrug/1.jpg"
    ]
  },
  {
    "id": "ej-067-remo-renegado-con-mancuernas",
    "nombre": "Remo renegado con mancuernas",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Abdomen",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Avanzado",
    "icono": "icon-back",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Remo renegado con mancuernas es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de abdomen. Se ejecuta con mancuernas y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Remo con barra",
      "Remo con mancuerna a una mano",
      "Remo en máquina",
      "Remo en polea baja sentado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-067-remo-renegado-con-mancuernas/remada%20aberta%20no%20banco%20inclinado%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-067-remo-renegado-con-mancuernas/remada%20livre%20%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-067-remo-renegado-con-mancuernas/Remada%20alta%20com%20halteres.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-067-remo-renegado-con-mancuernas/Remada%20apoio%20banco%20com%20halteres.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-067-remo-renegado-con-mancuernas/Remada%20com%20halteres.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-068-remo-con-kettlebell-a-dos-manos",
    "nombre": "Remo con kettlebell a dos manos",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Kettlebell",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-kettlebell",
    "imagen": "",
    "video": "",
    "descripcion": "Remo con kettlebell a dos manos es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con kettlebell y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Remo con barra",
      "Remo con mancuerna a una mano",
      "Remo en máquina",
      "Remo en polea baja sentado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Kettlebell_Row/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Kettlebell_Row/1.jpg"
    ]
  },
  {
    "id": "ej-069-jalon-con-agarre-supino",
    "nombre": "Jalón con agarre supino",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "Bíceps",
    "tipo": "Compuesto",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Jalón con agarre supino es un ejercicio compuesto enfocado principalmente en espalda, con participación secundaria de bíceps. Se ejecuta con polea y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Espalda",
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Jalón al pecho en polea",
      "Jalón tras nuca",
      "Jalón con agarre cerrado",
      "Jalón con brazos rectos"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/1.jpg"
    ]
  },
  {
    "id": "ej-070-press-militar-con-barra",
    "nombre": "Press militar con barra",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press militar con barra es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de tríceps. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Press militar con mancuernas",
      "Press Arnold",
      "Press tras nuca",
      "Press de hombro en máquina"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Shoulder_Military_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Shoulder_Military_Press/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/desenvolvimento%20barra%20atras%20da%20nuca.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/desenvolvimento%20barra%20sentado%20atras%20nuca.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/desenvolvimento%20cabo%20cross.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento%20com%20Barra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento%20com%20Barra%20sentado.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/desenvolvimento%20com%20rota%C3%A7%C3%A3o.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/desenvolvimento%20na%20barra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/desenvolvimento%20no%20smith%20barra%20na%20nuca.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento%20por%20tras%20com%20barra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento%20por%20tr%C3%A1s%20com%20barra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento%20Smith.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/desenvolvimento%20unilateral.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento%20no%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento%20no%20smith.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento%20nuca.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento%20unilateral.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento%20de%20ombro%20unilateral%20com%20banda.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento%20lateral%20com%20gymstick.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento%20militar%20atr%C3%A1s%20da%20cabe%C3%A7a%20com%20gymstick.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-070-press-militar-con-barra/Desenvolvimento%20militar%20com%20peso%20do%20corpo.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-071-press-militar-con-mancuernas",
    "nombre": "Press militar con mancuernas",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press militar con mancuernas es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de tríceps. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido"
    ],
    "consejos": [
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo"
    ],
    "variantes": [
      "Press militar con barra",
      "Press Arnold",
      "Press tras nuca",
      "Press de hombro en máquina"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Shoulder_Military_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Shoulder_Military_Press/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-071-press-militar-con-mancuernas/Desenvolvimento%20com%20Halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-071-press-militar-con-mancuernas/Desenvolvimento%20Sentado%20com%20Halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-071-press-militar-con-mancuernas/Desenvolvimento%20com%20halteres.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-072-press-arnold",
    "nombre": "Press Arnold",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press Arnold es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de tríceps. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Press militar con barra",
      "Press militar con mancuernas",
      "Press tras nuca",
      "Press de hombro en máquina"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/1.jpg"
    ]
  },
  {
    "id": "ej-073-press-tras-nuca",
    "nombre": "Press tras nuca",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press tras nuca es un ejercicio compuesto enfocado principalmente en hombros. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso"
    ],
    "consejos": [
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo"
    ],
    "variantes": [
      "Press militar con barra",
      "Press militar con mancuernas",
      "Press Arnold",
      "Press de hombro en máquina"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Anti-Gravity_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Anti-Gravity_Press/1.jpg"
    ]
  },
  {
    "id": "ej-074-press-de-hombro-en-maquina",
    "nombre": "Press de hombro en máquina",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Press de hombro en máquina es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de tríceps. Se ejecuta con máquina y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Press militar con barra",
      "Press militar con mancuernas",
      "Press Arnold",
      "Press tras nuca"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Shoulder_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Shoulder_Press/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-074-press-de-hombro-en-maquina/Desenvolvimento%20m%C3%A1quina.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-075-press-de-hombro-en-smith",
    "nombre": "Press de hombro en Smith",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Smith",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-smith",
    "imagen": "",
    "video": "",
    "descripcion": "Press de hombro en Smith es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de tríceps. Se ejecuta con smith y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Press militar con barra",
      "Press militar con mancuernas",
      "Press Arnold",
      "Press tras nuca"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Shoulder_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Shoulder_Press/1.jpg"
    ]
  },
  {
    "id": "ej-076-elevaciones-laterales-con-mancuernas",
    "nombre": "Elevaciones laterales con mancuernas",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Elevaciones laterales con mancuernas es un ejercicio aislado enfocado principalmente en hombros. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Elevaciones laterales en polea",
      "Elevaciones laterales en máquina",
      "Elevaciones frontales con mancuernas",
      "Elevaciones frontales con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-077-elevaciones-laterales-en-polea",
    "nombre": "Elevaciones laterales en polea",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Elevaciones laterales en polea es un ejercicio aislado enfocado principalmente en hombros. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Elevaciones laterales con mancuernas",
      "Elevaciones laterales en máquina",
      "Elevaciones frontales con mancuernas",
      "Elevaciones frontales con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-078-elevaciones-laterales-en-maquina",
    "nombre": "Elevaciones laterales en máquina",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Elevaciones laterales en máquina es un ejercicio aislado enfocado principalmente en hombros. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Elevaciones laterales con mancuernas",
      "Elevaciones laterales en polea",
      "Elevaciones frontales con mancuernas",
      "Elevaciones frontales con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-079-elevaciones-frontales-con-mancuernas",
    "nombre": "Elevaciones frontales con mancuernas",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Elevaciones frontales con mancuernas es un ejercicio aislado enfocado principalmente en hombros. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Elevaciones laterales con mancuernas",
      "Elevaciones laterales en polea",
      "Elevaciones laterales en máquina",
      "Elevaciones frontales con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-080-elevaciones-frontales-con-barra",
    "nombre": "Elevaciones frontales con barra",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Elevaciones frontales con barra es un ejercicio aislado enfocado principalmente en hombros. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Elevaciones laterales con mancuernas",
      "Elevaciones laterales en polea",
      "Elevaciones laterales en máquina",
      "Elevaciones frontales con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Front_Barbell_Raise_Over_Head/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Front_Barbell_Raise_Over_Head/1.jpg"
    ]
  },
  {
    "id": "ej-081-elevaciones-frontales-en-polea",
    "nombre": "Elevaciones frontales en polea",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Elevaciones frontales en polea es un ejercicio aislado enfocado principalmente en hombros. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido"
    ],
    "consejos": [
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe"
    ],
    "variantes": [
      "Elevaciones laterales con mancuernas",
      "Elevaciones laterales en polea",
      "Elevaciones laterales en máquina",
      "Elevaciones frontales con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Cable_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Cable_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-082-pajaros-con-mancuernas",
    "nombre": "Pájaros con mancuernas",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Trapecios",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Pájaros con mancuernas es un ejercicio aislado enfocado principalmente en hombros, con participación secundaria de trapecios. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Hombros",
      "Trapecios"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Elevaciones laterales en polea",
      "Elevaciones laterales en máquina",
      "Elevaciones frontales con barra",
      "Elevaciones frontales en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Bent-Over_Rear_Delt_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Bent-Over_Rear_Delt_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-083-pajaros-en-maquina",
    "nombre": "Pájaros en máquina",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Pájaros en máquina es un ejercicio aislado enfocado principalmente en hombros. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Elevaciones laterales con mancuernas",
      "Elevaciones laterales en polea",
      "Elevaciones frontales con mancuernas",
      "Elevaciones frontales con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Bent-Over_Rear_Delt_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Bent-Over_Rear_Delt_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-084-face-pull-en-polea",
    "nombre": "Face pull en polea",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Trapecios",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Face pull en polea es un ejercicio aislado enfocado principalmente en hombros, con participación secundaria de trapecios. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Hombros",
      "Trapecios"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Elevaciones laterales con mancuernas",
      "Elevaciones laterales en máquina",
      "Elevaciones frontales con mancuernas",
      "Elevaciones frontales con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/1.jpg"
    ]
  },
  {
    "id": "ej-085-remo-al-menton",
    "nombre": "Remo al mentón",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Trapecios",
    "tipo": "Compuesto",
    "equipamiento": "Barra EZ",
    "dificultad": "Intermedio",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-ezbar",
    "imagen": "",
    "video": "",
    "descripcion": "Remo al mentón es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de trapecios. Se ejecuta con barra ez y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Trapecios"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Press militar con barra",
      "Press militar con mancuernas",
      "Press Arnold",
      "Press tras nuca"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Backward_Medicine_Ball_Throw/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Backward_Medicine_Ball_Throw/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-085-remo-al-menton/remada%20alta%20com%20barra%20no%20cross.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-085-remo-al-menton/remada%20alta%20com%20barra%20pegada%20aberta.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-085-remo-al-menton/remada%20alta%20com%20barra%20W.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-085-remo-al-menton/remada%20alta%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-085-remo-al-menton/remada%20alta%20com%20halteres%20bilateral.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-085-remo-al-menton/remada%20alta%20no%20cross.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-085-remo-al-menton/remada%20livre%20com%20barra.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-086-press-bradford",
    "nombre": "Press Bradford",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press Bradford es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de tríceps. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Press militar con barra",
      "Press militar con mancuernas",
      "Press Arnold",
      "Press tras nuca"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Anti-Gravity_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Anti-Gravity_Press/1.jpg"
    ]
  },
  {
    "id": "ej-087-elevaciones-laterales-con-banda-elastica",
    "nombre": "Elevaciones laterales con banda elástica",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Elevaciones laterales con banda elástica es un ejercicio aislado enfocado principalmente en hombros. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Elevaciones laterales con mancuernas",
      "Elevaciones laterales en polea",
      "Elevaciones laterales en máquina",
      "Elevaciones frontales con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-088-press-militar-sentado-en-maquina",
    "nombre": "Press militar sentado en máquina",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Press militar sentado en máquina es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de tríceps. Se ejecuta con máquina y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Press militar con barra",
      "Press militar con mancuernas",
      "Press Arnold",
      "Press tras nuca"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Shoulder_Military_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Shoulder_Military_Press/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-088-press-militar-sentado-en-maquina/Desenvolvimento%20Sentado%20Smith.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-088-press-militar-sentado-en-maquina/Desenvolvimento%20de%20ombro%20sentado%20com%20faixa%20de%20resist%C3%AAncia.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-089-elevacion-lateral-inclinado-lean-away",
    "nombre": "Elevación lateral inclinado (lean-away)",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación lateral inclinado (lean-away) es un ejercicio aislado enfocado principalmente en hombros. Se ejecuta con polea y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Elevación frontal alterna con disco",
      "Elevación lateral tumbado con mancuerna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Incline_Lateral_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Incline_Lateral_Raise/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/eleva%C3%A7%C3%A3o%20lateral%20inclinado%20sentado.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/eleva%C3%A7%C3%A3o%20lateral%20pegda%20neutra%20inversa.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/eleva%C3%A7%C3%A3o%20lateral%20sentado%20no%20banco.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20lateral%20%2B%20descida%20frontal.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20lateral%2001.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20lateral%204.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20lateral%20com%20inclina%C3%A7%C3%A3o.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20lateral%20inclinado%20apoio%20banco.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20lateral%20inclinado%20no%20cabo%202.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20lateral%20no%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20lateral%20no%20cross%20cruzado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20lateral%20tronco%20apoiado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20lateral%20uni%20no%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20lateral%20com%20toalha%20na%20parede.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20lateral%20de%20bra%C3%A7os.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20Lateral%20de%20Perna%20com%20Faixa%20El%C3%A1stica%20Deitado%20de%20Lado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20Lateral%20de%20Perna%20com%20Faixa%20El%C3%A1stica.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-089-elevacion-lateral-inclinado-lean-away/Eleva%C3%A7%C3%A3o%20lateral%20de%20delt%C3%B3ide%20posterior%20com%20halteres.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-090-press-militar-de-pie",
    "nombre": "Press militar de pie",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Abdomen",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press militar de pie es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de abdomen. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo"
    ],
    "variantes": [
      "Press militar con barra",
      "Press militar con mancuernas",
      "Press Arnold",
      "Press tras nuca"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Shoulder_Military_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Shoulder_Military_Press/1.jpg"
    ]
  },
  {
    "id": "ej-091-elevacion-frontal-alterna-con-disco",
    "nombre": "Elevación frontal alterna con disco",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Disco",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-plate",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación frontal alterna con disco es un ejercicio aislado enfocado principalmente en hombros. Se ejecuta con disco y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Elevación lateral inclinado (lean-away)",
      "Elevación lateral tumbado con mancuerna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Plate_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Plate_Raise/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-091-elevacion-frontal-alterna-con-disco/Eleva%C3%A7%C3%A3o%20Frontal%20com%20Barra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-091-elevacion-frontal-alterna-con-disco/Eleva%C3%A7%C3%A3o%20Frontal%20Crossover.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-091-elevacion-frontal-alterna-con-disco/Eleva%C3%A7%C3%A3o%20frontal%20com%20barra.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-091-elevacion-frontal-alterna-con-disco/Eleva%C3%A7%C3%A3o%20frontal%20com%20halteres.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-091-elevacion-frontal-alterna-con-disco/Eleva%C3%A7%C3%A3o%20frontal%20Inclinado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-091-elevacion-frontal-alterna-con-disco/Eleva%C3%A7%C3%A3o%20frontal%20m%C3%A3o%20juntas.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-091-elevacion-frontal-alterna-con-disco/Eleva%C3%A7%C3%A3o%20frontal%20no%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-091-elevacion-frontal-alterna-con-disco/Eleva%C3%A7%C3%A3o%20frontal%20sentado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-091-elevacion-frontal-alterna-con-disco/Eleva%C3%A7%C3%A3o%20frontal%20unilateral.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-091-elevacion-frontal-alterna-con-disco/Eleva%C3%A7%C3%A3o%20frontal%20unilateral%203.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-091-elevacion-frontal-alterna-con-disco/Eleva%C3%A7%C3%A3o%20frontal%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-091-elevacion-frontal-alterna-con-disco/Eleva%C3%A7%C3%A3o%20frontal%20diagonal.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-091-elevacion-frontal-alterna-con-disco/Eleva%C3%A7%C3%A3o%20frontal%20lateral%20com%20el%C3%A1stico.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-092-press-de-hombro-en-trx",
    "nombre": "Press de hombro en TRX",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "TRX",
    "dificultad": "Intermedio",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-trx",
    "imagen": "",
    "video": "",
    "descripcion": "Press de hombro en TRX es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de tríceps. Se ejecuta con trx y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Press militar con barra",
      "Press militar con mancuernas",
      "Press Arnold",
      "Press tras nuca"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Cable_Shoulder_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Cable_Shoulder_Press/1.jpg"
    ]
  },
  {
    "id": "ej-093-press-de-hombro-con-kettlebell",
    "nombre": "Press de hombro con kettlebell",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Kettlebell",
    "dificultad": "Intermedio",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-kettlebell",
    "imagen": "",
    "video": "",
    "descripcion": "Press de hombro con kettlebell es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de tríceps. Se ejecuta con kettlebell y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Press militar con barra",
      "Press militar con mancuernas",
      "Press Arnold",
      "Press tras nuca"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Cable_Shoulder_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Cable_Shoulder_Press/1.jpg"
    ]
  },
  {
    "id": "ej-094-press-con-landmine",
    "nombre": "Press con landmine",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Tríceps",
    "tipo": "Compuesto",
    "equipamiento": "Landmine",
    "dificultad": "Intermedio",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-landmine",
    "imagen": "",
    "video": "",
    "descripcion": "Press con landmine es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de tríceps. Se ejecuta con landmine y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Press militar con barra",
      "Press militar con mancuernas",
      "Press Arnold",
      "Press tras nuca"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Anti-Gravity_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Anti-Gravity_Press/1.jpg"
    ]
  },
  {
    "id": "ej-095-cargada-y-press-con-barra",
    "nombre": "Cargada y press con barra",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Piernas, Espalda",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Cargada y press con barra es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de piernas, espalda. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Piernas",
      "Espalda"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo"
    ],
    "variantes": [
      "Press militar con mancuernas",
      "Press Arnold",
      "Press de hombro en máquina",
      "Press de hombro en Smith"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_and_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_and_Press/1.jpg"
    ]
  },
  {
    "id": "ej-096-overhead-squat",
    "nombre": "Overhead squat",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Cuádriceps, Abdomen",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Overhead squat es un ejercicio compuesto enfocado principalmente en hombros, con participación secundaria de cuádriceps, abdomen. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Hombros",
      "Cuádriceps",
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "cardio",
      "perdida-grasa",
      "fuerza",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Press militar con mancuernas",
      "Press Arnold",
      "Press de hombro en máquina",
      "Press de hombro en Smith"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-097-elevacion-lateral-tumbado-con-mancuerna",
    "nombre": "Elevación lateral tumbado con mancuerna",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación lateral tumbado con mancuerna es un ejercicio aislado enfocado principalmente en hombros. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Elevación lateral inclinado (lean-away)",
      "Elevación frontal alterna con disco"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-098-curl-con-barra",
    "nombre": "Curl con barra",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "Antebrazos",
    "tipo": "Aislado",
    "equipamiento": "Barra olímpica",
    "dificultad": "Principiante",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Curl con barra es un ejercicio aislado enfocado principalmente en bíceps, con participación secundaria de antebrazos. Se ejecuta con barra olímpica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps",
      "Antebrazos"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl alterno con mancuernas",
      "Curl martillo"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20%20direta%20no%20banco%20scort.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20alternada%20aparelho%20biarticular.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20alternada%20com%20giro.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20alternada%20pegada%20neutra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20alternada%20pegada%20neutra%20sentado%20no%20banco.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20Concentrada.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20Concentrada%202.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20dierata%20pegada%20invertida%20barra%20W.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20dierta%20pegada%20aberta.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20dierta%20pegada%20fechada.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20direta%20apaiada%20no%20banco%20barra%20W.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20direta%20barra%20pegada%20fechada%20sentado%20no%20banco.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20direta%20barra%20W.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20direta%20barra%20W%20sentado%20banco.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20direta%20deitado%20no%20banco%20reto%20no%20cross.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20direta%20no%20cross%20barra%20W.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20direta%20pegada%20fechada%20barra%20W.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20neutra%20no%20banco%20scort%20aparelho.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20no%20banco%20scort%20barra%20W.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/rosca%20no%20scort.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20agachado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20alternada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20apoio%20banco.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20apoio%20banco%2002.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20apoio%20no%20banco.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20b%C3%ADceps%20diagonal.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20b%C3%ADceps%20no%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20com%20rota%C3%A7%C3%A3o.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20concentrada%20feminino.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20concentrada%20masculino.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20direta.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20direta%2003.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20direta%2004.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20direta%20apoio%20braquial.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20direta%20curta.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20inclinada%20no%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20inversa.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20inversa%20no%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20lateral.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20lateral%20no%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20lateral%20polia%20alta.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20martelo%2001.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20martelo%20alternada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20martelo%20alternada%2002.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20martelo%20corda.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20martelo%20scott.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20martelo%20suporte%20braquial.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20punho%2002.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20punho%20com%20anilha.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20punho%20com%20barra.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20punho%20invertida.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20punho%20invertida%20apoio%20antebra%C3%A7o.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20punho%20martelo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20punho%20por%20tr%C3%A1s.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20punho%20unilatera.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20scott%20alternada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20scott%20barra%20reta.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20scott%20de%20p%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20scott%20martelo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20concentrada%20com%20perna.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20b%C3%ADceps%20com%20faixa%20el%C3%A1stica.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20martelo%20com%20faixa%20de%20resist%C3%AAncia.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-098-curl-con-barra/Rosca%20martelo%20com%20garrafa%20de%20%C3%A1gua.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-099-curl-con-barra-ez",
    "nombre": "Curl con barra EZ",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "Antebrazos",
    "tipo": "Aislado",
    "equipamiento": "Barra EZ",
    "dificultad": "Principiante",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-ezbar",
    "imagen": "",
    "video": "",
    "descripcion": "Curl con barra EZ es un ejercicio aislado enfocado principalmente en bíceps, con participación secundaria de antebrazos. Se ejecuta con barra ez y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps",
      "Antebrazos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con mancuernas",
      "Curl alterno con mancuernas",
      "Curl martillo"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Curl_with_Band/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Curl_with_Band/1.jpg"
    ]
  },
  {
    "id": "ej-100-curl-con-mancuernas",
    "nombre": "Curl con mancuernas",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "Antebrazos",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Curl con mancuernas es un ejercicio aislado enfocado principalmente en bíceps, con participación secundaria de antebrazos. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps",
      "Antebrazos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl alterno con mancuernas",
      "Curl martillo"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-100-curl-con-mancuernas/rosca%20neutra%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-100-curl-con-mancuernas/rosca%20neutra%20com%20halteres%20sentado%20no%20banco.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-100-curl-con-mancuernas/Rosca%20Scott%20Unil%20com%20Halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-100-curl-con-mancuernas/rosca%20unilateral%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-100-curl-con-mancuernas/rosca%20unilateral%20com%20halteres%20sentado%20no%20banco.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-100-curl-con-mancuernas/rosca%20unilateral%20pegada%20neutra%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-100-curl-con-mancuernas/Rosca%20inversa%20com%20halteres.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-100-curl-con-mancuernas/Rosca%20punho%20invertida%20com%20halteres.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-100-curl-con-mancuernas/Rosca%20scott%20com%20halteres%20em%20p%C3%A9.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-101-curl-alterno-con-mancuernas",
    "nombre": "Curl alterno con mancuernas",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "Antebrazos",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Curl alterno con mancuernas es un ejercicio aislado enfocado principalmente en bíceps, con participación secundaria de antebrazos. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps",
      "Antebrazos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl martillo"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/1.jpg"
    ]
  },
  {
    "id": "ej-102-curl-martillo",
    "nombre": "Curl martillo",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "Antebrazos",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Curl martillo es un ejercicio aislado enfocado principalmente en bíceps, con participación secundaria de antebrazos. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps",
      "Antebrazos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl alterno con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/1.jpg"
    ]
  },
  {
    "id": "ej-103-curl-concentrado",
    "nombre": "Curl concentrado",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Curl concentrado es un ejercicio aislado enfocado principalmente en bíceps. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl alterno con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/1.jpg"
    ]
  },
  {
    "id": "ej-104-curl-en-polea",
    "nombre": "Curl en polea",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Curl en polea es un ejercicio aislado enfocado principalmente en bíceps. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl alterno con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Hammer_Curls_-_Rope_Attachment/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Hammer_Curls_-_Rope_Attachment/1.jpg"
    ]
  },
  {
    "id": "ej-105-curl-en-banco-scott",
    "nombre": "Curl en banco Scott",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Barra EZ",
    "dificultad": "Intermedio",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-ezbar",
    "imagen": "",
    "video": "",
    "descripcion": "Curl en banco Scott es un ejercicio aislado enfocado principalmente en bíceps. Se ejecuta con barra ez y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl alterno con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Curl_with_Band/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Curl_with_Band/1.jpg"
    ]
  },
  {
    "id": "ej-106-curl-en-maquina",
    "nombre": "Curl en máquina",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Curl en máquina es un ejercicio aislado enfocado principalmente en bíceps. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl alterno con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Bicep_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Bicep_Curl/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-106-curl-en-maquina/Rosca%20alternada%20m%C3%A1quina.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-106-curl-en-maquina/Rosca%20scott%20na%20m%C3%A1quina.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-107-curl-21",
    "nombre": "Curl 21",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Barra EZ",
    "dificultad": "Intermedio",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-ezbar",
    "imagen": "",
    "video": "",
    "descripcion": "Curl 21 es un ejercicio aislado enfocado principalmente en bíceps. Se ejecuta con barra ez y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl alterno con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Curl_with_Band/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Curl_with_Band/1.jpg"
    ]
  },
  {
    "id": "ej-108-curl-inclinado-con-mancuernas",
    "nombre": "Curl inclinado con mancuernas",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Curl inclinado con mancuernas es un ejercicio aislado enfocado principalmente en bíceps. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl alterno con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Incline_Dumbbell_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Incline_Dumbbell_Curl/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-108-curl-inclinado-con-mancuernas/Rosca%20alternada%20no%20banco%20inclinado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-108-curl-inclinado-con-mancuernas/Rosca%20deitado%20no%20banco%20inclinado.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-109-curl-spider",
    "nombre": "Curl spider",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Barra EZ",
    "dificultad": "Intermedio",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-ezbar",
    "imagen": "",
    "video": "",
    "descripcion": "Curl spider es un ejercicio aislado enfocado principalmente en bíceps. Se ejecuta con barra ez y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl alterno con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Curl_with_Band/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Curl_with_Band/1.jpg"
    ]
  },
  {
    "id": "ej-110-curl-cruzado-con-mancuerna",
    "nombre": "Curl cruzado con mancuerna",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Curl cruzado con mancuerna es un ejercicio aislado enfocado principalmente en bíceps. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl alterno con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/1.jpg"
    ]
  },
  {
    "id": "ej-111-curl-en-polea-baja-unilateral",
    "nombre": "Curl en polea baja unilateral",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Curl en polea baja unilateral es un ejercicio aislado enfocado principalmente en bíceps. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl alterno con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-111-curl-en-polea-baja-unilateral/rosca%20consentrada%20unilateral%20%20no%20banco%20declinado.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-111-curl-en-polea-baja-unilateral/rosca%20neutra%20%20unilateral%20no%20banco%20scort.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-111-curl-en-polea-baja-unilateral/Rosca%20alta%20unilateral.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-111-curl-en-polea-baja-unilateral/Rosca%20scott%20martelo%20unilateral.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-111-curl-en-polea-baja-unilateral/Rosca%20unilateral%20corda.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-111-curl-en-polea-baja-unilateral/Rosca%20de%20b%C3%ADceps%20unilateral%20com%20faixa%20de%20resist%C3%AAncia.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-112-curl-con-trx",
    "nombre": "Curl con TRX",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "TRX",
    "dificultad": "Intermedio",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-trx",
    "imagen": "",
    "video": "",
    "descripcion": "Curl con TRX es un ejercicio aislado enfocado principalmente en bíceps. Se ejecuta con trx y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl alterno con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Plate_Curls/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Plate_Curls/1.jpg"
    ]
  },
  {
    "id": "ej-113-curl-con-kettlebell",
    "nombre": "Curl con kettlebell",
    "grupoMuscular": "Bíceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Kettlebell",
    "dificultad": "Principiante",
    "icono": "icon-biceps",
    "iconoEquipo": "icon-kettlebell",
    "imagen": "",
    "video": "",
    "descripcion": "Curl con kettlebell es un ejercicio aislado enfocado principalmente en bíceps. Se ejecuta con kettlebell y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Bíceps"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Curl con barra",
      "Curl con barra EZ",
      "Curl con mancuernas",
      "Curl alterno con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/1.jpg"
    ]
  },
  {
    "id": "ej-114-press-frances-con-barra",
    "nombre": "Press francés con barra",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Barra EZ",
    "dificultad": "Intermedio",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-ezbar",
    "imagen": "",
    "video": "",
    "descripcion": "Press francés con barra es un ejercicio aislado enfocado principalmente en tríceps. Se ejecuta con barra ez y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Press francés con mancuerna",
      "Press cerrado con barra",
      "Press JM",
      "Press cerrado en Smith"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Press/1.jpg"
    ]
  },
  {
    "id": "ej-115-press-frances-con-mancuerna",
    "nombre": "Press francés con mancuerna",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press francés con mancuerna es un ejercicio aislado enfocado principalmente en tríceps. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Press francés con barra",
      "Press cerrado con barra",
      "Press JM",
      "Press cerrado en Smith"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Dumbbell_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Dumbbell_Press/1.jpg"
    ]
  },
  {
    "id": "ej-116-extension-de-triceps-en-polea-con-cuerda",
    "nombre": "Extensión de tríceps en polea con cuerda",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Cuerda",
    "dificultad": "Principiante",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-rope",
    "imagen": "",
    "video": "",
    "descripcion": "Extensión de tríceps en polea con cuerda es un ejercicio aislado enfocado principalmente en tríceps. Se ejecuta con cuerda y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Tríceps"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Extensión de tríceps en polea con barra",
      "Extensión sobre la cabeza con mancuerna",
      "Extensión sobre la cabeza en polea",
      "Extensión unilateral en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Triceps_Extension/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Triceps_Extension/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20no%20el%C3%A1stico.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%206%20apoios.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20de%20quadril%2001.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20de%20quadril%20banco%20romano%2002.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20de%20quadril%20graviton.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20gl%C3%BAteo%20no%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20de%20tr%C3%ADceps.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20De%20Gl%C3%BAteo%20Em%20P%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20de%20ombro%20com%20faixa.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20de%20Perna%20em%20P%C3%A9%20com%20Faixa%20de%20Resist%C3%AAncia.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20De%20Perna%20Reta.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20de%20Pernas%20com%20Faixa%20El%C3%A1stica%20Sentado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20de%20Pernas%20Sentado%20com%20Faixa%20de%20Resist%C3%AAncia.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20de%20Quadril%20no%20Banco.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20de%20Tr%C3%ADceps%20Acima%20da%20Cabe%C3%A7a%20com%20Gymstick.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20de%20Tr%C3%ADceps%20com%20Faixa%20El%C3%A1stica.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-116-extension-de-triceps-en-polea-con-cuerda/Extens%C3%A3o%20de%20Tr%C3%ADceps%20com%20Faixas%20El%C3%A1sticas.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-117-extension-de-triceps-en-polea-con-barra",
    "nombre": "Extensión de tríceps en polea con barra",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Extensión de tríceps en polea con barra es un ejercicio aislado enfocado principalmente en tríceps. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Extensión de tríceps en polea con cuerda",
      "Extensión sobre la cabeza con mancuerna",
      "Extensión sobre la cabeza en polea",
      "Extensión unilateral en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Triceps_Extension/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Triceps_Extension/1.jpg"
    ]
  },
  {
    "id": "ej-118-patada-de-triceps-con-mancuerna",
    "nombre": "Patada de tríceps con mancuerna",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Patada de tríceps con mancuerna es un ejercicio aislado enfocado principalmente en tríceps. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Press francés con barra",
      "Extensión de tríceps en polea con cuerda",
      "Extensión de tríceps en polea con barra",
      "Extensión sobre la cabeza en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Triceps_Extension/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Triceps_Extension/1.jpg"
    ]
  },
  {
    "id": "ej-119-fondos-en-banco",
    "nombre": "Fondos en banco",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Fondos en banco es un ejercicio compuesto enfocado principalmente en tríceps, con participación secundaria de hombros. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Tríceps",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Press cerrado con barra",
      "Press JM",
      "Press cerrado en Smith"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Dips/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Dips/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-119-fondos-en-banco/arnold_dips-maschine.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-119-fondos-en-banco/bench-tricep-dips.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-119-fondos-en-banco/Mergulho%20banco.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-120-fondos-en-paralelas-enfoque-triceps",
    "nombre": "Fondos en paralelas (enfoque tríceps)",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "Pecho",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Fondos en paralelas (enfoque tríceps) es un ejercicio compuesto enfocado principalmente en tríceps, con participación secundaria de pecho. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Tríceps",
      "Pecho"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Press cerrado con barra",
      "Press JM",
      "Press cerrado en Smith"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/1.jpg"
    ]
  },
  {
    "id": "ej-121-press-cerrado-con-barra",
    "nombre": "Press cerrado con barra",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "Pecho",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press cerrado con barra es un ejercicio compuesto enfocado principalmente en tríceps, con participación secundaria de pecho. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Tríceps",
      "Pecho"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Press francés con barra",
      "Press francés con mancuerna",
      "Press JM",
      "Press cerrado en Smith"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/1.jpg"
    ]
  },
  {
    "id": "ej-122-extension-sobre-la-cabeza-con-mancuerna",
    "nombre": "Extensión sobre la cabeza con mancuerna",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Extensión sobre la cabeza con mancuerna es un ejercicio aislado enfocado principalmente en tríceps. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Extensión de tríceps en polea con cuerda",
      "Extensión de tríceps en polea con barra",
      "Extensión sobre la cabeza en polea",
      "Extensión unilateral en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Triceps_Extension/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Triceps_Extension/1.jpg"
    ]
  },
  {
    "id": "ej-123-extension-sobre-la-cabeza-en-polea",
    "nombre": "Extensión sobre la cabeza en polea",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Cuerda",
    "dificultad": "Intermedio",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-rope",
    "imagen": "",
    "video": "",
    "descripcion": "Extensión sobre la cabeza en polea es un ejercicio aislado enfocado principalmente en tríceps. Se ejecuta con cuerda y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Tríceps"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Extensión de tríceps en polea con cuerda",
      "Extensión de tríceps en polea con barra",
      "Extensión sobre la cabeza con mancuerna",
      "Extensión unilateral en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Triceps_Extension/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Triceps_Extension/1.jpg"
    ]
  },
  {
    "id": "ej-124-jalon-de-triceps-en-maquina",
    "nombre": "Jalón de tríceps en máquina",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Jalón de tríceps en máquina es un ejercicio aislado enfocado principalmente en tríceps. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Press francés con barra",
      "Press francés con mancuerna",
      "Extensión de tríceps en polea con cuerda",
      "Extensión de tríceps en polea con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Triceps_Extension/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Triceps_Extension/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-124-jalon-de-triceps-en-maquina/Puxada%20m%C3%A1quina.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-125-kickback-en-polea",
    "nombre": "Kickback en polea",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Kickback en polea es un ejercicio aislado enfocado principalmente en tríceps. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Press francés con barra",
      "Press francés con mancuerna",
      "Extensión de tríceps en polea con cuerda",
      "Patada de tríceps con mancuerna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Legged_Cable_Kickback/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Legged_Cable_Kickback/1.jpg"
    ]
  },
  {
    "id": "ej-126-press-jm",
    "nombre": "Press JM",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "Pecho",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Press JM es un ejercicio compuesto enfocado principalmente en tríceps, con participación secundaria de pecho. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Tríceps",
      "Pecho"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido"
    ],
    "consejos": [
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo"
    ],
    "variantes": [
      "Press francés con barra",
      "Press francés con mancuerna",
      "Press cerrado con barra",
      "Press cerrado en Smith"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/1.jpg"
    ]
  },
  {
    "id": "ej-127-extension-unilateral-en-polea",
    "nombre": "Extensión unilateral en polea",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Extensión unilateral en polea es un ejercicio aislado enfocado principalmente en tríceps. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Extensión de tríceps en polea con cuerda",
      "Extensión de tríceps en polea con barra",
      "Extensión sobre la cabeza con mancuerna",
      "Extensión sobre la cabeza en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-127-extension-unilateral-en-polea/Extens%C3%A3o%20unilateral.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-127-extension-unilateral-en-polea/Extens%C3%A3o%20unilateral%20no%20cabo.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-127-extension-unilateral-en-polea/Triceps%20extens%C3%A3o%20unilateral.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-128-extension-de-triceps-unilateral-con-mancuerna",
    "nombre": "Extensión de tríceps unilateral con mancuerna",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Extensión de tríceps unilateral con mancuerna es un ejercicio aislado enfocado principalmente en tríceps. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Extensión de tríceps en polea con cuerda",
      "Extensión de tríceps en polea con barra",
      "Extensión sobre la cabeza con mancuerna",
      "Extensión sobre la cabeza en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Triceps_Extension/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Triceps_Extension/1.jpg"
    ]
  },
  {
    "id": "ej-129-press-cerrado-en-smith",
    "nombre": "Press cerrado en Smith",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "Pecho",
    "tipo": "Compuesto",
    "equipamiento": "Smith",
    "dificultad": "Intermedio",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-smith",
    "imagen": "",
    "video": "",
    "descripcion": "Press cerrado en Smith es un ejercicio compuesto enfocado principalmente en tríceps, con participación secundaria de pecho. Se ejecuta con smith y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Tríceps",
      "Pecho"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo"
    ],
    "variantes": [
      "Press francés con barra",
      "Press francés con mancuerna",
      "Press cerrado con barra",
      "Press JM"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Smith_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Smith_Press/1.jpg"
    ]
  },
  {
    "id": "ej-130-extension-de-triceps-en-trx",
    "nombre": "Extensión de tríceps en TRX",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "TRX",
    "dificultad": "Intermedio",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-trx",
    "imagen": "",
    "video": "",
    "descripcion": "Extensión de tríceps en TRX es un ejercicio aislado enfocado principalmente en tríceps. Se ejecuta con trx y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Extensión de tríceps en polea con cuerda",
      "Extensión de tríceps en polea con barra",
      "Extensión sobre la cabeza con mancuerna",
      "Extensión sobre la cabeza en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sled_Overhead_Triceps_Extension/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sled_Overhead_Triceps_Extension/1.jpg"
    ]
  },
  {
    "id": "ej-131-extension-de-triceps-con-kettlebell",
    "nombre": "Extensión de tríceps con kettlebell",
    "grupoMuscular": "Tríceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Kettlebell",
    "dificultad": "Intermedio",
    "icono": "icon-triceps",
    "iconoEquipo": "icon-kettlebell",
    "imagen": "",
    "video": "",
    "descripcion": "Extensión de tríceps con kettlebell es un ejercicio aislado enfocado principalmente en tríceps. Se ejecuta con kettlebell y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Tríceps"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Extensión de tríceps en polea con cuerda",
      "Extensión de tríceps en polea con barra",
      "Extensión sobre la cabeza con mancuerna",
      "Extensión sobre la cabeza en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Triceps_Extension/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Triceps_Extension/1.jpg"
    ]
  },
  {
    "id": "ej-132-encogimientos-con-barra",
    "nombre": "Encogimientos con barra",
    "grupoMuscular": "Trapecios",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Barra olímpica",
    "dificultad": "Principiante",
    "icono": "icon-traps",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Encogimientos con barra es un ejercicio aislado enfocado principalmente en trapecios. Se ejecuta con barra olímpica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Trapecios"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Encogimientos con mancuernas",
      "Encogimientos en Smith",
      "Encogimientos en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/1.jpg"
    ]
  },
  {
    "id": "ej-133-encogimientos-con-mancuernas",
    "nombre": "Encogimientos con mancuernas",
    "grupoMuscular": "Trapecios",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-traps",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Encogimientos con mancuernas es un ejercicio aislado enfocado principalmente en trapecios. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Trapecios"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Encogimientos con barra",
      "Encogimientos en Smith",
      "Encogimientos en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shrug/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shrug/1.jpg"
    ]
  },
  {
    "id": "ej-134-encogimientos-en-smith",
    "nombre": "Encogimientos en Smith",
    "grupoMuscular": "Trapecios",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Smith",
    "dificultad": "Principiante",
    "icono": "icon-traps",
    "iconoEquipo": "icon-smith",
    "imagen": "",
    "video": "",
    "descripcion": "Encogimientos en Smith es un ejercicio aislado enfocado principalmente en trapecios. Se ejecuta con smith y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Trapecios"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Encogimientos con barra",
      "Encogimientos con mancuernas",
      "Encogimientos en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf-Machine_Shoulder_Shrug/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf-Machine_Shoulder_Shrug/1.jpg"
    ]
  },
  {
    "id": "ej-135-encogimientos-en-polea",
    "nombre": "Encogimientos en polea",
    "grupoMuscular": "Trapecios",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-traps",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Encogimientos en polea es un ejercicio aislado enfocado principalmente en trapecios. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Trapecios"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Encogimientos con barra",
      "Encogimientos con mancuernas",
      "Encogimientos en Smith"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Shrugs/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Shrugs/1.jpg"
    ]
  },
  {
    "id": "ej-136-face-pull-para-trapecio",
    "nombre": "Face pull para trapecio",
    "grupoMuscular": "Trapecios",
    "grupoSecundario": "Hombros",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-traps",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Face pull para trapecio es un ejercicio aislado enfocado principalmente en trapecios, con participación secundaria de hombros. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Trapecios",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Encogimientos con barra",
      "Encogimientos con mancuernas",
      "Encogimientos en Smith",
      "Encogimiento tras espalda"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/1.jpg"
    ]
  },
  {
    "id": "ej-137-peso-muerto-con-encogimiento",
    "nombre": "Peso muerto con encogimiento",
    "grupoMuscular": "Trapecios",
    "grupoSecundario": "Espalda",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-traps",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto con encogimiento es un ejercicio compuesto enfocado principalmente en trapecios, con participación secundaria de espalda. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Trapecios",
      "Espalda"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo"
    ],
    "variantes": [
      "Remo alto con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-137-peso-muerto-con-encogimiento/encolhimento%20livre%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-137-peso-muerto-con-encogimiento/encolhimento%20maquina.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-137-peso-muerto-con-encogimiento/encolhimento%20na%20barra%20livre.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-137-peso-muerto-con-encogimiento/encolhimento%20no%20smith.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-137-peso-muerto-con-encogimiento/encolhimento%20pegada%20fechada%20barra%20no%20cross.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-137-peso-muerto-con-encogimiento/encolhimento%20sentado%20no%20banco%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-137-peso-muerto-con-encogimiento/encolhimento%20sentado%20no%20banco%20inlinado%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-137-peso-muerto-con-encogimiento/Encolhimento%203.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-137-peso-muerto-con-encogimiento/Encolhimento%20barra.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-137-peso-muerto-con-encogimiento/Encolhimento%20barra%20atr%C3%A1s.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-137-peso-muerto-con-encogimiento/Encolhimento%20com%20halteres.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-137-peso-muerto-con-encogimiento/Encolhimento%20m%C3%A1quina.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-137-peso-muerto-con-encogimiento/Encolhimento%20m%C3%A1quina-2.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-138-encogimiento-tras-espalda",
    "nombre": "Encogimiento tras espalda",
    "grupoMuscular": "Trapecios",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-traps",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Encogimiento tras espalda es un ejercicio aislado enfocado principalmente en trapecios. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Trapecios"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Encogimiento con kettlebell",
      "Encogimiento de movilidad con círculos"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/1.jpg"
    ]
  },
  {
    "id": "ej-139-remo-alto-con-mancuernas",
    "nombre": "Remo alto con mancuernas",
    "grupoMuscular": "Trapecios",
    "grupoSecundario": "Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-traps",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Remo alto con mancuernas es un ejercicio compuesto enfocado principalmente en trapecios, con participación secundaria de hombros. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Trapecios",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Peso muerto con encogimiento"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_One-Arm_Upright_Row/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_One-Arm_Upright_Row/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-139-remo-alto-con-mancuernas/remada%20alta%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-139-remo-alto-con-mancuernas/remada%20alta%20pegada%20abeta%20com%20barra.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-140-encogimiento-con-kettlebell",
    "nombre": "Encogimiento con kettlebell",
    "grupoMuscular": "Trapecios",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Kettlebell",
    "dificultad": "Principiante",
    "icono": "icon-traps",
    "iconoEquipo": "icon-kettlebell",
    "imagen": "",
    "video": "",
    "descripcion": "Encogimiento con kettlebell es un ejercicio aislado enfocado principalmente en trapecios. Se ejecuta con kettlebell y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Trapecios"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Encogimiento tras espalda",
      "Encogimiento de movilidad con círculos"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/1.jpg"
    ]
  },
  {
    "id": "ej-141-curl-de-muneca-con-barra",
    "nombre": "Curl de muñeca con barra",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Barra olímpica",
    "dificultad": "Principiante",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Curl de muñeca con barra es un ejercicio aislado enfocado principalmente en antebrazos. Se ejecuta con barra olímpica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Antebrazos"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Curl de muñeca invertido",
      "Curl de muñeca con mancuerna",
      "Curl de antebrazo en polea",
      "Curl de muñeca en banco Scott"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Wrist_Curl_Over_A_Bench/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Wrist_Curl_Over_A_Bench/1.jpg"
    ]
  },
  {
    "id": "ej-142-curl-de-muneca-invertido",
    "nombre": "Curl de muñeca invertido",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Barra olímpica",
    "dificultad": "Principiante",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Curl de muñeca invertido es un ejercicio aislado enfocado principalmente en antebrazos. Se ejecuta con barra olímpica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Antebrazos"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Curl de muñeca con barra",
      "Curl de muñeca con mancuerna",
      "Curl de antebrazo en polea",
      "Curl de muñeca en banco Scott"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Wrist_Curl_Over_A_Bench/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Wrist_Curl_Over_A_Bench/1.jpg"
    ]
  },
  {
    "id": "ej-143-curl-de-muneca-con-mancuerna",
    "nombre": "Curl de muñeca con mancuerna",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Curl de muñeca con mancuerna es un ejercicio aislado enfocado principalmente en antebrazos. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Antebrazos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Curl de muñeca con barra",
      "Curl de muñeca invertido",
      "Curl de antebrazo en polea",
      "Curl de muñeca en banco Scott"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Dumbbell_Wrist_Curl_Over_A_Bench/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Dumbbell_Wrist_Curl_Over_A_Bench/1.jpg"
    ]
  },
  {
    "id": "ej-144-extension-de-muneca-con-barra",
    "nombre": "Extensión de muñeca con barra",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Barra olímpica",
    "dificultad": "Principiante",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Extensión de muñeca con barra es un ejercicio aislado enfocado principalmente en antebrazos. Se ejecuta con barra olímpica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Antebrazos"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Curl de muñeca con mancuerna",
      "Dead hang",
      "Curl de antebrazo en polea",
      "Pinza con disco"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Wrist_Curl_Over_A_Bench/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Wrist_Curl_Over_A_Bench/1.jpg"
    ]
  },
  {
    "id": "ej-145-farmer-walk",
    "nombre": "Farmer walk",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "Trapecios, Abdomen",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Farmer walk es un ejercicio compuesto enfocado principalmente en antebrazos, con participación secundaria de trapecios, abdomen. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Antebrazos",
      "Trapecios",
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "cardio",
      "perdida-grasa",
      "fuerza",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Battle ropes"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Farmers_Walk/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Farmers_Walk/1.jpg"
    ]
  },
  {
    "id": "ej-146-dead-hang",
    "nombre": "Dead hang",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "Espalda",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Dead hang es un ejercicio aislado enfocado principalmente en antebrazos, con participación secundaria de espalda. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Antebrazos",
      "Espalda"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Curl de muñeca con barra",
      "Curl de muñeca invertido",
      "Curl de muñeca con mancuerna",
      "Extensión de muñeca con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-147-curl-de-antebrazo-en-polea",
    "nombre": "Curl de antebrazo en polea",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Curl de antebrazo en polea es un ejercicio aislado enfocado principalmente en antebrazos. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Antebrazos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Curl de muñeca con barra",
      "Curl de muñeca invertido",
      "Curl de muñeca con mancuerna",
      "Curl de muñeca en banco Scott"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Wrist_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Wrist_Curl/1.jpg"
    ]
  },
  {
    "id": "ej-148-pinza-con-disco",
    "nombre": "Pinza con disco",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Disco",
    "dificultad": "Intermedio",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-plate",
    "imagen": "",
    "video": "",
    "descripcion": "Pinza con disco es un ejercicio aislado enfocado principalmente en antebrazos. Se ejecuta con disco y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Antebrazos"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Curl de muñeca con barra",
      "Curl de muñeca invertido",
      "Curl de muñeca con mancuerna",
      "Extensión de muñeca con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-149-rodillo-de-muneca-wrist-roller",
    "nombre": "Rodillo de muñeca (wrist roller)",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Disco",
    "dificultad": "Intermedio",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-plate",
    "imagen": "",
    "video": "",
    "descripcion": "Rodillo de muñeca (wrist roller) es un ejercicio aislado enfocado principalmente en antebrazos. Se ejecuta con disco y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Antebrazos"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Curl de muñeca con barra",
      "Curl de muñeca invertido",
      "Curl de muñeca con mancuerna",
      "Extensión de muñeca con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Roller/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Roller/1.jpg"
    ]
  },
  {
    "id": "ej-150-curl-de-muneca-en-banco-scott",
    "nombre": "Curl de muñeca en banco Scott",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Barra EZ",
    "dificultad": "Principiante",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-ezbar",
    "imagen": "",
    "video": "",
    "descripcion": "Curl de muñeca en banco Scott es un ejercicio aislado enfocado principalmente en antebrazos. Se ejecuta con barra ez y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Antebrazos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Curl de muñeca con barra",
      "Curl de muñeca invertido",
      "Curl de muñeca con mancuerna",
      "Curl de antebrazo en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Wrist_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Wrist_Curl/1.jpg"
    ]
  },
  {
    "id": "ej-151-battle-ropes",
    "nombre": "Battle ropes",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "Abdomen",
    "tipo": "Compuesto",
    "equipamiento": "Cuerda",
    "dificultad": "Intermedio",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-rope",
    "imagen": "",
    "video": "",
    "descripcion": "Battle ropes es un ejercicio compuesto enfocado principalmente en antebrazos, con participación secundaria de abdomen. Se ejecuta con cuerda y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Antebrazos",
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "cardio",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Farmer walk"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-152-curl-de-muneca-por-detras-del-cuerpo",
    "nombre": "Curl de muñeca por detrás del cuerpo",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Curl de muñeca por detrás del cuerpo es un ejercicio aislado enfocado principalmente en antebrazos. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Antebrazos"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Curl de muñeca con barra",
      "Curl de muñeca invertido",
      "Curl de muñeca con mancuerna",
      "Curl de antebrazo en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Wrist_Curl_Over_A_Bench/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Wrist_Curl_Over_A_Bench/1.jpg"
    ]
  },
  {
    "id": "ej-153-crunch-abdominal",
    "nombre": "Crunch abdominal",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Crunch abdominal es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Crunch en polea alta",
      "Crunch en máquina",
      "Crunch de bicicleta",
      "Crunch inverso"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/Abdominal%20bicleta.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/Abdominal%20declinado.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/Abdominal%20pegando%20a%20bola.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/crunch.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/Crunch%203.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/Crunch%204.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/Crunch%20com%20carga.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/Crunch%20pernas%20elevadas.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/Crunch%20reverso.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/crunch-floor.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/Crunch-With-Leg-Raise.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/frog-crunch.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/Abdominal%20com%20Carga.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/Abdominal%20Concentrado.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/C%C3%B3pia%20de%20Abdominal%20de%20R%C3%A3%20com%20Bola%20de%20Exerc%C3%ADcios.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-153-crunch-abdominal/Contra%C3%A7%C3%A3o%20abdominal.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-154-crunch-en-polea-alta",
    "nombre": "Crunch en polea alta",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Crunch en polea alta es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con polea y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio"
    ],
    "consejos": [
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe"
    ],
    "variantes": [
      "Crunch abdominal",
      "Crunch en máquina",
      "Crunch de bicicleta",
      "Crunch inverso"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bosu_Ball_Cable_Crunch_With_Side_Bends/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bosu_Ball_Cable_Crunch_With_Side_Bends/1.jpg"
    ]
  },
  {
    "id": "ej-155-crunch-en-maquina",
    "nombre": "Crunch en máquina",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-abs",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Crunch en máquina es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Crunch abdominal",
      "Crunch en polea alta",
      "Crunch de bicicleta",
      "Crunch inverso"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ab_Crunch_Machine/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ab_Crunch_Machine/1.jpg"
    ]
  },
  {
    "id": "ej-156-elevacion-de-piernas-colgado",
    "nombre": "Elevación de piernas colgado",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "Antebrazos",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Avanzado",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de piernas colgado es un ejercicio aislado enfocado principalmente en abdomen, con participación secundaria de antebrazos. Se ejecuta con peso corporal y se clasifica como nivel avanzado. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen",
      "Antebrazos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Elevación de rodillas colgado",
      "Elevación de piernas en banco",
      "Elevación de rodillas en TRX",
      "Elevación de piernas en paralelas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Knee_Hip_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Knee_Hip_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-157-elevacion-de-rodillas-colgado",
    "nombre": "Elevación de rodillas colgado",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "Antebrazos",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de rodillas colgado es un ejercicio aislado enfocado principalmente en abdomen, con participación secundaria de antebrazos. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen",
      "Antebrazos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Elevación de piernas colgado",
      "Elevación de piernas en banco",
      "Elevación de rodillas en TRX",
      "Elevación de piernas en paralelas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Knee_Hip_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Knee_Hip_Raise/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-157-elevacion-de-rodillas-colgado/Subida%20no%20Step%20com%20Eleva%C3%A7%C3%A3o%20de%20Joelhos.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-158-rueda-abdominal-ab-wheel",
    "nombre": "Rueda abdominal (ab wheel)",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "Lumbares",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Avanzado",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Rueda abdominal (ab wheel) es un ejercicio compuesto enfocado principalmente en abdomen, con participación secundaria de lumbares. Se ejecuta con peso corporal y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Abdomen",
      "Lumbares"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Levantamiento turco",
      "Ab rollout con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/1.jpg"
    ]
  },
  {
    "id": "ej-159-plancha-abdominal",
    "nombre": "Plancha abdominal",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Plancha abdominal es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Plancha con peso",
      "Plancha con TRX",
      "Plancha con toque de hombro",
      "Plancha isométrica avanzada"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/1.jpg"
    ]
  },
  {
    "id": "ej-160-plancha-con-peso",
    "nombre": "Plancha con peso",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Disco",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-plate",
    "imagen": "",
    "video": "",
    "descripcion": "Plancha con peso es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con disco y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Plancha abdominal",
      "Plancha con TRX",
      "Plancha con toque de hombro",
      "Plancha isométrica avanzada"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-160-plancha-con-peso/Prancha.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-160-plancha-con-peso/Prancha%20com%20flex%C3%A3o%20lateral%20de%20quadril.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-160-plancha-con-peso/Prancha%20dinamica%20bola.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-160-plancha-con-peso/Prancha%20frente%20tr%C3%A1s.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-160-plancha-con-peso/Prancha%20lateral.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-160-plancha-con-peso/Prancha%20lateral%20com%20flex%C3%A3o%20lateral.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-161-abdominales-en-banco-declinado",
    "nombre": "Abdominales en banco declinado",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Abdominales en banco declinado es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Abdominales infra en banco",
      "Abdominales en V"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Crunch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Crunch/1.jpg"
    ]
  },
  {
    "id": "ej-162-abdominales-infra-en-banco",
    "nombre": "Abdominales infra en banco",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Abdominales infra en banco es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Abdominales en banco declinado",
      "Abdominales en V"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/1.jpg"
    ]
  },
  {
    "id": "ej-163-escaladores",
    "nombre": "Escaladores",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "Hombros",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Escaladores es un ejercicio aislado enfocado principalmente en abdomen, con participación secundaria de hombros. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Crunch en polea alta",
      "Crunch en máquina",
      "Plancha con peso",
      "Abdominal completo con disco"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-164-abdominales-en-v",
    "nombre": "Abdominales en V",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Abdominales en V es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Abdominales en banco declinado",
      "Abdominales infra en banco"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/1.jpg"
    ]
  },
  {
    "id": "ej-165-abdominal-completo-con-disco",
    "nombre": "Abdominal completo con disco",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Disco",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-plate",
    "imagen": "",
    "video": "",
    "descripcion": "Abdominal completo con disco es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con disco y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Abdominal con toque de pies",
      "Abdominal completo en TRX"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Suspended_Reverse_Crunch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Suspended_Reverse_Crunch/1.jpg"
    ]
  },
  {
    "id": "ej-166-crunch-de-bicicleta",
    "nombre": "Crunch de bicicleta",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "Oblicuos",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Crunch de bicicleta es un ejercicio aislado enfocado principalmente en abdomen, con participación secundaria de oblicuos. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen",
      "Oblicuos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Crunch abdominal",
      "Crunch en polea alta",
      "Crunch en máquina",
      "Crunch inverso"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cross-Body_Crunch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cross-Body_Crunch/1.jpg"
    ]
  },
  {
    "id": "ej-167-elevacion-de-piernas-en-banco",
    "nombre": "Elevación de piernas en banco",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de piernas en banco es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Elevación de piernas colgado",
      "Elevación de rodillas colgado",
      "Elevación de rodillas en TRX",
      "Elevación de piernas en paralelas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Knee_Hip_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Knee_Hip_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-168-bandera-dragon",
    "nombre": "Bandera dragón",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "Lumbares",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Avanzado",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Bandera dragón es un ejercicio compuesto enfocado principalmente en abdomen, con participación secundaria de lumbares. Se ejecuta con peso corporal y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Abdomen",
      "Lumbares"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Levantamiento turco",
      "Ab rollout con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-169-postura-hueca",
    "nombre": "Postura hueca",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Postura hueca es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Crunch en polea alta",
      "Crunch en máquina",
      "Plancha con peso",
      "Abdominal completo con disco"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-170-crunch-inverso",
    "nombre": "Crunch inverso",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Crunch inverso es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Crunch abdominal",
      "Crunch en polea alta",
      "Crunch en máquina",
      "Crunch de bicicleta"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cross-Body_Crunch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cross-Body_Crunch/1.jpg"
    ]
  },
  {
    "id": "ej-171-plancha-con-trx",
    "nombre": "Plancha con TRX",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "TRX",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-trx",
    "imagen": "",
    "video": "",
    "descripcion": "Plancha con TRX es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con trx y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Plancha abdominal",
      "Plancha con peso",
      "Plancha con toque de hombro",
      "Plancha isométrica avanzada"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/1.jpg"
    ]
  },
  {
    "id": "ej-172-elevacion-de-rodillas-en-trx",
    "nombre": "Elevación de rodillas en TRX",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "TRX",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-trx",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de rodillas en TRX es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con trx y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Elevación de piernas colgado",
      "Elevación de rodillas colgado",
      "Elevación de piernas en banco",
      "Elevación de piernas en paralelas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Knee_Hip_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Knee_Hip_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-173-levantamiento-turco",
    "nombre": "Levantamiento turco",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "Hombros, Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Kettlebell",
    "dificultad": "Avanzado",
    "icono": "icon-abs",
    "iconoEquipo": "icon-kettlebell",
    "imagen": "",
    "video": "",
    "descripcion": "Levantamiento turco es un ejercicio compuesto enfocado principalmente en abdomen, con participación secundaria de hombros, glúteos. Se ejecuta con kettlebell y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Abdomen",
      "Hombros",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido"
    ],
    "consejos": [
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo"
    ],
    "variantes": [
      "Rueda abdominal (ab wheel)",
      "Bandera dragón",
      "Burpee",
      "Ab rollout con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Turkish_Get-Up_Lunge_style/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Turkish_Get-Up_Lunge_style/1.jpg"
    ]
  },
  {
    "id": "ej-174-burpee",
    "nombre": "Burpee",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "Piernas, Pecho",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Burpee es un ejercicio compuesto enfocado principalmente en abdomen, con participación secundaria de piernas, pecho. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Abdomen",
      "Piernas",
      "Pecho"
    ],
    "objetivos": [
      "libre",
      "cardio",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Levantamiento turco",
      "Ab rollout con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-174-burpee/Nave%20Seal%20Burpee.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-175-plancha-con-toque-de-hombro",
    "nombre": "Plancha con toque de hombro",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Plancha con toque de hombro es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Plancha abdominal",
      "Plancha con peso",
      "Plancha con TRX",
      "Plancha isométrica avanzada"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/1.jpg"
    ]
  },
  {
    "id": "ej-176-elevacion-de-piernas-en-paralelas",
    "nombre": "Elevación de piernas en paralelas",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de piernas en paralelas es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con máquina y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Elevación de piernas colgado",
      "Elevación de rodillas colgado",
      "Elevación de piernas en banco",
      "Elevación de rodillas en TRX"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Hip_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Hip_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-177-ab-rollout-con-barra",
    "nombre": "Ab rollout con barra",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "Lumbares",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-abs",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Ab rollout con barra es un ejercicio compuesto enfocado principalmente en abdomen, con participación secundaria de lumbares. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Abdomen",
      "Lumbares"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Rueda abdominal (ab wheel)",
      "Bandera dragón",
      "Levantamiento turco",
      "Burpee"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-178-abdominal-con-toque-de-pies",
    "nombre": "Abdominal con toque de pies",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Abdominal con toque de pies es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Abdominal completo con disco",
      "Abdominal completo en TRX"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/1.jpg"
    ]
  },
  {
    "id": "ej-179-plancha-isometrica-avanzada",
    "nombre": "Plancha isométrica avanzada",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Plancha isométrica avanzada es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Plancha abdominal",
      "Plancha con peso",
      "Plancha con TRX",
      "Plancha con toque de hombro"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/1.jpg"
    ]
  },
  {
    "id": "ej-180-abdominal-completo-en-trx",
    "nombre": "Abdominal completo en TRX",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "TRX",
    "dificultad": "Intermedio",
    "icono": "icon-abs",
    "iconoEquipo": "icon-trx",
    "imagen": "",
    "video": "",
    "descripcion": "Abdominal completo en TRX es un ejercicio aislado enfocado principalmente en abdomen. Se ejecuta con trx y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Abdominal completo con disco",
      "Abdominal con toque de pies"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/1.jpg"
    ]
  },
  {
    "id": "ej-181-giro-ruso-russian-twist",
    "nombre": "Giro ruso (Russian twist)",
    "grupoMuscular": "Oblicuos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Disco",
    "dificultad": "Intermedio",
    "icono": "icon-obliques",
    "iconoEquipo": "icon-plate",
    "imagen": "",
    "video": "",
    "descripcion": "Giro ruso (Russian twist) es un ejercicio aislado enfocado principalmente en oblicuos. Se ejecuta con disco y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Oblicuos"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Elevación lateral de tronco",
      "Crunch oblicuo",
      "Plancha lateral",
      "Leñador en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plate_Twist/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plate_Twist/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-181-giro-ruso-russian-twist/Russian%20twist.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-182-elevacion-lateral-de-tronco",
    "nombre": "Elevación lateral de tronco",
    "grupoMuscular": "Oblicuos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-obliques",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación lateral de tronco es un ejercicio aislado enfocado principalmente en oblicuos. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Oblicuos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Giro ruso (Russian twist)",
      "Crunch oblicuo",
      "Plancha lateral",
      "Leñador en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-183-crunch-oblicuo",
    "nombre": "Crunch oblicuo",
    "grupoMuscular": "Oblicuos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-obliques",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Crunch oblicuo es un ejercicio aislado enfocado principalmente en oblicuos. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Oblicuos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Giro ruso (Russian twist)",
      "Elevación lateral de tronco",
      "Leñador en polea",
      "Giro de torso en máquina"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cross-Body_Crunch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cross-Body_Crunch/1.jpg"
    ]
  },
  {
    "id": "ej-184-plancha-lateral",
    "nombre": "Plancha lateral",
    "grupoMuscular": "Oblicuos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-obliques",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Plancha lateral es un ejercicio aislado enfocado principalmente en oblicuos. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Oblicuos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Giro ruso (Russian twist)",
      "Elevación lateral de tronco",
      "Leñador en polea",
      "Giro de torso en máquina"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push_Up_to_Side_Plank/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push_Up_to_Side_Plank/1.jpg"
    ]
  },
  {
    "id": "ej-185-lenador-en-polea",
    "nombre": "Leñador en polea",
    "grupoMuscular": "Oblicuos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-obliques",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Leñador en polea es un ejercicio aislado enfocado principalmente en oblicuos. Se ejecuta con polea y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Oblicuos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido"
    ],
    "consejos": [
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe"
    ],
    "variantes": [
      "Giro ruso (Russian twist)",
      "Elevación lateral de tronco",
      "Crunch oblicuo",
      "Plancha lateral"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-186-elevacion-de-piernas-lateral-colgado",
    "nombre": "Elevación de piernas lateral colgado",
    "grupoMuscular": "Oblicuos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Avanzado",
    "icono": "icon-obliques",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de piernas lateral colgado es un ejercicio aislado enfocado principalmente en oblicuos. Se ejecuta con peso corporal y se clasifica como nivel avanzado. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Oblicuos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Giro ruso (Russian twist)",
      "Elevación lateral de tronco",
      "Leñador en polea",
      "Giro de torso en máquina"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-187-giro-de-torso-en-maquina",
    "nombre": "Giro de torso en máquina",
    "grupoMuscular": "Oblicuos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-obliques",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Giro de torso en máquina es un ejercicio aislado enfocado principalmente en oblicuos. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Oblicuos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Giro ruso (Russian twist)",
      "Elevación lateral de tronco",
      "Crunch oblicuo",
      "Plancha lateral"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Russian_Twists/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Russian_Twists/1.jpg"
    ]
  },
  {
    "id": "ej-188-plancha-lateral-con-rotacion",
    "nombre": "Plancha lateral con rotación",
    "grupoMuscular": "Oblicuos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-obliques",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Plancha lateral con rotación es un ejercicio aislado enfocado principalmente en oblicuos. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Oblicuos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Giro ruso (Russian twist)",
      "Elevación lateral de tronco",
      "Leñador en polea",
      "Giro de torso en máquina"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push_Up_to_Side_Plank/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push_Up_to_Side_Plank/1.jpg"
    ]
  },
  {
    "id": "ej-189-russian-twist-con-banda-elastica",
    "nombre": "Russian twist con banda elástica",
    "grupoMuscular": "Oblicuos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-obliques",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Russian twist con banda elástica es un ejercicio aislado enfocado principalmente en oblicuos. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Oblicuos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Giro ruso (Russian twist)",
      "Elevación lateral de tronco",
      "Crunch oblicuo",
      "Plancha lateral"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-190-molino-con-kettlebell",
    "nombre": "Molino con kettlebell",
    "grupoMuscular": "Oblicuos",
    "grupoSecundario": "Hombros",
    "tipo": "Aislado",
    "equipamiento": "Kettlebell",
    "dificultad": "Avanzado",
    "icono": "icon-obliques",
    "iconoEquipo": "icon-kettlebell",
    "imagen": "",
    "video": "",
    "descripcion": "Molino con kettlebell es un ejercicio aislado enfocado principalmente en oblicuos, con participación secundaria de hombros. Se ejecuta con kettlebell y se clasifica como nivel avanzado. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Oblicuos",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Giro ruso (Russian twist)",
      "Elevación lateral de tronco",
      "Crunch oblicuo",
      "Plancha lateral"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Advanced_Kettlebell_Windmill/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Advanced_Kettlebell_Windmill/1.jpg"
    ]
  },
  {
    "id": "ej-191-oblicuo-en-trx",
    "nombre": "Oblicuo en TRX",
    "grupoMuscular": "Oblicuos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "TRX",
    "dificultad": "Intermedio",
    "icono": "icon-obliques",
    "iconoEquipo": "icon-trx",
    "imagen": "",
    "video": "",
    "descripcion": "Oblicuo en TRX es un ejercicio aislado enfocado principalmente en oblicuos. Se ejecuta con trx y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Oblicuos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Giro ruso (Russian twist)",
      "Elevación lateral de tronco",
      "Crunch oblicuo",
      "Plancha lateral"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-192-sentadilla-con-barra",
    "nombre": "Sentadilla con barra",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos, Isquiotibiales",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-quads",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla con barra es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos, isquiotibiales. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos",
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet",
      "Sentadilla búlgara"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/agachamento%20barra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/agachamento%20bulgaro.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/agachamento%20bulgaro%20com%20barra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20com%20halteres%20com%20uma%20perna.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20livre%20com%20barra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/agachamento%20livre%20p%C3%A9s%20juntos.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/agachamento%20na%20maquina.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/agachamento%20no%20banco.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/agachamento%20no%20cross.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/agachamento%20p%C3%A9s%20afastados.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20terra%20com%20halteres%20do%20lado.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%2003.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20apoio%20bola.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20com%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20com%20salto.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20frontal%2002.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20hack.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20hack%2003.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20B%C3%BAlgaro%20com%20Peso%20Corporal.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20b%C3%BAlgaro%20com%20salto.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20Camar%C3%A3o.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20com%20Joelho%20Elevado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20com%20Salto.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20com%20Sustenta%C3%A7%C3%A3o%20e%20Eleva%C3%A7%C3%A3o%20de%20Panturrilhas.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20havaiano.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20no%20Banco%20com%20Peso%20Corporal.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20Pistol%20com%20TRX.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20Pistola%20Apoiado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20Pistola%20com%20Kettlebell.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20Pistola%20na%20Caixa.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20pistola.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20Sissy%20ajoelhado%20com%20Peso%20Corporal.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20Skater.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Salto%20na%20Caixa%20para%20Agachamento%20Pistola.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20B%C3%BAlgaro%20com%20Peso%20Corporal-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20b%C3%BAlgaro%20com%20salto-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20Camar%C3%A3o-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20com%20Chute%20Lateral%20e%20Toque%20no%20Calcanhar.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20com%20Eleva%C3%A7%C3%A3o%20dos%20Joelhos.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20com%20Faixa%20El%C3%A1stica%20em%20Afundo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20com%20Faixa%20El%C3%A1stica%20sobre%20a%20Cabe%C3%A7a.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20com%20Gymstick.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20com%20Salto-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20com%20Sustenta%C3%A7%C3%A3o%20e%20Eleva%C3%A7%C3%A3o%20de%20Panturrilhas-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20Cossaco.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20Dividido%20Profundo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20Goblet%20com%20Kettlebell%20e%20Faixa%20El%C3%A1stica.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20na%20Parede%20com%20Bola%20de%20Exerc%C3%ADcio.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20no%20Banco%20com%20Peso%20Corporal-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20Pistola%20com%20Apoio%20em%20Caixa.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20Pistola%20na%20Caixa-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento%20unilateral%20cruzado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Agachamento-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Salto%20em%20Agachamento%20com%20Joelhos%20Flexionados.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-192-sentadilla-con-barra/Salto%20na%20Caixa%20para%20Agachamento%20Pistola-2.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-193-sentadilla-frontal",
    "nombre": "Sentadilla frontal",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Abdomen",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-quads",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla frontal es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de abdomen. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla en Smith",
      "Sentadilla goblet",
      "Sentadilla búlgara"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-194-sentadilla-en-smith",
    "nombre": "Sentadilla en Smith",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Smith",
    "dificultad": "Principiante",
    "icono": "icon-quads",
    "iconoEquipo": "icon-smith",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla en Smith es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con smith y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla goblet",
      "Sentadilla búlgara"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-195-sentadilla-goblet",
    "nombre": "Sentadilla goblet",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-quads",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla goblet es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla búlgara"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-196-sentadilla-bulgara",
    "nombre": "Sentadilla búlgara",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-quads",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla búlgara es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso"
    ],
    "consejos": [
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Squat/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-196-sentadilla-bulgara/Bulgaro%20com%20barra.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-196-sentadilla-bulgara/Bulgaro%20com%20halteres.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-196-sentadilla-bulgara/Afundo%20no%20banco.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-196-sentadilla-bulgara/Afundo%20no%20banco-2.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-197-prensa-de-piernas",
    "nombre": "Prensa de piernas",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-quads",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Prensa de piernas es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con máquina y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Prensa horizontal",
      "Prensa de piernas unilateral"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-197-prensa-de-piernas/leg%20press.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-197-prensa-de-piernas/leg%20press%20p%C3%A9s%20afastados.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-197-prensa-de-piernas/panturrinha%20no%20leg%20press.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-197-prensa-de-piernas/Leg%20press%2045.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-197-prensa-de-piernas/Leg%20press%2045%2002.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-197-prensa-de-piernas/Leg%20press%20horizontal.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-198-extension-de-cuadriceps-en-maquina",
    "nombre": "Extensión de cuádriceps en máquina",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-quads",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Extensión de cuádriceps en máquina es un ejercicio aislado enfocado principalmente en cuádriceps. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Cuádriceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Sentadilla isométrica en pared",
      "Estiramiento de cuádriceps de pie",
      "Estiramiento de cuádriceps tumbado",
      "Zancada con estiramiento de cuádriceps"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-198-extension-de-cuadriceps-en-maquina/Extens%C3%A3o%20de%20Quadril%20em%20p%C3%A9.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-198-extension-de-cuadriceps-en-maquina/Extens%C3%A3o%20de%20quadril%20em%20p%C3%A9%20com%20joelhos%20flexionados.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-198-extension-de-cuadriceps-en-maquina/Extens%C3%A3o%20de%20quadril%20em%20p%C3%A9%20na%20polia.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-199-zancadas-con-mancuernas",
    "nombre": "Zancadas con mancuernas",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-quads",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Zancadas con mancuernas es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Zancadas con barra",
      "Zancadas caminando"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges/1.jpg"
    ]
  },
  {
    "id": "ej-200-zancadas-con-barra",
    "nombre": "Zancadas con barra",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-quads",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Zancadas con barra es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Zancadas con mancuernas",
      "Zancadas caminando"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Lunge/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Lunge/1.jpg"
    ]
  },
  {
    "id": "ej-201-zancadas-caminando",
    "nombre": "Zancadas caminando",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-quads",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Zancadas caminando es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Zancadas con mancuernas",
      "Zancadas con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Lunge/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Lunge/1.jpg"
    ]
  },
  {
    "id": "ej-202-sentadilla-hack",
    "nombre": "Sentadilla Hack",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Máquina",
    "dificultad": "Intermedio",
    "icono": "icon-quads",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla Hack es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con máquina y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-203-sentadilla-sumo",
    "nombre": "Sentadilla sumo",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Aductores, Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-quads",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla sumo es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de aductores, glúteos. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Aductores",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-203-sentadilla-sumo/agachamento%20sumo%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-203-sentadilla-sumo/Agachamento%20sumo%20com%20halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-203-sentadilla-sumo/agachamento%20sumo%20livre.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-203-sentadilla-sumo/Agachamento%20Sumo%20Peso%20Corporal.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-203-sentadilla-sumo/Agachamento%20sumo%2001.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-203-sentadilla-sumo/Agachamento%20sumo%20barra.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-203-sentadilla-sumo/Agachamento%20sumo%20com%20halter.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-203-sentadilla-sumo/Agachmento%20sumo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-203-sentadilla-sumo/Agachmento%20sumo%20com%20halter%2002.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-203-sentadilla-sumo/Agachamento%20Sum%C3%B4%20sem%20Pesos.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-203-sentadilla-sumo/Agachamento%20Sum%C3%B4%20sem%20Pesos-2.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-204-step-up-con-mancuernas",
    "nombre": "Step up con mancuernas",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-quads",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Step up con mancuernas es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Prensa de piernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Step_Ups/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Step_Ups/1.jpg"
    ]
  },
  {
    "id": "ej-205-sentadilla-con-banda-elastica",
    "nombre": "Sentadilla con banda elástica",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-quads",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla con banda elástica es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Squats_-_With_Bands/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Squats_-_With_Bands/1.jpg"
    ]
  },
  {
    "id": "ej-206-sentadilla-pistol",
    "nombre": "Sentadilla pistol",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Avanzado",
    "icono": "icon-quads",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla pistol es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con peso corporal y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Pistol_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Pistol_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-207-sentadilla-frontal-en-smith",
    "nombre": "Sentadilla frontal en Smith",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Abdomen",
    "tipo": "Compuesto",
    "equipamiento": "Smith",
    "dificultad": "Intermedio",
    "icono": "icon-quads",
    "iconoEquipo": "icon-smith",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla frontal en Smith es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de abdomen. Se ejecuta con smith y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-208-front-squat-con-kettlebell",
    "nombre": "Front squat con kettlebell",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Kettlebell",
    "dificultad": "Intermedio",
    "icono": "icon-quads",
    "iconoEquipo": "icon-kettlebell",
    "imagen": "",
    "video": "",
    "descripcion": "Front squat con kettlebell es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con kettlebell y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido"
    ],
    "consejos": [
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-209-pistol-squat-asistido-en-trx",
    "nombre": "Pistol squat asistido en TRX",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "TRX",
    "dificultad": "Intermedio",
    "icono": "icon-quads",
    "iconoEquipo": "icon-trx",
    "imagen": "",
    "video": "",
    "descripcion": "Pistol squat asistido en TRX es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con trx y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Pistol_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Pistol_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-210-sentadilla-con-salto",
    "nombre": "Sentadilla con salto",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-quads",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla con salto es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "cardio",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Freehand_Jump_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Freehand_Jump_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-211-sentadilla-zercher",
    "nombre": "Sentadilla Zercher",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Abdomen",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-quads",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla Zercher es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de abdomen. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-212-sentadilla-con-cadenas",
    "nombre": "Sentadilla con cadenas",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-quads",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla con cadenas es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-213-prensa-horizontal",
    "nombre": "Prensa horizontal",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-quads",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Prensa horizontal es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con máquina y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Prensa de piernas",
      "Prensa de piernas unilateral"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/1.jpg"
    ]
  },
  {
    "id": "ej-214-sentadilla-isometrica-en-pared",
    "nombre": "Sentadilla isométrica en pared",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-quads",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla isométrica en pared es un ejercicio aislado enfocado principalmente en cuádriceps. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Cuádriceps"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-215-sentadilla-con-press",
    "nombre": "Sentadilla con press",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-quads",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla con press es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de hombros. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Anti-Gravity_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Anti-Gravity_Press/1.jpg"
    ]
  },
  {
    "id": "ej-216-lanzamiento-a-pared-con-balon-medicinal",
    "nombre": "Lanzamiento a pared con balón medicinal",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Hombros",
    "tipo": "Compuesto",
    "equipamiento": "Disco",
    "dificultad": "Intermedio",
    "icono": "icon-quads",
    "iconoEquipo": "icon-plate",
    "imagen": "",
    "video": "",
    "descripcion": "Lanzamiento a pared con balón medicinal es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de hombros. Se ejecuta con disco y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-217-sentadilla-jefferson",
    "nombre": "Sentadilla Jefferson",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Aductores",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-quads",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla Jefferson es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de aductores. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Aductores"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Sentadilla con barra",
      "Sentadilla frontal",
      "Sentadilla en Smith",
      "Sentadilla goblet"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-218-prensa-de-piernas-unilateral",
    "nombre": "Prensa de piernas unilateral",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Máquina",
    "dificultad": "Intermedio",
    "icono": "icon-quads",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Prensa de piernas unilateral es un ejercicio compuesto enfocado principalmente en cuádriceps, con participación secundaria de glúteos. Se ejecuta con máquina y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Cuádriceps",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Prensa de piernas",
      "Prensa horizontal"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-218-prensa-de-piernas-unilateral/Leg%20press%2045%20unilateral.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-219-peso-muerto-rumano-con-barra",
    "nombre": "Peso muerto rumano con barra",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto rumano con barra es un ejercicio compuesto enfocado principalmente en isquiotibiales, con participación secundaria de glúteos. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Isquiotibiales",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Peso muerto rumano con mancuernas",
      "Peso muerto a una pierna",
      "Peso muerto piernas rígidas",
      "Peso muerto rumano unilateral con kettlebell"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-219-peso-muerto-rumano-con-barra/stiff.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-219-peso-muerto-rumano-con-barra/stiff%20com%20barra.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-219-peso-muerto-rumano-con-barra/stiff%20no%20smth.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-219-peso-muerto-rumano-con-barra/Stiff%20unil%20com%20medball.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-220-peso-muerto-rumano-con-mancuernas",
    "nombre": "Peso muerto rumano con mancuernas",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto rumano con mancuernas es un ejercicio compuesto enfocado principalmente en isquiotibiales, con participación secundaria de glúteos. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Isquiotibiales",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Peso muerto rumano con barra",
      "Peso muerto a una pierna",
      "Peso muerto piernas rígidas",
      "Peso muerto rumano unilateral con kettlebell"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-220-peso-muerto-rumano-con-mancuernas/Stiff%20com%20Halteres.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-220-peso-muerto-rumano-con-mancuernas/Stiff%20com%20halteres.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-221-curl-femoral-tumbado",
    "nombre": "Curl femoral tumbado",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Curl femoral tumbado es un ejercicio aislado enfocado principalmente en isquiotibiales. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Curl femoral sentado",
      "Curl femoral de pie",
      "Curl nórdico",
      "Curl femoral en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-221-curl-femoral-tumbado/Cadeira%20flexora.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-221-curl-femoral-tumbado/Mesa%20flexora.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-222-curl-femoral-sentado",
    "nombre": "Curl femoral sentado",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Curl femoral sentado es un ejercicio aislado enfocado principalmente en isquiotibiales. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Curl femoral tumbado",
      "Curl femoral de pie",
      "Curl nórdico",
      "Curl femoral en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/1.jpg"
    ]
  },
  {
    "id": "ej-223-curl-femoral-de-pie",
    "nombre": "Curl femoral de pie",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Curl femoral de pie es un ejercicio aislado enfocado principalmente en isquiotibiales. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Curl femoral tumbado",
      "Curl femoral sentado",
      "Curl nórdico",
      "Curl femoral en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/1.jpg"
    ]
  },
  {
    "id": "ej-224-buenos-dias-good-morning",
    "nombre": "Buenos días (good morning)",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "Lumbares",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Buenos días (good morning) es un ejercicio compuesto enfocado principalmente en isquiotibiales, con participación secundaria de lumbares. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Isquiotibiales",
      "Lumbares"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo"
    ],
    "variantes": [
      "Peso muerto rumano con mancuernas",
      "Peso muerto a una pierna",
      "Glute-ham raise",
      "Peso muerto rumano unilateral con kettlebell"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning/1.jpg"
    ]
  },
  {
    "id": "ej-225-peso-muerto-a-una-pierna",
    "nombre": "Peso muerto a una pierna",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto a una pierna es un ejercicio compuesto enfocado principalmente en isquiotibiales, con participación secundaria de glúteos. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Isquiotibiales",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Peso muerto rumano con barra",
      "Peso muerto rumano con mancuernas",
      "Peso muerto piernas rígidas",
      "Peso muerto rumano unilateral con kettlebell"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stiff-Legged_Dumbbell_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stiff-Legged_Dumbbell_Deadlift/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-225-peso-muerto-a-una-pierna/levantamento%20terra%20com%20barra.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-226-hip-thrust-enfoque-isquiotibiales",
    "nombre": "Hip thrust enfoque isquiotibiales",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Hip thrust enfoque isquiotibiales es un ejercicio compuesto enfocado principalmente en isquiotibiales, con participación secundaria de glúteos. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Isquiotibiales",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo"
    ],
    "variantes": [
      "Peso muerto rumano con mancuernas",
      "Peso muerto a una pierna",
      "Glute-ham raise",
      "Peso muerto rumano unilateral con kettlebell"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/1.jpg"
    ]
  },
  {
    "id": "ej-227-curl-nordico",
    "nombre": "Curl nórdico",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Avanzado",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Curl nórdico es un ejercicio aislado enfocado principalmente en isquiotibiales. Se ejecuta con peso corporal y se clasifica como nivel avanzado. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Curl femoral tumbado",
      "Curl femoral sentado",
      "Curl femoral de pie",
      "Curl femoral en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ball_Leg_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ball_Leg_Curl/1.jpg"
    ]
  },
  {
    "id": "ej-228-peso-muerto-piernas-rigidas",
    "nombre": "Peso muerto piernas rígidas",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "Lumbares",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto piernas rígidas es un ejercicio compuesto enfocado principalmente en isquiotibiales, con participación secundaria de lumbares. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Isquiotibiales",
      "Lumbares"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Peso muerto rumano con barra",
      "Peso muerto rumano con mancuernas",
      "Peso muerto a una pierna",
      "Peso muerto rumano unilateral con kettlebell"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/1.jpg"
    ]
  },
  {
    "id": "ej-229-curl-femoral-en-polea",
    "nombre": "Curl femoral en polea",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Curl femoral en polea es un ejercicio aislado enfocado principalmente en isquiotibiales. Se ejecuta con polea y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Curl femoral tumbado",
      "Curl femoral sentado",
      "Curl femoral de pie",
      "Curl nórdico"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ball_Leg_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ball_Leg_Curl/1.jpg"
    ]
  },
  {
    "id": "ej-230-glute-ham-raise",
    "nombre": "Glute-ham raise",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Máquina",
    "dificultad": "Avanzado",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Glute-ham raise es un ejercicio compuesto enfocado principalmente en isquiotibiales, con participación secundaria de glúteos. Se ejecuta con máquina y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Isquiotibiales",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Peso muerto rumano con barra",
      "Peso muerto rumano con mancuernas",
      "Buenos días (good morning)",
      "Peso muerto a una pierna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-231-peso-muerto-rumano-unilateral-con-kettlebell",
    "nombre": "Peso muerto rumano unilateral con kettlebell",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Kettlebell",
    "dificultad": "Intermedio",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-kettlebell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto rumano unilateral con kettlebell es un ejercicio compuesto enfocado principalmente en isquiotibiales, con participación secundaria de glúteos. Se ejecuta con kettlebell y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Isquiotibiales",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso"
    ],
    "consejos": [
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo"
    ],
    "variantes": [
      "Peso muerto rumano con barra",
      "Peso muerto rumano con mancuernas",
      "Peso muerto a una pierna",
      "Peso muerto piernas rígidas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-231-peso-muerto-rumano-unilateral-con-kettlebell/stiff%20no%20smth%20unilateral.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-231-peso-muerto-rumano-unilateral-con-kettlebell/stiff%20unilateral.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-231-peso-muerto-rumano-unilateral-con-kettlebell/stiff%20unilateral%20com%20kettibel.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-232-curl-femoral-con-banda-elastica",
    "nombre": "Curl femoral con banda elástica",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Curl femoral con banda elástica es un ejercicio aislado enfocado principalmente en isquiotibiales. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Curl femoral tumbado",
      "Curl femoral sentado",
      "Curl femoral de pie",
      "Curl nórdico"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ball_Leg_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ball_Leg_Curl/1.jpg"
    ]
  },
  {
    "id": "ej-233-balanceo-con-kettlebell",
    "nombre": "Balanceo con kettlebell",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "Glúteos, Lumbares",
    "tipo": "Compuesto",
    "equipamiento": "Kettlebell",
    "dificultad": "Intermedio",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-kettlebell",
    "imagen": "",
    "video": "",
    "descripcion": "Balanceo con kettlebell es un ejercicio compuesto enfocado principalmente en isquiotibiales, con participación secundaria de glúteos, lumbares. Se ejecuta con kettlebell y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Isquiotibiales",
      "Glúteos",
      "Lumbares"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo"
    ],
    "variantes": [
      "Peso muerto rumano con barra",
      "Peso muerto rumano con mancuernas",
      "Buenos días (good morning)",
      "Peso muerto a una pierna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-234-curl-femoral-unilateral-tumbado",
    "nombre": "Curl femoral unilateral tumbado",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Intermedio",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Curl femoral unilateral tumbado es un ejercicio aislado enfocado principalmente en isquiotibiales. Se ejecuta con máquina y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Curl femoral tumbado",
      "Curl femoral sentado",
      "Curl femoral de pie",
      "Curl nórdico"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-234-curl-femoral-unilateral-tumbado/Mesa%20flexora%20unilateral.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-235-peso-muerto-rumano-con-banda-elastica",
    "nombre": "Peso muerto rumano con banda elástica",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto rumano con banda elástica es un ejercicio compuesto enfocado principalmente en isquiotibiales, con participación secundaria de glúteos. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Isquiotibiales",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Peso muerto rumano con barra",
      "Peso muerto rumano con mancuernas",
      "Peso muerto a una pierna",
      "Peso muerto piernas rígidas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-235-peso-muerto-rumano-con-banda-elastica/Stiff%20com%20El%C3%A1stico%20de%20Resist%C3%AAncia.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-236-hip-thrust-con-barra",
    "nombre": "Hip thrust con barra",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "Isquiotibiales",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Hip thrust con barra es un ejercicio compuesto enfocado principalmente en glúteos, con participación secundaria de isquiotibiales. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Glúteos",
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso"
    ],
    "consejos": [
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo"
    ],
    "variantes": [
      "Hip thrust en máquina",
      "Hip thrust a una pierna",
      "Hip thrust unilateral con banda",
      "Hip thrust en banco"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/1.jpg"
    ]
  },
  {
    "id": "ej-237-puente-de-gluteos",
    "nombre": "Puente de glúteos",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Puente de glúteos es un ejercicio aislado enfocado principalmente en glúteos. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Puente de rana",
      "Puente de glúteo a una pierna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single_Leg_Glute_Bridge/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single_Leg_Glute_Bridge/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/eleva%C3%A7%C3%A3o%20pelvica%20livre.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/Eleva%C3%A7%C3%A3o%20p%C3%A9lvica.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/ELEVA%C3%87%C3%83O%20P%C3%89LVICA%20APOIO%20UNILATERAL.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/Eleva%C3%A7%C3%A3o%20p%C3%A9lvica%20p%C3%A9s%20elevados.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/Eleva%C3%A7%C3%A3o%20p%C3%A9lvica%20p%C3%A9s%20elevados%2002.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/Eleva%C3%A7%C3%A3o%20p%C3%A9lvica%20unilateral.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/Eleva%C3%A7%C3%A3o%20P%C3%A9lvica%20Declinado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/Ponte%20em%20Unilateral.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/Eleva%C3%A7%C3%A3o%20P%C3%A9lvica%20com%20Banda%20de%20Resist%C3%AAncia.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/Eleva%C3%A7%C3%A3o%20P%C3%A9lvica%20Declinado-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/Ponte%20com%20Faixa%20El%C3%A1stica.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/Ponte%20em%20Unilateral-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/Ponte%20Unilateral%20Com%20Uma%20Perna%20Levantada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-237-puente-de-gluteos/Ponte%20Unilateral%20no%20Banco.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-238-patada-de-gluteo-en-polea",
    "nombre": "Patada de glúteo en polea",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Patada de glúteo en polea es un ejercicio aislado enfocado principalmente en glúteos. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Patada de glúteo en máquina",
      "Patada de glúteo a cuatro apoyos",
      "Patada de glúteo con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Kickback/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Kickback/1.jpg"
    ]
  },
  {
    "id": "ej-239-patada-de-gluteo-en-maquina",
    "nombre": "Patada de glúteo en máquina",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Patada de glúteo en máquina es un ejercicio aislado enfocado principalmente en glúteos. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Patada de glúteo en polea",
      "Patada de glúteo a cuatro apoyos",
      "Patada de glúteo con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Kickback/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Kickback/1.jpg"
    ]
  },
  {
    "id": "ej-240-abduccion-de-cadera-en-maquina",
    "nombre": "Abducción de cadera en máquina",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Abducción de cadera en máquina es un ejercicio aislado enfocado principalmente en glúteos. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Puente de glúteos",
      "Patada de glúteo en polea",
      "Patada de glúteo a cuatro apoyos",
      "Puente de rana"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-240-abduccion-de-cadera-en-maquina/Abdu%C3%A7ao%20de%20quadril%20em%20p%C3%A9.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-240-abduccion-de-cadera-en-maquina/Abdu%C3%A7%C3%A3o%20de%20Quadril%20com%20Faixa.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-240-abduccion-de-cadera-en-maquina/Abdu%C3%A7%C3%A3o%20m%C3%A1quina.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-240-abduccion-de-cadera-en-maquina/Abdu%C3%A7%C3%A3o%20m%C3%A1quina%2002.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-240-abduccion-de-cadera-en-maquina/Abdu%C3%A7%C3%A3o%20no%20cabo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-240-abduccion-de-cadera-en-maquina/Abdu%C3%A7%C3%A3o%20de%20Quadril%20com%20Faixa-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-240-abduccion-de-cadera-en-maquina/Abdu%C3%A7%C3%A3o%20de%20Quadril%20em%20Dec%C3%BAbito%20Lateral.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-240-abduccion-de-cadera-en-maquina/Abdu%C3%A7%C3%A3o%20de%20Quadril%20em%20P%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-240-abduccion-de-cadera-en-maquina/Abdu%C3%A7%C3%A3o%20de%20Quadril%20Lateral.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-240-abduccion-de-cadera-en-maquina/Abdu%C3%A7%C3%A3o%20de%20Quadril%20Sentado%20com%20Faixa%20El%C3%A1stica.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-241-sentadilla-sumo-con-mancuerna",
    "nombre": "Sentadilla sumo con mancuerna",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "Aductores",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla sumo con mancuerna es un ejercicio compuesto enfocado principalmente en glúteos, con participación secundaria de aductores. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Glúteos",
      "Aductores"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Sentadilla sumo en Smith",
      "Sentadilla goblet enfoque glúteo con kettlebell"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-242-zancada-bulgara",
    "nombre": "Zancada búlgara",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "Cuádriceps",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Zancada búlgara es un ejercicio compuesto enfocado principalmente en glúteos, con participación secundaria de cuádriceps. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Glúteos",
      "Cuádriceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Hip thrust con barra",
      "Peso muerto sumo enfoque glúteo",
      "Hip thrust en máquina",
      "Hip thrust a una pierna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges/1.jpg"
    ]
  },
  {
    "id": "ej-243-peso-muerto-sumo-enfoque-gluteo",
    "nombre": "Peso muerto sumo enfoque glúteo",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "Aductores",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto sumo enfoque glúteo es un ejercicio compuesto enfocado principalmente en glúteos, con participación secundaria de aductores. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Glúteos",
      "Aductores"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso"
    ],
    "variantes": [
      "Sentadilla sumo con mancuerna",
      "Zancada búlgara",
      "Hip thrust en máquina",
      "Step up alto con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Sumo_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Sumo_Deadlift/1.jpg"
    ]
  },
  {
    "id": "ej-244-hip-thrust-en-maquina",
    "nombre": "Hip thrust en máquina",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "",
    "tipo": "Compuesto",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Hip thrust en máquina es un ejercicio compuesto enfocado principalmente en glúteos. Se ejecuta con máquina y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Hip thrust con barra",
      "Hip thrust a una pierna",
      "Hip thrust unilateral con banda",
      "Hip thrust en banco"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/1.jpg"
    ]
  },
  {
    "id": "ej-245-step-up-alto-con-mancuernas",
    "nombre": "Step up alto con mancuernas",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "Cuádriceps",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Step up alto con mancuernas es un ejercicio compuesto enfocado principalmente en glúteos, con participación secundaria de cuádriceps. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Glúteos",
      "Cuádriceps"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Hip thrust con barra",
      "Peso muerto sumo enfoque glúteo",
      "Hip thrust en máquina",
      "Hip thrust a una pierna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Step_Ups/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Step_Ups/1.jpg"
    ]
  },
  {
    "id": "ej-246-patada-de-gluteo-a-cuatro-apoyos",
    "nombre": "Patada de glúteo a cuatro apoyos",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Patada de glúteo a cuatro apoyos es un ejercicio aislado enfocado principalmente en glúteos. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Patada de glúteo en polea",
      "Patada de glúteo en máquina",
      "Patada de glúteo con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Kickback/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Kickback/1.jpg"
    ]
  },
  {
    "id": "ej-247-puente-de-rana",
    "nombre": "Puente de rana",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Puente de rana es un ejercicio aislado enfocado principalmente en glúteos. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Puente de glúteos",
      "Puente de glúteo a una pierna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butt_Lift_Bridge/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butt_Lift_Bridge/1.jpg"
    ]
  },
  {
    "id": "ej-248-hip-thrust-a-una-pierna",
    "nombre": "Hip thrust a una pierna",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "",
    "tipo": "Compuesto",
    "equipamiento": "Peso corporal",
    "dificultad": "Avanzado",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Hip thrust a una pierna es un ejercicio compuesto enfocado principalmente en glúteos. Se ejecuta con peso corporal y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Hip thrust con barra",
      "Hip thrust en máquina",
      "Hip thrust unilateral con banda",
      "Hip thrust en banco"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single_Leg_Glute_Bridge/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single_Leg_Glute_Bridge/1.jpg"
    ]
  },
  {
    "id": "ej-249-cable-pull-through",
    "nombre": "Cable pull-through",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "Isquiotibiales",
    "tipo": "Compuesto",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Cable pull-through es un ejercicio compuesto enfocado principalmente en glúteos, con participación secundaria de isquiotibiales. Se ejecuta con polea y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Glúteos",
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido"
    ],
    "consejos": [
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe"
    ],
    "variantes": [
      "Hip thrust con barra",
      "Sentadilla sumo con mancuerna",
      "Zancada búlgara",
      "Peso muerto sumo enfoque glúteo"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-250-hip-thrust-unilateral-con-banda",
    "nombre": "Hip thrust unilateral con banda",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "",
    "tipo": "Compuesto",
    "equipamiento": "Banda elástica",
    "dificultad": "Intermedio",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Hip thrust unilateral con banda es un ejercicio compuesto enfocado principalmente en glúteos. Se ejecuta con banda elástica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Hip thrust con barra",
      "Hip thrust en máquina",
      "Hip thrust a una pierna",
      "Hip thrust en banco"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/1.jpg"
    ]
  },
  {
    "id": "ej-251-puente-de-gluteo-a-una-pierna",
    "nombre": "Puente de glúteo a una pierna",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Puente de glúteo a una pierna es un ejercicio aislado enfocado principalmente en glúteos. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Puente de glúteos",
      "Puente de rana"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single_Leg_Glute_Bridge/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single_Leg_Glute_Bridge/1.jpg"
    ]
  },
  {
    "id": "ej-252-sentadilla-sumo-en-smith",
    "nombre": "Sentadilla sumo en Smith",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "Aductores",
    "tipo": "Compuesto",
    "equipamiento": "Smith",
    "dificultad": "Intermedio",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-smith",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla sumo en Smith es un ejercicio compuesto enfocado principalmente en glúteos, con participación secundaria de aductores. Se ejecuta con smith y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Glúteos",
      "Aductores"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies"
    ],
    "consejos": [
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo",
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna"
    ],
    "variantes": [
      "Sentadilla sumo con mancuerna",
      "Sentadilla goblet enfoque glúteo con kettlebell"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Squat/1.jpg"
    ]
  },
  {
    "id": "ej-253-patada-de-gluteo-con-banda-elastica",
    "nombre": "Patada de glúteo con banda elástica",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Patada de glúteo con banda elástica es un ejercicio aislado enfocado principalmente en glúteos. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Patada de glúteo en polea",
      "Patada de glúteo en máquina",
      "Patada de glúteo a cuatro apoyos"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Kickback/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Kickback/1.jpg"
    ]
  },
  {
    "id": "ej-254-sentadilla-goblet-enfoque-gluteo-con-kettlebell",
    "nombre": "Sentadilla goblet enfoque glúteo con kettlebell",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "Cuádriceps",
    "tipo": "Compuesto",
    "equipamiento": "Kettlebell",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-kettlebell",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla goblet enfoque glúteo con kettlebell es un ejercicio compuesto enfocado principalmente en glúteos, con participación secundaria de cuádriceps. Se ejecuta con kettlebell y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Glúteos",
      "Cuádriceps"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Sentadilla sumo con mancuerna",
      "Sentadilla sumo en Smith"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Squats_With_Two_Kettlebells/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Squats_With_Two_Kettlebells/1.jpg"
    ]
  },
  {
    "id": "ej-255-hip-thrust-en-banco",
    "nombre": "Hip thrust en banco",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "Isquiotibiales",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Hip thrust en banco es un ejercicio compuesto enfocado principalmente en glúteos, con participación secundaria de isquiotibiales. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Glúteos",
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Acelerar la fase excéntrica en lugar de controlarla",
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Hip thrust con barra",
      "Hip thrust en máquina",
      "Hip thrust a una pierna",
      "Hip thrust unilateral con banda"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/1.jpg"
    ]
  },
  {
    "id": "ej-256-elevacion-de-talones-de-pie",
    "nombre": "Elevación de talones de pie",
    "grupoMuscular": "Gemelos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-calves",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de talones de pie es un ejercicio aislado enfocado principalmente en gemelos. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Gemelos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Elevación de talones sentado",
      "Elevación de talones en prensa",
      "Elevación de talones con mancuernas",
      "Elevación de talones a una pierna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Gemeos%20sentado.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Panturrilha%20em%20p%C3%A9%20m%C3%A1quina.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Panturrilha%20em%20p%C3%A9%20unilateral.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Panturrilha%20leg%2045.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Panturrilha%20leg%20press%20horizontal.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Panturrilha%20maquina%2002.gif",
        "confianza": "alta"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Eleva%C3%A7%C3%A3o%20de%20panturrilha%20em%20p%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Eleva%C3%A7%C3%A3o%20de%20Panturrilha%20em%20Uma%20Perna.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Levantamento%20de%20panturrilha%20com%20apoio%20e%20sobrecarga.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Eleva%C3%A7%C3%A3o%20de%20Panturrilha%20com%20Faixa%20El%C3%A1stica%20de%20Resist%C3%AAncia.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Eleva%C3%A7%C3%A3o%20de%20panturrilha%20em%20p%C3%A9-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Eleva%C3%A7%C3%A3o%20de%20Panturrilha%20em%20Uma%20Perna-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Alongamento%20da%20panturrilha%20agachado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Alongamento%20da%20panturrilha%20com%20descida%20do%20calcanhar.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Alongamento%20de%20Panturrilha%20com%20Corda.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Alongamento%20de%20panturrilha%20com%20uma%20perna%20esticada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Alongamento%20de%20panturrilha%20com%20uma%20perna.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Alongamento%20de%20panturrilha%20em%20posi%C3%A7%C3%A3o%20est%C3%A1tica.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-256-elevacion-de-talones-de-pie/Alongamento%20de%20panturrilha%20na%20parede.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-257-elevacion-de-talones-sentado",
    "nombre": "Elevación de talones sentado",
    "grupoMuscular": "Gemelos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-calves",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de talones sentado es un ejercicio aislado enfocado principalmente en gemelos. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Gemelos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Elevación de talones de pie",
      "Elevación de talones en prensa",
      "Elevación de talones con mancuernas",
      "Elevación de talones a una pierna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-258-elevacion-de-talones-en-prensa",
    "nombre": "Elevación de talones en prensa",
    "grupoMuscular": "Gemelos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-calves",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de talones en prensa es un ejercicio aislado enfocado principalmente en gemelos. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Gemelos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Elevación de talones de pie",
      "Elevación de talones sentado",
      "Elevación de talones con mancuernas",
      "Elevación de talones a una pierna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Press_On_The_Leg_Press_Machine/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Press_On_The_Leg_Press_Machine/1.jpg"
    ]
  },
  {
    "id": "ej-259-elevacion-de-talones-con-mancuernas",
    "nombre": "Elevación de talones con mancuernas",
    "grupoMuscular": "Gemelos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-calves",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de talones con mancuernas es un ejercicio aislado enfocado principalmente en gemelos. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Gemelos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Elevación de talones de pie",
      "Elevación de talones sentado",
      "Elevación de talones en prensa",
      "Elevación de talones a una pierna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raise_On_A_Dumbbell/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raise_On_A_Dumbbell/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-259-elevacion-de-talones-con-mancuernas/Panturrilha%20com%20halteres.gif",
        "confianza": "alta"
      }
    ]
  },
  {
    "id": "ej-260-elevacion-de-talones-a-una-pierna",
    "nombre": "Elevación de talones a una pierna",
    "grupoMuscular": "Gemelos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-calves",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de talones a una pierna es un ejercicio aislado enfocado principalmente en gemelos. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Gemelos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Elevación de talones de pie",
      "Elevación de talones sentado",
      "Elevación de talones en prensa",
      "Elevación de talones con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Natural_Glute_Ham_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Natural_Glute_Ham_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-261-elevacion-de-talones-en-smith",
    "nombre": "Elevación de talones en Smith",
    "grupoMuscular": "Gemelos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Smith",
    "dificultad": "Principiante",
    "icono": "icon-calves",
    "iconoEquipo": "icon-smith",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de talones en Smith es un ejercicio aislado enfocado principalmente en gemelos. Se ejecuta con smith y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Gemelos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Elevación de talones de pie",
      "Elevación de talones sentado",
      "Elevación de talones en prensa",
      "Elevación de talones con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-262-salto-a-la-comba",
    "nombre": "Salto a la comba",
    "grupoMuscular": "Gemelos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-calves",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Salto a la comba es un ejercicio aislado enfocado principalmente en gemelos. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Gemelos"
    ],
    "objetivos": [
      "libre",
      "cardio",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Elevación de talones de pie",
      "Elevación de talones sentado",
      "Elevación de talones en prensa",
      "Elevación de talones con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Jump/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Jump/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-262-salto-a-la-comba/Pulo%20de%20impulso%20de%20quadril%20de%20uma%20perna.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-262-salto-a-la-comba/Salto%20em%20Caixa%20com%20uma%20Perna.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-262-salto-a-la-comba/Salto%20em%20Dist%C3%A2ncia.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-262-salto-a-la-comba/Salto%20para%20Caixa%202%20para%201.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-262-salto-a-la-comba/Corrida%20com%20Salto.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-262-salto-a-la-comba/Salto%20com%20halteres%20dividido.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-262-salto-a-la-comba/Salto%20com%20Joelhos%20Flexionados.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-262-salto-a-la-comba/Salto%20em%20Dist%C3%A2ncia-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-262-salto-a-la-comba/Salto%20em%20Uma%20Perna%20para%20a%20Frente.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-262-salto-a-la-comba/Salto%20na%20Caixa.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-262-salto-a-la-comba/Salto%20para%20Caixa%202%20para%201-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-262-salto-a-la-comba/Salto%20para%20Tr%C3%A1s.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-263-elevacion-de-talones-en-burro",
    "nombre": "Elevación de talones en burro",
    "grupoMuscular": "Gemelos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Intermedio",
    "icono": "icon-calves",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de talones en burro es un ejercicio aislado enfocado principalmente en gemelos. Se ejecuta con máquina y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Gemelos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Elevación de talones de pie",
      "Elevación de talones sentado",
      "Elevación de talones en prensa",
      "Elevación de talones con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-264-elevacion-de-talones-con-banda-elastica",
    "nombre": "Elevación de talones con banda elástica",
    "grupoMuscular": "Gemelos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-calves",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de talones con banda elástica es un ejercicio aislado enfocado principalmente en gemelos. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Gemelos"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Elevación de talones de pie",
      "Elevación de talones sentado",
      "Elevación de talones en prensa",
      "Elevación de talones con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raises_-_With_Bands/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raises_-_With_Bands/1.jpg"
    ]
  },
  {
    "id": "ej-265-elevacion-de-talones-sentado-con-mancuerna",
    "nombre": "Elevación de talones sentado con mancuerna",
    "grupoMuscular": "Gemelos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-calves",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de talones sentado con mancuerna es un ejercicio aislado enfocado principalmente en gemelos. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Gemelos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Elevación de talones de pie",
      "Elevación de talones sentado",
      "Elevación de talones en prensa",
      "Elevación de talones con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raise_On_A_Dumbbell/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raise_On_A_Dumbbell/1.jpg"
    ]
  },
  {
    "id": "ej-266-salto-de-gemelos-unilateral",
    "nombre": "Salto de gemelos unilateral",
    "grupoMuscular": "Gemelos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-calves",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Salto de gemelos unilateral es un ejercicio aislado enfocado principalmente en gemelos. Se ejecuta con peso corporal y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Gemelos"
    ],
    "objetivos": [
      "libre",
      "cardio",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Elevación de talones de pie",
      "Elevación de talones sentado",
      "Elevación de talones en prensa",
      "Elevación de talones con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lateral_Box_Jump/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lateral_Box_Jump/1.jpg"
    ]
  },
  {
    "id": "ej-267-aductor-en-maquina",
    "nombre": "Aductor en máquina",
    "grupoMuscular": "Aductores",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-adductors",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Aductor en máquina es un ejercicio aislado enfocado principalmente en aductores. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Aductores"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Aductor en polea",
      "Aductor con banda elástica",
      "Aductor de pie en polea",
      "Aductor tumbado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/1.jpg"
    ]
  },
  {
    "id": "ej-268-aductor-en-polea",
    "nombre": "Aductor en polea",
    "grupoMuscular": "Aductores",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-adductors",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Aductor en polea es un ejercicio aislado enfocado principalmente en aductores. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Aductores"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe"
    ],
    "variantes": [
      "Aductor en máquina",
      "Aductor con banda elástica",
      "Aductor de pie en polea",
      "Aductor tumbado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/1.jpg"
    ]
  },
  {
    "id": "ej-269-sentadilla-sumo-enfoque-aductor",
    "nombre": "Sentadilla sumo enfoque aductor",
    "grupoMuscular": "Aductores",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-adductors",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla sumo enfoque aductor es un ejercicio compuesto enfocado principalmente en aductores, con participación secundaria de glúteos. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Aductores",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Sentadilla sumo con kettlebell"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/1.jpg"
    ]
  },
  {
    "id": "ej-270-aductor-con-banda-elastica",
    "nombre": "Aductor con banda elástica",
    "grupoMuscular": "Aductores",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-adductors",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Aductor con banda elástica es un ejercicio aislado enfocado principalmente en aductores. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Aductores"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Aductor en máquina",
      "Aductor en polea",
      "Aductor de pie en polea",
      "Aductor tumbado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/1.jpg"
    ]
  },
  {
    "id": "ej-271-aductor-de-pie-en-polea",
    "nombre": "Aductor de pie en polea",
    "grupoMuscular": "Aductores",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-adductors",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Aductor de pie en polea es un ejercicio aislado enfocado principalmente en aductores. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Aductores"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Aductor en máquina",
      "Aductor en polea",
      "Aductor con banda elástica",
      "Aductor tumbado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/1.jpg"
    ]
  },
  {
    "id": "ej-272-plancha-aductora-copenhague",
    "nombre": "Plancha aductora (Copenhague)",
    "grupoMuscular": "Aductores",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Avanzado",
    "icono": "icon-adductors",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Plancha aductora (Copenhague) es un ejercicio aislado enfocado principalmente en aductores. Se ejecuta con peso corporal y se clasifica como nivel avanzado. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Aductores"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Aductor en máquina",
      "Aductor en polea",
      "Aductor con banda elástica",
      "Aductor de pie en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/1.jpg"
    ]
  },
  {
    "id": "ej-273-aductor-tumbado",
    "nombre": "Aductor tumbado",
    "grupoMuscular": "Aductores",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-adductors",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Aductor tumbado es un ejercicio aislado enfocado principalmente en aductores. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Aductores"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Aductor en máquina",
      "Aductor en polea",
      "Aductor con banda elástica",
      "Aductor de pie en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/1.jpg"
    ]
  },
  {
    "id": "ej-274-sentadilla-sumo-con-kettlebell",
    "nombre": "Sentadilla sumo con kettlebell",
    "grupoMuscular": "Aductores",
    "grupoSecundario": "Glúteos",
    "tipo": "Compuesto",
    "equipamiento": "Kettlebell",
    "dificultad": "Principiante",
    "icono": "icon-adductors",
    "iconoEquipo": "icon-kettlebell",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla sumo con kettlebell es un ejercicio compuesto enfocado principalmente en aductores, con participación secundaria de glúteos. Se ejecuta con kettlebell y se clasifica como nivel principiante. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Aductores",
      "Glúteos"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Sentadilla sumo enfoque aductor"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Squats_With_Two_Kettlebells/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Squats_With_Two_Kettlebells/1.jpg"
    ]
  },
  {
    "id": "ej-275-abductor-en-maquina",
    "nombre": "Abductor en máquina",
    "grupoMuscular": "Abductores",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-abductors",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Abductor en máquina es un ejercicio aislado enfocado principalmente en abductores. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abductores"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Abductor en polea",
      "Abductor tumbado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-276-abductor-en-polea",
    "nombre": "Abductor en polea",
    "grupoMuscular": "Abductores",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-abductors",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Abductor en polea es un ejercicio aislado enfocado principalmente en abductores. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abductores"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio",
      "Usar impulso del tronco en vez de aislar el músculo objetivo"
    ],
    "consejos": [
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe"
    ],
    "variantes": [
      "Abductor en máquina",
      "Abductor tumbado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-277-almeja-con-banda-elastica",
    "nombre": "Almeja con banda elástica",
    "grupoMuscular": "Abductores",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-abductors",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Almeja con banda elástica es un ejercicio aislado enfocado principalmente en abductores. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abductores"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Abductor en máquina",
      "Abductor en polea",
      "Patada lateral de pie en polea",
      "Elevación de pierna lateral tumbado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-278-paseo-lateral-con-banda-monster-walk",
    "nombre": "Paseo lateral con banda (monster walk)",
    "grupoMuscular": "Abductores",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-abductors",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Paseo lateral con banda (monster walk) es un ejercicio aislado enfocado principalmente en abductores. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abductores"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Abductor en máquina",
      "Abductor en polea",
      "Patada lateral de pie en polea",
      "Elevación de pierna lateral tumbado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/1.jpg"
    ]
  },
  {
    "id": "ej-279-patada-lateral-de-pie-en-polea",
    "nombre": "Patada lateral de pie en polea",
    "grupoMuscular": "Abductores",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-abductors",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Patada lateral de pie en polea es un ejercicio aislado enfocado principalmente en abductores. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abductores"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Abductor en máquina",
      "Almeja con banda elástica",
      "Paseo lateral con banda (monster walk)",
      "Elevación de pierna lateral tumbado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/1.jpg"
    ]
  },
  {
    "id": "ej-280-elevacion-de-pierna-lateral-tumbado",
    "nombre": "Elevación de pierna lateral tumbado",
    "grupoMuscular": "Abductores",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-abductors",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación de pierna lateral tumbado es un ejercicio aislado enfocado principalmente en abductores. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abductores"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Abductor en máquina",
      "Abductor en polea",
      "Almeja con banda elástica",
      "Paseo lateral con banda (monster walk)"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Side_Lateral_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-281-abductor-tumbado",
    "nombre": "Abductor tumbado",
    "grupoMuscular": "Abductores",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-abductors",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Abductor tumbado es un ejercicio aislado enfocado principalmente en abductores. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Abductores"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Abductor en máquina",
      "Abductor en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-282-hiperextension-en-banco-romano",
    "nombre": "Hiperextensión en banco romano",
    "grupoMuscular": "Lumbares",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Hiperextensión en banco romano es un ejercicio aislado enfocado principalmente en lumbares. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Lumbares"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Extensión lumbar en máquina",
      "Hiperextensión con disco",
      "Extensión lumbar con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_With_No_Hyperextension_Bench/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_With_No_Hyperextension_Bench/1.jpg"
    ]
  },
  {
    "id": "ej-283-buenos-dias-con-barra",
    "nombre": "Buenos días con barra",
    "grupoMuscular": "Lumbares",
    "grupoSecundario": "Isquiotibiales",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Buenos días con barra es un ejercicio compuesto enfocado principalmente en lumbares, con participación secundaria de isquiotibiales. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Lumbares",
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies",
      "Levantar la cabeza y perder la posición neutra del cuello"
    ],
    "consejos": [
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo"
    ],
    "variantes": [
      "Peso muerto rumano enfoque lumbar"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning/1.jpg"
    ]
  },
  {
    "id": "ej-284-peso-muerto-convencional-enfoque-lumbar",
    "nombre": "Peso muerto convencional enfoque lumbar",
    "grupoMuscular": "Lumbares",
    "grupoSecundario": "Espalda",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Avanzado",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto convencional enfoque lumbar es un ejercicio compuesto enfocado principalmente en lumbares, con participación secundaria de espalda. Se ejecuta con barra olímpica y se clasifica como nivel avanzado. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Lumbares",
      "Espalda"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Arquear en exceso la zona lumbar durante el movimiento",
      "Usar un rango de movimiento incompleto para mover más peso",
      "Perder la alineación de rodillas respecto a los pies"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Peso muerto rumano enfoque lumbar",
      "Peso muerto con trap bar"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/1.jpg"
    ]
  },
  {
    "id": "ej-285-superman",
    "nombre": "Superman",
    "grupoMuscular": "Lumbares",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Superman es un ejercicio aislado enfocado principalmente en lumbares. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Lumbares"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Extensión lumbar en máquina",
      "Hiperextensión con disco",
      "Extensión lumbar con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-286-extension-lumbar-en-maquina",
    "nombre": "Extensión lumbar en máquina",
    "grupoMuscular": "Lumbares",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Máquina",
    "dificultad": "Principiante",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-machine",
    "imagen": "",
    "video": "",
    "descripcion": "Extensión lumbar en máquina es un ejercicio aislado enfocado principalmente en lumbares. Se ejecuta con máquina y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Lumbares"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Hiperextensión en banco romano",
      "Superman",
      "Bird dog",
      "Hiperextensión con disco"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_Back_Extensions/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_Back_Extensions/1.jpg"
    ]
  },
  {
    "id": "ej-287-bird-dog",
    "nombre": "Bird dog",
    "grupoMuscular": "Lumbares",
    "grupoSecundario": "Abdomen",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Bird dog es un ejercicio aislado enfocado principalmente en lumbares, con participación secundaria de abdomen. Se ejecuta con peso corporal y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Lumbares",
      "Abdomen"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento"
    ],
    "consejos": [
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire"
    ],
    "variantes": [
      "Extensión lumbar en máquina",
      "Hiperextensión con disco",
      "Extensión lumbar con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-288-peso-muerto-rumano-enfoque-lumbar",
    "nombre": "Peso muerto rumano enfoque lumbar",
    "grupoMuscular": "Lumbares",
    "grupoSecundario": "Isquiotibiales",
    "tipo": "Compuesto",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto rumano enfoque lumbar es un ejercicio compuesto enfocado principalmente en lumbares, con participación secundaria de isquiotibiales. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Lumbares",
      "Isquiotibiales"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición",
      "Acelerar la fase excéntrica en lugar de controlarla"
    ],
    "consejos": [
      "Prioriza la técnica sobre la carga, sobre todo al aumentar peso",
      "Mantén el core activado durante toda la ejecución para proteger la columna",
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica"
    ],
    "variantes": [
      "Peso muerto convencional enfoque lumbar",
      "Peso muerto con trap bar"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/1.jpg"
    ]
  },
  {
    "id": "ej-289-hiperextension-con-disco",
    "nombre": "Hiperextensión con disco",
    "grupoMuscular": "Lumbares",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Disco",
    "dificultad": "Intermedio",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-plate",
    "imagen": "",
    "video": "",
    "descripcion": "Hiperextensión con disco es un ejercicio aislado enfocado principalmente en lumbares. Se ejecuta con disco y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Lumbares"
    ],
    "objetivos": [
      "libre"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Hiperextensión en banco romano",
      "Superman",
      "Extensión lumbar en máquina",
      "Bird dog"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_Back_Extensions/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_Back_Extensions/1.jpg"
    ]
  },
  {
    "id": "ej-290-peso-muerto-con-trap-bar",
    "nombre": "Peso muerto con trap bar",
    "grupoMuscular": "Lumbares",
    "grupoSecundario": "Espalda",
    "tipo": "Compuesto",
    "equipamiento": "Barra olímpica",
    "dificultad": "Intermedio",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-barbell",
    "imagen": "",
    "video": "",
    "descripcion": "Peso muerto con trap bar es un ejercicio compuesto enfocado principalmente en lumbares, con participación secundaria de espalda. Se ejecuta con barra olímpica y se clasifica como nivel intermedio. Al involucrar varias articulaciones, es una opción eficiente para ganar fuerza y volumen muscular general.",
    "musculosImplicados": [
      "Lumbares",
      "Espalda"
    ],
    "objetivos": [
      "libre",
      "fuerza",
      "ganancia-muscular",
      "perdida-grasa"
    ],
    "erroresFrecuentes": [
      "Levantar la cabeza y perder la posición neutra del cuello",
      "Rebotar el peso en el punto más bajo del recorrido",
      "No estabilizar el core antes de iniciar la repetición"
    ],
    "consejos": [
      "Controla la fase excéntrica de forma consciente antes de acelerar en la concéntrica",
      "Calienta con series progresivas antes de llegar al peso de trabajo",
      "Respira de forma controlada: inhala en la fase excéntrica y exhala en el esfuerzo"
    ],
    "variantes": [
      "Peso muerto convencional enfoque lumbar",
      "Peso muerto rumano enfoque lumbar"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/1.jpg"
    ]
  },
  {
    "id": "ej-291-extension-lumbar-con-banda-elastica",
    "nombre": "Extensión lumbar con banda elástica",
    "grupoMuscular": "Lumbares",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Extensión lumbar con banda elástica es un ejercicio aislado enfocado principalmente en lumbares. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Lumbares"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica",
      "Progresa primero en técnica y repeticiones antes de añadir lastre"
    ],
    "variantes": [
      "Hiperextensión en banco romano",
      "Superman",
      "Extensión lumbar en máquina",
      "Bird dog"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_Back_Extensions/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_Back_Extensions/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-291-extension-lumbar-con-banda-elastica/Extens%C3%A3o%20de%20quadril%20elastico.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-291-extension-lumbar-con-banda-elastica/Extens%C3%A3o%20de%20tr%C3%ADceps%20com%20el%C3%A1stico%20na%20posi%C3%A7%C3%A3o%20horizontal.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-292-rotacion-externa-con-banda-elastica",
    "nombre": "Rotación externa con banda elástica",
    "grupoMuscular": "Manguito rotador",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-rotator",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Rotación externa con banda elástica es un ejercicio aislado enfocado principalmente en manguito rotador. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Manguito rotador"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Perder la alineación corporal (cadera, hombros y talones)",
      "No mantener el core activado durante todo el movimiento",
      "Realizar el rango de movimiento de forma incompleta"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Rotación interna con banda elástica",
      "Rotación externa con mancuerna",
      "Rotación interna con mancuerna",
      "Rotación externa en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation_with_Band/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation_with_Band/1.jpg"
    ]
  },
  {
    "id": "ej-293-rotacion-interna-con-banda-elastica",
    "nombre": "Rotación interna con banda elástica",
    "grupoMuscular": "Manguito rotador",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-rotator",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Rotación interna con banda elástica es un ejercicio aislado enfocado principalmente en manguito rotador. Se ejecuta con banda elástica y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Manguito rotador"
    ],
    "objetivos": [
      "libre",
      "perdida-grasa",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Realizar el rango de movimiento de forma incompleta",
      "Compensar con otras articulaciones por falta de fuerza específica",
      "Perder la alineación corporal (cadera, hombros y talones)"
    ],
    "consejos": [
      "Progresa primero en técnica y repeticiones antes de añadir lastre",
      "Mantén una respiración constante y evita contener el aire",
      "Si es muy exigente, usa una variante asistida o con banda elástica"
    ],
    "variantes": [
      "Rotación externa con banda elástica",
      "Rotación externa con mancuerna",
      "Rotación interna con mancuerna",
      "Rotación externa en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation_with_Band/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation_with_Band/1.jpg"
    ]
  },
  {
    "id": "ej-294-rotacion-externa-con-mancuerna",
    "nombre": "Rotación externa con mancuerna",
    "grupoMuscular": "Manguito rotador",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-rotator",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Rotación externa con mancuerna es un ejercicio aislado enfocado principalmente en manguito rotador. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Manguito rotador"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Rotación externa con banda elástica",
      "Rotación interna con banda elástica",
      "Rotación interna con mancuerna",
      "Rotación externa en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation/1.jpg"
    ]
  },
  {
    "id": "ej-295-rotacion-interna-con-mancuerna",
    "nombre": "Rotación interna con mancuerna",
    "grupoMuscular": "Manguito rotador",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-rotator",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Rotación interna con mancuerna es un ejercicio aislado enfocado principalmente en manguito rotador. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Manguito rotador"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Rotación externa con banda elástica",
      "Rotación interna con banda elástica",
      "Rotación externa con mancuerna",
      "Rotación externa en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation/1.jpg"
    ]
  },
  {
    "id": "ej-296-face-pull-para-manguito-rotador",
    "nombre": "Face pull para manguito rotador",
    "grupoMuscular": "Manguito rotador",
    "grupoSecundario": "Hombros",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-rotator",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Face pull para manguito rotador es un ejercicio aislado enfocado principalmente en manguito rotador, con participación secundaria de hombros. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Manguito rotador",
      "Hombros"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso del tronco en vez de aislar el músculo objetivo",
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Rotación externa con banda elástica",
      "Rotación interna con banda elástica",
      "Rotación externa con mancuerna",
      "Rotación interna con mancuerna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/1.jpg"
    ]
  },
  {
    "id": "ej-297-elevacion-en-y",
    "nombre": "Elevación en Y",
    "grupoMuscular": "Manguito rotador",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-rotator",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación en Y es un ejercicio aislado enfocado principalmente en manguito rotador. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Manguito rotador"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado",
      "Ajustar mal el asiento o la posición del banco antes de empezar"
    ],
    "consejos": [
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento"
    ],
    "variantes": [
      "Elevación en T",
      "Elevación en W"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Deltoid_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Deltoid_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-298-elevacion-en-t",
    "nombre": "Elevación en T",
    "grupoMuscular": "Manguito rotador",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-rotator",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación en T es un ejercicio aislado enfocado principalmente en manguito rotador. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Manguito rotador"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento",
      "Elegir una carga excesiva que impide sentir el músculo objetivo"
    ],
    "consejos": [
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido",
      "Haz una pausa breve en el punto de máxima contracción"
    ],
    "variantes": [
      "Elevación en Y",
      "Elevación en W"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Deltoid_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Deltoid_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-299-rotacion-externa-en-polea",
    "nombre": "Rotación externa en polea",
    "grupoMuscular": "Manguito rotador",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Principiante",
    "icono": "icon-rotator",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Rotación externa en polea es un ejercicio aislado enfocado principalmente en manguito rotador. Se ejecuta con polea y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Manguito rotador"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio"
    ],
    "consejos": [
      "Ajusta la altura de la polea según el ángulo que buscas trabajar",
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto"
    ],
    "variantes": [
      "Rotación externa con banda elástica",
      "Rotación interna con banda elástica",
      "Rotación externa con mancuerna",
      "Rotación interna con mancuerna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Internal_Rotation/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Internal_Rotation/1.jpg"
    ]
  },
  {
    "id": "ej-300-rotacion-externa-a-90-grados-en-cable",
    "nombre": "Rotación externa a 90 grados en cable",
    "grupoMuscular": "Manguito rotador",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Polea",
    "dificultad": "Intermedio",
    "icono": "icon-rotator",
    "iconoEquipo": "icon-cable",
    "imagen": "",
    "video": "",
    "descripcion": "Rotación externa a 90 grados en cable es un ejercicio aislado enfocado principalmente en manguito rotador. Se ejecuta con polea y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Manguito rotador"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Soltar la tensión del cable al final de cada repetición",
      "Dejar que la polea arrastre el cuerpo en lugar de controlar el recorrido",
      "No ajustar correctamente la altura de la polea para el ejercicio"
    ],
    "consejos": [
      "Mantén la tensión en el cable durante todo el recorrido, sin soltar de golpe",
      "Da un paso atrás si es necesario para generar el ángulo de tracción correcto",
      "Ajusta la altura de la polea según el ángulo que buscas trabajar"
    ],
    "variantes": [
      "Rotación externa con banda elástica",
      "Rotación interna con banda elástica",
      "Rotación externa con mancuerna",
      "Rotación interna con mancuerna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Internal_Rotation/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Internal_Rotation/1.jpg"
    ]
  },
  {
    "id": "ej-301-elevacion-en-w",
    "nombre": "Elevación en W",
    "grupoMuscular": "Manguito rotador",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Intermedio",
    "icono": "icon-rotator",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Elevación en W es un ejercicio aislado enfocado principalmente en manguito rotador. Se ejecuta con mancuernas y se clasifica como nivel intermedio. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Manguito rotador"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Ajustar mal el asiento o la posición del banco antes de empezar",
      "Usar impulso o balanceo del cuerpo para mover el peso",
      "No controlar la fase excéntrica (bajada) del movimiento"
    ],
    "consejos": [
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada",
      "Enfócate en sentir el músculo objetivo más que en mover el peso rápido"
    ],
    "variantes": [
      "Elevación en Y",
      "Elevación en T"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Deltoid_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Deltoid_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-302-rotacion-externa-tumbado-de-lado",
    "nombre": "Rotación externa tumbado de lado",
    "grupoMuscular": "Manguito rotador",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Mancuernas",
    "dificultad": "Principiante",
    "icono": "icon-rotator",
    "iconoEquipo": "icon-dumbbell",
    "imagen": "",
    "video": "",
    "descripcion": "Rotación externa tumbado de lado es un ejercicio aislado enfocado principalmente en manguito rotador. Se ejecuta con mancuernas y se clasifica como nivel principiante. Al aislar la tensión sobre el músculo objetivo, es útil para el trabajo de detalle y la conexión mente-músculo.",
    "musculosImplicados": [
      "Manguito rotador"
    ],
    "objetivos": [
      "libre",
      "ganancia-muscular"
    ],
    "erroresFrecuentes": [
      "Elegir una carga excesiva que impide sentir el músculo objetivo",
      "Ejecutar el movimiento demasiado rápido sin pausa en la contracción",
      "No mantener tensión constante sobre el músculo trabajado"
    ],
    "consejos": [
      "Haz una pausa breve en el punto de máxima contracción",
      "Reduce el peso si notas que otros músculos están compensando el movimiento",
      "Mantén un tempo controlado, especialmente en la fase de bajada"
    ],
    "variantes": [
      "Rotación externa con banda elástica",
      "Rotación interna con banda elástica",
      "Rotación externa con mancuerna",
      "Rotación interna con mancuerna"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation/1.jpg"
    ]
  },
  {
    "id": "ej-303-inclinacion-lateral-de-cuello",
    "nombre": "Inclinación lateral de cuello",
    "grupoMuscular": "Cuello",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Inclinación lateral de cuello es un ejercicio de movilidad y elongación enfocado en cuello. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cuello"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Neck_Stretch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Neck_Stretch/1.jpg"
    ]
  },
  {
    "id": "ej-304-rotacion-de-cuello",
    "nombre": "Rotación de cuello",
    "grupoMuscular": "Cuello",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Rotación de cuello es un ejercicio de movilidad y elongación enfocado en cuello. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cuello"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Neck-SMR/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Neck-SMR/1.jpg"
    ]
  },
  {
    "id": "ej-305-flexion-de-cuello-barbilla-al-pecho",
    "nombre": "Flexión de cuello (barbilla al pecho)",
    "grupoMuscular": "Cuello",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Flexión de cuello (barbilla al pecho) es un ejercicio de movilidad y elongación enfocado en cuello. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cuello"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin_To_Chest_Stretch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin_To_Chest_Stretch/1.jpg"
    ]
  },
  {
    "id": "ej-306-circulos-de-cuello-controlados",
    "nombre": "Círculos de cuello controlados",
    "grupoMuscular": "Cuello",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Círculos de cuello controlados es un ejercicio de movilidad y elongación enfocado en cuello. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cuello"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/1.jpg"
    ]
  },
  {
    "id": "ej-307-circulos-de-hombros",
    "nombre": "Círculos de hombros",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Círculos de hombros es un ejercicio de movilidad y elongación enfocado en hombros. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [
      "Elevaciones laterales con mancuernas",
      "Elevaciones laterales en polea",
      "Elevaciones laterales en máquina",
      "Elevaciones frontales con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Shoulder_Circles/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Shoulder_Circles/1.jpg"
    ]
  },
  {
    "id": "ej-308-estiramiento-cruzado-de-hombro",
    "nombre": "Estiramiento cruzado de hombro",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento cruzado de hombro es un ejercicio de movilidad y elongación enfocado en hombros. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido"
    ],
    "consejos": [
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante"
    ],
    "variantes": [
      "Estiramiento de tríceps por detrás de la cabeza",
      "Estiramiento de manguito rotador en puerta"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Round_The_World_Shoulder_Stretch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Round_The_World_Shoulder_Stretch/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20peitoral%20reverso.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20peitoral%20reverso-2.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/adu%C3%A7%C3%A3o%20de%20pernas%20(alongamento%20do%20adutor%20maior).gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20assistido%20reverso%20(peitoral%20e%20ombro).gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20Borboleta.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20com%20PVC%20na%20Posi%C3%A7%C3%A3o%20Frontal%20de%20Rack.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20da%20Esfinge.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20da%20parte%20superior%20das%20costas.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20das%20Costas%20com%20Rolo%20de%20Espuma.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20de%20Gl%C3%BAteos%20Deitado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20de%20Isquiotibiais%20deitado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20de%20ombro%20com%20o%20bra%C3%A7o%20cruzado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20de%20Pernas%20Duplo.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20de%20Punho.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20de%20quadril%2090-90.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20de%20Quadr%C3%ADceps%20ajoelhado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20de%20Quadr%C3%ADceps%20em%20Quatro%20Apoios.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20Din%C3%A2mico%20do%20Peitoral.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20desviador%20ulnar%20e%20extensor%20do%20punho.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20Gastrocn%C3%AAmio%20com%20Joelho%20Flexionado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20manguito%20rotador.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20ombro%20com%20toalha.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20Peito%20Acima%20da%20Cabe%C3%A7a.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20peito%20com%20rolo%20de%20espuma.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20Peito%20e%20Parte%20Frontal%20dos%20Ombros.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20Peitoral%20at%C3%A9%20as%20Costas.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20peitoral%20e%20do%20ombro%20na%20porta.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20peitoral%20reverso-3.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20tibial%20posterior.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20do%20trato%20iliotibial%20com%20rolo%20de%20espuma.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20dos%20Adutores%20com%20a%20Perna%20Estendida%20ajoelhado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20dos%20adutores%20da%20coxa%20com%20rolo%20de%20espuma.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20dos%20Adutores%20em%20Posi%C3%A7%C3%A3o%20Sentada%20com%20Pernas%20Abertas.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20dos%20Extensores%20dos%20Dedos%20dos%20P%C3%A9s.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20dos%20flexores%20de%20quadril%20ajoelhado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20dos%20flexores%20do%20quadril%20em%20posi%C3%A7%C3%A3o%20de%20joelho.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20dos%20lat%C3%ADssimos%20dorsais%20com%20rolo%20de%20espuma.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20dos%20ombros%20por%20tr%C3%A1s%20das%20costas.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20em%20C%C3%ADrculos%20nos%20Punhos.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20Lateral%20da%20Parte%20Interna%20da%20Coxa.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20na%20parede%20do%20canto.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20Piriforme.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20reverso%20assistido%20(peito%20e%20ombro).gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Alongamento%20Reverso%20de%20Pulso.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-308-estiramiento-cruzado-de-hombro/Postura%20da%20Cobra%20-%20Alongamento%20Abdominal.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-309-estiramiento-de-triceps-por-detras-de-la-cabeza",
    "nombre": "Estiramiento de tríceps por detrás de la cabeza",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Tríceps",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de tríceps por detrás de la cabeza es un ejercicio de movilidad y elongación enfocado en hombros, con participación secundaria de tríceps. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Hombros",
      "Tríceps"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [
      "Estiramiento cruzado de hombro",
      "Estiramiento de manguito rotador en puerta"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Triceps/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Triceps/1.jpg"
    ]
  },
  {
    "id": "ej-310-movilidad-de-hombros-con-banda-elastica",
    "nombre": "Movilidad de hombros con banda elástica",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Intermedio",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Movilidad de hombros con banda elástica es un ejercicio de movilidad y elongación enfocado en hombros. Se realiza con banda elástica y se clasifica como nivel intermedio. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Hombros"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [
      "Elevaciones laterales con mancuernas",
      "Elevaciones laterales en polea",
      "Elevaciones laterales en máquina",
      "Elevaciones frontales con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Round_The_World_Shoulder_Stretch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Round_The_World_Shoulder_Stretch/1.jpg"
    ]
  },
  {
    "id": "ej-311-estiramiento-de-manguito-rotador-en-puerta",
    "nombre": "Estiramiento de manguito rotador en puerta",
    "grupoMuscular": "Hombros",
    "grupoSecundario": "Manguito rotador",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-shoulders",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de manguito rotador en puerta es un ejercicio de movilidad y elongación enfocado en hombros, con participación secundaria de manguito rotador. Se realiza con peso corporal y se clasifica como nivel intermedio. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Hombros",
      "Manguito rotador"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [
      "Estiramiento cruzado de hombro",
      "Estiramiento de tríceps por detrás de la cabeza"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Front_Deltoid/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Front_Deltoid/1.jpg"
    ]
  },
  {
    "id": "ej-312-estiramiento-de-pecho-en-pared",
    "nombre": "Estiramiento de pecho en pared",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de pecho en pared es un ejercicio de movilidad y elongación enfocado en pecho. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Pecho"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido"
    ],
    "consejos": [
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante"
    ],
    "variantes": [
      "Aperturas con mancuernas",
      "Aperturas inclinadas con mancuernas",
      "Aperturas en polea alta",
      "Aperturas en polea baja"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Behind_Head_Chest_Stretch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Behind_Head_Chest_Stretch/1.jpg"
    ]
  },
  {
    "id": "ej-313-apertura-de-pecho-con-banda-elastica",
    "nombre": "Apertura de pecho con banda elástica",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Apertura de pecho con banda elástica es un ejercicio de movilidad y elongación enfocado en pecho. Se realiza con banda elástica y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Pecho"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [
      "Aperturas con mancuernas",
      "Aperturas inclinadas con mancuernas",
      "Aperturas en polea alta",
      "Aperturas en polea baja"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Behind_Head_Chest_Stretch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Behind_Head_Chest_Stretch/1.jpg"
    ]
  },
  {
    "id": "ej-314-estiramiento-de-pecho-en-el-piso-cobra-suave",
    "nombre": "Estiramiento de pecho en el piso (cobra suave)",
    "grupoMuscular": "Pecho",
    "grupoSecundario": "Abdomen",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-chest",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de pecho en el piso (cobra suave) es un ejercicio de movilidad y elongación enfocado en pecho, con participación secundaria de abdomen. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Pecho",
      "Abdomen"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido"
    ],
    "consejos": [
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante"
    ],
    "variantes": [
      "Aperturas con mancuernas",
      "Aperturas inclinadas con mancuernas",
      "Aperturas en polea alta",
      "Aperturas en polea baja"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Behind_Head_Chest_Stretch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Behind_Head_Chest_Stretch/1.jpg"
    ]
  },
  {
    "id": "ej-315-rotacion-toracica-en-cuadrupedia",
    "nombre": "Rotación torácica en cuadrupedia",
    "grupoMuscular": "Columna",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Rotación torácica en cuadrupedia es un ejercicio de movilidad y elongación enfocado en columna. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Columna"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [
      "Extensión torácica con rodillo de espuma"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/All_Fours_Quad_Stretch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/All_Fours_Quad_Stretch/1.jpg"
    ]
  },
  {
    "id": "ej-316-gato-camello-movilidad-de-columna",
    "nombre": "Gato-camello (movilidad de columna)",
    "grupoMuscular": "Columna",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Gato-camello (movilidad de columna) es un ejercicio de movilidad y elongación enfocado en columna. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Columna"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [
      "Extensión torácica con rodillo de espuma"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Superman/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Superman/1.jpg"
    ]
  },
  {
    "id": "ej-317-rotacion-de-columna-acostado",
    "nombre": "Rotación de columna acostado",
    "grupoMuscular": "Columna",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Rotación de columna acostado es un ejercicio de movilidad y elongación enfocado en columna. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Columna"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [
      "Extensión torácica con rodillo de espuma"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Superman/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Superman/1.jpg"
    ]
  },
  {
    "id": "ej-318-postura-del-nino",
    "nombre": "Postura del niño",
    "grupoMuscular": "Columna",
    "grupoSecundario": "Espalda",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Postura del niño es un ejercicio de movilidad y elongación enfocado en columna, con participación secundaria de espalda. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Columna",
      "Espalda"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [
      "Extensión torácica con rodillo de espuma"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Childs_Pose/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Childs_Pose/1.jpg"
    ]
  },
  {
    "id": "ej-319-extension-toracica-con-rodillo-de-espuma",
    "nombre": "Extensión torácica con rodillo de espuma",
    "grupoMuscular": "Columna",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Rodillo de espuma",
    "dificultad": "Intermedio",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-plate",
    "imagen": "",
    "video": "",
    "descripcion": "Extensión torácica con rodillo de espuma es un ejercicio de movilidad y elongación enfocado en columna. Se realiza con rodillo de espuma y se clasifica como nivel intermedio. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Columna"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)"
    ],
    "consejos": [
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo"
    ],
    "variantes": [
      "Rotación torácica en cuadrupedia",
      "Gato-camello (movilidad de columna)",
      "Rotación de columna acostado",
      "Postura del niño"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lower_Back-SMR/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lower_Back-SMR/1.jpg"
    ]
  },
  {
    "id": "ej-320-torsion-espinal-sentado",
    "nombre": "Torsión espinal sentado",
    "grupoMuscular": "Columna",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-lowerback",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Torsión espinal sentado es un ejercicio de movilidad y elongación enfocado en columna. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Columna"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [
      "Extensión torácica con rodillo de espuma"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Superman/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Superman/1.jpg"
    ]
  },
  {
    "id": "ej-321-estiramiento-de-dorsal-ancho",
    "nombre": "Estiramiento de dorsal ancho",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de dorsal ancho es un ejercicio de movilidad y elongación enfocado en espalda. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Espalda"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [
      "Pull-over en polea alta",
      "Face pull",
      "Jalón con brazos rectos"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Latissimus_Dorsi-SMR/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Latissimus_Dorsi-SMR/1.jpg"
    ]
  },
  {
    "id": "ej-322-estiramiento-de-espalda-en-cuadrupedia",
    "nombre": "Estiramiento de espalda en cuadrupedia",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-back",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de espalda en cuadrupedia es un ejercicio de movilidad y elongación enfocado en espalda. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Espalda"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)"
    ],
    "consejos": [
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo"
    ],
    "variantes": [
      "Pull-over en polea alta",
      "Face pull",
      "Jalón con brazos rectos"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/All_Fours_Quad_Stretch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/All_Fours_Quad_Stretch/1.jpg"
    ]
  },
  {
    "id": "ej-323-movilidad-de-escapulas",
    "nombre": "Movilidad de escápulas",
    "grupoMuscular": "Espalda",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-back",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Movilidad de escápulas es un ejercicio de movilidad y elongación enfocado en espalda. Se realiza con peso corporal y se clasifica como nivel intermedio. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Espalda"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [
      "Pull-over en polea alta",
      "Face pull",
      "Jalón con brazos rectos"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Shoulder_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Shoulder_Raise/1.jpg"
    ]
  },
  {
    "id": "ej-324-estiramiento-90-90",
    "nombre": "Estiramiento 90/90",
    "grupoMuscular": "Cadera",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento 90/90 es un ejercicio de movilidad y elongación enfocado en cadera. Se realiza con peso corporal y se clasifica como nivel intermedio. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cadera"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)"
    ],
    "consejos": [
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo"
    ],
    "variantes": [
      "Movilidad de cadera con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Groiners/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Groiners/1.jpg"
    ]
  },
  {
    "id": "ej-325-postura-de-la-paloma",
    "nombre": "Postura de la paloma",
    "grupoMuscular": "Cadera",
    "grupoSecundario": "Glúteos",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Postura de la paloma es un ejercicio de movilidad y elongación enfocado en cadera, con participación secundaria de glúteos. Se realiza con peso corporal y se clasifica como nivel intermedio. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cadera",
      "Glúteos"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [
      "Movilidad de cadera con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Groiners/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Groiners/1.jpg"
    ]
  },
  {
    "id": "ej-326-zancada-con-estiramiento-de-flexor-de-cadera",
    "nombre": "Zancada con estiramiento de flexor de cadera",
    "grupoMuscular": "Cadera",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Zancada con estiramiento de flexor de cadera es un ejercicio de movilidad y elongación enfocado en cadera. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cadera"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido"
    ],
    "consejos": [
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante"
    ],
    "variantes": [
      "Movilidad de cadera con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/1.jpg"
    ]
  },
  {
    "id": "ej-327-movilidad-de-cadera-con-banda-elastica",
    "nombre": "Movilidad de cadera con banda elástica",
    "grupoMuscular": "Cadera",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Intermedio",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Movilidad de cadera con banda elástica es un ejercicio de movilidad y elongación enfocado en cadera. Se realiza con banda elástica y se clasifica como nivel intermedio. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cadera"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [
      "Estiramiento 90/90",
      "Postura de la paloma",
      "Zancada con estiramiento de flexor de cadera",
      "Círculos de cadera"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/1.jpg"
    ]
  },
  {
    "id": "ej-328-circulos-de-cadera",
    "nombre": "Círculos de cadera",
    "grupoMuscular": "Cadera",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Círculos de cadera es un ejercicio de movilidad y elongación enfocado en cadera. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cadera"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [
      "Movilidad de cadera con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/1.jpg"
    ]
  },
  {
    "id": "ej-329-estiramiento-de-piriforme",
    "nombre": "Estiramiento de piriforme",
    "grupoMuscular": "Cadera",
    "grupoSecundario": "Glúteos",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de piriforme es un ejercicio de movilidad y elongación enfocado en cadera, con participación secundaria de glúteos. Se realiza con peso corporal y se clasifica como nivel intermedio. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cadera",
      "Glúteos"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [
      "Movilidad de cadera con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Piriformis-SMR/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Piriformis-SMR/1.jpg"
    ]
  },
  {
    "id": "ej-330-mariposa-estiramiento-de-aductores",
    "nombre": "Mariposa (estiramiento de aductores)",
    "grupoMuscular": "Cadera",
    "grupoSecundario": "Aductores",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Mariposa (estiramiento de aductores) es un ejercicio de movilidad y elongación enfocado en cadera, con participación secundaria de aductores. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cadera",
      "Aductores"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido"
    ],
    "consejos": [
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante"
    ],
    "variantes": [
      "Movilidad de cadera con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/1.jpg"
    ]
  },
  {
    "id": "ej-331-rotacion-de-cadera-en-cuadrupedia",
    "nombre": "Rotación de cadera en cuadrupedia",
    "grupoMuscular": "Cadera",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Rotación de cadera en cuadrupedia es un ejercicio de movilidad y elongación enfocado en cadera. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cadera"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [
      "Movilidad de cadera con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/1.jpg"
    ]
  },
  {
    "id": "ej-332-estiramiento-de-isquiotibiales-de-pie",
    "nombre": "Estiramiento de isquiotibiales de pie",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de isquiotibiales de pie es un ejercicio de movilidad y elongación enfocado en isquiotibiales. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Isquiotibiales"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido"
    ],
    "consejos": [
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante"
    ],
    "variantes": [
      "Estiramiento de isquiotibiales sentado",
      "Estiramiento de isquiotibiales con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/90_90_Hamstring/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/90_90_Hamstring/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-332-estiramiento-de-isquiotibiales-de-pie/Alongamento%20de%20Adutores%20com%20Pernas%20Afastadas%20em%20P%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-332-estiramiento-de-isquiotibiales-de-pie/Alongamento%20de%20Isquiotibiais%20em%20P%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-332-estiramiento-de-isquiotibiales-de-pie/Alongamento%20de%20ombro%20reverso%20em%20p%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-332-estiramiento-de-isquiotibiales-de-pie/Alongamento%20de%20rota%C3%A7%C3%A3o%20da%20coluna%20em%20p%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-332-estiramiento-de-isquiotibiales-de-pie/Alongamento%20de%20tr%C3%ADceps%20em%20p%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-332-estiramiento-de-isquiotibiales-de-pie/Alongamento%20do%20Peitoral%20com%20um%20Bra%C3%A7o%20em%20P%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-332-estiramiento-de-isquiotibiales-de-pie/Alongamento%20do%20tend%C3%A3o%20de%20Aquiles%20em%20p%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-332-estiramiento-de-isquiotibiales-de-pie/Alongamento%20dos%20Adutores%20com%20Pernas%20Abertas%20em%20P%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-332-estiramiento-de-isquiotibiales-de-pie/Alongamento%20dos%20flexores%20dos%20dedos%20dos%20p%C3%A9s%20em%20p%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-332-estiramiento-de-isquiotibiales-de-pie/Alongamento%20dos%20isquiotibiais%20em%20p%C3%A9%20com%20a%20perna%20cruzada.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-332-estiramiento-de-isquiotibiales-de-pie/Alongamento%20dos%20isquiotibiais%20em%20p%C3%A9.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-332-estiramiento-de-isquiotibiales-de-pie/Alongamento%20em%20P%C3%A9%20dos%20Quadr%C3%ADceps.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-332-estiramiento-de-isquiotibiales-de-pie/Alongamento%20Inclinado%20Lateral%20em%20P%C3%A9.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-333-estiramiento-de-isquiotibiales-sentado",
    "nombre": "Estiramiento de isquiotibiales sentado",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de isquiotibiales sentado es un ejercicio de movilidad y elongación enfocado en isquiotibiales. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Isquiotibiales"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)"
    ],
    "consejos": [
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo"
    ],
    "variantes": [
      "Estiramiento de isquiotibiales de pie",
      "Estiramiento de isquiotibiales con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/90_90_Hamstring/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/90_90_Hamstring/1.jpg"
    ],
    "gifs": [
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-333-estiramiento-de-isquiotibiales-sentado/Alongamento%20do%20Piriforme%20Sentado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-333-estiramiento-de-isquiotibiales-sentado/Alongamento%20dos%20adutores%20sentado.gif",
        "confianza": "media"
      },
      {
        "url": "https://cdn.jsdelivr.net/gh/beckerlastrelaureano/gifs-ejercicios@main/ej-333-estiramiento-de-isquiotibiales-sentado/Alongamento%20dos%20Isquiotibiais%20Sentado.gif",
        "confianza": "media"
      }
    ]
  },
  {
    "id": "ej-334-estiramiento-de-isquiotibiales-con-banda-elastica",
    "nombre": "Estiramiento de isquiotibiales con banda elástica",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Banda elástica",
    "dificultad": "Principiante",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-band",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de isquiotibiales con banda elástica es un ejercicio de movilidad y elongación enfocado en isquiotibiales. Se realiza con banda elástica y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Isquiotibiales"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [
      "Estiramiento de isquiotibiales de pie",
      "Estiramiento de isquiotibiales sentado"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/90_90_Hamstring/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/90_90_Hamstring/1.jpg"
    ]
  },
  {
    "id": "ej-335-barrido-de-movilidad-de-isquiotibiales",
    "nombre": "Barrido de movilidad de isquiotibiales",
    "grupoMuscular": "Isquiotibiales",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-hamstrings",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Barrido de movilidad de isquiotibiales es un ejercicio de movilidad y elongación enfocado en isquiotibiales. Se realiza con peso corporal y se clasifica como nivel intermedio. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Isquiotibiales"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [
      "Curl femoral tumbado",
      "Curl femoral sentado",
      "Curl femoral de pie",
      "Curl femoral en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/90_90_Hamstring/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/90_90_Hamstring/1.jpg"
    ]
  },
  {
    "id": "ej-336-estiramiento-de-cuadriceps-de-pie",
    "nombre": "Estiramiento de cuádriceps de pie",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-quads",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de cuádriceps de pie es un ejercicio de movilidad y elongación enfocado en cuádriceps. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cuádriceps"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido"
    ],
    "consejos": [
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante"
    ],
    "variantes": [
      "Extensión de cuádriceps en máquina"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/All_Fours_Quad_Stretch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/All_Fours_Quad_Stretch/1.jpg"
    ]
  },
  {
    "id": "ej-337-estiramiento-de-cuadriceps-tumbado",
    "nombre": "Estiramiento de cuádriceps tumbado",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-quads",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de cuádriceps tumbado es un ejercicio de movilidad y elongación enfocado en cuádriceps. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cuádriceps"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [
      "Extensión de cuádriceps en máquina"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/All_Fours_Quad_Stretch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/All_Fours_Quad_Stretch/1.jpg"
    ]
  },
  {
    "id": "ej-338-zancada-con-estiramiento-de-cuadriceps",
    "nombre": "Zancada con estiramiento de cuádriceps",
    "grupoMuscular": "Cuádriceps",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-quads",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Zancada con estiramiento de cuádriceps es un ejercicio de movilidad y elongación enfocado en cuádriceps. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Cuádriceps"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)"
    ],
    "consejos": [
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo"
    ],
    "variantes": [
      "Extensión de cuádriceps en máquina"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/All_Fours_Quad_Stretch/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/All_Fours_Quad_Stretch/1.jpg"
    ]
  },
  {
    "id": "ej-339-estiramiento-de-gluteo-cruzado",
    "nombre": "Estiramiento de glúteo cruzado",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de glúteo cruzado es un ejercicio de movilidad y elongación enfocado en glúteos. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Glúteos"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido"
    ],
    "consejos": [
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante"
    ],
    "variantes": [
      "Patada de glúteo en polea",
      "Patada de glúteo en máquina",
      "Abducción de cadera en máquina",
      "Patada de glúteo con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Glute/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Glute/1.jpg"
    ]
  },
  {
    "id": "ej-340-rotacion-externa-de-cadera-sentado",
    "nombre": "Rotación externa de cadera sentado",
    "grupoMuscular": "Glúteos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-glutes",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Rotación externa de cadera sentado es un ejercicio de movilidad y elongación enfocado en glúteos. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Glúteos"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [
      "Patada de glúteo en polea",
      "Patada de glúteo en máquina",
      "Abducción de cadera en máquina",
      "Patada de glúteo con banda elástica"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/1.jpg"
    ]
  },
  {
    "id": "ej-341-estiramiento-de-gemelo-en-pared",
    "nombre": "Estiramiento de gemelo en pared",
    "grupoMuscular": "Gemelos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-calves",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de gemelo en pared es un ejercicio de movilidad y elongación enfocado en gemelos. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Gemelos"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)"
    ],
    "consejos": [
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo"
    ],
    "variantes": [
      "Elevación de talones de pie",
      "Elevación de talones sentado",
      "Elevación de talones en prensa",
      "Elevación de talones con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Stretch_Elbows_Against_Wall/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Stretch_Elbows_Against_Wall/1.jpg"
    ]
  },
  {
    "id": "ej-342-estiramiento-de-soleo",
    "nombre": "Estiramiento de sóleo",
    "grupoMuscular": "Gemelos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-calves",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de sóleo es un ejercicio de movilidad y elongación enfocado en gemelos. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Gemelos"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [
      "Elevación de talones de pie",
      "Elevación de talones sentado",
      "Elevación de talones en prensa",
      "Elevación de talones con mancuernas"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Stretch_Elbows_Against_Wall/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Stretch_Elbows_Against_Wall/1.jpg"
    ]
  },
  {
    "id": "ej-343-movilidad-de-tobillo-contra-pared",
    "nombre": "Movilidad de tobillo contra pared",
    "grupoMuscular": "Tobillos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-calves",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Movilidad de tobillo contra pared es un ejercicio de movilidad y elongación enfocado en tobillos. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Tobillos"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ankle_Circles/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ankle_Circles/1.jpg"
    ]
  },
  {
    "id": "ej-344-circulos-de-tobillo",
    "nombre": "Círculos de tobillo",
    "grupoMuscular": "Tobillos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-calves",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Círculos de tobillo es un ejercicio de movilidad y elongación enfocado en tobillos. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Tobillos"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ankle_Circles/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ankle_Circles/1.jpg"
    ]
  },
  {
    "id": "ej-345-sentadilla-profunda-de-movilidad-de-tobillo",
    "nombre": "Sentadilla profunda de movilidad de tobillo",
    "grupoMuscular": "Tobillos",
    "grupoSecundario": "Cuádriceps",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Intermedio",
    "icono": "icon-calves",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Sentadilla profunda de movilidad de tobillo es un ejercicio de movilidad y elongación enfocado en tobillos, con participación secundaria de cuádriceps. Se realiza con peso corporal y se clasifica como nivel intermedio. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Tobillos",
      "Cuádriceps"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ankle_Circles/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ankle_Circles/1.jpg"
    ]
  },
  {
    "id": "ej-346-estiramiento-de-muneca-en-extension",
    "nombre": "Estiramiento de muñeca en extensión",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de muñeca en extensión es un ejercicio de movilidad y elongación enfocado en antebrazos. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Antebrazos"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido"
    ],
    "consejos": [
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante"
    ],
    "variantes": [
      "Curl de muñeca con barra",
      "Curl de muñeca invertido",
      "Curl de muñeca con mancuerna",
      "Extensión de muñeca con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Circles/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Circles/1.jpg"
    ]
  },
  {
    "id": "ej-347-estiramiento-de-muneca-en-flexion",
    "nombre": "Estiramiento de muñeca en flexión",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de muñeca en flexión es un ejercicio de movilidad y elongación enfocado en antebrazos. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Antebrazos"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido"
    ],
    "consejos": [
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante"
    ],
    "variantes": [
      "Curl de muñeca con barra",
      "Curl de muñeca invertido",
      "Curl de muñeca con mancuerna",
      "Extensión de muñeca con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Circles/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Circles/1.jpg"
    ]
  },
  {
    "id": "ej-348-circulos-de-muneca",
    "nombre": "Círculos de muñeca",
    "grupoMuscular": "Antebrazos",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-forearms",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Círculos de muñeca es un ejercicio de movilidad y elongación enfocado en antebrazos. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Antebrazos"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [
      "Curl de muñeca con barra",
      "Curl de muñeca invertido",
      "Curl de muñeca con mancuerna",
      "Extensión de muñeca con barra"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Circles/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Circles/1.jpg"
    ]
  },
  {
    "id": "ej-349-estiramiento-de-cobra",
    "nombre": "Estiramiento de cobra",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de cobra es un ejercicio de movilidad y elongación enfocado en abdomen. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Abdomen"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [
      "Crunch en polea alta",
      "Crunch en máquina",
      "Plancha con peso",
      "Abdominal completo con disco"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lower_Back_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lower_Back_Curl/1.jpg"
    ]
  },
  {
    "id": "ej-350-rotacion-de-rodillas-al-piso",
    "nombre": "Rotación de rodillas al piso",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "Oblicuos",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Rotación de rodillas al piso es un ejercicio de movilidad y elongación enfocado en abdomen, con participación secundaria de oblicuos. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Abdomen",
      "Oblicuos"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático"
    ],
    "consejos": [
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días"
    ],
    "variantes": [
      "Crunch en polea alta",
      "Crunch en máquina",
      "Plancha con peso",
      "Abdominal completo con disco"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Torso_Rotation/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Torso_Rotation/1.jpg"
    ]
  },
  {
    "id": "ej-351-postura-del-nino-extendida",
    "nombre": "Postura del niño extendida",
    "grupoMuscular": "Abdomen",
    "grupoSecundario": "Espalda",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-abs",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Postura del niño extendida es un ejercicio de movilidad y elongación enfocado en abdomen, con participación secundaria de espalda. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Abdomen",
      "Espalda"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido"
    ],
    "consejos": [
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante"
    ],
    "variantes": [
      "Crunch en polea alta",
      "Crunch en máquina",
      "Plancha con peso",
      "Abdominal completo con disco"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Childs_Pose/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Childs_Pose/1.jpg"
    ]
  },
  {
    "id": "ej-352-estiramiento-de-trapecio-superior",
    "nombre": "Estiramiento de trapecio superior",
    "grupoMuscular": "Trapecios",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-traps",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Estiramiento de trapecio superior es un ejercicio de movilidad y elongación enfocado en trapecios. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Trapecios"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse",
      "Rebotar en el estiramiento en lugar de mantenerlo estático",
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)"
    ],
    "consejos": [
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado",
      "La consistencia importa más que la intensidad: mejor un poco todos los días",
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo"
    ],
    "variantes": [
      "Encogimientos con barra",
      "Encogimientos con mancuernas",
      "Encogimientos en Smith",
      "Encogimientos en polea"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": []
  },
  {
    "id": "ej-353-encogimiento-de-movilidad-con-circulos",
    "nombre": "Encogimiento de movilidad con círculos",
    "grupoMuscular": "Trapecios",
    "grupoSecundario": "",
    "tipo": "Aislado",
    "equipamiento": "Peso corporal",
    "dificultad": "Principiante",
    "icono": "icon-traps",
    "iconoEquipo": "icon-bodyweight",
    "imagen": "",
    "video": "",
    "descripcion": "Encogimiento de movilidad con círculos es un ejercicio de movilidad y elongación enfocado en trapecios. Se realiza con peso corporal y se clasifica como nivel principiante. Ayuda a mejorar el rango de movimiento, aliviar tensión muscular y complementar el trabajo de fuerza.",
    "musculosImplicados": [
      "Trapecios"
    ],
    "objetivos": [
      "movilidad",
      "libre"
    ],
    "erroresFrecuentes": [
      "Forzar el rango de movimiento hasta sentir dolor agudo (la molestia debe ser leve)",
      "Contener la respiración en lugar de respirar profundo y sostenido",
      "Apurar el movimiento sin darle tiempo al músculo o la articulación para relajarse"
    ],
    "consejos": [
      "Sostené el estiramiento entre 20 y 30 segundos, respirando profundo",
      "Buscá una molestia leve, nunca dolor agudo o punzante",
      "Practicalo después de entrenar o en una sesión aparte, con el cuerpo ya un poco activado"
    ],
    "variantes": [
      "Encogimiento tras espalda",
      "Encogimiento con kettlebell"
    ],
    "favorito": false,
    "vecesUsado": 0,
    "creadoPorUsuario": false,
    "imagenesExternas": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/1.jpg"
    ]
  }
];
