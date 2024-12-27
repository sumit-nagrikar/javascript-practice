//Approach 1
function findLongestWord(sentence) {
	// Write your code here
    const words = sentence.split(' ');
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        const length = words[i].length;
        if (length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}
console.log(findLongestWord("Hi i  am sumit who  is a great learner"));


//Approach 2
/* 
function findLongestWordOptimised(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;

    for (const word of words) {
        const length = word.length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}



console.log(findLongestWordOptimised("Hi i  am sumit who  is a great learner"));
 */
