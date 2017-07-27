
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let categoriesObject = require('./webapis/categories.api')
let suppliersObject = require('./webapis/suppliers.api')
let productsObject = require('./webapis/products.api')
let ordersObject = require('./webapis/orders.api')

let customerRoutes = require('./customers-routing');
let orderRoutes = require('./orders-routing');
let productRoutes = require('./products-routing');
let supplierRoutes = require('./suppliers-routing');
let categorieRoutes = require('./categories-routing');

const path = require('path')
let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/customers',customerRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/products',productRoutes)
app.use('/api/suppliers',supplierRoutes)
app.use('/api/categories',categorieRoutes)

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