"use strict";
let myString = "Hello, I  am  Sam";

 function removeVowels(str){
    const vowels ="aeiouAEIOU";
let resultStr = "";
    for(let  i=0;i<str.length;i++){
        if( vowels.indexOf(str[i])===-1){
            resultStr += str[i];
        }
    }
    return  resultStr;
} 
console.log(removeVowels(myString));
//console.log(myString[0]);