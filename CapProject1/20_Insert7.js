function insert7(str){
    const array = str.split('')
    let charCount = 0;
    let resultArray = [];
    let currentChar = '';

    for (let index = 0; index < array.length; index++) {
        currentChar = array[index];

        if(currentChar !== ' '){
            charCount++;
            if(charCount % 6 === 0){
                resultArray.push(currentChar + '7');
                continue;
            }
        }

        resultArray.push(currentChar);
        
    }

    return resultArray.join('');
}

console.log(insert7('hello dear brother'));