let str1 = "jadugar";
let str2 = "1bcb1";

function checkPalindrome(str){
    let correctedStr = str.toString();
    console.log(correctedStr);
    let length = correctedStr.length;
    if(length<2) return "palindrome";
    if(length<1) return "invalid input";

    for(let i=0; i<length/2; i++){
            if(correctedStr[i] !== correctedStr[length-i-1]) return "not palindrome"; 
    }
    return "palindrome";
}

console.log(checkPalindrome(str2));