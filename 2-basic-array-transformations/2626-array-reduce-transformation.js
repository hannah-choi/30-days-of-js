// https://leetcode.com/problems/array-reduce-transformation

// solution
const reduce = (nums, fn, init) => {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};

// test
console.log(
    reduce(
        [1, 2, 3, 4],
        function sum(accum, curr) {
            return accum + curr;
        },
        0
    )
); //10

console.log(
    reduce(
        [1, 2, 3, 4],
        function sum(accum, curr) {
            return accum + curr * curr;
        },
        100
    )
); //130

console.log(
    reduce(
        [],
        function sum(accum, curr) {
            return accum + curr * curr;
        },
        25
    )
); //25
