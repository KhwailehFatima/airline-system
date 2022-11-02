'use strict'

const io=require('socket.io-client');
const airlineSocket=io.connect('http://localhost:3000/airline');
const prevSocket=io.connect('http://localhost:3000')

prevSocket.on('new-flight', (details)=>{
    setTimeout(() => {
        airlineSocket.emit('took-off', details);
        console.log(`Pilot: took-off flight with ID ${details.flightID}`);

    },4000);
    setTimeout(() => {
       airlineSocket.emit('arrived', details)
        console.log(`Pilot: Flight with ID ${details.flightID} is arrived`)
    }, 7000);
})

