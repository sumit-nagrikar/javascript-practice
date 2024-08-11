/* const divide = (a,b) => a/b;

console.log(divide(36,9));

let multiply = (a,b) => a*b;
console.log(multiply(20,10));

let sum = num => num + 10;

console.log("sum is"+sum(10)); */

// Single-line block
//const sum = number => number + number;

// Multi-line block
const sum = number => {
	const sum = number + number;
	return sum;
} 

console.log(sum(10));