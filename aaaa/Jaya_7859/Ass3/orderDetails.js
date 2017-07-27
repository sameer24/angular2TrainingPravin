

export class OrderDetails {
    constructor(oID) {
        this.orderDetailsID;
        this.orderDetailsDescription;
        this.orderStartDate;
        this.orderEndDate;
        this.orderType;
        this.orderID = oID;
    }

    //Print Order Details
    printOrderDetails(){
         console.log(`Order Details : ID ${this.OrderDetails.orderDetailsID} 
         Order Details Description ${this.order.orderDetailsDescription}
         Order Start Date ${this.OrderDetails.orderStartDate} Order End Date
         ${this.OrderDetails.orderEndDate} Order Type ${this.OrderDetails.orderType}
         Order ID ${this.orderID}`);
    }

    asyPrintOrderDetails() {
        console.log('Inside async function');

        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.printOrderDetails();
                resolve();
            }, 1000);

        });
        return promise;
    }
}