// https://leetcode.com/problems/apply-transform-over-each-element-in-array

// solution
const map = (arr, fn) => {
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2[i] = fn(arr[i], i);
    }
    return arr2;
};

// test
console.log(
    map([1, 2, 3], function plusone(n) {
        return n + 1;
    })
); //[2,3,4]

console.log(
    map(
        [1, 2, 3],
        (fn = function plusI(n, i) {
            return n + i;
        })
    )
); //[1,3,5]

console.log(
    map([10, 20, 30], function constant() {
        return 42;
    })
); //[42,42,42]
