import {EventEmitter} from 'events'

const myEmitter = new EventEmitter()

function greetHandler(name) {
    console.log('Hello ' + name)
}

function goodbyeHandler(name) {
    console.log('Goodbye ' + name)
}

//register event listeners
myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodbyeHandler)

//emit events
myEmitter.emit('greet', 'John')
myEmitter.emit('goodbye', 'John')

//error events
myEmitter.on('error', (err) => {
    console.log('An error occured!', err)
})

//error simulation
myEmitter.emit('error', new Error('Something went wrong!'))