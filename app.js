const pasos = [
  "Mezcla harina y agua para iniciar masa madre.",
  "Deja reposar 24 horas.",
  "Alimenta la masa madre con harina y agua, mezcla bien.",
  "Deja reposar 24 horas.",
  "Repite alimentación y reposo hasta que burbujee."
];
let estado = JSON.parse(localStorage.getItem('masaMadreEstado')) || { pasoActual: 0, tiempoInicio: null };
let historial = JSON.parse(localStorage.getItem('masaMadreHistorial')) || [];
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
    // Guaración en historia
    let fechaFin = new Date().toLocaleString();
    historial.push(fechaFin);
    localStorage.setItem('masaMadreHistorial', JSON.stringify(historial));
    mostrarHistorial();
    // Reiniciar para nuevo proceso tras 3 segundos
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
// Función para llenar el menú desplegable con el historial
function llenarHistorialSelect() {
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
// Mostrar historial en el menú y mensaje
function mostrarHistorial() {
  if (historial.length === 0) {
    detalleHistorial.textContent = "No hay historial de masas terminadas aún.";
    historialSelect.innerHTML = '<option value="">No hay fechas disponibles</option>';
    return;
  }
  llenarHistorialSelect();
  detalleHistorial.textContent = "";
}
// Solicitar permiso para notificaciones
function solicitarPermisoNotificacion() {
  if ("Notification" in window) {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }
  }
}
// Enviar notificación
function enviarNotificacion() {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Proceso Masa Madre", {
      body: "¡Ya pasó un día! Es hora de hacer el siguiente paso.",
      icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png"
    });
  }
}
setInterval(mostrarEstado, 60000);  // Actualizar cada minuto
// Inicialización
solicitarPermisoNotificacion();
mostrarEstado();
mostrarHistorial();
