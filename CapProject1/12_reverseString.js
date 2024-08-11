function reverseString(str){
let reverseStr = str.split("").reverse().join("");
    return reverseStr;
}

//console.log(reverseString("James Bond"));

function  reverseString2(str){
    let reverseStr = "";
    for(let i=str.length-1; i >= 0; i--){
reverseStr = reverseStr + str.charAt(i);
    }
    return reverseStr;
}

console.log(reverseString2("atikiN  olleH"));