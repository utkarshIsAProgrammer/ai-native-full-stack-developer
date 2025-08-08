function checkGrade(score) {
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
}

checkGrade(90);

function labelAgeGroup(age) {
  if (age < 13) {
    console.log(`At age ${age}, you are a Child.`);
  } else if (age >= 13 && age <= 19) {
    console.log(`At age ${age}, you are a Teenager.`);
  } else if (age > 19 && age <= 64) {
    console.log(`At age ${age}, you are an Adult.`);
  } else {
    console.log(`At age ${age}, you are a Senior.`);
  }
}

labelAgeGroup(19);

function calculateEvenOddSum(start, end) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }

  console.log(`In the range from ${start} to ${end}:`);
  console.log(`Sum of even numbers: ${evenSum}`);
  console.log(`Sum of odd numbers: ${oddSum}`);
}

calculateEvenOddSum(1, 10);
