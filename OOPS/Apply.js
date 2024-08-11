/* function greet(message) {
    console.log(message + " " + this.name);
  }
  
  const person = { name: "Alice" };
  
  greet.apply(person, ["Hi"],["Hello"]);  */// Output: Hi Alice

  function sum(a, b) {
    return a + b;
  }
  
  console.log(sum.call(null, 5, 10)); // Output: 15
  console.log(sum.apply(null, [5, 10])); // Output: 15