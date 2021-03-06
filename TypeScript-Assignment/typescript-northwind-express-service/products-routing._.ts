declare function require(name:any);
//declare var require: any;
const express = require("express");
export const productsRoutes = express.Router();
import { Products } from "./webapis/products.api._";
let productsObject = new Products();

//const productsRoutes = express.Router();

productsRoutes.get('/',(req,res)=>{
    let promise = productsObject.getAllProducts();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
productsRoutes.get('/:id', (req, res) => {
    let id = req.params.id
    let promise = productsObject.getSingleProduct(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
productsRoutes.post('/', (req, res) => {
    let Products = req.body;    
    let promise = productsObject.insertProduct(Products);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
productsRoutes.put('/', (req, res) => {    
    let Products = req.body;
    let promise = productsObject.updateProduct(Products);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
productsRoutes.delete('/:id', (req, res) => {
    let id = req.params.id    
    res.send(id);
    let promise = productsObject.deleteProduct(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})