'use strict'

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
    socket.on('new-flight', (details) => {
        io.emit('new-flight', details);
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

    socket.on('arrived', (details) => {
        io.emit('arrived', details);
        console.log(`Flight {
                event: 'arrived',
                time:   ${new Date().toLocaleDateString()},  ${new Date().toLocaleTimeString()},
                Details: {
                    airLine: ${details.airline},
                    destination: ${details.destination},
                    pilot: ${details.pilot},
                    flightID: ${details.flightID}
        }`)
    })
})


const io_airline = io.of('/airline');

io_airline.on('connection', (socket) => {
    socket.on('took-off', (details) => {
        console.log(`Flight {
                event: 'took-off',
                time:  ${new Date().toLocaleDateString()},  ${new Date().toLocaleTimeString()},
                Details: {
                    airLine: ${details.airline},
                    destination: ${details.destination},
                    pilot: ${details.pilot},
                    flightID: ${details.flightID}
            
        `)
    })
})
