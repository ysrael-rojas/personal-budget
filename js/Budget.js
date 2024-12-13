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