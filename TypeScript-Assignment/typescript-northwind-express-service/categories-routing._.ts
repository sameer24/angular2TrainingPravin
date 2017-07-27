declare function require(name:any);
//declare var require: any;
const express = require("express");
export const categoriesRoutes = express.Router();

import { Categories } from "./webapis/categories.api._";
let categoryObject = new Categories();

categoriesRoutes.get('/',(req,res)=>{
    let promise = categoryObject.getAllCategories();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
categoriesRoutes.get('/:id', (req, res) => {
    let id = req.params.id
    let promise = categoryObject.getSingleCategorie(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
categoriesRoutes.post('/', (req, res) => {
    let categories = req.body;    
    let promise = categoryObject.insertCategorie(categories);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
categoriesRoutes.put('/', (req, res) => {
    let categories = req.body;
    let promise = categoryObject.updateCategorie(categories);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
categoriesRoutes.delete('/:id', (req, res) => {
    let id = req.params.id
    let promise = categoryObject.deleteCategorie(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})

//module.exports = categoriesRoutes;