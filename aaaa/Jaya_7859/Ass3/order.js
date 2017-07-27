
export class Order {
    constructor(custID,empId) {
        this.orderId;
        this.orderDescription;
        this.orderTotalAmount;
        this.billingAddress;
        this.billingDate;

        this.customerID = custID;
        this.employeeID = empId;
    }

    //Print Order Details
    printOrder() {
        console.log(`Order Details : Order ID ${this.orderId} Order Description
        ${this.orderDescription} Total Amount ${this.orderTotalAmount}
        Order Billing Address ${this.billingAddress} Order Billing Date ${this.billingDate}
        Customer ID ${this.customerID}
        Employee ID ${this.employeeID}`);
    }

    asyPrintOrder() {
        console.log('Inside async function');

        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.printOrder();
                resolve();
            }, 1000);

        });
        return promise;
    }

}

