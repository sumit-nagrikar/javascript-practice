const findConsecutive = function(array){
        let maxCount = 0;
        let currentCons = 0;
        for(let i=0; i<array.length; i++){
            if(array[i] == 1){
                currentCons +=1;
                maxCount = Math.max(currentCons, maxCount)
            }
            else{
                currentCons = 0;
            }
        }

     console.log(maxCount);
}

const arr1 = [1,1,0,3,4,1,1,1,5,6,1,1,1,1,5,6,7];
const arr2 =  [1, 1, 9, 1, 9, 9, 19, 7, 1, 1, 1, 3, 2, 5, 1]
findConsecutive(arr2)