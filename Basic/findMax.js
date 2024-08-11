function findMax(array){
    if(array.length===0){
        return undefined;
    }
    let max = array[0];
    for (let index = 1; index < array.length; index++) {
       if(array[index]>max){
        max = array[index]
       }
    }
    return max;
}

console.log(findMax([12,5,8,78,85,87]));