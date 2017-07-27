
import { Customer } from './customer'
import { Order } from './order'
import { Employee } from './Employee'
import { OrderDetails } from './orderDetails'
import { Category } from './category'
import { Product } from './product'
import { Supplier } from './supplier'

export var objCustomer = new Customer();
objCustomer.customerId = '123';
objCustomer.customerName = "Jaya sonje";
objCustomer.address = "Pune";
objCustomer.email = "jaya.sonje@gmail.com";
objCustomer.contactNo = '9890058613';

//Call Customer async function
var custPromise = objCustomer.asyPrintCustomer();
custPromise.then((value) => {
    console.log('Customer object - success');
},
    (reason) => {
        console.log('Not able to find Customer');
    });


export let objOrderDetails = new OrderDetails(3356);
objOrderDetails.orderDetailsID = 8796;
objOrderDetails.orderDetailsDescription = "Test Test";
objOrderDetails.orderStartDate = "02/02//2017";
objOrderDetails.orderEndDate = "03/03/2018";
objOrderDetails.orderType = "Sample Order Type";
objOrderDetails.orderID = 3356;

//Call OrderDetails async function
var oderDetailsPromise = objOrderDetails.asyPrintOrderDetails();
oderDetailsPromise.then((value) => {
    console.log('Order Details object - success');
},
    (reason) => {
        console.log('Not able to find Order Details');
    });


export let objOrder = new Order(123);
objOrder.orderId = 3356;
objOrder.orderTotalAmount = 8999;
objOrder.billingAddress = "Pune";
objOrder.billingDate = "03/03/2017";

//Call Order async function
var orderPromise = objOrder.asyPrintOrder();
orderPromise.then((value) => {
    console.log('Order object - success');
},
    (reason) => {
        console.log('Not able to find Order');
    });


export let objCategory = new Category();
objCategory.categoryID = 523;
objCategory.categoryType = "Phone";
objCategory.description = "iPhone 7";
objCategory.size = "5";
objCategory.color = "Black";

//Call Category async function
var categoryPromise = objCategory.asyPrintCategory();
categoryPromise.then((value) => {
    console.log('Category object - success');
},
    (reason) => {
        console.log('Not able to find Category');
    });

export let objEmployee = new Employee();
objEmployee.employeeID = 1111;
objEmployee.employeeName = "Test Employee User";
objEmployee.employeeContactNo = 789654552;
objEmployee.address = "Mumbai";
objEmployee.email = "jaya.sonje@gmail.com"

//Call Employee async function
var employeePromise = objEmployee.asyPrintEmployee();
employeePromise.then((value) => {
    console.log('Employee object - success');
},
    (reason) => {
        console.log('Not able to find Employee');
    });

export let objProduct = new Product(5698, 523)
objProduct.productID = 963256;
objProduct.productName = "Product Name";
objProduct.productAmount = 878000;
objProduct.productExpiryDate = "03/03/2018";
objProduct.productTotalQuantity = "06/06/2017";

objProduct.supplierId = 5698;
objProduct.categoryId = 523;

//Call Product async function
var productPromise = objEmployee.asyPrintProductDetails();
productPromise.then((value) => {
    console.log('Product object - success');
},
    (reason) => {
        console.log('Not able to find Product');
    });

export let objeSupplier = new Supplier();
objeSupplier.supplierID = 5698;
objeSupplier.supplierName = "Supplier Name";
objeSupplier.supplierAddress = "Mumbai";
objeSupplier.supplierContactNo = 85697456;
objeSupplier.supplierEmail = "supplier@gmail.com";

//Call Supplier async function
var supplierPromise = objEmployee.asyPrintSupplierDetails();
supplierPromise.then((value) => {
    console.log('Supplier object - success');
},
    (reason) => {
        console.log('Not able to find Supplier');
    });

console.log('Main class gets printed !!');

//Pending : display info using REST and SPREAD for multiple records
//also call nested promise.