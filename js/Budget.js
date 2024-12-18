function Budget() {
    
    this.transactions = [];
}

Budget.prototype.add = function(transaction) {

    this.transactions.push(transaction);
}

Budget.prototype.remove = function(id) {

    this.transactions = this.transactions.filter( (transaction) => {
        return transaction.id !== id;
    } );
}

Budget.prototype.calculateBalance = function() {

    return this.transactions.reduce( (total, transaction) => {

        return total + transaction.getSignedAmount();

    }, 0);
}
