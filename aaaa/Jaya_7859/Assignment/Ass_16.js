//16.	Perform inheritance using object extension on Customer and GoldenCustomer class.

class GoldenCustomer{
    constructor(){
        this.customerName;
        this.customerAddress;
        this.customerContactNo;
        this.customerEmailId;
    }
}

class Customer extends GoldenCustomer{
    constructor(){
        super(); //base class constructor
        this.customerId;
    }

    printCustomerInformation(){
        console.log(`Customer Information : 
        Customer ID : ${this.customerId}
        Customer Name : ${this.customerName}
        Customer Address : ${this.customerAddress}
        Customer ContactNo : ${this.customerContactNo}
        Customer Email : ${this.customerEmailId} `);
    }
}

let objCustomer = new Customer();
objCustomer.customerId = 9634;
objCustomer.customerName = "Jaya Sonje";
objCustomer.customerAddress = "Pune";
objCustomer.customerContactNo = 1236547896;
objCustomer.customerEmailId= "jaya.sonje@gmail.com";

objCustomer.printCustomerInformation();