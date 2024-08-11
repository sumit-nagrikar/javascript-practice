/* let originalStr = "racecar";

let reverseStr = ""
for(let i = originalStr.length-1; i>=0; i--){
reverseStr += originalStr[i] 
}
 
if(reverseStr==originalStr){
    console.log(`${originalStr} is a Palindrome`)
}else{
    console.log(`${originalStr} is not a palindrome`)
} */
/* function main() {
    var str = racecar;
    console.log(isPalindrome(str));
}
function isPalindrome(str) {
  // Your code goes here
 let cleanedStr = str.replace(/[^a-z]/g, "").toLowerCase();
  const reverseStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reverseStr;
} */
function isPalindrome(str) {
    // Remove non-alphabetic characters and convert to lowercase
    const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');

    // Check if the cleaned string is a palindrome
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function main() {
    const inputString = "A man, a plan, a canal: Panama";
    console.log("Is the input string a palindrome?", isPalindrome(inputString));
}

main();