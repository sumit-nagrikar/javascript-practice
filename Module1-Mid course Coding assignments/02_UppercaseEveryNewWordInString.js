function capitalizeWords(str) {
  let result = "";
  let currentChar = "";
  let capitalizeNext = true;
  for (let i = 0; i < str.length; i++) {
    currentChar = str.charAt(i);
    if (capitalizeNext === true && currentChar !== " ") {
      result += currentChar.toUpperCase();
      capitalizeNext = false;
    } else {
      result += currentChar;

      if (currentChar === " ") {
        capitalizeNext = true;
      }
    }
  }
  return result;
}

console.log(capitalizeWords("hi i am sumit"));
