
//12.	Create classes for Customer, Employee, Supplier, Category and Product.
//Declare properties using get and set construct for Product and Category classes.
// Print each object information on console.

class Customer {
    constructor() {
        this.customerId;
        this.customerName;
    }
}
class Employee {
    constructor() {
        this.employeeID;
        this.employeeName;
    }
}
class Supplier {
    constructor() {
        this.supplierID;
        this.supplierName;
    }
}
class Category {
    constructor() {
        this._categoryID;
        this._categoryType;
    }
    get categoryID(){
        return this._categoryID;
    }
    set categoryID(value){
        this._categoryID = value;
    }
    get categoryType()
    {
        return this._categoryType;
    }
    set categoryType(value){
        this._categoryType = value;
    }

    printCategoryInformation(){
        console.log(`Category Information: 
        Category ID ${this.categoryID}
        Category Type ${this.categoryType}`);
    }
}
class Product {
    constructor() {
        this._productID;
        this._productName;
    }

    get productID(){
        return this._productID;
    }
    set productID(value){
        this._productID = value;
    }

    get productName(){
        return this._productName;
    }

    set productName(value){
        this._productName = value;
    }

printProductInformation(){
    console.log(`Product Information : 
    Product ID ${this.productID}
    Product Name ${this.productName}`);
}
    
}

let objCategory = new Category();
objCategory.categoryID = 123;
objCategory.categoryType="Phone";

let objProduct=new Product();
objProduct.productID = 2365;
objProduct.productName = "iPhone 7";

objCategory.printCategoryInformation(objCategory);
objProduct.printProductInformation(objProduct);


