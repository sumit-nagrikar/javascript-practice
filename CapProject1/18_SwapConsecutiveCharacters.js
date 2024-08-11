function swapConsecutiveCharacters(str) {
  let resultArr = [];
  arrStr = str.split("");
  for (let i = 0; i < arrStr.length; i += 2) {
    resultArr.push(arrStr[i + 1]);
    resultArr.push(arrStr[i]);
  }

  return String(resultArr.join(""));
}

console.log(swapConsecutiveCharacters("abcdef"));
console.log(swapConsecutiveCharacters("Almabetter"));
