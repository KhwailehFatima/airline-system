'use strict'

const events = require('./events');

require('./manager');
require('./pilot');

events.on('new-flight', (details) => {
    console.log(`Flight {
    event: 'new-flight',
    time:  ${new Date().toLocaleDateString()},  ${new Date().toLocaleTimeString()},
    Details: {
    airLine: ${details.airline},
    destination: ${details.destination},
    pilot: ${details.pilot},
    flightID: ${details.flightID}
}`)
})

events.on('took-off', (details) => {
    console.log(`Flight {
        event: 'took_off',
        time:   ${new Date().toLocaleDateString()},  ${new Date().toLocaleTimeString()},
        Details: {
        airLine: ${details.airline},
        destination: ${details.destination},
        pilot: ${details.pilot},
        flightID: ${details.flightID}
    }`)
})

events.on('arrived', (details) => {
    console.log(`Flight {
        event: 'arrived',
        time:  ${new Date().toLocaleDateString()},  ${new Date().toLocaleTimeString()},
        Details: {
        airLine: ${details.airline},
        destination: ${details.destination},
        pilot: ${details.pilot},
        flightID: ${details.flightID}
    }`)
})
