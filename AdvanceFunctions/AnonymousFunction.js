//Anonymous function
const result = (function(a,b){
    return a - b;
})(4,2);

console.log(result);

//IIFE
(function(){
    console.log("Hello Sumit");
})();