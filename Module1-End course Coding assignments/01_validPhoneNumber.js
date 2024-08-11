/* Write a function to check if a given string contains a valid phone number or not using Regular Expression in JavaScript. A valid phone number should have 10 digits and should start with either 7, 8 or 9. */

/* #Algorithm
1. Write a function
2. create a regex for particular condition */

function isValidPhoneNUmber(number){
     // Regular expression to match a 10-digit number starting with 7, 8, or 9
     const phoneRegex = /^[789]\d{9}$/;

     // Test the phone number against the regex
     return phoneRegex.test(number);
}

console.log(isValidPhoneNUmber(9125487963))
console.log(isValidPhoneNUmber(9125487963))
console.log(isValidPhoneNUmber(9125487963))