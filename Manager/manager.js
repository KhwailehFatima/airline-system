'use strict'

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000'); 

const { randAddress, randFullName } = require('@ngneat/falso');
const { v4: uuidv4 } = require('uuid');

setInterval(() => {
    const { country, city } = randAddress();
    const details = {
        airline: 'Royal Jordanian Airlines',
        flightID: uuidv4(),
        destination: `${country}, ${city}`,
        pilot: randFullName()
    }
    
    console.log(`Manager: A filght with ID ${details.flightID} has been scheduled`);
    socket.emit('new-flight', details);
    console.log(`Manager: we’re greatly thankful for the amazing flight, ${details.pilot}`)


}, 10000);

socket.on('arrived', (details) => {
    console.log(`Manager: we’re greatly thankful for the amazing flight, ${details.pilot}`)
});