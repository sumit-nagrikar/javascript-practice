//findFactorial- anonymous function/IIFE

/* (function(num){
    let factorial = 1;
    for(let i=num; i>0; i--){
        factorial  = factorial * i
    }
    console.log("Factorial of ",+num, "is ",+factorial);
})(3); */

//find factorial by recursion

const findFactorial = (num) => {
    //0 is a special case
  if (num == 0 || num == 1) {
    return 1;

  } else {
    return num * findFactorial(num - 1);
  }
};
console.log(findFactorial(4));


/* Let's dry run the findFactorial function with an input of 4.

Code:
javascript
Copy code
const findFactorial = (num) => {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * findFactorial(num - 1);
  }
};
console.log(findFactorial(4));
Dry Run:
Initial Call:

findFactorial(4) is called.
num is 4, which is not 0 or 1, so the else block executes.
The function returns 4 * findFactorial(3).
Second Call (from within the first):

findFactorial(3) is called.
num is 3, which is not 0 or 1, so the else block executes.
The function returns 3 * findFactorial(2).
Third Call (from within the second):

findFactorial(2) is called.
num is 2, which is not 0 or 1, so the else block executes.
The function returns 2 * findFactorial(1).
Fourth Call (from within the third):

findFactorial(1) is called.
num is 1, so the if block executes.
The function returns 1.
Unwinding the Recursion:
Now, we go back up the call stack, calculating each multiplication:

From the fourth call, we return 1 to the third call.
The third call returns 2 * 1 = 2 to the second call.
The second call returns 3 * 2 = 6 to the initial call.
The initial call returns 4 * 6 = 24.
Final Output:
console.log(findFactorial(4)) will output 24.
So, the factorial of 4 (4!) is 24 */