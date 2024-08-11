function isSameFrequency(arr1,arr2){
    //If the two arrays don't have the same number of elements, they can't possibly match up, so the function returns false right away.
    if(arr1.length !== arr2.length){
        return false;
    }

    //Count Frequencies
    //We create two empty objects (arrFreq1 and arrFreq2) to store how many times each number appears in each array.
    let arrFreq1 = {};
    let arrFreq2 = {};

    //Counting in arr1:
    for(let val of arr1){
        arrFreq1[val] = (arrFreq1[val] || 0) + 1;
    }

     //Counting in arr2:
     for(let val of arr2){
        arrFreq2[val] = (arrFreq2[val] || 0) + 1;
    }

    // Compare Frequencies:
    for(let key in arrFreq1){
        let squaredKey = key * key;
        if (!(squaredKey in arrFreq2)) {
            return false;
        }

        if(arrFreq1[key] !== arrFreq2[squaredKey]){
            return false;
        }
    }

return true;
}

const arr1 = [1, 2, 5, 5];
const arr2 = [25, 4, 1];

console.log(isSameFrequency(arr1,arr2));
