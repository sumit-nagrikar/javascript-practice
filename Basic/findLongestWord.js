let sentence1 = "I love jsvascript and react also";

function findLongestWord(sentence){
    let wordsArray = sentence.split(' ');
        console.log(wordsArray);
    let longestWord = "";
        for(let i=0; i<wordsArray.length; i++){
            if(wordsArray[i].length > longestWord.length){
                longestWord = wordsArray[i];
            }
        }
        return longestWord;
}

console.log(findLongestWord(sentence1));