const pasos = [
  `Día 1:
- Mezcla inicial: en un recipiente limpio, mezcla 100 gramos de harina con 100 gramos de agua.
- Mezcla con cuchara o espátula durante 2 minutos hasta no ver grumos y que la mezcla sea húmeda y pegajosa.
- Cubre con un paño y deja reposar a temperatura ambiente durante 24 horas.

Nota: No esperes actividad visible todavía.`,

  `Día 2:
- Primera alimentación: descarta la mitad de la mezcla.
- Añade 100 gramos de harina y 100 gramos de agua.
- Mezcla con cuchara 3 minutos, debe quedar homogénea y pegajosa sin grumos.
- Deja reposar 24 horas.

Observa burbujas pequeñas y olor ácido.`,

  `Día 3:
- Alimentación diaria: descarta la mitad.
- Añade 100 gramos de harina y 100 gramos de agua.
- Mezcla 3-5 minutos hasta tener una masa suave, homogénea y elástica.
- Deja reposar 24 horas.`,

  `Día 4:
- Igual que día 3: mezcla 3-5 minutos y deja reposar.`,

  `Día 5:
- Continúa alimentación diaria, mezcla y deja reposar.`,

  `Día 6:
- Prueba de flotación: toma una porción pequeña y colócala en agua.
- Si flota, está lista para usar.
- Si no, sigue alimentando y esperando.`,

  `Día 7:
- Uso y mantenimiento: usa para panificación.
- Guarda en refrigeración y alimenta semanalmente.
- Antes de usarla, aliméntala y déjala a temperatura ambiente para activarla.`
];

const recetas = [
  {
    nombre: "Pan de Masa Madre Tradicional",
    ingredientes: [
      "500 g harina de trigo",
      "300 g agua",
      "150 g masa madre activa",
      "10 g sal"
    ],
    variantes: [
      "Puedes reemplazar 100 g de harina de trigo por harina integral para un pan más completo.",
      "Añade semillas (girasol, linaza) para un pan más nutritivo.",
      "Ajusta la hidratación añadiendo un poco más o menos de agua para variar la textura."
    ],
    pasos: [
      "Mezcla la harina y el agua en un bol grande con una cuchara o espátula durante 2 minutos hasta que no queden grumos; la mezcla debe verse húmeda y pegajosa.",
      "Deja reposar 30 minutos para que la harina absorba bien el agua (esto mejora la textura).",
      "Agrega la masa madre y la sal; mezcla con las manos o cuchara durante 3 a 5 minutos hasta que la masa quede elástica, pegajosa pero no demasiado húmeda.",
      "Deja fermentar la masa tapada durante 4-6 horas. Cada 1.5 horas realiza plegados suaves para fortalecer el gluten.",
      "Forma la pieza con cuidado, manteniendo las burbujas dentro para buena textura.",
      "Deja reposar la masa ya formada durante 2 horas hasta que crezca y se sienta aireada y esponjosa.",
      "Hornea 40 minutos a 230°C hasta que tenga una corteza dorada y crujiente."
    ]
  },
  {
    nombre: "Panecillos de Masa Madre",
    ingredientes: [
      "400 g harina de trigo",
      "250 g agua",
      "100 g masa madre activa",
      "8 g sal",
      "15 g azúcar"
    ],
    variantes: [
      "Añade semillas o frutos secos para textura y sabor.",
      "Usa harina integral para una versión más saludable.",
      "Ajusta el azúcar para variar el dulzor."
    ],
    pasos: [
      "Mezcla harina, agua, masa madre y azúcar durante 2-3 minutos hasta obtener mezcla homogénea y húmeda.",
      "Deja reposar 1 hora para activar la fermentación.",
      "Agrega sal y amasa con las manos 5 minutos hasta masa suave y elástica.",
      "Deja fermentar 3-4 horas con doblados cada hora para fortalecer gluten.",
      "Forma panecillos, deja reposar 1 hora hasta que crezcan un poco y se sientan aireados.",
      "Hornea 20-25 minutos a 220°C hasta que estén dorados."
    ]
  },
  {
    nombre: "Pizza con Masa Madre",
    ingredientes: [
      "400 g harina de trigo",
      "250 g agua",
      "120 g masa madre activa",
      "8 g sal",
      "15 g aceite de oliva"
    ],
    variantes: [
      "Harina de fuerza para una masa elástica y masticable.",
      "Añade hierbas secas al amasar para aroma.",
      "Modifica aceite para suavidad diferente."
    ],
    pasos: [
      "Mezcla harina y agua 2 minutos hasta masa pegajosa y sin grumos.",
      "Deja reposar 30 min para autólisis.",
      "Agrega masa madre, sal y aceite, amasa 5 minutos hasta masa lisa y elástica.",
      "Deja fermentar 6-8 horas en refrigeración tapado.",
      "Forma base, suave y elástica.",
      "Agrega ingredientes y hornea 10-15 min a 250°C."
    ]
  },
  {
    nombre: "Pan Dulce de Masa Madre",
    ingredientes: [
      "400 g harina de trigo",
      "200 g masa madre activa",
      "100 g azúcar",
      "125 ml leche tibia",
      "50 g mantequilla a temperatura ambiente",
      "2 huevos",
      "5 g sal",
      "1 cucharadita esencia de vainilla"
    ],
    variantes: [
      "Agrega frutas secas o pasas.",
      "Cubre con glaseado para un toque dulce.",
      "Ajusta azúcar para más o menos dulzor."
    ],
    pasos: [
      "Mezcla harina, masa madre, azúcar y leche durante 3 minutos hasta mezcla húmeda y uniforme.",
      "Agrega huevos y mezcla 2 minutos más.",
      "Incorpora mantequilla, sal y vainilla y amasa 5 minutos hasta masa suave y ligeramente pegajosa.",
      "Deja fermentar 4-5 horas haciendo plegados cada 1.5 horas.",
      "Forma bollos, deben sentirse elásticos pero firmes.",
      "Deja reposar 1-2 horas hasta que suban y se vean aireados.",
      "Hornea 20-25 minutos a 180°C hasta dorado."
    ]
  }
];

