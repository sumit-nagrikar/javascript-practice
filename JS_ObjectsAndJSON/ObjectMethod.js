/* let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    adress: {Street: "532 Wall Street",City:"Morocco",Country:"USA"}
  }; */
//keys() & values() --> To access object properties
 /*  const keys = Object.keys(person);
  const values = Object.values(person)
  console.log(values); */
//entries() --> this method retuen array of arrays
  //const entry = Object.entries(person)
//console.log(entry);

//Object.assign() --> This method will copy all the values from all the source objects to the target objects
 /*const targetObj = { name: "John" };
const sourceObj = { age: 30 };
const sourceObj1 = {lastName: "Doe"}
Object.assign(targetObj, sourceObj, sourceObj1);

console.log(targetObj); */

//Object.freeze --> freeze the properties/ we can not modify the things

/* const targetObj = { name: "John" };
Object.freeze(targetObj)
targetObj.name = "Doe"
console.log(targetObj);
console.log(targetObj.name); */

//Custom method in object
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    startEngine: function() {
      console.log("Engine started! Please Give a side");
    }
  };
  
  car.startEngine();




