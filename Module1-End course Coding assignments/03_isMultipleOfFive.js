function isMultipleOfFive(n) {
    // Your code goes here
    const digits = n.toString().split('');
    return digits.includes('0') || digits.includes('5');
}

console.log(isMultipleOfFive(5));