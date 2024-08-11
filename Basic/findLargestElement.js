function findLargestElement(arr){
    let max = Number.NEGATIVE_INFINITY;// Initialize max to the lowest possible value

    // Helper function to traverse nested arrays
    function traverse(arr){
        for (let index = 0; index < arr.length; index++) {
            if(Array.isArray(arr[index])){
                traverse(arr[index]);
            }else{
                if(arr[index]>max){
                    max = arr[index];
                }
            }        
        }
    }
      // Start traversing the input array
      traverse(arr)
    return max;
}

const nestedArray = [[3, 4, 58], [105, 8, 9, [10, 11]], [111, 200]];
console.log("Largest element:", findLargestElement(nestedArray));