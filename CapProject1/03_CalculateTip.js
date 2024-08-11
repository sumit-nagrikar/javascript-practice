function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    //return number(totalAmount.toFixed(2));
    return Number(totalAmount.toFixed(2));
}

console.log(calculateTip(60.75,0.25));