// Closure Based Counter

function createCounter() {
  let count = 0; // This variable is enclosed

  return {
    increment: function () {
      count++;
      console.log(`Count after increment: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(`Count after decrement: ${count}`);
    },
    reset: function () {
      count = 0;
      console.log('Counter reset to 0');
    },
    getCount: function () {
      console.log(`Current count: ${count}`);
      return count;
    },
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.getCount();
counter.decrement();
counter.reset();
