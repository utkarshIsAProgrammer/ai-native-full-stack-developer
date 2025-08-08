// Conditional Logic

let age = 19;

if (age >= 19) {
  console.log('You can drive.');
} else if (age < 19) {
  console.log('You cannot drive.');
} else {
  console.log('You have to give a driving test.');
}

// Switch Statement
let day = 'Saturday';

switch (day) {
  case 'Monday':
    console.log('Start of the week.');
    break;
  case 'Friday':
    console.log('Almost the weekend! 🎉');
    break;
  default:
    console.log('Just a regular day.');
}

// Ternary Operator
age = 18;
let canVote = age >= 18 ? 'Yes, you can vote.' : 'No, you cannot vote yet.';
console.log(canVote);
