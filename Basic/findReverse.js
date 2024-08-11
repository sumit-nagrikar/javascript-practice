const findReverse = function(str){
    let length = str.length;
    let reverseStr = "";
    for(let i=length-1; i>=0; i--){
        reverseStr += str[i];
    }

    return reverseStr;
}

let str1 = "timus"; 
console.log("Reverse string is:",findReverse(str1));