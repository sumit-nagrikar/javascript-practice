const cart1 = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Headphones", price: 50, quantity: 4 },
  ];

  const cart2 = [
    { name: "Fruits", price: 10, quantity: 5 },
    { name: "Vegetables", price: 8, quantity: 3 },
    { name: "Dairy", price: 5, quantity: 2 },
    { name: "Snacks", price: 3, quantity: 10 },
  ];
  

  function calculateTotal(cart) {
    // Write your code here
  
    const totalCost =  Object.values(cart).reduce((accumulator,item)=>{
        const  itemCost =  item.price * item.quantity;
        return accumulator  + itemCost;
    },0);

    return totalCost;
}

console.log(calculateTotal(cart1));
console.log(calculateTotal(cart2));
//console.log(cart1[0].price);


  
  