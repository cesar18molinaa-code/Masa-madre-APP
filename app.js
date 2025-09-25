const pasos = [
  "Mezcla harina y agua para iniciar masa madre.",
  "Deja reposar 24 horas.",
  "Alimenta la masa madre con harina y agua, mezcla bien.",
  "Deja reposar 24 horas.",
  "Repite alimentación y reposo hasta que burbujee."
];

let estado = JSON.parse(localStorage.getItem('masaMadreEstado')) || { pasoActual: 0, tiempoInicio: null };
// Asegurar historial como arreglo
let historial = JSON.parse(localStorage.getItem('masaMadreHistorial'));
if (!Array.isArray(historial)) historial = [];

const pasoDescElem = document.getElementById('stepDescription');
const tiempoRestElem = document.getElementById('timeRemaining');
const botonHecho = document.getElementById('markDoneButton');

const historialSelect = document.getElementById('historialSelect');
const detalleHistorial = document.getElementById('detalleHistorial');

function mostrarEstado() {
  if (estado.pasoActual >= pasos.length) {
    pasoDescElem.textContent = "Proceso completado. ¡Felicidades!";
    tiempoRestElem.textContent = "";
    botonHecho.disabled = true;

    // Guardar fecha de finalización en historial y lo actualizamos localStorage correctamente
    let fechaFin = new Date().toLocaleString();
    // Añade la fecha al historial
    historial.push(fechaFin);
    // Guardar el arreglo actualizado como cadena JSON en localStorage
    localStorage.setItem('masaMadreHistorial', JSON.stringify(historial));

    mostrarHistorial();

    setTimeout(() => {
      estado = { pasoActual: 0, tiempoInicio: null };
      botonHecho.disabled = false;
      guardarEstado();
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
      enviarNotificacion();
    } else {
      let horas = Math.floor(tiempoRestanteMs / (1000 * 60 * 60));
      let minutos = Math.floor((tiempoRestanteMs % (1000 * 60 * 60)) / (1000 * 60));
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

function llenarHistorialSelect() {
  // Limpiar opciones previas excepto primera
  historialSelect.innerHTML = '<option value="">Selecciona una fecha</option>';
  historial.forEach((fecha, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = fecha;
    historialSelect.appendChild(option);
  });
}

historialSelect.addEventListener('change', () => {
  const indexSeleccionado = historialSelect.value;
  if (indexSeleccionado === "") {
    detalleHistorial.textContent = "";
  } else {
    detalleHistorial.textContent = "Proceso completado el día: " + historial[indexSeleccionado];
  }
});

function mostrarHistorial() {
  if (historial.length === 0) {
    detalleHistorial.textContent = "No hay historial de masas terminadas aún.";
    historialSelect.innerHTML = '<option value="">No hay fechas disponibles</option>';
    return;
  }
  llenarHistorialSelect();
  detalleHistorial.textContent = "";
}

function solicitarPermisoNotificacion() {
  if ("Notification" in window) {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }
  }
}

function enviarNotificacion() {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Proceso Masa Madre", {
      body: "¡Ya pasó un día! Es hora de hacer el siguiente paso.",
      icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png"
    });
  }
}

setInterval(mostrarEstado, 60000);

solicitarPermisoNotificacion();
mostrarEstado();
mostrarHistorial();
