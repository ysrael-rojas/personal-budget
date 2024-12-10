// Seleccionamos el formulario por su ID
const form = document.getElementById('presupuestoForm');
const bodyTable = document.getElementById('tableBody');

const listaTransacciones = [];
let balanceTotal = 0;

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
 bodyTable.innerHTML = '';
 mostrarListarTransacciones(listaTransacciones);

});

function mostrarListarTransacciones(listaTransacciones) {

    let index = 1;    
    
    for (const transaccion of listaTransacciones) {

        const nuevaFila = document.createElement("tr");
        let colorFila = transaccion.tipoTransaccion === '1'? 'class="table-success"': 'class="table-danger"';
        let tipo = transaccion.tipoTransaccion === '1'? 'INGRESO':'GASTO';

        nuevaFila.innerHTML = `
        <th ${colorFila}>${index}</th>
        <td ${colorFila}>${formatoFecha(transaccion.fecha)}</td>
        <td ${colorFila}>${tipo}</td>
        <td class="col-monto" ${colorFila}>${transaccion.monto}</td>
        `;
        bodyTable.appendChild(nuevaFila);
        index++;
      }
}

function formatoFecha(fecha) {
    const dia = String(fecha.getDate()).padStart(2, '0'); // Aseguramos que el día tenga 2 dígitos
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, así que sumamos 1
    const año = fecha.getFullYear(); // Obtener el año completo

    // Formato de fecha: día/mes/año
    return `${dia}/${mes}/${año}`;
}

function ordenarTransacciones() {

    listaTransacciones.sort((a,b) => a.monto - b.monto);
    bodyTable.innerHTML = '';
    mostrarListarTransacciones(listaTransacciones);
}
