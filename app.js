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
- Antes de uso, alimenta para reactivar.`
];

let estado = JSON.parse(localStorage.getItem('masaMadreEstado')) || { pasoActual: 0, tiempoInicio: null };

const pasoDescElem = document.getElementById('stepDescription');
const tiempoRestElem = document.getElementById('timeRemaining');
const botonHecho = document.getElementById('markDoneButton');
const botonReset = document.getElementById('resetButton');

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

// Función para reiniciar el progreso al primer paso
botonReset.addEventListener('click', () => {
  estado = { pasoActual: 0, tiempoInicio: null };
  guardarEstado();
  botonHecho.disabled = false;
  mostrarEstado();
});

mostrarEstado();
