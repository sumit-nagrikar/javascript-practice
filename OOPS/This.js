//Global Context
//console.log(this === global);


//Function Context:
/* function printThis() {
    console.log(this);
  }
  
  printThis();  */// Output: window (in a browser)

 /*  let emp ={
  age:25,
  gender:"male",
id:function(name){
    console.log(`Hello, My name is ${name}`);
}}

emp.id("Ram");
console.log(emp); *///In a method of an object, this refers to the object itself.

//3. Method Invocation: When a function is called as a method of an object,
//this refers to the object that the method is a property of.

//Arrow Functions:

let obj = {
    fun:"Inner",
    age:25,
    method: function(){
        const innFunc = ()=>{
            console.log(`I am ${this.fun} function`);
        };
        innFunc();
    }
}

obj.method();