// Global Scope
const greeting = 'Hello from the global scope!';

function greetGlobally() {
  console.log(greeting);
}

greetGlobally();
console.log(greeting);

// Block Scope
let count = 0;

if (true) {
  let message = 'This is a block-scoped message.';

  console.log(message);
}

// console.log(message); // This would cause a ReferenceError
console.log(count);

// Function Scope
function showName() {
  var userName = 'Mr. Parker';
  console.log(userName);
}

showName();
// console.log(userName); // This would cause a ReferenceError
