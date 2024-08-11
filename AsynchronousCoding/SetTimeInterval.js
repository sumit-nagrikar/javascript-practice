//Writing a function for displaying Time every 3 seconds
//added clearInterval

function displayTime(){
    
    let curretTime = new Date();
    let hours = curretTime.getHours();
    let minutes = curretTime.getMinutes();
    let seconds = curretTime.getSeconds();
    let timeString = hours+" "+minutes+" "+seconds
    console.log(timeString);


    if (seconds==5 || seconds==6 ||seconds==7){
        clearInterval(intervalID);
        console.log("Interval Stopped");
    }
}
//create a variable like
const intervalID/*variable for clearing interval*/ = setInterval(displayTime,3000);