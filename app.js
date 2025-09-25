const pasos = [
  `Día 1:
- Mezcla inicial: en un recipiente limpio, mezcla 100 gramos de harina con 100 mililitros de agua.
- Remueve hasta que no queden grumos.
- Cubre con un paño y deja reposar a temperatura ambiente durante 24 horas.

Nota: No esperes actividad visible todavía.`,

  `Día 2:
- Primera alimentación: descarta la mitad de la mezcla.
- Añade 100 gramos de harina y 100 gramos de agua.
- Mezcla y deja reposar 24 horas.

Observa burbujas pequeñas y un olor algo ácido.`,

  `Día 3:
- Alimentación diaria: descarta la mitad.
- Añade 100 gramos de harina y 100 gramos de agua.
- Mezcla y deja reposar 24 horas.`,

  `Día 4:
- Igual que día 3, descarta mitad, alimenta, mezcla, y 24 horas de reposo.`,

  `Día 5:
- Igual que día 3 y 4, continúa alimentando y dejando reposar.`,

  `Día 6:
- Prueba de flotación: toma una porción pequeña y colócala en agua.
- Si flota, está lista para usar.
- Si no flota, permanece alimentando y esperando.`,

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
      "Puedes reemplazar 100 g de harina de trigo por harina integral.",
      "Añade semillas (girasol, linaza) para un pan más nutritivo."
    ],
    pasos: [
      "Mezcla la harina y el agua hasta obtener una masa homogénea.",
      "Deja reposar 30 min (autólisis).",
      "Agrega la masa madre y la sal, mezcla bien.",
      "Deja fermentar la masa durante 4-6 horas, realizando pliegues cada 1.5 horas.",
      "Forma el pan y déjalo reposar 2 horas más (prueba final).",
      "Hornea a 230°C durante 40 minutos."
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
      "Puedes añadir mezcla de semillas para topping.",
      "Se pueden hacer integrales usando 200 g harina integral."
    ],
    pasos: [
      "Mezcla harina, agua, masa madre y azúcar.",
      "Deja reposar 1 hora.",
      "Agrega la sal y amasa bien.",
      "Deja fermentar 3-4 horas con doblados cada hora.",
      "Forma panecillos y deja reposar 1 hora más.",
      "Hornea a 220°C por 20-25 minutos."
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
      "Puedes usar solo harina de fuerza para una masa más elástica.",
      "Añade hierbas secas en la masa para más sabor."
    ],
    pasos: [
      "Mezcla la harina y agua y deja reposar 30 minutos.",
      "Incorpora la masa madre, sal y aceite.",
      "Amasa y deja fermentar 6-8 horas en refrigeración.",
      "Saca masa, forma la base y añade ingredientes.",
      "Hornea a 250°C por 10-15 minutos."
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
      "1 cucharadita de esencia de vainilla"
    ],
    variantes: [
      "Agrega pasas o frutas secas para un pan dulce más sabroso.",
      "Puede cubrirse con glaseado de azúcar o canela."
    ],
    pasos: [
      "Mezcla harina, masa madre, azúcar y leche.",
      "Agrega huevos y mezcla bien.",
      "Incorpora mantequilla, sal y vainilla, y amasa hasta masa suave.",
      "Deja fermentar 4-5 horas con doblados cada 1.5 horas.",
      "Forma la masa en bollos pequeños y deja reposar 1-2 horas más.",
      "Hornea a 180°C durante 20-25 minutos."
    ]
  }
];

let estado = JSON.parse(localStorage.getItem('masaMadreEstado')) || { pasoActual: 0, tiempoInicio: null };

const pasoDescElem = document.getElementById('stepDescription');
const tiempoRestElem = document.getElementById('timeRemaining');
const botonHecho = document.getElementById('markDoneButton');
const botonReset = document.getElementById('resetButton');
const recetasContainer = document.getElementById('recetasContainer');

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

document.addEventListener("DOMContentLoaded", () => {
  mostrarEstado();
  mostrarRecetas();
});
