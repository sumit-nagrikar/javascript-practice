// Defining the function
/* function sum(num1, num2) {
    console.log(num1 + num2);
  }
  
  // Calling the function
  sum(3, 6);      // Output: 9

  function areaOfReactangle(width,height){
    let area = width * height;
    console.log(`Area is ${area} Sq.Cm.`);

  }

  areaOfReactangle(12,12);
greet();
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  const message = greet("Rohan");
  console.log(message); */
  
  // Output
  "Hello, Rohan!"
  //fuction with values with parameters
  function multiplyNumbers(num1, num2 = 5) {
    return num1 * num2;
  }
  
  console.log(multiplyNumbers(5, 6)); // Expected output: 30
  console.log(multiplyNumbers(3));    // Expected output: 6