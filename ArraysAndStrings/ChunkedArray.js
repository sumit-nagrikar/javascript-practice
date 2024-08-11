/* Input:
arr = [1,2,3,4,5] size = 1
 
Output:
[[1],[2],[3],[4],[5]] */

function main() {
    var arr = [1,7,4,5,3,6]//readLine().split(" ").map(x => parseInt(x));
    var size = 2//parseInt(readLine());
    let out = chunk(arr, size);
    console.log(out);
   
    //console.log(arr.slice(1,3));
}
 var chunk = function(arr, size) {
     //Your code goes here
     let resArr = [], tempArr = [];
    
    for(let i=0; i<arr.length; i++){
        tempArr.push(arr[i]);

        if(tempArr.length == size){
            resArr.push(tempArr);
            tempArr = [];
        }
    
    }

    if(tempArr.length){
        resArr.push(tempArr);
    }

    return resArr;
}; 
