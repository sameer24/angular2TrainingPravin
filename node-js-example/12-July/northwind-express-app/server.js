const express = require('express');
const path = require('path')
let app = express();
let router = require('./page-router')

app.use(express.static(__dirname+"/public"));

app.use('/',router);



app.listen(7001, (err) => {
    if (err) {
        console.log('Error with Server :( ');
    }
    console.log('Server Started :) ');
})