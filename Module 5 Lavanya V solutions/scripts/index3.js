//Assignment 3
//Accept 2 strings and finding first occurrence of second string in first string and concatenating.

//Get string1 and string2
let Str1 = window.prompt("Enter first string");
console.log(Str1);
let Str2 = window.prompt("Enter second string");
console.log(Str2);

//find whether second string present in string 1 and proceed further

console.log(Str1.includes(Str2));

//Assuming it is true, check the first occurence of second string in first string and concatenate the strings.

let firstInd = Str1.indexOf(Str2);


//concatenate the second string with remaining first string from index of occurrence

let Str3 = Str1.slice(firstInd);
//print in capital letters
console.log(Str3.toUpperCase());

//instead it can also be done by having a check for include(using IF condition),
//if the flag sets true proceed else return.

