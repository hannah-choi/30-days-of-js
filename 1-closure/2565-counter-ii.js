// https://leetcode.com/problems/counter-ii

// solution
const createCounter = function (init) {
    let currentValue = init;
    return {
        increment: () => ++currentValue,
        decrement: () => --currentValue,
        reset: () => (currentValue = init)
    };
};

// test
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
