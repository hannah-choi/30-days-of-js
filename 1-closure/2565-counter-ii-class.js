// https://leetcode.com/problems/counter-ii

// solution
class Counter {
    constructor(init) {
        this.init = init;
        this.current = init;
    }

    increment() {
        return ++this.current;
    }

    decrement() {
        return --this.current;
    }

    reset() {
        this.current = this.init;
        return this.current;
    }
}

const createCounter = (init) => {
    return new Counter(init);
};

// test
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
