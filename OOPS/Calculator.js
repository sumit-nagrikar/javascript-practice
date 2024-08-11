let calculator = {
    result: 0
   
}
add.bind(calculator,45,45);
function add(x,y){
    return this.result = x + y;
        }
console.log(calculator.add(25,20));