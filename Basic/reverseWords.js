const reverseWords = (sampleString) => {
    let reversedSentence = "";//initialize for storing each word in reverse order
    let word = "";//temp storing word here

    // Iterate over each character in the sampleString
    for (let i = 0; i < sampleString.length; i++) {
        // If the character is not a space, append it to the current word
        //here we make word and when the space occurs, our word is added to the reversedSentence
        if (sampleString[i] !== ' ') {
            word += sampleString[i];
        } else {
            // If it's a space, prepend the current word to the reversed sentence
            reversedSentence = word + ' ' + reversedSentence;
            word = ""; // Reset the word for the next iteration
        }
    }
    //
    // Append the last word to the reversed sentencewhen we complete iteration upto the length, loop terminates and last word remains tobe added 
    reversedSentence = word + ' ' + reversedSentence;

    // Trim any leading or trailing spaces and log the result
    console.log(reversedSentence.trim());
};

// Example usage
reverseWords("ChatGPT is awesome"); // Output: "awesome is ChatGPT"

//Second Function: reverseWords using Array Manipulation
function reverseWords2(sentence) {
    // Split the sentence into words
    let words = [];
    let wordStart = 0;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            words.unshift(sentence.substring(wordStart, i));
            wordStart = i + 1;
        } else if (i === sentence.length - 1) {
            words.unshift(sentence.substring(wordStart, i + 1));
        }
    }

    // Join the words to form the reversed sentence
    return words.join(' ');
}

// Example usage
const sentence = "sumit is awesome";
console.log(reverseWords2(sentence)); // Output: "awesome is ChatGPT"
