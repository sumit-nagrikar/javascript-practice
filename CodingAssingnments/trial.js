function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  console.log(sum([1,5,4,5,6,7,8,8,8,8,9876,7,3,4,5,66,7,7,8,8]));