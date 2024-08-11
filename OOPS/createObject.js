/* let student1 = {name: "Deepti",
age: 25,
Gender:"Female",
greet : function(){
    console.log(`My name is ${this.name}`);
}
};

let student2 = {name: "Akash",
age: 25,
Gender:"Male",
greet : function(){
    console.log(`My name is ${this.name}`);
}
};

let student3 = {name: "Raju",
age: 30,
Gender:"Male",
greet : function(){
    console.log(`My name is ${this.name}`);
}
};

student1.greet();
student2.greet();
student3.greet(); */

//Nation constructor created
function Nation(nat){
    this.nationality =  nat;
}

//created function flag which prints `I am tricolour`.
Nation.prototype.flag = function(){
    console.log(`I am tricolour`);
} 
//student constructor created
function Student(n,a,g){
    this.name = n,
    this.age = a,
    this.gender = g
}

//created function id which prints name and age of student
Student.prototype.id = function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

//created function id which prints likes of student
Student.prototype.likes = function(){
    console.log(`Hello, my name is ${this.name} And I like to play FootBall.`);
}

//Protype chaining student to Nation
Student.prototype.__proto__ = Nation.prototype;

//Student Object creation
let s1 = new Student("John",25,"Male");
let s2 = new Student("Josh",28,"Male");
let s3 = new Student("Jake",25,"Male");

//Nation Object creation
let n1 = new Nation('Indian');

s1.id();//student method = id() call
console.log(n1.nationality); 
s1.flag();//works after chaining