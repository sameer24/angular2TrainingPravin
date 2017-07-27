const events = require('events');

let simpleEvent = new events.EventEmitter();

simpleEvent.on('showTime',(msg)=>{
    console.log('Event showTime called'+msg)
});

simpleEvent.emit('showTime','Synechron movie time');