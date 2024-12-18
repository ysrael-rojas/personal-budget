// Seleccionamos el formulario por su ID
const form = document.getElementById('presupuestoForm');
const bodyTable = document.getElementById('tableBody');
const areaBalance = document.getElementById('presupuestoBalance');

const listaTransacciones = new Budget();
let balanceTotal = 0;

form.addEventListener('submit', function(event) {
  
  event.preventDefault();

  const monto = Number(document.getElementById('inputMonto').value);
  const tipoTransaccion = document.getElementById('inputTipoTransaccion').value;

  const transaction = new Transaction(tipoTransaccion,monto);

  listaTransacciones.add(transaction);
  
  console.log(transaction.formatAmount());

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

    listaTransacciones.transactions.forEach((transaction) => {
        const nuevaFila = document.createElement("tr");
        nuevaFila.innerHTML = `
        <th>${index}</th>
        <td>${transaction.getFormattedDate()}</td>
        <td>${transaction.type === '1'? 'INGRESO':'GASTO'}</td>
        <td>${transaction.getFormattedSignedAmount()}</td>
        `;
        bodyTable.appendChild(nuevaFila);
        index++;
    });
}

function ordenarTransacciones() {

    listaTransacciones.sort((a,b) => a.monto - b.monto);
    bodyTable.innerHTML = '';
    mostrarListarTransacciones(listaTransacciones);
}

document.addEventListener('DOMContentLoaded', function() {

    crearSpanBalance(balanceTotal); 
});
