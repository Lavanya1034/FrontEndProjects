//Assignment 9

//Write a JavaScript function find2NumberSum to find 2 numbers from a given 
//array, such as sum of 2 numbers is equal to a given target. 
//Function takes 2 input params, target and an array of numbers. 
//Try to achieve time complexity of O(n).  

function find2NumberSum(target,array){
    for(let i=0;i<array.length;i++){
        let addNos = array.filter((Element)=>array[i]+Element===target)
        if(addNos.length>0){
            return res = addNos.flatMap((Element)=>[array[i],Element])
            break;
        }
    }
}


console.log(find2NumberSum(-5,[7, -5, 2, 0, 1, 14, 4]));
