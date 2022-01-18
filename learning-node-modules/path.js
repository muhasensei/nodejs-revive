const path = require('path');
console.log('This is learning path module');
console.log('Basename:', path.basename(__filename));
console.log('Directory:', path.dirname(__filename));
console.log('Parse:', path.parse(__filename));
console.log('Path to newly created file: ', path.join(__dirname, 'server', 'index.html'));

// use the following code to run in cli: 'node learning-node-modules\path'