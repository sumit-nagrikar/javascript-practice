let branch;

marks = 74;

switch(true){
  case marks>90:
    branch = "computer science"
    break;

  case marks>=75:
    branch = "Biology science" 
    break;
    
    case marks>=65:
    branch = "ENTC"
    break;

    default:
      branch = "APPLY NEXT YEAR"
    break;
}

console.log(branch)