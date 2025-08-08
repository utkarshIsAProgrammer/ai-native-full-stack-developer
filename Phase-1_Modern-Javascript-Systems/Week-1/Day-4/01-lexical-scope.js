// Lexical Scope / Static Scope

let globalVar = 'I am a global variable.';

function outerFunction() {
  let outerVar = 'I am an outer variable.';

  function innerFunction() {
    let innerVar = 'I am an inner variable.';

    // innerFunction can access its own, its parent's, and the global scope's variables.
    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar);
  }

  innerFunction();

  console.log(outerVar);
  // console.log(innerVar); // This would cause a ReferenceError
}

outerFunction();
