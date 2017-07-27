
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let eventsObject = require('./webapis/events.api')

let eventRoutes = require('./events-routing');

const path = require('path')
let app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/events',eventRoutes)

app.get('/api/events', (req, res) => {
    let promise = eventsObject.getAllevents();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})

app.listen(8055, (err) => {
    if (err) {
        console.log('Error with Server :( ');
    }
    console.log('Server Started on 8055 :) ');
})

app.use(express.static(__dirname + "/public"));