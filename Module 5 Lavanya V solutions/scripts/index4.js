//Assignment 4
//Accepts a word and reverse it

//Get the input word
let inp1 = [];
inp1 = window.prompt("Enter the word");
console.log(inp1);

//change all into lowercase
inp1 = inp1.toLowerCase(inp1);

//Reverse the word

//first split the word into array
let inp2 = inp1.split("");


//reverse the word
inp2 = inp2.reverse();


//first letter caps
inp2[0] = inp2[0].toUpperCase();


//join the word from array
inp2 = inp2.join("");
console.log(inp2);