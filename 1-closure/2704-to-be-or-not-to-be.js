// https://leetcode.com/problems/to-be-or-not-to-be/
// Q. Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

/**
 * @param {string} val
 * @return {Object}
 */

// solution
const expect = (val) => {
    return {
        toBe: (value) => {
            if (val === value) return true;
            throw new Error('Not Equal');
        },
        notToBe: (value) => {
            if (val !== value) return true;
            throw new Error('Equal');
        }
    };
};

// test
console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
