// Arrow Functions

// No Parameter
const sayHello = () => {
  console.log('Hello!');
};
sayHello();

// One Parameter
const greet = name => {
  console.log(`Hello, ${name}!`);
};
greet('Mr. Parker');

// Multiple Parameter
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 9));

// Explicit return
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(5, 7));

// Implicit return
const multiplyImplicit = (a, b) => a * b;
console.log(multiplyImplicit(2, 3));
