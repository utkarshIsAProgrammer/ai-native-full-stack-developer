// Practice

function add(a, b) {
  return a + b;
}
console.log(add(5, 9));

function subtract(a, b) {
  return a - b;
}
console.log(subtract(9, 5));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 5));

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }
  return a / b;
}
console.log(divide(10, 5));

function factorial(n) {
  let result = 1;
  let i = 1;

  while (i <= n) {
    result = result * i;
    i = i + 1;
  }

  return result;
}
console.log(factorial(5));
