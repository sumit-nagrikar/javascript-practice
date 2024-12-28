/* Challenge 1: Multiply All Numbers
Write a reduce function that multiplies all numbers in an array.

Input: [1, 2, 3, 4]
Output: 24 (since 1 * 2 * 3 * 4 = 24) */

var reduce = function (init, array, fn) {
  if (array.length === 0) return init;
  let result = init;
  for (let i = 0; i < array.length; i++) {
    result = fn(result, array[i], i);
  }
  return result;
};

function multiply(a, b) {
  return a * b;
}

// let arr = [1, 2, 3, 4];
// let initial_Value = 1;

// let result = reduce(initial_Value, arr, multiply);
// console.log(`multiplication : ${result}`);
/* Challenge 2: Concatenate Strings
Combine an array of strings into a single sentence.

Output: "Hello world this is reduce" */
let input = ['Hello', 'world', 'this', 'is', 'reduce'];

const concat = function (str1, str2, index) {
  return index === 0 ? str1 + str2 : str1 + ' ' + str2;
};

// console.log(reduce('', input, concat));

/* Challenge 3: Find the Maximum
Use reduce to find the largest number in an array.

Input: [3, 1, 4, 1, 5, 9]
Output: 9 */

const max = (a, b) => (a > b ? a : b);

let maximum = reduce(-Infinity, [3, 1, 4, 1, 5, 9], max);
console.log(maximum);

/* Challenge 4: Count Occurrences
Use reduce to count how many times each element appears in an array.

Output: { a: 3, b: 2, c: 1 } */
let inp = ['a', 'b', 'a', 'c', 'b', 'a'];
let init = {};
const count_Ocurrence = function (acc, str) {
  if (acc[str]) {
    acc[str]++;
  } else {
    acc[str] = 1;
  }
  return acc;
};

let count = reduce(init, inp, count_Ocurrence);
console.log(count);

//For 2D array into flat array
/* var flat = function (acc, arr) {
  return acc.concat(arr);
}; */

// This will flat array of any depth
var flat = function (acc, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat(acc, arr[i]);
    } else {
      acc.push(arr[i]);
    }
  }
  return acc;
};

console.log(
  'Flat Array: ',
  reduce(
    [],
    [
      [
        [
          [1, 2],
          [3, [4]],
          [4, 5],
        ],
      ],
    ],
    flat
  )
);
