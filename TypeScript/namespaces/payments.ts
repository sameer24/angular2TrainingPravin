export namespace PaymentUtility{
    export function cashOnDelivery(orderID:number,amount:number) {
        return "Payment for order number"+orderID+'--'+amount;
    }
    export namespace OnlinePaymentOptions{
        export function creditCardPayment(bankname:string,cardnumber:number,amount:number){
            return `customer made a payment using credit card number ${bankname} card number ${cardnumber}`
        }
    }
}