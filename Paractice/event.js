const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
    console.log("Event Emitted!")
})

customEmitter.emit('response')