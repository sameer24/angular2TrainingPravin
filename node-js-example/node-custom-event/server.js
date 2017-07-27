const events = require('events');
const util = require('util')

let Person=require('./person')

util.inherits(Person,events.EventEmitter);

let p1 = new Person('P1 Name','P1 City');
let p2 = new Person('P2 Name','P2 City');
let p3 = new Person('P3 Name','P3 City');

let people=[p1,p2,p3];

people.forEach((person)=>{
    person.on('travelling',(city)=>{
        console.log(`Person ${person.contactName} who lives in city ${person.city} is travelling to city ${city}`);
    })
})

p1.emit('travelling','Pune');