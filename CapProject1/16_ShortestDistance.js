const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
/* let a =wordsDict.indexOf("coding");
console.log(a); */

function shortestDistance(wordsDict, word1, word2) {
  // Write your code inside this function only.

  let index1 = 0;
  let index2 = 0;
  index1 += wordsDict.lastIndexOf(word1);
  index2 += wordsDict.lastIndexOf(word2);
  return Math.abs(index2 - index1);
}

console.log(shortestDistance(wordsDict, "coding", "makes"));
