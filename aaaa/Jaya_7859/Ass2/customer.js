

console.log('Customer Module Started!');

export class Customer {
    constructor() {
        this.customerId;
        this.customerName;
        this.address;
        this.email;
        this.contactNo;        
    }

    //Print Customer Details
    printCustomer() {
        console.log(`Customer Details : Customer ID ${this.customerId} 
        Customer Name ${this.customerName} Customer Address ${this.address}
        Customer Email ${this.email} Customer ContactNo ${this.contactNo}`);
    }
}

console.log('Customer Module Ended!');