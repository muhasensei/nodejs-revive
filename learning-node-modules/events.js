const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('anything', data => {
    console.log(data);
});
emitter.emit('anything', {
    message: 'This is anything event',
});
// use the following code to run in cli: 'node learning-node-modules\events'