function flattenArray(arr){
    const stack = [...arr]
    const result = [];

    while(stack.length){
        const next = stack.pop();
        if(Array.isArray(next)){
            stack.push(...next);
        }else{
            result.push(next);
        }
    }
   return result.reverse();
    
}

const nestedArray = [1, [2, [3, 4], [7,5]], 6];
console.log(flattenArray(nestedArray));