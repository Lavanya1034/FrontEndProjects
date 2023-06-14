//find the duplicate in array

//get array of numbers

let input = window.prompt("Enter the array of numbers");

//find the first duplicate number in the given array
function duplicate(inpArray){
    let repeatNumber;
    let repeatIndex;
    for(const inp of inpArray){
        let count =0;
        for(let i=0;i<inpArray.length;i++){
            if(inpArray[i]===inp){
                count++;
                if(count===2){
                    repeatNumber = inp;
                    repeatIndex = i;
                    break;
                }
            }
        }
        if(count>1){break;}
    }
    return `The duplicate number is ${repeatNumber}, and it’s position in the list is ${repeatIndex+1} with index of ${repeatIndex}.`;

}

//handling edge cases for input situation
if(!input){
    console.log("Input is not entered");
}else{
    //split and change to array
    let array = input.split(",");

    //change to number
    let arrayInput = array.map(Number);
    console.log("input array of nos are "+arrayInput);

    //call function to find the missing number
    console.log(duplicate(arrayInput)); 
}
