/* 3. Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

function currentDate(){
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDay();
    const year = today.getFullYear();
    console.log(`${month}-${day}-${year}, ${month}/${day}/${year}`);
}

currentDate();