//to calculate profit by stockbroker

//get the input values till a negetaive value is entered or cancel is hit
let amount = parseInt(window.prompt("Enter the amount"));
console.log("The amount entered is " +amount);

let totalAmount = 0; //consist of total profit amount value

while(amount > 0 && amount !== NaN){
    
    totalAmount = totalAmount+ amount;
    console.log("The total after an entry " +totalAmount);
    amount = parseInt(window.prompt("Enter the amount"));
    console.log("The amount entered is " +amount);

}
console.log("\n \nThe total profit is: "+totalAmount + " INR");