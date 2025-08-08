// Loops

// For Loop
for (let i = 1; i < 6; i++) {
  console.log(i);
}
console.log();

// While Loop
let j = 1;
while (j < 6) {
  console.log(j);
  j++;
}
console.log();

// Do While Loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k < 6);
console.log();

// For Of Loop
for (let letter of 'Javascript') {
  console.log(letter);
}
console.log();

// For In Loop
const PERSON = { name: 'Hella', role: 'Programmer' };
for (let key in PERSON) {
  console.log(key, '=', PERSON[key]);
}
