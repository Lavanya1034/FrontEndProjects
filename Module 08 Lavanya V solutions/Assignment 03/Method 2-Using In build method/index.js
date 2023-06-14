//Method 2 - can be done using built-in methods like Math.min to find the min
//value in array input

let input = window.prompt("Enter the nos");

//function to find minimum
function findmin(inp1,inp2){
    if(!inp1 || !inp2){
        console.log("Input is not entered and cancelled");
    }else{
    const output = Math.min(inp1,inp2);
    return output;
    }

}

//handling edge cases for input situation too to inform user if anything goes wrong
//same way we do for function
if(!input){
    console.log("Input is not entered and cancelled");
}else{
    let input1 = input.split(",");

    let no1 = Number(input1[0]);
    let no2 = Number(input1[1]);
    console.log(`${no1},${no2}`);

    //call the function to find the minimum no using Math function
    console.log(findmin(no1,no2));
}
    

