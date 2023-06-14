//Assignment 7
//Program to add products to amazon cart and calculate the discounted price

//get the product name 
let pName = window.prompt("Enter the product name");
console.log(pName);

//get the product price
let pPrice = parseFloat(window.prompt("Enter the price of the product"));
console.log(pPrice);

//get the no of items
let pItems = window.prompt("Enter the number of items");
console.log(pItems);

//get the discount value as user inputs
let pDis = parseFloat(window.prompt("Enter the discount value"));
console.log(pDis);

let totalPrice = 0;

//before discount- total amount in cart for no of items added
totalPrice = pItems * pPrice;
console.log(totalPrice);

//after discount

let discPrice = 0;
discPrice = totalPrice - ((totalPrice* pDis)/100);
console.log(discPrice);

//Final print statement
console.log(`You have successfully purchased ${pItems} products titled ${pName}.\n Amount before the discount is Rs. ${totalPrice}.\n Amount after the ${pDis}% discount is Rs. ${discPrice}.`);




