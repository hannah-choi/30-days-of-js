// https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
// Q. Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */

// solution
const createCounter = (n) => {
    return () => n++;
};

// test
const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
