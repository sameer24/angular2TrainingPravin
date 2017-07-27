"use strict";
exports.__esModule = true;
var payments_1 = require("./payments");
console.log(payments_1.PaymentUtility.cashOnDelivery(123, 12));
console.log(payments_1.PaymentUtility.OnlinePaymentOptions.creditCardPayment('ICIC', 200, 300));
