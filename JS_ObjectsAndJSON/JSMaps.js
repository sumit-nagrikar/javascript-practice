//Creating a Map
const myMap = new Map();
myMap.set('name','jojo')
myMap.set('age',30)
/* console.log(myMap);

myMap.delete('age')
console.log(myMap);

myMap.clear()
console.log(myMap.size); */

//Checking if key exists
//console.log(myMap.has('age'));
//get value for key
//console.log(myMap.get('name'));

//Iterating through map using forEach
myMap.forEach((value,key)=>{
    console.log(`${key}:${value}`);
})

//Iterating through map using fo..of
for (const [key,value] of myMap) {
    console.log(`${key}:${value}`);
}

//Converting Map to Array --> Array.from() 
const arrayEntries = Array.from(myMap)
console.log(arrayEntries);

let str = "hello"
str = "world"
console.log(str);