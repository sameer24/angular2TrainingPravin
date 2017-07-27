console.log('5. Declare variables which will hold the information about a customer. Declare a JavaScript object which will set the values of the object properties from the above declared variables. Print the object values using template literals.');

//5. Declare variables which will hold the information about a customer. 
//Declare a JavaScript object which will set the values of the object properties from 
//the above declared variables. Print the object values using template literals.

class customer{
    constructor(id,name,city){
        this.id=id;
        this.name=name;
        this.city=city;
    }

    setCustomerName(name){
        this.name = name;
    }
    getCustomerName(){
        return this.name;
    }
}

var cust = new customer(10,'Sameer','Pune');
console.log(cust);

cust.setCustomerName('Santosh');
console.log(cust);