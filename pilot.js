'use strict'

const events = require('./events');

require('./manager');
require('./system');

events.on('new-flight', (details)=>{
    setInterval(() => {
        events.emit('took-off', details);
        console.log(`Pilot: took-off flight with ID ${details.flightID}`);

    },4000);
    setInterval(() => {
       events.emit('arrived', details)
        console.log(`Pilot: Flight with ID ${details.flightID} is arrived`)
    }, 7000);
})

