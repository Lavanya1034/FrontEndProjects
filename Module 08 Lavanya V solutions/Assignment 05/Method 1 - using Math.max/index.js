//largest 3 elements in array

//get the input
let input=window.prompt("Enter the numbers to be sorted");

//function to sort in descending order using Math.max
function sort(arrayToSort){
        
    if(!arrayToSort){
        return "Input is missing";
    }else if(!arrayToSort.length){
        return "Array is empty"
    }else{
        let descArray=[];//for descending sorted array
        for(let i=0;i=arrayToSort.length;i++){
            let maxNo = Math.max(...arrayToSort);
            let index = arrayToSort.indexOf(maxNo);
            descArray.push(maxNo);
            arrayToSort.splice(index,1);
            i=0;
        }
        return descArray;          
    }        
    
  }

//handling edge cases for input situation too to inform user if anything goes wrong
//same way we do for function
if(!input){
    console.log("Input is not entered");
}else{
    //split the string to array
    let inputArray = input.split(",");

    //convert to number
    let splitArray = inputArray.map(Number);

    //get the copy of array for updating
    let numArray = Array.from(splitArray);

    //call function to sort
    let out = sort(numArray);
    console.log(`${out[0]},${out[1]},${out[2]}`)
}
    































































































































































