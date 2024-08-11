//To sort elements in ascending order

function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }

    const pivot = arr[0];
    const left = []
    const right = []
    for(let i=1; i<arr.length; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    return sortedLeft.concat(pivot,sortedRight);
}

//To sort elements in descending order

const quickSort2 = function(arr){
    if(arr.length<=1){
        return arr;
    }

    const pivot = arr[0];
    const left = []
    const right = []

    for(let i=1; i<arr.length; i++){
        if(arr[i]>=pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    const sortedLeft = quickSort2(left);
    const sortedRight = quickSort2(right);

    return sortedLeft.concat(pivot,sortedRight);
}

const unsortedArray = [5, 2, 9, 1, 3, 6];
const sortedArray = quickSort2(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 5, 6, 9]