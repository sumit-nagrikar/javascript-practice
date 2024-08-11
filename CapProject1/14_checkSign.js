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
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "kindly check inputs";
  }
  let nums = [num1, num2, num3];
  let negCount = 0;
  for (const num of nums) {
    if (num < 0) {
      negCount++;
    }
  }
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
