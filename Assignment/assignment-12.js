console.log('12. Create classes for Customer, Employee, Supplier, Category and Product. Declare properties using get and set construct for Product and Category classes. Print each object information on console.');

//12. Create classes for Customer, Employee, Supplier, Category and Product. 
//Declare properties using get and set construct for Product and Category classes. 
//Print each object information on console.

class Customer{
    constructor(custID,custName,custCity){
        this.custID = custID;
        this.custName = custName;
        this.custCity = custCity;
    }

    getCustID(){
        return this.custID;
    }
    setCustID(custID){
        this.custID = custID;
    }
    getCustName(){
        return this.custName;
    }
    setCustName(custName){
        this.custName = custName;
    }
    getCustCity(){
        return this.custCity;
    }
    setCustCity(custCity){
        this.custCity = custCity;
    }

    printInfo(){
        console.log(`Cust ID ${this.custID} : Cust Name: ${this.custName} : Cust City ${this.custCity}`)
    }
}

class Employee{
    constructor(empID){
        this.empID = empID;
    }

    getEmpID(){
        return this.empID;
    }
    setEmpID(empID){
        this.empID = empID;
    }

    printInfo(){
        console.log(`Employee ID ${this.empID} `)
    }
}

class Supplier{
    constructor(supID){
        this.supID = supID;
    }

    getSupID(){
        return this.supID;
    }
    setSupID(supID){
        this.supID = supID;
    }

     printInfo(){
        console.log(`Supplier ID ${this.supID} `)
    }
}

class Category{
    constructor(catID){
        this.catID = catID;
    }

    getCatID(){
        return this.catID;
    }
    setCatID(catID){
        this.catID = catID;
    }
    printInfo(){
        console.log(`Category ID ${this.catID} `)
    }
}

class Product{
    constructor(prodID){
        this.prodID = prodID;
    }

    getProdID(){
        return this.prodID;
    }
    setProdID(prodID){
        this.prodID = prodID;
    }
    printInfo(){
        console.log(`Product ID ${this.prodID} `)
    }
}

let product = new Product(1000);
product.printInfo();
product.setProdID(5000);
console.log(product.getProdID());

console.log()
let category = new Category(1000);
category.printInfo();
category.setCatID(5000);
console.log(category.getCatID());

console.log()
let supplier = new Supplier(1000);
supplier.printInfo();
supplier.setSupID(5000);
console.log(supplier.getSupID());

console.log()
let employee = new Employee(1000);
employee.printInfo();
employee.setEmpID(5000);
console.log(employee.getEmpID());