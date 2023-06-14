//Prime numbers detector

//prime no means divisible by 1 and that same no.
//steps
//1. find not less than or not equal to 1 - prime no(1 is not prime no)
//2. find the square root of number and from 2 till sqruare root value, find 
//whether the given no is divisible. - if so given no is not a prime number.

//get the input number 
let input = parseInt(window.prompt("Enter the number"));
console.log(input);

//check the square root of the number
let sqno = Math.sqrt(input);


//set flag if the number is not a prime number
let flag;

//check the 2 steps mentioned above to find the given number is prime number or not
//step1
if(input <= 1){
    flag = 1;
    
}

//check whether the number is divisible between 2 to square root of the input number.
//step2
for(let i=2; i <=sqno; i++ ){
    if((input % i)==0){
        flag=1;
        //console.log(flag);
        break;
    }
}

if(flag){
    console.log("This number is not prime");
}else{
    console.log("This number is prime");
}