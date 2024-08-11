

function arrayIntersection(array1, array2) {
    // Write your code inside this function only.
    let intersection = [];
for(let i=0;i<array2.length;i++){
    if(array1.includes(array2[i])){
        if(!intersection.includes(array2[i])){
            intersection.push(array2[i]);
        }
    }
}
return intersection;
}

let array1 = [1,2,2,2,3,4,5,6];
let array2 = [3,4,4,4,5,6];
console.log(arrayIntersection(array1,array2));