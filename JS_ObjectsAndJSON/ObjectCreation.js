//Object creation using object literals

/* let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
console.log(person.firstName)
console.log(person.lastName)//this is accessing the values by using Dot notation
console.log(person.age) */

//Object Constuctor method

/* let person = new Object();
person.firstName = "John"
person.lastName = "Doe"
person.age = 30 */

//console.log(person)//this is accessing the values by using Dot notation

//console.log(person.firstName,person.lastName,person.age)

//Accessing the peoperties using bracket notation
/* console.log(person["firstName"])
console.log(person["age"]);
console.log(person["lastName"]);
 */
/* let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    adress: {Street: "532 Wall Street",City:"Morocco",Country:"USA"}
  }; */

  //console.log(person.adress.Street);//Accessing using DOT notation
  //console.log(person["adress"]["Street"],person["adress"]["City"],person["adress"]["Country"]);

  //Modify Objects using DOT Notation
 /*  person.firstName = "Jack"
  person.lastName = "Ryan"

  person.contact = 974541212; */

  //Modifying object inside an object
  //person.adress.City = "London"

  //console.log(person.adress.City);

  //console.log(person.firstName,person.lastName);
  /* console.log(person);

  //delete using DOT
  delete person.adress.City;
  console.log(person); */
  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    adress: {Street: "532 Wall Street",City:"Morocco",Country:"USA"}
  };
  //Modification Using Brcket Notation
//update
/* person["firstName"] = "Jack"
console.log(person.firstName);
person["lastName"] = "Ryan"
person["age"] = 45
person["adress"]["City"] = "Aarvi"

//Add
person["Hobbie"] = "Singing"
person["adress"]['Zip Code'] = 554488
person.adress.District = "Akola"
console.log(person); */
