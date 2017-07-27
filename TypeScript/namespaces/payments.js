"use strict";
exports.__esModule = true;
var PaymentUtility;
(function (PaymentUtility) {
    function cashOnDelivery(orderID, amount) {
        return "Payment for order number" + orderID + '--' + amount;
    }
    PaymentUtility.cashOnDelivery = cashOnDelivery;
    var OnlinePaymentOptions;
    (function (OnlinePaymentOptions) {
        function creditCardPayment(bankname, cardnumber, amount) {
            return "customer made a payment using credit card number " + bankname + " card number " + cardnumber;
        }
        OnlinePaymentOptions.creditCardPayment = creditCardPayment;
    })(OnlinePaymentOptions = PaymentUtility.OnlinePaymentOptions || (PaymentUtility.OnlinePaymentOptions = {}));
})(PaymentUtility = exports.PaymentUtility || (exports.PaymentUtility = {}));
