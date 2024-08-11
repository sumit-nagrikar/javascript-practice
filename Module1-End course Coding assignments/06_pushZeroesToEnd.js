function pushZerosToEnd(arr) {
    let result = [];
    let zeroCount = 0;

    // First pass: Add all non-zero elements to the result array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            result.push(arr[i]);
        } else {
            zeroCount++;
        }
    }

    // Second pass: Append zeroCount number of zeros at the end of the result array
    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }

    return result;
}

// Example usage
console.log(pushZerosToEnd([0, 102, 0, 5, 0, 8])); // Output: [102, 5, 8, 0, 0, 0]
