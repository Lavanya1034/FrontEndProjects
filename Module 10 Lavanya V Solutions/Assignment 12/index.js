//list of friend to do operation


const friendsArray = [

{ id: 1, name: "Abhay", amount: 2000 },
{ id: 2, name: "Bunty", amount: 3000 },
{ id: 3, name: "Chinki", amount: 5900 },
{ id: 4, name: "Dimple", amount: 1000 },
{ id: 5, name: "Erica", amount: 2370 }
];

//task1
//sum of all amount by using reduce
let SumNumbers = inputArray=>inputArray.reduce((acc,cur)=>acc+cur.amount,0)

//call the function
let res = SumNumbers(friendsArray)
console.log(`The sum of amounts in array is ${res}`);

//task2
//sorting in ascending order

//copy of array to sort
let forAsc = Array.from(friendsArray)
let ascSort = inpArray =>inpArray.sort((a,b)=>a.amount-b.amount)

let ascending = ascSort(forAsc)//ascSort is the function to sort in ascending order

console.log("The array in ascending order considering amount values")
console.log(ascending)

//task3
//sorting in descending order

//copy of array to sort- (also we can use)
let forDesc = Array.from(friendsArray)
let desSort = inpArraydes =>inpArraydes.sort((a,b)=>b.amount-a.amount)

let descending = desSort(forDesc)//desSort is the func to sort in descending order
console.log("The array in descending order considering amount values")
console.log(descending)

// //task4
// //returns the object whose amount is largest
//function to find the object with largest amount
let largeObj = arrayToCheck =>{

    //initially setting first element as large and then after comparing will reassign
    let large = arrayToCheck[0];

    arrayToCheck.forEach(element => {
        if(element.amount>large.amount){
            large = element;
        }
    });
    return large;
}



console.log("The Object with largest amount is ")
console.log(largeObj(friendsArray));


// //task5
// //returns the object whose amount is smallest
//function to find the object with smallest amount
let smallObj = arrayToCheckSmall =>{

    //initially setting first element as small and then after comparing will reassign
    let small = arrayToCheckSmall[0];

    arrayToCheckSmall.forEach(element => {
        if(element.amount<small.amount){
            small = element;
        }
    });
    return small;
}



console.log("The Object with smallest amount is ")
console.log(smallObj(friendsArray));

