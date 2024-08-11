const object1 = {};
m = Symbol('m')
n = Symbol('n');
o = Symbol.for('o')
object1[m] = 'harry';
object1[n] = 'derry';
object1[o] = 'Happy'
const objectSymbols = Object.getOwnPropertySymbols(object1);
console.log(objectSymbols.length);
console.log(objectSymbols); 
console.log(`-------------------------------------***---------------------------------------------`);

/* const objectName = Object.getOwnPropertyNames(object1);
console.log(objectName.length);
console.log(objectName); */