//power calculation
//get input from user
let input=window.prompt("Enter the numbers to be sorted");

//Method 2: using Math.pow method
function power(inp1,inp2){
    console.log(`${inp1},${inp2}`);
    let value = Math.pow(inp1,inp2);
    return value;
}

//handling edge cases for input situation too to inform user if anything goes wrong
//same way we do for function
if(!input){
    console.log("Input is not entered");
}else{
    //split the string to array
    let inputArr = input.split(",");

    //convert to number
    let splitArray = inputArr.map(Number);

    //get the 2 input nos
    let no1 = splitArray[0];
    let no2 = splitArray[1];

    //call function to calculate power using in-built  function
    console.log(power(no1,no2));

    
}


