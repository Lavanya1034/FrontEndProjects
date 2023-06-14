//Assignment 6
//accepts 3 strings and find the presence of second string in first string and replace with third string.

//get the first string
let str1 = window.prompt("Enter the string1");
console.log(str1);

//get the second input
let str2 = window.prompt("Enter the second input");
console.log(str2);

//get the third input
let str3 = window.prompt("Enter the third input");
console.log(str3);

//check whether second input word is in first input word,if so replace with thirsd input word.

let str4=str1.replace(str2,str3);
console.log(`${str4}, where “${str2}” is replaced by “${str3}”.`);
