// Seleccionamos el formulario por su ID
const form = document.getElementById('presupuestoForm');
const listaTransacciones = [];

form.addEventListener('submit', function(event) {
  
  event.preventDefault();

  const monto = Number(document.getElementById('inputMonto').value);
  const tipoTransaccion = document.getElementById('inputTipoTransaccion').value;

 switch (tipoTransaccion) {
    case '1':
        listaTransacciones.push({fecha:new Date(),tipoTransaccion: tipoTransaccion, monto: monto});
        break;
    case '2':
        listaTransacciones.push({fecha:new Date(),tipoTransaccion: tipoTransaccion, monto: monto*(-1)});
 
    default:
        break;
 }
 console.log('Transaccion', {listaTransacciones});

});

function mostrarListarTransacciones(listaTransacciones) {
    const contenedor = document.getElementById("contenedor");
    
    for (const transaccion of listaTransacciones) {

        const spanFecha = document.createElement("span");
        spanFecha.textContent = transaccion.monto;

        const span = document.createElement("span");
        span.textContent = transaccion.monto;
      }
}
