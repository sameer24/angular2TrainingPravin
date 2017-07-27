//Check how to define complex object e.g in Employee class can we define address class
//Purchse Order Classes

class Customer {
    constructor() {
        this.customerId;
        this.customerName;
        this.address;
        this.email;
        this.contactNo;
    }
    //Print add in each class 
    printCustomer() {
        console.log(`Customer Details : Customer ID ${this.customerId} 
        Customer Name ${this.customerName} Customer Address ${this.address}
        Customer Email ${this.email} Customer ContactNo ${this.contactNo}`);
    }
}

class Order {
    constructor() {
        this.orderId;
        this.orderDescription;
        this.orderTotalAmount;
        this.billingAddress;
        this.billingDate;

        this.orderDetailsID;
        this.employeeID;
    }

    printOrderDetails() {
        console.log(`Order Details : Order ID ${this.orderId} Order Description
        ${this.orderDescription} Total Amount ${this.orderTotalAmount}
        Order Billing Address ${this.billingAddress} Order Billing Date ${this.billingDate}
        Customer ID ${this.customerID}`);
    }
}

class OrderDetails {
    constructor() {
        this.orderDetailsID;
        this.orderDetailsDescription;
        this.orderStartDate;
        this.orderEndDate;
        this.orderType;


    }
    printOrderDetails() {
        console.log(`Order Details : ID ${this.OrderDetails.orderDetailsID} 
         Order Details Description ${this.order.orderDetailsDescription}
         Order Start Date ${this.OrderDetails.orderStartDate} Order End Date
         ${this.OrderDetails.orderEndDate} Order Type ${this.OrderDetails.orderType}`);
    }
}

class Product {
    constructor() {
        this.productID;
        this.productName;
        this.productAmount;
        this.productExpiryDate;
        this.productTotalQuantity;

        this.orderDetailsID;
    }

    printProductDetails() {
        console.log(`Product Details : Product ID ${this.Product.productID} Product Name
     ${this.Product.productName} Product Amount ${this.Product.productAmount}
     Product ExpiryDate ${this.Product.productExpiryDate}
     Product Total Quantity ${this.Product.productTotalQuantity} 
     Supplier ID ${this.supplierId} Category ID ${this.categoryId}`);
    }
}

class Category {
    constructor() {
        this.categoryID;
        this.categoryType;
        this.description;
        this.size;
        this.color;

        this.productID;
    }

    printCategotyDetails() {
        console.log(`Category Details : Category Details ${this.categoryID} Category Type
         Categoty Type ${this.categoryType} Description ${this.description}
         Size ${this.size} Color ${this.color}`);
    }

}

class Employee {
    constructor() {
        this.employeeID;
        this.employeeName;
        this.employeeContactNo;
        this.address;
        this.email;
    }
    printEmployeeDetails() {
        console.log(`Employee Details : Employee ID ${this.employeeID} 
    Employee Name ${this.employeeName} ContactNo ${this.employeeContactNo} 
    Address ${this.address} Email ${this.email} `);
    }
}

class Supplier {
    constructor() {
        this.supplierID;
        this.supplierName;
        this.supplierAddress;
        this.supplierContactNo;
        this.supplierEmail;
    }


    printSupplierDetails() {
        console.log(`Supplier Details : Supplier ID ${this.supplierID} 
    Supplier Name ${this.supplierName}  Supplier Address 
    ${this.supplierAddress} Supplier ContactNo ${this.supplierContactNo} 
    Supplier email ${this.supplierEmail} `);
    }
}


//Pending : Display Data using REST and SPREAD