const postres = [
  {
    nombre: "Galletas de Chocolate",
    ingredientes: [
      "200 g harina",
      "150 g azúcar",
      "100 g mantequilla",
      "1 huevo",
      "50 g cacao en polvo",
      "1 cucharadita polvo para hornear",
      "1 pizca sal"
    ],
    variantes: [
      "Puedes usar azúcar moreno para sabor más profundo.",
      "Añade chispas de chocolate para textura extra.",
      "Puedes cambiar cacao por cocoa para sabor diferente."
    ],
    pasos: [
      "Precalienta horno a 180°C.",
      "Bate mantequilla y azúcar durante 3 minutos hasta mezcla cremosa y blanca.",
      "Agrega huevo y mezcla 2 minutos hasta homogéneo.",
      "Incorpora harina, cacao, polvo para hornear y sal poco a poco mezclando suavemente hasta masa sin grumos.",
      "Forma bolitas y coloca en bandeja con papel.",
      "Hornea 12-15 minutos hasta que los bordes estén firmes; la masa debe verse ligeramente suave al centro al salir."
    ]
  },
  {
    nombre: "Brownies Clásicos",
    ingredientes: [
      "200 g chocolate oscuro",
      "150 g mantequilla",
      "200 g azúcar",
      "3 huevos",
      "100 g harina",
      "1 cucharadita esencia de vainilla",
      "1 pizca sal"
    ],
    variantes: [
      "Agrega nueces para textura crujiente.",
      "Usa azúcar moreno para sabor más rico.",
      "Añade café instantáneo para potenciar el chocolate."
    ],
    pasos: [
      "Precalienta horno a 180°C.",
      "Derrite chocolate y mantequilla al baño maría o microondas con cuidado, mezcla hasta lisa.",
      "Bate azúcar y huevos juntos 3-4 minutos hasta mezcla espesa y pálida.",
      "Incorpora mezcla de chocolate a huevos con movimientos envolventes suaves.",
      "Añade harina y sal tamizadas con movimientos envolventes; mezcla solo hasta homogéneo.",
      "Vierte en molde engrasado y hornea 25-30 minutos; el centro debe estar firme pero jugoso."
    ]
  },
  {
    nombre: "Pastel de Vainilla",
    ingredientes: [
      "250 g harina",
      "200 g azúcar",
      "120 ml leche",
      "100 g mantequilla",
      "3 huevos",
      "1 cucharada polvo para hornear",
      "1 cucharadita esencia de vainilla"
    ],
    variantes: [
      "Agrega ralladura de limón para más aroma.",
      "Usa yogur en lugar de leche para textura húmeda.",
      "Añade frutos secos o chips para variedad."
    ],
    pasos: [
      "Precalienta horno a 180°C.",
      "Bate mantequilla y azúcar 4-5 minutos hasta mezcla cremosa y clara.",
      "Añade huevos uno a uno, batiendo 1 minuto entre cada uno.",
      "Mezcla harina con polvo para hornear e incorpora alternando con leche suavemente.",
      "Agrega esencia y mezcla hasta homogéneo, no sobrebatir.",
      "Vierte en molde y hornea 30-35 minutos; al insertar un palillo debe salir limpio."
    ]
  },
  {
    nombre: "Galletas de Avena y Pasas",
    ingredientes: [
      "150 g avena",
      "100 g harina",
      "120 g mantequilla",
      "100 g azúcar moreno",
      "1 huevo",
      "100 g pasas",
      "1 cucharadita esencia de vainilla",
      "1 cucharadita polvo para hornear"
    ],
    variantes: [
      "Sustituye pasas por nueces o arándanos deshidratados.",
      "Añade canela o nuez moscada para sabor especiado.",
      "Usa azúcar blanco si no tienes azúcar moreno."
    ],
    pasos: [
      "Precalienta horno a 180°C.",
      "Bate mantequilla y azúcar moreno 3 minutos hasta cremosa.",
      "Agrega huevo y esencia, mezcla 2 minutos.",
      "Mezcla avena, harina y polvo para hornear y añade poco a poco a mezcla húmeda, integrando sin batir demasiado.",
      "Agrega pasas y mezcla con cuchara.",
      "Forma bolitas y coloca con espacio en bandeja.",
      "Hornea 12-15 minutos hasta dorar ligeramente y dejar enfriar."
    ]
  },
  {
    nombre: "Muffins de Chocolate",
    ingredientes: [
      "250 g harina",
      "100 g cacao en polvo",
      "150 g azúcar",
      "2 huevos",
      "120 ml aceite vegetal",
      "180 ml leche",
      "1 cucharadita polvo para hornear",
      "1 pizca sal"
    ],
    variantes: [
      "Añade chispas de chocolate o nueces para textura extra.",
      "Usa aceite de coco para sabor diferente.",
      "Sustituye leche por leche de almendra o soja."
    ],
    pasos: [
      "Precalienta horno a 190°C.",
      "Mezcla harina, cacao, polvo para hornear, sal y azúcar en un bol.",
      "En otro bol, bate huevos, leche y aceite.",
      "Une ambas mezclas con cuchara o espátula sin sobrebatir; debe quedar mezcla con algunos grumos pequeños.",
      "Llena moldes hasta 3/4 y hornea 20-25 minutos hasta que al insertar palillo salga limpio."
    ]
  }
];

