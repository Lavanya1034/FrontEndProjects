//Assignment 9
//Find the first and last occurance of first and last letter of given word

//get the first input string
const inpString= window.prompt("Enter the first string");
console.log(inpString);

//get the second word
const word = window.prompt("Enter the word");
console.log(word);

//check first occurance- first letter position
let firstOccStart = inpString.indexOf(word);
console.log(firstOccStart);

//check first occurance - last letter position
//for this find the second word last index number

let lindex = (word.length)-1; //index of last letter of the word

//so when the occurance is found, the length can be added to 
//find the last letter position of the word

let firstOccEnd = firstOccStart + lindex;
console.log(firstOccEnd);

//check last occurrence of the word- first letter position
let lastOccStart = inpString.lastIndexOf(word);
console.log(lastOccStart);

//last occurance - position of last letter of word

let lastOccEnd = lastOccStart + lindex;
console.log(lastOccEnd);



//print the output
console.log(`The position of first and last letter for first occurrence of the word “you” is ${firstOccStart} and ${firstOccEnd}, and the position of letters for its last occurrence is ${lastOccStart} and ${lastOccEnd}.`);

