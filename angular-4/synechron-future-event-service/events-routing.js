const express = require('express');
let eventsObject = require('./webapis/events.api');

const eventsRoutes = express.Router();

eventsRoutes.get('/',(req,res)=>{    
    let promise = eventsObject.getAllEvents();
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
eventsRoutes.get('/:id', (req, res) => {
    let id = req.params.id
    let promise = eventsObject.getSingleEvent(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
eventsRoutes.post('/', (req, res) => {
    let events = req.body;    
    let promise = eventsObject.insertEvent(events);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
eventsRoutes.put('/', (req, res) => {
    let events = req.body;
    let promise = eventsObject.updateEvent(events);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})
eventsRoutes.delete('/:id', (req, res) => {
    let id = req.params.id
    let promise = eventsObject.deleteEvent(id);
    promise.then((data) => {
        res.json(data);
    }, (reasone) => {
        res.send(reasone);
    })
})

module.exports = eventsRoutes;