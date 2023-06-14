//get the number between 1-100 and print from 1 to entered number

//get the number
let num = parseInt(window.prompt("Enter the number between 1-100"));
console.log(num);

//check the number between 1- 100 and print the numbers from 1 to the given number.

if(num >= 0 && num <= 100){
    for(let i =1; i<= num; i++){
        console.log(i);
    }
}else{
    alert("The number is not in the [0, 100] interval.");
}