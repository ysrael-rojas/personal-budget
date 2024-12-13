function Budget() {
    
    this.transactions = [];
}

Budget.prototype.add = (transaction) => {

    this.transactions.push(transaction);
}

Budget.prototype.remove = (id) => {

    this.transactions = this.transactions.filter( (transaction) => {
        return transaction.id !== id;
    } );
}

Budget.prototype.calculateTotal = () => {


}

Budget.prototype.calculateBalance = () => {

    return this.transacciones.reduce( (total,{ amount }) => {

        return total + amount;

    }, 0);
}

Budget.prototype.formatAmount = () => {

     // Utilizamos el objeto Intl.NumberFormat para formatear el número
     const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    return formatter.format(this.amount);    
}