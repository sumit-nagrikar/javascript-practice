//import{oddOrEvenSum as ooe} from './OddSumEvenSum.js';
// Example: default export from a module
const functionName = function(){console.log('Hello, World!');};
//export default myDefault;


//module.exports = functionName

module.exports = {function1:functionName,
function2:greet}

function greet(){
    console.log("Good morning");
}



// Example: importing a default export
//import greeting from './printString5Times.js';
//console.log(greeting);

// Output "Hello, World!"
/* let arr = [2,5,8,6,1,8,]
console.log(ooe(arr)); */