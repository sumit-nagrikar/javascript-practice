function countOccurrences(str, char) {
    // Write your code here
    let count = 0;
    for (let i=0;i<str.length;i++) {
        if (str.charAt(i)===char) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrences("Elephant", "E"));