// Mantequilla Mágica pasos
const mantequillaMagicaPasos = [
  "Descarboxilar el cannabis: Hornea el material vegetal a 110-115°C durante 30-40 minutos para activar los compuestos (THC/CBD).",
  "Derretir la mantequilla: Coloca la mantequilla en una olla junto con el agua y derrítela a fuego medio-bajo.",
  "Agregar el cannabis: Añade el cannabis descarboxilado a la mantequilla derretida con agua.",
  "Cocinar a fuego lento: Mantén la mezcla a fuego bajo para que hierva suavemente durante 2 a 3 horas, removiendo ocasionalmente.",
  "Colar la mezcla: Usa un colador para separar los restos vegetales de la mantequilla infusionada.",
  "Enfriar y solidificar: Vierte la mezcla colada en un recipiente y refrigera durante 12 horas o hasta que la mantequilla se solidifique.",
  "Separar el agua: Una vez sólida, presiona el recipiente para soltar la mantequilla y desecha el agua.",
  "Guardar: Conserva la mantequilla mágica en un recipiente hermético en refrigerador o congelador."
];

let estado = JSON.parse(localStorage.getItem('masaMadreEstado')) || { pasoActual: 0, tiempoInicio: null };
let mantequillaPasoActual = 0;

const pasoDescElem = document.getElementById('stepDescription');
const tiempoRestElem = document.getElementById('timeRemaining');
const botonHecho = document.getElementById('markDoneButton');
const botonReset = document.getElementById('resetButton');
const recetasContainer = document.getElementById('recetasContainer');
const postresContainer = document.getElementById('postresContainer');

const mantequillaPasoElem = document.getElementById('mantequillaPaso');
const mantequillaSiguienteBtn = document.getElementById('mantequillaSiguienteBtn');
const mantequillaRepetirBtn = document.getElementById('mantequillaRepetirBtn');

function mostrarEstado() {
  if (estado.pasoActual >= pasos.length) {
    pasoDescElem.textContent =
      "¡Felicidades! El proceso de masa madre ha finalizado.\nPuedes empezar a usar tu masa madre para hacer deliciosos panes.";
    tiempoRestElem.textContent = "";
    botonHecho.disabled = true;
    return;
  }

  pasoDescElem.textContent = pasos[estado.pasoActual];

  if (estado.tiempoInicio) {
    const tiempoTranscurrido = Date.now() - estado.tiempoInicio;
    const unDiaMs = 24 * 60 * 60 * 1000;
    const tiempoRestanteMs = unDiaMs - tiempoTranscurrido;

    if (tiempoRestanteMs <= 0) {
      tiempoRestElem.textContent = "¡Es hora del siguiente paso!";
    } else {
      const horas = Math.floor(tiempoRestanteMs / (1000 * 60 * 60));
      const minutos = Math.floor((tiempoRestanteMs % (1000 * 60 * 60)) / (1000 * 60));
      tiempoRestElem.textContent = `Tiempo para siguiente paso: ${horas}h ${minutos}m`;
    }
  } else {
    tiempoRestElem.textContent = "Presiona 'Marcar paso como hecho' para iniciar.";
  }
}

