//To find the missing number in array

//get array of numbers

let input = window.prompt("Enter the array of numbers");

//function to find missing no
function missing(missNo){
    if(!missNo){ //handling edge cases
        return "Input is missing" 
    }else if(missNo.length<=0){
        return "Array is empty";
    }else{
        for(let i=0;i<missNo.length-1;i++){
            if(missNo[i+1]=== (missNo[i]+1)){
                continue;
            }else{
                //position means index+1 as index starts with 0 and position starts from 1
                return `[${missNo[i]+1},${(missNo.indexOf(missNo[i]))+2}]`
            }
        }
        return "Numbers are in sequencial order"
    

    }
    
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
    let missingNo = missing(arrayInput); 
    console.log(missingNo);


}


//method2 -written for future reference - finding missing no using reduce method
// //using reduce function only to find missing no
// function missing(missNo){
//     let n = missNo.length+1;//one no is missing so to finc actual sum add one length

//     let sum = (n*(n+1))/2;//actual value for sequence
//     let sequenceValue = missNo.reduce((acc,cur)=>acc+cur,0);//our given input sum
    
//     console.log(sequenceValue)
//     console.log(sum)
//     return sum -sequenceValue;
    
// }


