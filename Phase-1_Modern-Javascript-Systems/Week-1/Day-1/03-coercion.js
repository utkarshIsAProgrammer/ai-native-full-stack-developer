// Coercion

// + operator

let result = 5 + 3;
console.log(result);

result = 5 + '3';
let anotherResult = 'The answer is ' + 42;
console.log(anotherResult);

// == loose equality check
console.log(5 == '5'); // true
console.log(0 == false); // true
console.log(null == undefined); // true

// === strict equality check
console.log(5 === '5'); //false
console.log(0 === false); //false
console.log(null === undefined); //false
