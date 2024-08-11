console.log("Hi");


const timerId = setTimeout(()=>{
    console.log("Execute Immediately");
},5000)
clearTimeout(timerId);
console.log("Bro!");

