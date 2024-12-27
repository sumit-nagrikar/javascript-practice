const checkSign = function (num1, num2, num3) {
  if (num1 != 0 && num2 != 0 && num3 != 0) {
    if (num1 > 0 && num2 > 0 && num3 > 0) {
      return "+++";
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
      return "---";
    } else if (num1 > 0 && num2 > 0 && num3 < 0) {
      return "++-";
    } else if (num1 > 0 && num2 < 0 && num3 > 0) {
      return "++-";
    } else if (num1 < 0 && num2 > 0 && num3 > 0) {
      return "++-";
    } else if (num1 > 0 && num2 < 0 && num3 < 0) {
      return "+--";
    } else if (num1 < 0 && num2 > 0 && num3 < 0) {
      return "+--";
    } else if (num1 < 0 && num2 < 0 && num3 > 0) {
      return "+--";
    }
  } else {
    return "Kindly check Inputs";
  }
};

function checkSignn(num1, num2, num3) {
  //in case: if each of the no. is zero
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "kindly check inputs";
  }
  //creating array of inputs numbers
  let nums = [num1, num2, num3];
  let negCount = 0;

  //from array check negative number counts
  for (const num of nums) {
    if (num < 0) {
      negCount++;
    }
  }

  //using negative count return output
  if (negCount == 0) {
    return "+++";
  } else if (negCount == 1) {
    return "++-";
  } else if (negCount == 2) {
    return "+--";
  } else {
    return "---";
  }
}

console.log(checkSignn(2, 5, 7));
console.log(checkSignn(8, -3, 4));
