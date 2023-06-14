//power calculation
//get input from user
let input=window.prompt("Enter the numbers to be sorted");

//Method 2: using recursive function

function power(base,exp){

    if(exp === 0){
        return 1; //anything power 0 is 1 , so if exp is 0, return 1
    }else{
        return base * power(base,exp-1); //recursive
    }  
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

    //call function to calculate power using recursive method
    console.log(`${no1},${no2}`);
    console.log(power(no1,no2));
}
    
