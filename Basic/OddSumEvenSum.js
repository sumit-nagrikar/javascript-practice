export function main() {
    //var arr = readLine().split(" ").map(x => parseInt(x));
    var arr = [1, 3, 4, 6, 2, 8, 9, 1]
    console.log(oddOrEvenSum(arr));
}
export function oddOrEvenSum(arr) {
  // Your code goes here
 let  oddSum = 0;
  let evenSum = 0;

  for(let num of arr){
    if(num%2!=0){
      oddSum +=num;
    }
    else{
       evenSum +=num;
    }
  }
  return {oddSum, evenSum}
}