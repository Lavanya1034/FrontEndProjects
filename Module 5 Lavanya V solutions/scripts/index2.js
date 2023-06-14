//Assignment 2
//Accepts string and print string in lowercase,length of string and first,last characters of string.

//Get the input string
let String1 = window.prompt("Enter the input string");

//Convert the string to lowercase and store to new variable
let strLower = String1.toLowerCase();
console.log(strLower);

//Print the number of characters in string
console.log(strLower.length);

//store the string length to strlength
let strLength = strLower.length;

//Print the first and last character of String
//print the first character of string
console.log(strLower[0]);

//print the last character of string
console.log(strLower[strLength-1]);
