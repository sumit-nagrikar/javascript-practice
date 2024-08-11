function countCharacters(str){
    const charCount = {}//created empty object fo storing char count key and value
    for(let i=0; i<str.length; i++){//looped on string
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;//if char is present in object add the count by 1 , else add it 
    }
    return charCount;
}

let str1 = "helloweeoe";
console.log(countCharacters(str1));