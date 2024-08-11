function* numberGenerator() {
   console.log("I am in yield 1");
    yield 1;
    console.log("I am in yield 2");
    yield 2;
    console.log("I am in yield 3");
    
    yield 3;
    console.log("I am in yield 4");
    yield 4;
    console.log("I am in yield 5");
    yield 5;
  }
  
  // Create a generator instance
  const numbers = numberGenerator();
  
  // Loop through the generated numbers
 /*  for (const number of numbers) {
    console.log(number);
  }
   */

  console.log(numbers.next());
  console.log(numbers.next());
  console.log(numbers.next());
  console.log(numbers.next());
  console.log(numbers.next());
  console.log(numbers.next());
  