class PaymentProcessor {
constructor() {
this.gateway = null;
// Work in progress - not complete
}
}
class PaymentProcessor {
constructor(gateway) {
this.gateway = gateway;
}
processPayment(amount) {
console.log(`Processing payment of ${amount}`);
return true;
}
}
module.exports = PaymentProcessor;