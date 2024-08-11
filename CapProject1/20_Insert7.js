function insert7(inputString){
    let charCount = 0;
    let result = '';

    for(let i=0;i<inputString.length;i++){

        const currentChar = inputString[i];//Get the current character

        if(currentChar !==' '){
            charCount++;//Incrementing character count

            if(charCount%6===0){
                result+= currentChar + '7';//Adding char + 7 after 6 each sixth character
                continue; //Skip the rest of the loop for this iteration
            }
        }
        result += currentChar;//Append the current character to the result 
    }

    return result;
}

console.log(insert7("hello my dear Aryan"));