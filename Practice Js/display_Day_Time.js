/* Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

function displayCurrentTimeAndDay() {
  //1. printing day

  // Get the current date and time
  const today = new Date();

  const day = today.getDay(); //gets the day of week in number
console.log(day)

console.log(today.toLocaleTimeString())


  const arrayOfDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];   arrayOfDays[day]

  console.log(`Today is : ${arrayOfDays[day]}.`);

  //2.Printing time

  // Get the current hour, minute, and second
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  // Determine if it's AM or PM
  const prepend = hours >= 12 ? `PM` : `AM`;

  //convert 24 hr format in 12 hr
  hours = hours >= 12 ? hours - 12 : hours;

  //check for special case where hours=0
  if (hours === 0 && prepend === "PM") {
    if (minutes === 0 && seconds === 0) {
      prepend = noon;
      hours = 12;
    } else {
      hours = 12;
    }
  }

  //check for special case where hours=0
  if (hours === 0 && prepend === "AM") {
    if (minutes === 0 && seconds === 0) {
      prepend = midnight;
      hours = 12;
    } else {
      hours = 12;
    }
  }

  console.log(
    `Current time is : ${hours} ${prepend} : ${minutes} : ${seconds}`
  );
}

displayCurrentTimeAndDay();

//Program flowchart
//https://www.w3resource.com/w3r_images/javascript-basic-exercise-flowchart-1.png
