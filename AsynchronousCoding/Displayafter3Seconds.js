setTimeout(function(seconds){//setTimeout sending this function to API call i.e. its going last
console.log(`This message appears after ${seconds} seconds`);
greet();
}, 5000,5);//last is argumet for seconds

function greet(){
    console.log(`Good Morning  Bro!`);
}

console.log('Start script');//This will run at first