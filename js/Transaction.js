function Transaction(type, amount, description) {

    this.id = Date.now();
    this.type = type;
    this.description = description;
    this.amount = amount;
    this.createdDate = new Date();
}

Transaction.prototype.getFormattedDate = () => {
    // Retorna la fecha como String en formato legible
    const dia = String(this.createdDate.getDate()).padStart(2, '0'); // Aseguramos que el día tenga 2 dígitos
    const mes = String(this.createdDate.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, así que sumamos 1
    const año = this.createdDate.getFullYear(); // Obtener el año completo

    // Formato de fecha: día/mes/año
    return `${dia}/${mes}/${año}`;
};

Transaction.prototype.getSignedAmount = () => {
    
    return this.type === '1' ? this.amount : -this.amount;

};