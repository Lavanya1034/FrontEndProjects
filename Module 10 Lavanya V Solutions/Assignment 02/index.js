//function with 2 parameters

//inner function
function secFunc(){
    return 10;
}

//outer function
let addNum = function(int,secInpFunc){
    return int + secInpFunc();
}

let res = addNum(2,secFunc)
console.log("The sum is "+res)