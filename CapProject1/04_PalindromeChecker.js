function isPalindrome(str) {
    // Write your code here
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    console.log(cleanedStr);
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

console.log(isPalindrome("M*&^%$adam"));