function calcularBalance(transacciones) {

    return transacciones.reduce((total,{tipoTransaccion, monto}) => {

        return total + monto;

    }, 0);

}

function formatearMonto(monto, moneda = 'USD') {
        
    // Utilizamos el objeto Intl.NumberFormat para formatear el número
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    return formatter.format(monto);
}

function formatearFecha(fecha) {
    const dia = String(fecha.getDate()).padStart(2, '0'); // Aseguramos que el día tenga 2 dígitos
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, así que sumamos 1
    const año = fecha.getFullYear(); // Obtener el año completo

    // Formato de fecha: día/mes/año
    return `${dia}/${mes}/${año}`;
}