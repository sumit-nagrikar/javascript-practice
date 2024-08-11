function factorial(num){
    if(num===0) return 1;
    return num*factorial(num-1);
}
let fact = factorial(0);
console.log("Factorial of is "+fact );