

export class OrderDetails {
    constructor() {
        this.orderDetailsID;
        this.orderDetailsDescription;
        this.orderStartDate;
        this.orderEndDate;
        this.orderType;
    }

    //Print Order Details
    printOrderDetails(){
         console.log(`Order Details : ID ${this.OrderDetails.orderDetailsID} 
         Order Details Description ${this.order.orderDetailsDescription}
         Order Start Date ${this.OrderDetails.orderStartDate} Order End Date
         ${this.OrderDetails.orderEndDate} Order Type ${this.OrderDetails.orderType}`);
    }
}