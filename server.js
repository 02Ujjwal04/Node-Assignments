const fs = require('fs');

const architectureInfo = `
Node.js Architecture:
Node.js is built on the V8 JavaScript engine and follows an event-driven, non-blocking I/O model.
It uses the CommonJS module system for managing dependencies.
`;

fs.writeFile('nodejs_architecture.txt', architectureInfo, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Information about Node.js architecture written to nodejs_architecture.txt');
  }
});
