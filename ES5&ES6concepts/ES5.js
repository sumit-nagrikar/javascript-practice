//"use strict";
//we must declare variables 
/* a=6
a=7
b=8
console.log(a+b); */
//use of trim()==> remove whitespces from frnt and end
/* const str = "    Hello, World!    ";
const trimmedString = str.trim();

console.log(trimmedString);

// Output
"Hello, World!" */

//trim() example not working as expected
/* const str = "  Hello, \\t World!\\n   ";
const trimmedString = str.replace(/\\s+/g, '');

console.log(trimmedString); */

// Output should be "Hello,World!"


//JSON.parse()-->converts json object to JS object
//JSON.stringify()--> converts  JS object to json object

//Getters and Setters
/* 
const obj = {
    fname:"John",
    age:56,
    lname:"lope",
    get fullName(){
        return `${this.fname} ${this.lname}`;
    }
}

console.log(obj.fullName); */

//setter
const person = {
    _age: 30,
    set age(newAge) {
      if (newAge >= 0 && newAge <= 120) {
        this._age = newAge;
      } else {
        console.log("Invalid age value");
      }
    }
  };
  
  person.age = 25; // Sets the age property using the setter
  console.log(person._age);
  
  person.age = 150; // Attempts to set an invalid age (will be rejected by the setter)
  console.log(person._age);//give 25
  
  // Output 25   25


