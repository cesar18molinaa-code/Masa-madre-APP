const pasos = [
  `Día 1: Mezcla inicial
- En un recipiente limpio, mezcla 100 gramos de harina (preferentemente integral o de fuerza) con 100 mililitros de agua a temperatura ambiente.
- Remueve bien para que no queden grumos.
- Cubre con un paño o tapa sin ajustar para que entre aire.
- Deja reposar en un lugar cálido (20-22 °C) durante 24 horas.

Nota: Es normal que aún no se vean burbujas ni actividad visible.`,

  `Día 2: Primera alimentación
- Descarta la mitad de la mezcla del día anterior.
- Añade 100 gramos de harina y 100 gramos de agua.
- Mezcla bien y cubre de nuevo.
- Deja reposar otras 24 horas en lugar cálido.

Observa: Podrás empezar a notar burbujas pequeñas y olor ácido.`,

  `Día 3 a 5: Alimentación diaria
- Cada día, descarta la mitad de la mezcla.
- Alimenta nuevamente con 100 gramos de harina y 100 gramos de agua.
- Mezcla bien, cubre y deja reposar 24 horas.

Consejos:
- Aparecerán más burbujas.
- El olor puede ser un poco ácido o afrutado, es normal.
- La mezcla empezará a crecer y bajar (fermentar).`,

  `Día 6: Prueba de flotación
- Toma una pequeña porción de masa madre.
- Colócala en un vaso con agua.
- Si flota, está lista para usar en panificación.
- Si no flota, sigue alimentando y deja fermentar algunos días más.`,

  `Día 7: Uso y mantenimiento
- Si la masa madre está lista, úsala para tus recetas.
- Guarda una porción en refrigeración y aliméntala semanalmente.
- Antes de usarla, aliméntala y déjala a temperatura ambiente para activarla.`
];

let estado = JSON.parse(localStorage.getItem('masaMadreEstado')) || { pasoActual: 0, tiempoInicio: null };

const pasoDescElem = document.getElementById('stepDescription');
const tiempoRestElem = document.getElementById('timeRemaining');
const botonHecho = document.getElementById('markDoneButton');

function mostrarEstado() {
  if (estado.pasoActual >= pasos.length) {
    pasoDescElem.textContent = "¡Felicidades! El proceso de masa madre ha finalizado.\nPuedes empezar a usar tu masa madre para hacer deliciosos panes.";
    tiempoRestElem.textContent = "";
    botonHecho.disabled = true;

    // Espera 3 segundos, luego reinicia
    setTimeout(() => {
      estado = { pasoActual: 0, tiempoInicio: null };
      guardarEstado();
      botonHecho.disabled = false;
      mostrarEstado();
    }, 3000);
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
  estado.pasoActual++;
  estado.tiempoInicio = Date.now();
  guardarEstado();
  mostrarEstado();
});

mostrarEstado();
