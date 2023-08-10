// https://leetcode.com/problems/create-hello-world-function
// Q. Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/**
 * @return {Function}
 */

const createHelloWorld = () => {
    const hello = 'Hello World';
    return () => {
        return hello;
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
