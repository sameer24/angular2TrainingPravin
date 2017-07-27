
import { Customer } from './customer'
import { Order } from './order'
//import { Employee } from './Employee'

export let objCustomer = new Customer();
objCustomer.customerId = '123';
objCustomer.customerName = "Jaya sonje";
objCustomer.address = "Pune";
objCustomer.email = "jaya.sonje@gmail.com";
objCustomer.contactNo = '9890058613';

objCustomer.printCustomer();

export let objOrder = new Order('123');
objOrder.orderId = 3356;
objOrder.orderTotalAmount = 8999;
objOrder.billingAddress = "Pune";
objOrder.billingDate = "03/03/2017";

objOrder.printOrderDetails();

export let objOrderDetails = new OrderDetails(3356);
objOrderDetails.orderDetailsID = 8796;
objOrderDetails.orderDetailsDescription = "Test Test";
objOrderDetails.orderStartDate = "02/02//2017";
objOrderDetails.orderEndDate = "03/03/2018";
objOrderDetails.orderType = "Sample Order Type";
objOrderDetails.orderID = 3356;

objOrderDetails.printOrderDetails();

export let objCategory = new Category();
objCategory.categoryID = 523;
objCategory.categoryType = "Phone";
objCategory.description = "iPhone 7";
objCategory.size = "5";
objCategory.color = "Black";

objCategory.printCategotyDetails();

export let objEmployee = new Employee();
objEmployee.employeeID = 1111;
objEmployee.employeeName = "Test Employee User";
objEmployee.employeeContactNo = 789654552;
objEmployee.address = "Mumbai";
objEmployee.email = "jaya.sonje@gmail.com"

objEmployee.printEmployeeDetails();

export let objeSupplier = new Supplier();
objeSupplier.supplierID = 5698;
objeSupplier.supplierName = "Supplier Name";
objeSupplier.supplierAddress = "Mumbai";
objeSupplier.supplierContactNo = 85697456;
objeSupplier.supplierEmail = "supplier@gmail.com";

objeSupplier.printSupplierDetails();

export let objProduct = new Product(5698, 523)
objProduct.productID = 963256;
objProduct.productName = "Product Name";
objProduct.productAmount = 878000;
objProduct.productExpiryDate = "03/03/2018";
objProduct.productTotalQuantity = "06/06/2017";

objProduct.supplierId = 5698;
objProduct.categoryId = 523;

objProduct.printProductDetails();

console.log('Main class gets printed !!');

