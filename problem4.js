// Problem 4 - Private Counter Factory
function createCounter() {
  // this variable is private because it lives inside the function
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    // a getter, so we read it as counter.value (no brackets)
    get value() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value); // 1
console.log(counter.count); // undefined - not directly accessible
