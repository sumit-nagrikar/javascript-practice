/* function LengthOfLastWord(sentence){

} */
function main() {
    var s = "Hello world bhai"//readLine();
    console.log(lengthOfLastWord(s));
  }
  
  var lengthOfLastWord = function(s) {
    let length = 0,
      max = 0;
    for (let i = 0; i < s.length; i++)
      if (s[i] !== ' ') {
        length++;
        max = length;
      }
    else
      length = 0;
    return max;
  };
  main();