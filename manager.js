'use strict'

const events = require('./events');

require('./pilot');
require('./system');

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
    events.emit('new-flight', details);


}, 10000);

events.on('arrived', (details) => {
    console.log(`Manager: we’re greatly thankful for the amazing flight, ${details.pilot}`)
});