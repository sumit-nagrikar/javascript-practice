// Define an object called "person"
let person = {
    name: "Aisha",
    age: 30,
    sayHello: function() {
        let surname = "Takia"
      console.log(`Hello, My name is ${this.name}  ${surname}. I am ${this.age} years old`); // Accessing the "name" property using "this"
    }
  };
  
  person.sayHello(); // Calling the "sayHello" method on the "person" object
  
   //Output  "Hello, My name is Aisha  Takia. I am 30 years old"
 