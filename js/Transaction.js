function Transaction(type, amount) {

    this.id = Date.now();
    this.type = type;
    this.amount = amount;
    this.createdDate = new Date();
}

Transaction.prototype.getFormattedDate = function() {
    
    return this.createdDate.toLocaleDateString();
};

Transaction.prototype.getSignedAmount = function() {
    
    return this.type === '1' ? this.amount : -this.amount;

};

Transaction.prototype.formatAmount = function(amount) {

    // Utilizamos el objeto Intl.NumberFormat para formatear el número
    const formatter = new Intl.NumberFormat('en-US', {
       style: 'currency',
       currency: 'USD',
       minimumFractionDigits: 2,
       maximumFractionDigits: 2
   });
   
   return formatter.format(amount);    
}

Transaction.prototype.getFormattedSignedAmount = function() {
    
    const signedAmount = this.getSignedAmount();
    return this.formatAmount(signedAmount);
}