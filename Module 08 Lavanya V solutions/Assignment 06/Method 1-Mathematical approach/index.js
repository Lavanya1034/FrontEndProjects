//power calculation
//get input from user
let input=window.prompt("Enter the numbers to be sorted");

//Method 1 : using mathematical approach
function power(inp1,inp2){
        
    let res=1; //initialize with 1, if done with 0- multipl of 0 will be always 0

    console.log(`${inp1},${inp2}`);
    for(let i=0;i<inp2;i++){ //multiply till exponent value(say y)
        res = res*inp1;
    }
    return res;

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

    //call function to calculate power using mathematical approach
    console.log(power(no1,no2));

    
}


