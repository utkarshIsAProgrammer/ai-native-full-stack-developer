// Functions

// Function Declaration
function sayHello(name) {
  return `Hello, ${name}!`;
}

console.log(sayHello('Mr. Parker'));

// Hoisting (only in function declaration)
console.log(greet('Mr. Stark'));

function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const sayGoodbye = function (name) {
  return `Goodbye, ${name}!`;
};

console.log(sayGoodbye('Mr. Parker'));
