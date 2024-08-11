// Do not remove nor make any changes in  main() function

var num1 = prompt("enter first number", );
var num2 = prompt("enter second number", );
var operator = prompt("operator", );


// Your code goes here
  if(isNaN(num1) || isNan(num2)){
return "invalid input";
}
if(operator=== '+'){
result = num1 + num2;
}else if (operator=== '-'){
result = num1 - num2;
}else if (operator=== '/'){
if(num2==0){
result = "Can not divide by Zero.";
}else{
result = num1 / num2;
}
}else if (operator=== '*'){
result = num1 * num2;
}
else{
result = "provide valid operator";

}
prompt("Your Answer is ", result)