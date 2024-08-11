function operateOnNumbers(a, b, operation) {
    return operation(a,b);
  }
  
  function add(a,b){
    return a+b;
  }

  function sub(a,b){
    return a-b;
  }

  function prod(a,b){
    return a*b;
  }

  function divide(a,b){
    return a/b;
  }
  const result = operateOnNumbers(10,45,prod);
  console.log(result);