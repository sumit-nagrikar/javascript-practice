function titleCase(sentence) {
    // write your code here
let words = sentence.toLowerCase().split(' ');

const titleCaseSentence= words.map(function(currentWord){
    // console.log(currentWord[0]);
    // console.log(currentWord.substring(1));
    return currentWord[0].toUpperCase()+currentWord.substring(1);
});
/* for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
 */
return titleCaseSentence.join(' ');
}

console.log(titleCase("Be yourself; everyone else is already taken."));
//Output: "Be Yourself; Everyone Else Is Already Taken."