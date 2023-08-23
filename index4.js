const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {}

const customEmitter = new CustomEmitter();


function eventHandler() {
  console.log('Event handler has been triggered');
}

// Register the event handler
customEmitter.on('myEvent', eventHandler);

// Trigger the event
customEmitter.emit('myEvent');

// Remove the event handler
customEmitter.off('myEvent', eventHandler);

// Attempt to trigger the removed event
customEmitter.emit('myEvent');
