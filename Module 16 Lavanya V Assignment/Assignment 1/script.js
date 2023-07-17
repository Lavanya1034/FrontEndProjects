//calculating discount on total bill

//Pseudo code 

//Start
//Get the bill amount from user
//Convert the input bill amount to number type using parseInt.
//Define a variable for discount amount and initialize with zero.
//If condition to check (bill amount) is true, if true do following checks.
//  If bill amount is greater than five thousand,
//      Apply a discount of twenty percentage to the original bill amount.
//          (calculation involves bill amount multiplied by (20/100)).
//  Else if bill amount is greater than three thousand,
//      Apply a discount of fifteen percentage to the original bill amount.
//          (calculation involves bill amount multiplied by (15/100)).
//  Else if bill amount is greater than two thousand,
//      Apply a discount of ten percentage to the original bill amount.
//          (calculation involves bill amount multiplied by (10/100)).
//  End if.
//  Then subtract the discount amount from original bill amount if any dicounts applied.
//  (so if no discount is applied, as discount variable is initialized with 0, the original bill amount stays).
//  Display the final amount.
//End if(outer If).
//End.


//printing the pseudocode

console.log("Pseudo code for the algorithm given.");
console.log("------------------------------------");
console.log("Start");
console.log("Get the bill amount from user.");
console.log("Convert the input bill amount to number type using parseInt.");
console.log("Define a variable for discount amount and initialize with zero.");
console.log("If condition to check (bill amount) is true, if true do following checks.");
console.log(`  If bill amount is greater than five thousand,`);
console.log(`      Apply a discount of twenty percentage to the original bill amount.`);
console.log(`          (calculation involves bill amount multiplied by (20/100).`);
console.log(`  Else if bill amount is greater than three thousand,`);
console.log(`      Apply a discount of fifteen percentage to the original bill amount.`);
console.log(`          (calculation involves bill amount multiplied by (15/100)).`);
console.log(`  Else if bill amount is greater than two thousand,`);
console.log(`      Apply a discount of ten percentage to the original bill amount.`);
console.log(`          (calculation involves bill amount multiplied by (10/100)).`)
console.log(`  End if.`)
console.log(`  Then subtract the discount amount from original bill amount if any dicounts applied.`);
console.log(`  (so if no discount is applied, as discount variable is initialized with 0, the original bill amount stays).`);
console.log(`  Display the final amount.`);
console.log(`End if(outer If).`);
console.log("End.");
console.log("--------------------------------------------------");



//get the bill amount from user

amnt= document.getElementById("amnt");
btn=document.getElementById("btn");
totalAmnt=document.getElementById("totalAmnt");

btn.addEventListener("click",()=>{
    
    let billAmnt = parseInt(amnt.value);
    let disAmnt=0;
    if(billAmnt){
        console.log(`The bill amount entered is ${billAmnt}`)
        if(billAmnt>5000){
            //applying 20% discount
            disAmnt= billAmnt*0.2;
            console.log(`The discount applicable is 20%`);
        }else if(billAmnt>3000){
            disAmnt= billAmnt*0.15;
            console.log(`The discount applicable is 15%`);
        }
        else if(billAmnt>2000){
            disAmnt= billAmnt*0.10;
            console.log(`The discount applicable is 10%`);
        }
        billAmnt= billAmnt-disAmnt; 
        totalAmnt.textContent = `The total bill amount is ${billAmnt.toFixed(2)}`;
        console.log(`The total bill amount is ${billAmnt.toFixed(2)}`);
    } 
    
})