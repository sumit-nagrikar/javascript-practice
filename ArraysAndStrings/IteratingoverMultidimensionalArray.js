/* let studentsData = [[`Ryan`, 24],
                  ['Sara', 23],
                ['jack',19]]; */

// iterating over the studentsData
/* studentsData.forEach((student) => {
    //console.log(student)
    student.forEach((data) => {
        console.log(data);
    });
}); */


//using for of loop
/* for(let i of  studentsData){
    for (let j of i) {
        console.log(j)
    }
} */

//using for loop
/* for(let i = 0;i<studentsData.length;i++){
//console.log(studentsData[i])
for(let j=0;j<studentsData[i].length ; j++){
    console.log(studentsData[i][j])
}
} */

/* Output
Ryan
24
Sara
23
 */

/* let myVariable = "Hello"
console.log(myVariable.charAt(3))
myVariable[0] = "C";//Strings Are Immutable in JS


myVariable = "Cello"
console.log(myVariable) */

//multilines string
// using the + operator
/* const message1 = 'This is a long message \n' +
    'that spans across multiple lines\n' +
    'in the code.'

// using the \ operator
const message2 = 'This is a long message\n \
that spans across multiple lines \n\
in the code.'

console.log(message1)
console.log(message2) */


/* let myVar = "hi my name is sumit and I am Happy";

console.log(myVar.length)

let splitVar = myVar.trim()
console.log(splitVar.length) */
/* console.log(myVar.replace("Sumit","Amit"))

console.log(myVar.split(` `)) */

const name = `My name is \`Peter."`;
console.log(name)