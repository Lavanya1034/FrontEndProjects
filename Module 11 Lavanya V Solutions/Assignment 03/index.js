//Assignment 3

//Write a JavaScript function joinArray to concat two array of objects together
// without using + operator and push functions. Function should take 2 input
// parameters for 2 array of objects, object can hold information (id, name). 
//Function should concat both of them so that result is single array with contents of both arrays.

//concatenation of array

array1 = [
    {
        name:"David",
        id:1
    },
    {
        name:"Jon",
        id:2
    }
]
array2 = [
    {
        name:"Ram",
        id:4
    },
    {
        name:"Mohan",
        id:3
    }
]

//function to concat using spread operator 
function concatArray(arr1,arr2){
    return [...arr1,...arr2];
}
console.log(concatArray(array1,array2))