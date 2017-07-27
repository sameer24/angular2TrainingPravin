"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = (function () {
    function Product(productID, productName, company) {
        this.productID = productID;
        this.productName = productName;
        this.company = company;
    }
    return Product;
}());
exports.Product = Product;
var Customer = (function () {
    function Customer(customerID, customerName, city) {
        this.customerID = customerID;
        this.customerName = customerName;
        this.city = city;
    }
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=product.js.map