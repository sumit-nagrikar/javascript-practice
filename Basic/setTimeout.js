/* function x(){
 
    for(var i=1;i<=5;i++){
    setTimeout(()=>{
    console.log(i)
    },i*1000)
    }
    
   }
   x();
    */

  /*  function x(){
    function closur(x){
        console.log(i);
    setTimeout(()=>{
    console.log(x)
    },x*1000)
    };
    for(var i=1;i<=5;i++){
    closur(i)
    }
   }
   x(); */

let a = false;//make it true
setTimeout(() => {
 a = false;
}, 2000)
while(a) {
 console.log(' -- inside whilee -- ');
}
   //To fix this, you might consider using asynchronous programming techniques
//like Promises, async/await, or handling the setTimeout callback differently.