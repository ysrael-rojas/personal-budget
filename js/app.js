// Seleccionamos el formulario por su ID
const form = document.getElementById('presupuestoForm');
const bodyTable = document.getElementById('tableBody');
const areaBalance = document.getElementById('presupuestoBalance');

const listaTransacciones = [];
let balanceTotal = 0;

form.addEventListener('submit', function(event) {
  
  event.preventDefault();

  const monto = Number(document.getElementById('inputMonto').value);
  const tipoTransaccion = document.getElementById('inputTipoTransaccion').value;

  const estado = validarMonto(monto);
  if (estado == false) {
    alert('el monto no cumple con lo establecido');
    return;
  }
  

 switch (tipoTransaccion) {
    case '1':
        listaTransacciones.push({fecha:new Date(),tipoTransaccion: tipoTransaccion, monto: monto});
        break;
    case '2':
        listaTransacciones.push({fecha:new Date(),tipoTransaccion: tipoTransaccion, monto: monto*(-1)});
 
    default:
        break;
 }
 bodyTable.innerHTML = '';
 mostrarListarTransacciones(listaTransacciones);
 actualizarBalance();

});

function actualizarBalance() {

    areaBalance.innerHTML = '';

    balanceTotal = calcularBalance(listaTransacciones); 

    crearSpanBalance(balanceTotal);    
}

function crearSpanBalance(balance) {

    const spanBalance = document.createElement("span");
    spanBalance.textContent = formatearMonto(balance);
    areaBalance.appendChild(spanBalance);
}

function mostrarListarTransacciones(listaTransacciones) {

    let index = 1;    
    
    for (const transaccion of listaTransacciones) {

        const nuevaFila = document.createElement("tr");
        let tipo = transaccion.tipoTransaccion === '1'? 'INGRESO':'GASTO';

        nuevaFila.innerHTML = `
        <th>${index}</th>
        <td>${formatearFecha(transaccion.fecha)}</td>
        <td>${tipo}</td>
        <td>${formatearMonto (transaccion.monto)}</td>
        `;
        bodyTable.appendChild(nuevaFila);
        index++;
      }
}

function ordenarTransacciones() {

    listaTransacciones.sort((a,b) => a.monto - b.monto);
    bodyTable.innerHTML = '';
    mostrarListarTransacciones(listaTransacciones);
}

document.addEventListener('DOMContentLoaded', function() {

    crearSpanBalance(balanceTotal); 
});
