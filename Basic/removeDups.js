/* const removeDuplicates = (array) => {
    let uniqueArr = [];
    for (let i = 0; i <= array.length - 1; i++) {
    if (uniqueArr.indexOf(array[i]) == -1) {
    uniqueArr.push(array[i]);
    }
    }
    return uniqueArr;
   }; */
   function removeDuplicates(arr) {
    // Use the Set object to remove duplicates. This works beca
    return Array.from(new Set(arr));
   }
   let num = removeDuplicates([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]);
   console.log(num);