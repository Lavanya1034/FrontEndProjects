//largest 3 elements in array

//get the input
let input=window.prompt("Enter the numbers to be sorted");

//function to sort in descending order using mathematical approach
function sort(arrayToSort){
        
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;
    for(let i =0;i<arrayToSort.length;i++){
        if(arrayToSort[i]>firstLargest){
            thirdLargest=secondLargest;
            secondLargest=firstLargest;
            firstLargest = arrayToSort[i];
            
        }else if(arrayToSort[i]>secondLargest){
            thirdLargest=secondLargest;
            secondLargest = arrayToSort[i];
        }else{
        thirdLargest = arrayToSort[i];  

        }

    }
    console.log(`${firstLargest},${secondLargest},${thirdLargest}`);
    
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
    sort(numArray);
}
    
    































































































































































