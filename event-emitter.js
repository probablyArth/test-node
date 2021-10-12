const eventEmitter = require('events');
const customEmitter = new eventEmitter()


customEmitter.on('response', ()=> {
    console.log(`data recieved`)
})

customEmitter.emit('response')

customEmitter.on('response', ()=> {
    console.log(`some other logic`)
})


