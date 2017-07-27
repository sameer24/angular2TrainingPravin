console.log('16. Perform inheritance using object extension on Customer and GoldenCustomer class.');

//16. Perform inheritance using object extension on Customer and GoldenCustomer class.


class GoldenCustomer{
    constructor(){
        this.custName;
        this.custAdd;
        this.custCont;
        this.custEmail;
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
        Customer Name : ${this.custName}
        Customer Address : ${this.custAdd}
        Customer ContactNo : ${this.custCont}
        Customer Email : ${this.custEmail} `);
    }
}

let objCustomer = new Customer();
objCustomer.customerId = 1234;
objCustomer.custName = "Sameer";
objCustomer.custAdd = "Pune";
objCustomer.custCont = 45645;
objCustomer.custEmail= "abc@gmail.com";

objCustomer.printCustomerInformation();