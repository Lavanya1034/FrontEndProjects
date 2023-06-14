//finding minimum of 2 nos

//get the input nos from user
let input = window.prompt("Enter the nos");

//function miminum
function minimum(inp1,inp2){
    if(!inp1 || !inp2){
        return "input missing";
    }
    else if(inp1>inp2){
        return inp2;
    }else{
        return inp1;
    }
}

//handling edge cases for input situation too to inform user if anything goes wrong
//same way we do for function
if(!input){
    console.log("Input is not entered and cancelled");
}else{
    let input1 = input.split(",");

    let no1= input1[0];
    let no2=input1[1];
    console.log(`${no1},${no2}`)

    //call function to find minimum
    let min = minimum(no1,no2);
    console.log(min);
}

    



