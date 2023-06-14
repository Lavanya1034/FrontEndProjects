//sorting
//method1
//get 10 integer random number

let array = [];
for(let i=0;i<10;i++){
    let no = Math.floor(Math.random()*(Math.floor(100)-Math.ceil(-100))+Math.ceil(-100))+1;
    array.push(no);
}

//sorting in ascending order
let sortArray=array.sort();
console.log(`Generated set -  [${sortArray}]`);

//reverse to get descending order sort

let descendingArray = sortArray.reverse();
console.log(`Sorted in descending order set - [${descendingArray}]`);

