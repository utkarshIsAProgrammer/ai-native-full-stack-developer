// Grade Checker

let score = 90;

if (score >= 90) {
  console.log(`With a score of ${score}, your grade is an A.`);
} else if (score >= 80) {
  console.log(`With a score of ${score}, your grade is a B.`);
} else if (score >= 70) {
  console.log(`With a score of ${score}, your grade is a C.`);
} else if (score >= 60) {
  console.log(`With a score of ${score}, your grade is a D.`);
} else {
  console.log(`With a score of ${score}, your grade is an F.`);
}

// Age Group Labeler
let age = 19;
if (age < 13) {
  console.log(`At age ${age}, you are a Child.`);
} else if (age >= 13 && age <= 19) {
  console.log(`At age ${age}, you are a Teenager.`);
} else if (age > 19 && age <= 64) {
  console.log(`At age ${age}, you are an Adult.`);
} else {
  console.log(`At age ${age}, you are a Senior.`);
}

// Even Odd Sum
let start = 1;
let end = 10;

let evenSum = 0;
let oddSum = 0;

// Loop through each number in the range
for (let i = start; i <= end; i++) {
  // Check if the number is even using the modulo operator (%)
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log(`In the range from ${start} to ${end}:`);
console.log(`Sum of even numbers: ${evenSum}`);
console.log(`Sum of odd numbers: ${oddSum}`);
