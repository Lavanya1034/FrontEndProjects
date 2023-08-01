//Move Element to the End
//insertion sort algorithm is applied

//time complexity for this code is O(n^2)-as 2 for loops are executed.("arr1.length" times)
//Space Complexity for this code is O(1).- Only auxillary space (currentVal) is used 
//                                         and array is mutated itself.

let arr = [2, 1, 2, 2, 2, 3, 4, 2];
let move = 2;

function moveNo(arr1,moveNum){
    if(!arr1 || typeof moveNum !== 'number'){
        return "Input is missing"; //edge case handling
    }else{
        if(arr1.includes(moveNum)){
            for(let i=arr1.length-2;i>=0;i--){
                if(arr1[i]===moveNum){
                    for(let j=i+1;j<arr1.length;j++){
                        if(arr1[j]!==moveNum){
                            let currentVal=arr1[j];
                            arr1[j]=arr1[j-1];
                            arr1[j-1]=currentVal;
                        }                  
                    }     
                }    
            }
            return arr1;

        }
        else{
            return "The give number to move is not present in the given array";
        }
        
    }   
}
console.log("The input array is :");
console.log(arr);
console.log(`The number need to be moved to end is : ${move}`);
console.log("The result is : ");
console.log(moveNo(arr,move));



