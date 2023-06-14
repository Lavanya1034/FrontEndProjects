//tax calculation

//Assignment 1

//Write a javascript function calculateNetSalary to calculate employee’s
// net salary after taxes. Function should take employee object as parameter and 
//percent of taxes to be deducted. If percent of tax is not passed, 
//use 30% as the default amount.

//get the details from user to create object
let id = parseInt(window.prompt("Enter the ID"));
let totalSalary = parseInt(window.prompt("Enter the total salary"));
let dept = window.prompt("Enter the department");

//get the percentage of tax
let percentageTax = parseInt(window.prompt("Enter the tax percentage"));

//create the employer obj

let empObj = {
    "id":id,
    "totalSalary":totalSalary,
    "dept":dept
}


//function to calculate tax
function calculateNetSalary(empDetails,tax=0.3){
    console.log(empDetails);
    console.log("Tax percentage "+tax*100+"%");
    const{totalSalary}= empDetails;
    return totalSalary-(totalSalary*tax);
}

//converting tax amount
let taxAmount;
if(percentageTax>0){ //only if tax amount is given the tax value is sent in argument
    taxAmount = percentageTax/100;
}

let res = calculateNetSalary(empObj,taxAmount);

console.log("Net salary after taxable amount is "+ res);