const os = require('os');

console.log('OS: ', os.platform());
console.log('Architecture processor:', os.arch());
console.log('Processor info:', os.cpus());
console.log('Free space:', os.freemem());
console.log('Total space:', os.totalmem());

// use the following code to run in cli: 'node learning-node-modules\os'