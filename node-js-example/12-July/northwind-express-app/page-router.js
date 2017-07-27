const express = require('express');
const path = require('path')
const pageRoutes = express.Router();

pageRoutes.get('/', (req, res) => {
    //res.send('<h1>Welcome to Express</h1>');
    res.sendFile(path.join(__dirname,"/public/index.html"));
})

pageRoutes.get('/home', (req, res) => {
    //res.send('<h1>Welcome to Express</h1>');
    res.sendFile(path.join(__dirname,"/public/home.html"));
})
pageRoutes.get('/customers', (req, res) => {
    //res.send('<h1>Welcome to Express</h1>');
    res.sendFile(path.join(__dirname,"/public/customers.html"));
})
pageRoutes.get('/products', (req, res) => {
    //res.send('<h1>Welcome to Express</h1>');
    res.sendFile(path.join(__dirname,"/public/products.html"));
})
pageRoutes.get('/suppliers', (req, res) => {
    //res.send('<h1>Welcome to Express</h1>');
    res.sendFile(path.join(__dirname,"/public/suppliers.html"));
})
pageRoutes.get('/categories', (req, res) => {
    //res.send('<h1>Welcome to Express</h1>');
    res.sendFile(path.join(__dirname,"/public/categories.html"));
})
pageRoutes.get('/orders', (req, res) => {
    //res.send('<h1>Welcome to Express</h1>');
    res.sendFile(path.join(__dirname,"/public/orders.html"));
})
pageRoutes.get('/aboutus', (req, res) => {
    //res.send('<h1>Welcome to Express</h1>');
    res.sendFile(path.join(__dirname,"/public/aboutus.html"));
})
pageRoutes.get('/contactus', (req, res) => {
    //res.send('<h1>Welcome to Express</h1>');
    res.sendFile(path.join(__dirname,"/public/contactus.html"));
})
pageRoutes.get('/register', (req, res) => {
    //res.send('<h1>Welcome to Express</h1>');
    res.sendFile(path.join(__dirname,"/public/customer-register.html"));
})

module.exports = pageRoutes;