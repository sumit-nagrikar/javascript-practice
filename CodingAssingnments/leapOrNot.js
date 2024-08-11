function isLeap(year){
return year%4==0;
}

console.log(isLeap(1987));

/*function main() {
    var year = 2000;
    console.log(isLeapYear(year));
  }
  
  function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  main();*/