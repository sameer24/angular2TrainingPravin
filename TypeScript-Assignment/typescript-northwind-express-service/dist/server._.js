"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//declare var require: any;
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const suppliers_api__1 = require("./webapis/suppliers.api._");
const categories_api__1 = require("./webapis/categories.api._");
const products_api__1 = require("./webapis/products.api._");
const orders_api__1 = require("./webapis/orders.api._");
const customers_api__1 = require("./webapis/customers.api._");
let categoriesObject = new categories_api__1.Categories();
let suppliersObject = new suppliers_api__1.Suppliers();
let productsObject = new products_api__1.Products();
let ordersObject = new orders_api__1.Orders();
let customerObject = new customers_api__1.Customer();
const customers_routing__1 = require("./customers-routing._");
const orders_routing__1 = require("./orders-routing._");
const products_routing__1 = require("./products-routing._");
const suppliers_routing__1 = require("./suppliers-routing._");
const categories_routing__1 = require("./categories-routing._");
//let customerRoutes1 = new CustRoute();
//let orderRoutes = new OrdRoute();
//let productRoutes = new ProdRoute();
//let supplierRoutes =new SuppRoute();
//let categorieRoutes = new CatRoute();
const path = require('path');
let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/customers', customers_routing__1.customerRoutes);
app.use('/api/orders', orders_routing__1.orderRoutes);
app.use('/api/products', products_routing__1.productsRoutes);
app.use('/api/suppliers', suppliers_routing__1.suppliersRoutes);
app.use('/api/categories', categories_routing__1.categoriesRoutes);
app.get('/api/customers', (req, res) => {
    let promise = customerObject.getAllCustomers();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
app.get('/api/categories', (req, res) => {
    let promise = categoriesObject.getAllCategories();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
app.get('/api/suppliers', (req, res) => {
    let promise = suppliersObject.getAllSuppliers();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
app.get('/api/products', (req, res) => {
    let promise = productsObject.getAllProducts();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    });
});
app.listen(8001, (err) => {
    if (err) {
        console.log('Error with Server :( ');
    }
    console.log('Server Started on 8001 :) ');
});
app.use(express.static(__dirname + "/public"));
//# sourceMappingURL=server._.js.map