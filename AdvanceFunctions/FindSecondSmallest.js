/* let myArray = [8,5,4,7,9,2,3];
let sortedArray = myArray.sort();
    console.log("Hello, This is your\nSecond Smallest Number = "+sortedArray[1]); */

    /* function findSecondSmallest(numbers) {
        numbers.sort((a, b) => a - b);//(a, b) => a - b
        return numbers[1];
      }

      console.log(findSecondSmallest([8,5,4,7,9,3,3,3])); */

/*       var arr = [7, 5, 9, 1];
var min = Math.min.apply(null, arr);
console.log(min); */
function concatenate(arguments){
  return String.prototype.concat('', arguments);
}
console.log(concatenate('Hello' ,'world' ,'js'));