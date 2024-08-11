/* function greet(message) {
    console.log(message + " " + this.name);
  }
  
  const person = { name: "Alice" };

  const emp = {name:"Jane"};
  
  greet.call(person, "Hello"); // Output: Hello Alice

  greet.call(emp,"Hey there!");//Hey there Jane */
  /* const prototype1 = {};
const object1 = Object.create(prototype1);
console.log(Object.getPrototypeOf(object1) === prototype1); */
/* const pt1 = {};
const ob1 = Object.create(pt1);
console.log(Object.getPrototypeOf(ob1) === pt1);
console.log(ob1); */
/* var obj = new Fun(); 
console.log(obj.constructor === Fun) */
/* var x = 0;
function foo() {
x++;
if (x > 3) {
clearTimeout(timerId);
}
}
var timerId = setTimeout(function() {
console.log('Hello');
}, 1000);
setInterval(foo, 1000); */
/* let person = {name: "John", age: 30};
Object.defineProperty(person, "salary", {value: 5000, writable: false});
person.salary = 6000;
console.log(person.salary); */
/* var a = [];
a.unshift(1);
a.unshift(8);
a.shift();
a.unshift(2,[2,2]);
console.log(a);
a.shift();
a.shift();
console.log(a.shift())
super(); */
/* function getName() {console.log("line 1");
  var name = "Jon";console.log("line 2");
  function printName(){ console.log("line 3");
  console.log(name);console.log("line 4");
  }
  printName();console.log("line 5");
  }


  getName();console.log("line 6"); */
 /*  function myFunc() {}
console.log(typeof myFunc); */
/* const a = {x: 1};
const b = {...a};
const c = {};
Object.assign(c, a);
a.x = 2;
console.log(a.x);
console.log(b.x);
console.log(c.x); */
/* function multiplyByTwo(a) {
  return a * 2;
  }
  var result = multiplyByTwo();
  console.log(result); */
  /* var myFunc = (...args) => {
    console.log(args.length);
    }
    myFunc(1, 2, 3); */
    /* var myFunc = (...args) => {
      console.log(args.length);
      }
      myFunc(1, 2, 3); */
      /* function sumOfNaturals(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
        sum += i;
        }
        return sum;
        }
        console.log(sumOfNaturals(10)); */
/*         let x = 10;
const byValue = (y) => {
 y = 20;
 return y;
}
x = byValue(x);
console.log(x); */
let arr = [1, 2, 3];
let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);