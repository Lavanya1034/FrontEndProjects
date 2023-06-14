//sorting
//method2
//get 10 integer random number

let array = [];
for(let i=0;i<10;i++){
    let no = Math.floor(Math.random()*(Math.floor(10)-Math.ceil(-10))+Math.ceil(-10))+1;
    array.push(no);
}
console.log(`Generated set -  [${array}]`);
//sort using for loop by find the max number of 2 nos
let descArray=[];
let loopLen = array.length;
for(let k=0;k<loopLen;k++){
    let maxNo = Math.max(...array);
    descArray.push(maxNo);
    let index=array.indexOf(maxNo);
    array.splice(index,1);
    
}
console.log(`Sorted in descending order set - [${descArray}]`);