function guardarEstado() {
  localStorage.setItem('masaMadreEstado', JSON.stringify(estado));
}

botonHecho.addEventListener('click', () => {
  if (estado.pasoActual < pasos.length) {
    estado.pasoActual++;
    estado.tiempoInicio = Date.now();
    guardarEstado();
    mostrarEstado();
  }
});

botonReset.addEventListener('click', () => {
  estado = { pasoActual: 0, tiempoInicio: null };
  guardarEstado();
  botonHecho.disabled = false;
  mostrarEstado();
});

function mostrarRecetas() {
  recetasContainer.innerHTML = "";

  recetas.forEach((receta) => {
    const divReceta = document.createElement('div');
    divReceta.className = "receta";

    const titulo = document.createElement('h3');
    titulo.textContent = receta.nombre;
    divReceta.appendChild(titulo);

    const ingLabel = document.createElement('strong');
    ingLabel.textContent = "Ingredientes:";
    divReceta.appendChild(ingLabel);

    const ulIngredientes = document.createElement('ul');
    receta.ingredientes.forEach((ing) => {
      const li = document.createElement('li');
      li.textContent = ing;
      ulIngredientes.appendChild(li);
    });
    divReceta.appendChild(ulIngredientes);

    const varLabel = document.createElement('strong');
    varLabel.textContent = "Variantes posibles:";
    divReceta.appendChild(varLabel);

    const ulVariantes = document.createElement('ul');
    receta.variantes.forEach((v) => {
      const li = document.createElement('li');
      li.textContent = v;
      ulVariantes.appendChild(li);
    });
    divReceta.appendChild(ulVariantes);

    const pasosLabel = document.createElement('strong');
    pasosLabel.textContent = "Pasos para preparar:";
    divReceta.appendChild(pasosLabel);

    const ulPasos = document.createElement('ul');
    receta.pasos.forEach((p) => {
      const li = document.createElement('li');
      li.textContent = p;
      ulPasos.appendChild(li);
    });
    divReceta.appendChild(ulPasos);

    recetasContainer.appendChild(divReceta);
  });
}

function mostrarPostres() {
  postresContainer.innerHTML = "";

  postres.forEach((postre) => {
    const divPostre = document.createElement('div');
    divPostre.className = "receta";

    const titulo = document.createElement('h3');
    titulo.textContent = postre.nombre;
    divPostre.appendChild(titulo);

    const ingLabel = document.createElement('strong');
    ingLabel.textContent = "Ingredientes:";
    divPostre.appendChild(ingLabel);

    const ulIngredientes = document.createElement('ul');
    postre.ingredientes.forEach((ing) => {
      const li = document.createElement('li');
      li.textContent = ing;
      ulIngredientes.appendChild(li);
    });
    divPostre.appendChild(ulIngredientes);

    const pasosLabel = document.createElement('strong');
    pasosLabel.textContent = "Pasos para preparar:";
    divPostre.appendChild(pasosLabel);

    const ulPasos = document.createElement('ul');
    postre.pasos.forEach((p) => {
      const li = document.createElement('li');
      li.textContent = p;
      ulPasos.appendChild(li);
    });
    divPostre.appendChild(ulPasos);

    postresContainer.appendChild(divPostre);
  });
}

function mostrarPasoMantequilla() {
  mantequillaPasoElem.textContent = mantequillaMagicaPasos[mantequillaPasoActual];
  if (mantequillaPasoActual >= mantequillaMagicaPasos.length -1) {
    mantequillaSiguienteBtn.disabled = true;
  } else {
    mantequillaSiguienteBtn.disabled = false;
  }
}

mantequillaSiguienteBtn.addEventListener('click', () => {
  if (mantequillaPasoActual < mantequillaMagicaPasos.length -1) {
    mantequillaPasoActual++;
    mostrarPasoMantequilla();
  }
});

mantequillaRepetirBtn.addEventListener('click', () => {
  mantequillaPasoActual = 0;
  mostrarPasoMantequilla();
});

document.addEventListener("DOMContentLoaded", () => {
  mostrarEstado();
  mostrarRecetas();
  mostrarPostres();
  mostrarPasoMantequilla();
});
