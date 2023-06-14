//arithmetic mean
const numbers = [
    [171, 166, 703, 197, 139],
    [360, 314, 437, 367],
    [310, 280, 970],
    [0, 14, 1400, 424],
    [109, 311, 9, 13, 314, 210, 30]
]

let mean =[];//to store all mean values
for(const numb of numbers){
    let sum =0;
    for(let i=0;i<numb.length;i++){
        sum += numb[i];   
    }
    //calculate mean 
    mean.push(sum/numb.length);
}


//find the index of largest no

let index= mean.indexOf(Math.max(...mean));


//console.log(`set with largest arithmetic mean \n${numbers[index]}`)
console.log(numbers[index])