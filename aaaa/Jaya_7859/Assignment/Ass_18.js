

//18. Print class name and function name.

class Customer{
    printCustomer(){

    }
}
//Print Class Name
console.log('Class Name : '+ Customer.name);

let cust = new Customer();
//Print function name
console.log('Function Name :' + cust.printCustomer.name);