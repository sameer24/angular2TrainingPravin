
export class Order {
    constructor(custID) {
        this.orderId;
        this.orderDescription;
        this.orderTotalAmount;
        this.billingAddress;
        this.billingDate;

        this.customerID = custID;
        this.employeeID;
    }

    //Print Order Details
        printOrderDetails() {
        console.log(`Order Details : Order ID ${this.orderId} Order Description
        ${this.orderDescription} Total Amount ${this.orderTotalAmount}
        Order Billing Address ${this.billingAddress} Order Billing Date ${this.billingDate}
        Customer ID ${this.customerID}`);
    }

}

