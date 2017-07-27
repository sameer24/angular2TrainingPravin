declare function require(name:any);
//declare var require: any;
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

import { Suppliers } from "./webapis/suppliers.api._";
import { Categories } from "./webapis/categories.api._";
import { Products } from "./webapis/products.api._";
import { Orders } from "./webapis/orders.api._";
import { Customer } from "./webapis/customers.api._";

let categoriesObject = new Categories();
let suppliersObject = new Suppliers();
let productsObject = new Products();
let ordersObject = new Orders();
let customerObject = new Customer();

import { customerRoutes } from "./customers-routing._";
import { orderRoutes  } from "./orders-routing._";
import { productsRoutes  } from "./products-routing._";
import { suppliersRoutes  } from "./suppliers-routing._";
import { categoriesRoutes } from "./categories-routing._";

//let customerRoutes1 = new CustRoute();
//let orderRoutes = new OrdRoute();
//let productRoutes = new ProdRoute();
//let supplierRoutes =new SuppRoute();
//let categorieRoutes = new CatRoute();

const path = require('path')
let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/customers',customerRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/products',productsRoutes)
app.use('/api/suppliers',suppliersRoutes)
app.use('/api/categories',categoriesRoutes)

app.get('/api/customers', (req, res) => {
    let promise = customerObject.getAllCustomers();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})

app.get('/api/categories', (req, res) => {
    let promise = categoriesObject.getAllCategories();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
app.get('/api/suppliers', (req, res) => {
    let promise = suppliersObject.getAllSuppliers();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
app.get('/api/products', (req, res) => {
    let promise = productsObject.getAllProducts();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})


app.listen(8001, (err) => {
    if (err) {
        console.log('Error with Server :( ');
    }
    console.log('Server Started on 8001 :) ');
})


app.use(express.static(__dirname + "/public"));