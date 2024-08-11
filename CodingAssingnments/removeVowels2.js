"use strict";
let string = "Hi, I am too good"

const removeVowels  = function (str){
    return str.replace(/[aeiouAEIOU]/g,'')
};

console.log(removeVowels(string))
