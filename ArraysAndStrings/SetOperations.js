//Adding and Removing Elements:
const mySet = new Set();
//Adding
mySet.add('banana')
mySet.add('apple')

//delete
mySet.add('cake')
//mySet.delete('banana')
//mySet.clear();
//console.log(mySet);
console.log(mySet.has('apple'));
console.log(mySet.has('cake'));
console.log(mySet.size);

//Using for Each
mySet.forEach((value)=> {
    console.log(value)
})

//using for...of loop

console.log('output for...of loop');
for (const iterator of mySet) {
    console.log(iterator);
}

const myArray = Array.from(mySet)
console.log(myArray);