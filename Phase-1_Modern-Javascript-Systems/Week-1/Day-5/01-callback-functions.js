// Callback

// Synchronous Callback
function performAction(callback) {
  console.log('1. Performing a simple action.');
  // Now, call the callback function that was passed in.
  callback();
}
// This is the callback function
function finishAction() {
  console.log('2. The action is finished. The callback was executed!');
}
// Pass 'finishAction' as an argument to 'performAction'.
performAction(finishAction);

// Asynchronous Callback
function fetchData(callback) {
  console.log('1. Fetching data from a server...');

  // Simulate an asynchronous operation with setTimeout.
  setTimeout(() => {
    const data = { id: 1, name: 'Tony Stark' };
    console.log('2. Data received.');

    // Once the data is ready, call the callback with the data.
    callback(data);
  }, 2000); // Wait 2 seconds
}

// This is the callback function that processes the data
function processData(receivedData) {
  console.log(`3. Processing received data: ${receivedData.name}`);
}

// Pass 'processData' as a callback to 'fetchData'.
fetchData(processData);
