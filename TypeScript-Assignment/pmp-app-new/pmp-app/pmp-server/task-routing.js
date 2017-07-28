const express = require('express');
const routes = express.Router();
let obj = require('./webapi/task');

routes.get('/', (req, res) => {
    let promise = obj.getAll();
    promise.then((data) => {
        res.json(data);
        res.end();
    }, (err) => {
        console.log('Error get all' + err)
    });
});

routes.get('/:id', (req, res) => {
    let id = req.params.id;
    let promise = obj.getSingle(id);
    promise.then((data) => {
        res.json(data);
        res.end();
    }, (err) => {
        console.log('Error get sinngle' + err)
        res.end();
    });
});

routes.post('/', (req, res) => {
    let body = req.body;
    console.log(body);
    let promise = obj.insert(body);
    promise.then((data) => {
        res.json(data);
        res.end();
        console.log('record inserted');
    }, (err) => {
        console.log('error insert ' + err)
        res.end();
    });
});


routes.put('/', (req, res) => {
    let body = req.body;
    console.log(body);
    let promise = obj.update(body);
    promise.then((data) => {
        res.json(data);
        res.end();
        console.log('record updated');
    }, (err) => {
        console.log('error update ' + err)
        res.end();
    });
});


routes.delete('/:id', (req, res) => {
    let id = req.params.id;
    let promise = obj.delete(id);
    promise.then((data) => {
        res.json(data);
        res.end();
        console.log('record deleted');
    }, (err) => {
        console.log('error delete' + err)
        res.end();
    });
});


module.exports = routes;