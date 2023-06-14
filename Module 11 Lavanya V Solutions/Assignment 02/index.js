//Assignment 2

//Write a JavaScript findSecondLargestNumber function 
//to find second largest number in a given array. Function needs to take
// array of numbers as input parameter.

//second largest no in array

//get the input array of nos
let input = window.prompt("Enter the array of nos");

//convert the string into array of nos

let array = input.split(",").map(Number);
console.log("input array "+array);

//function to sort in descending order and find second largest no
function findSecondLargestNumber(arrayInp){
    arrayInp.sort((a,b)=>b-a);
    return arrayInp[1];
    

}
let result = findSecondLargestNumber(array);
console.log("Second Largest Number "+result);