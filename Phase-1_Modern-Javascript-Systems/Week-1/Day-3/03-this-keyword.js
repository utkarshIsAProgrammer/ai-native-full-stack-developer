// this Keyword

const person = {
  name: 'Harry',

  // Regular function, 'this' refers to the person object
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },

  // Arrow function, 'this' is inherited from the global scope (e.g., window)
  sayGoodbye: () => {
    console.log(`Goodbye from ${this.name}`);
  },
};

person.sayHello(); // Output: "Hello, my name is Harry"
person.sayGoodbye(); // Output: "Goodbye from " (or undefined in strict mode)
