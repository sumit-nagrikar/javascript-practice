function findEvenNumbers(array){
    if(array.length===0){
        return undefined;
    }
    let result = [];
    for (let index = 0; index < array.length; index++) {
       if(array[index] % 2 === 0 ){
        result.push(array[index]);
       }
    }
    return result;
}

console.log(findEvenNumbers([12,5,8,78,85,87]));