class Animal {
    constructor(name) {
      this.name = name;
    }
  
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} (${this.breed})is barking.`);
    }
  }
  
  const dog = new Dog("Buddy", "Labrador");
  dog.eat(); // Output: Buddy is eating.
  dog.bark(); // Output: Buddy is barking.