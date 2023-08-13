// https://leetcode.com/problems/create-hello-world-function
// Q. Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/**
 * @return {Function}
 */

// solution
const createHelloWorld = () => {
    const hello = 'Hello World';
    return () => {
        return hello;
    };
};

// test
const f = createHelloWorld();
console.log(f()); // "Hello World"
