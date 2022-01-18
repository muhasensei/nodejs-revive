const fs = require('fs'); // File System
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log('Folder created!');
// });

const filePath = path.join(__dirname, 'test', 'test.txt');
// fs.writeFile(filePath, 'Is written with Node js', (error) => {
//   if (error) {
//       throw error;
//   }
//
//   fs.appendFile(filePath, '\nAdded text', (error) => {
//       if (error) {
//           throw error;
//       }
//       console.log('File updated!');
//
//   });
//
//   console.log('File created!');
// });


fs.readFile(filePath, 'utf-8', (error, content) => {
    if (error) {
        throw error;
    }
    console.log(content);
})
// use the following code to run in cli: 'node learning-node-modules\fs'