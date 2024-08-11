//Sort two arrays and merge into one

function sortedData(arr1,arr2){
    let mergeArray = []
    let i = 0, j = 0;

    while (i<arr1.length && j<arr2.length) {
        if(arr1[i]<arr2[j]){
            mergeArray.push(arr1[i])
            i++;
        }else{
            mergeArray.push(arr2[j]);
            j++;
        }
    }
    
    if(i<arr1.length){
        mergeArray.push(arr1[i])
        i++;
    }
    if(j<arr2.length){
        mergeArray.push(arr2[j]);
        j++;
    }

    return mergeArray;
}

const arr1 = [0,2,13,8,7]
const arr2 = [4,5,7,2,1,4,2,4]
console.log(sortedData(arr1,arr2));