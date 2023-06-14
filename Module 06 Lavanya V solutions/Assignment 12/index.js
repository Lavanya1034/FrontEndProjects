//Fibonacci Numbers
//get the number
let num = parseInt(window.prompt("Enter the number"));
console.log(num);

//calculate the fibonacci series from 1 till the given no

//store the series into array
let fibArr = [];
fibArr[0] = 0;
//console.log(fibArr[0]);
fibArr[1] =1;// as first 2 fibonacci series are 0 and 1

let  i = 1 ;

while(fibArr[i] < num){
    //console.log(fibArr[i])

    i = i +1; //increement to index 2 as first 2 values are already set as 0 and 1  
    
    fibArr[i] = fibArr[i-1] + fibArr[i-2];
}

console.log(fibArr[i-1]);// in ques, mentioned to display one number preceeding
//to the given number.

//now the number is found , so calculate the next suceeding fibonacci series number 
//for the given number as per question

i = i +1;   // increement the index as 'i' index, and the value in this place 
//either equal or greater than the given number

fibArr[i] = fibArr[i-1] + fibArr[i-2]; //calculating suceeding number in series
console.log(fibArr[i]);
