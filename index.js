// const fs = require('fs');

// // Read the content of nodejs_architecture.txt
// fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//   } else {
//     console.log('Content of nodejs_architecture.txt:\n', data);
//   }
// });

// ####################################################################################################################


// const fs = require('fs');

// const advantages = `
// Advantages of Node.js:
// - Non-blocking and asynchronous: Node.js uses an event-driven, non-blocking I/O model for high concurrency and efficiency.
// - Fast execution: Node.js is built on the V8 engine, which compiles JavaScript to machine code for speedy execution.
// - Single programming language: You can use JavaScript both on the client side and the server side, which reduces the need for context switching.
// - Large package ecosystem: Node.js has a vast collection of open-source libraries and modules available through npm (Node Package Manager).
// `;


// fs.appendFile('nodejs_architecture.txt', advantages, (err) => {
//   if (err) {
//     console.error('Error appending to file:', err);
//   } else {
//     console.log('Advantages added to nodejs_architecture.txt');

//     // Read the updated content and print it to the console
//     fs.readFile('nodejs_architecture.txt', 'utf8', (readErr, data) => {
//       if (readErr) {
//         console.error('Error reading file:', readErr);
//       } else {
//         console.log('Updated content of nodejs_architecture.txt:\n', data);
//       }
//     });
//   }
// });

// ####################################################################################################################

// const fs = require('fs');

// // Delete the nodejs_architecture.txt file
// fs.unlink('nodejs_architecture.txt', (err) => {
//   if (err) {
//     console.error('Error deleting file:', err);
//   } else {
//     console.log('File Deleted Successfully');
//   }
// });
