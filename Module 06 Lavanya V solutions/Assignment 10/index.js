//Deposit calculator

//get the principal amount
let principal = window.prompt("Enter the principal amount");
console.log(principal);

//get the no of years
let timePeriod = parseInt(window.prompt("Enter the no of years"));
console.log(timePeriod);

//rate of interest is mentioned as 9%
let roi = 9; //given in percentage, in formular it is divided by 100


//calculate the compound interest
let compoundInterest = principal * ((1+(roi/100))**timePeriod);//math.pow 
//is equivalent to exponential (math.pow() equival to (**))
//the above exp can be written as 
// CI=principal * Math.pow((1+(roi/100)),timePeriod)
console.log(`Your balance is ${compoundInterest.toFixed(2)} after 3 years.`);