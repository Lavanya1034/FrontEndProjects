//to check teh array no is even or not
let arrayInput = [2, 4, 6, 5, 8, 7, 1, 9, 39, 22, 13, 40, 55];


//inner function 
let check = arrayToCheck => arrayToCheck.forEach((element)=>{
    if(element%2==0){
        console.log(`The array number ${element} is an even number`)
    }else{
        console.log(`The array number ${element} is an odd number`)
    }
})


//outer function
let evenOrOdd = (arrayGiven,checkFunc)=>checkFunc(arrayGiven);

//Main function
evenOrOdd(arrayInput,check)