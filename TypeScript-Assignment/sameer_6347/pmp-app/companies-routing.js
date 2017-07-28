const express = require('express');
const companyRoutes = express.Router();
let companyObject = require('./web-apis/companies-api');
companyRoutes.get("/", (req, res) => {
    companyObject.getAllCompanies().then((docs) => {
        res.write(docs);
        res.end();
    }, (err) => {
        console.log('The promise was rejected', err, err.stack);
    });
});

companyRoutes.get("/:id", (req, res) => {
    let id = req.params.id;
    companyObject.getSingleCompany(id).then((docs) => {
        res.write(docs);
        res.end();
    }, (err) => {
        console.log('The promise was rejected', err, err.stack);
    });
});

companyRoutes.post("/", (req, res) => {
    let company = req.body;
    companyObject.insertCompany(company).then((docs) => {
        res.write(docs);
        res.end();
    }, (err) => {
        console.log('The promise was rejected', err, err.stack);
    });
});


companyRoutes.put("/", (req, res) => {
    let company = req.body;
    companyObject.updateCompany(company).then((docs) => {
        res.write(docs);
        res.end();
    }, (err) => {
        console.log('The promise was rejected', err, err.stack);
    });
});


companyRoutes.delete("/:id", (req, res) => {
    let id = req.params.id;
    companyObject.deleteCompany(id).then((data) => {
        res.write(data);
        res.end();
    }, (err) => {
        console.log('The promise was rejected', err, err.stack);
    });
});

module.exports = companyRoutes;