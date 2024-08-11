function productOfNextTwo(arr) {
    const n = arr.length;
    const result = [];
    for (let i = 0; i < n; i++) {
        const nextIndex1 = (i + 1) % n;
        const nextIndex2 = (i + 2) % n;

        result.push(arr[nextIndex1] * arr[nextIndex2]);
   }
   return result;
}
   // Example usage:
   const inputArray = [3, 4, 5];
   const outputArray = productOfNextTwo(inputArray);
   console.log(outputArray); // Output: [20, 15, 12]