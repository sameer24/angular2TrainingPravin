const express = require('express');
let categoriesObject = require('./webapis/categories.api');

const categoriesRoutes = express.Router();

categoriesRoutes.get('/',(req,res)=>{
    let promise = categoriesObject.getAllCategories();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
categoriesRoutes.get('/:id', (req, res) => {
    let id = req.params.id
    let promise = categoriesObject.getSingleCategorie(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
categoriesRoutes.post('/', (req, res) => {
    let categories = req.body;    
    let promise = categoriesObject.insertCategorie(categories);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
categoriesRoutes.put('/', (req, res) => {
    let categories = req.body;
    let promise = categoriesObject.updateCategorie(categories);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
categoriesRoutes.delete('/:id', (req, res) => {
    let id = req.params.id
    let promise = categoriesObject.deleteCategorie(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})

module.exports = categoriesRoutes;