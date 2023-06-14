//sum of nos using- reduce method

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = array.reduce((acc,cur)=> acc+cur,0);

console.log("The sum of all numbers in array is " +sum)