/* function string_copies(str,n) 
{
  // Your code goes here
  let result = "";
  for(let i=0;i<n;i++){
result += str; 
  }
  return result;
} */

//Approach2
function string_copies(str,n) 
{
  // Your code goes here
  if(n<0){
    return false;
  }else{
    return str.repeat(n);
  }
}

console.log(string_copies("Hello",0));