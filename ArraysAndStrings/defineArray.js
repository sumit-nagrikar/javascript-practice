let myArray = [1,'a', "String", {'name' : 'Shyam', 'age': 50}, function(){
    console.log('I am function inside an array')
}, ['a', 'akash', 'raj']]

console.log(myArray[5][1])
console.log(myArray[4])
myArray[4]()