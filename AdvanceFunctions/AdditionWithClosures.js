function addNumber(num1){
    return function(num2){
return num1 +num2;
    }
}

let input = 20;
const addTen = addNumber(10);
let result = addTen(input);
console.log(`Hi Bro,\n\tyour result is ${result}`);