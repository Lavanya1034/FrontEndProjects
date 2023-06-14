//Assignment 1
//Celsius to Fahrenheit

//Get the input celsius value
let Celsius = parseInt(window.prompt("Enter the Celsius value"));
//print the celsius value got as input
console.log(Celsius);
let Fahrenheit = 0;
//convert celsius to Fahrenheit
Fahrenheit=(Celsius * (9/5)) + 32;
//print the Fahrenheit
console.log(Fahrenheit);

console.log(`${Celsius} Degree C is equal to ${Fahrenheit}F`);
