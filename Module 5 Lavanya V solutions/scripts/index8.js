//Assignment 8
//match the input string and find the name of animals and birds in the given string

//get the input
let inptSt = window.prompt("Enter the input string");

//set a array of animals 
let animalsBirds = /\b(cat|dog|parrot|squirrel|peacock|rabbit|monkey|elephant)\b/gi;

//now match the input string to find whether animals, birds name are in input string, if so 
//seperate those names and print.

let output = inptSt.match(animalsBirds); //output of match function will be array.

// console.log(output[0]);//if wan to print each output in seperate lines,console sep
// console.log(output[1]);

//convert the array output to string
let output1 = output.join();


//print the output in capital letters.
console.log(output1.toUpperCase());


