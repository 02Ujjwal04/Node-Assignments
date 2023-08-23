const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {}

const customEmitter = new CustomEmitter();

// Determine the current maximum number of listeners
const currentMaxListeners = customEmitter.getMaxListeners();
console.log('Current Max Listeners:', currentMaxListeners);

// Set the maximum number of listeners to 51
customEmitter.setMaxListeners(51);

// Add event listeners
for (let i = 1; i <= 60; i++) {
  customEmitter.on('myEvent', () => {
    console.log(`Event handler ${i} has been triggered`);
  });
}

// Emit the event
customEmitter.emit('myEvent');
