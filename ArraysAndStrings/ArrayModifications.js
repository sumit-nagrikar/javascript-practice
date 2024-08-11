let arr = [{name: 'John'}, {name: 'Jane'}];
let arr1 = arr;
arr1.push({name: 'Bob'});

console.log(arr); // [{name: 'John'}, {name: 'Jane'}, {name: 'Bob'}]
console.log(arr1); // [{name: 'John'}, {name: 'Jane'}, {name: 'Bob'}]

 arr[0].name = 'Mike';
console.log(arr); // [{name: 'Mike'}, {name: 'Jane'}, {name: 'Bob'}]
console.log(arr1); // [{name: 'Mike'}, {name: 'Jane'}, {name: 'Bob'}] 
