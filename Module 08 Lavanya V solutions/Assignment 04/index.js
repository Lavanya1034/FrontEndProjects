//divisible of number
//get input from user
let input = window.prompt("Enter the nos");

//function to find divible or not
function divide(inp1,inp2){
    console.log(`input = ${inp1},${inp2}`)
    if(inp1 % inp2 === 0){
        return "Completely divisible!";
    }else{
        return "Not divisible!";
    }
}

//handling edge cases for input situation too to inform user if anything goes wrong
//same way we do for function

if(!input){
    console.log("Input is not entered and cancelled");
}else{
    let input1 = input.split(",")
    let no1 = input1[0];
    let no2 = input1[1];
    //call function to find the no divisible or not
    console.log(divide(no1,no2));
}
    





























































































































































