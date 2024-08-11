const person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  const greeting = function(greetMessage) {
    console.log(greetMessage + " " + this.getFullName());
  };
  
const add = function(a,b){
    let sum = a+b;
    console.log("My name is "+this.firstName+" "+ this.lastName+" I got "+sum+" marks");
}

const boundAdd = add.bind(person,45,45);

  const boundGreeting = greeting.bind(person,"hello");
  boundGreeting();
  boundAdd();
  // Output: Hello John Doe