/* Some of the key concepts introduced in ES6 include:
Arrow Function
Spread Operator
Template Literals
let and const Declarations
Destructuring Assignment
Modules */

//1. Arroww function

/* const add = (para1, para2) => (para1==para2)?true:false;//we used lambda expression inside the arrow function 

console.log(add(1,"1")); */

//2. Spread Operator
//1. array spreading
/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Concatenate arrays
const mergedArray = [...arr1,...arr2];
console.log(mergedArray);

// Create a shallow copy of an array
const originalArray = [10, 20, 30];
const copiedArray = [...originalArray];
console.log(copiedArray);

// Output
[1, 2, 3, 4, 5, 6]
[10, 20, 30] */

//Object spreading
/* const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

// Merge objects
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);
 */
// Output
//{ x: 1, y: 2, z: 3 }

//Destructuring Assignment
//1. Array Destructuring:
//const [variable1, variable2, ...rest] = array;
/* const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, third, fourth, ...restNumbers ] = numbers;
console.log(restNumbers);
console.log(first);
console.log(third);
console.log(second);

console.log(fourth);


// Output
1
2
[3, 4, 5] */

//Object Destructuring:
/* const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    country: "USA"
  };
  
  // Destructuring assignment
  const { firstName, lastName, ...restPerson } = person;
  
  console.log(firstName);
  console.log(lastName);
  console.log(restPerson); */
  
  // Output
  /* "John"
  "Doe"
  { age: 30, country: "USA" } */

  //Default values and renaming
  const person = {
    firstName: "John",
    lastName: "Doe"
  };
  
  // Destructuring with default value and renaming
  const { firstName, lastName:surname="Thapa", age = 25, country: homeCountry = "USA" } = person;
  
  console.log(firstName);
  console.log(surname);
  console.log(age);
  console.log(homeCountry);
  
  // Output
  "John"
  "Doe"
  25            // default value used
  "USA"         // renamed from "country"
