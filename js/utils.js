function calcularBalance(transacciones) {

    return transacciones.reduce((total,transaccion) => {

        let monto = 0;

        if (transaccion.tipoTransaccion === 1) {
            monto = transaccion.monto;
        } else {
            monto = transaccion.monto*(-1);
        }

        return total + monto;

    }, 0);

}