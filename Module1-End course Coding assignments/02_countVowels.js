/* Write a function to count the number of vowels in a given string using Regular Expression in JavaScript. */

function countVowels(str) {
    // Your code goes here
    // Regular expression to match all vowels (both lowercase and uppercase)
    const vowelRegex = /[aeiouAEIOU]/g;

     // Find all matches of the regex in the string
    const matches = str.match(vowelRegex)

      // If there are no matches, return 0; otherwise, return the count of matches
    return matches ? matches.length : 0 ;
  }

  console.log(countVowels("sumit"))