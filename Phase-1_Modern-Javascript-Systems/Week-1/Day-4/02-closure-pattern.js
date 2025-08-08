// Closure Pattern

function makeGreeter(greeting) {
  // 'greeting' is a variable in the outer scope
  return function (name) {
    // The returned function 'closes over' the 'greeting' variable
    console.log(`${greeting}, ${name}!`);
  };
}

// create a greeter function with the greeting "Hello"
const sayHello = makeGreeter('Hello');

// create another greeter with the greeting "Hola"
const sayHola = makeGreeter('Hola');

sayHello('Mr. Stark');
sayHola('Mr. Parker');
