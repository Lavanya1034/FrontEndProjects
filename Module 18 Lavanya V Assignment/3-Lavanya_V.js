//Move Element to the End


//insertion sort

//time complexity for this code is O(n^2)-as 2 for loops are executed.
//Space Complexity for this code is O(1).- Only auxillary space (currentVal) is used 
//                                         and array is mutated itself.


function moveNo(arr1,moveNum){
    if(!arr1 || !moveNum){
        return "Input is missing";
    }else{
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

}

console.log(moveNo([2, 1, 2, 2, 2, 3, 4, 2],2));





// let arrToMove =  [2, 1, 2, 2, 2, 3, 4, 2];
// let move = 2;

// //using Bubble sort algorithm

// function moveNo(arr,moveNum){
//     let end =arr.length-1; 
//     for(let i=0;i<arr.length && i<end ;i++){
//         if(arr[i]==moveNum){     
//             for(let j=end;j>=0;j--){
//                 if(arr[j]!==2 && i<j){
//                     let temp =arr[j];
//                     arr[j]=arr[i];
//                     arr[i]=temp;
//                     end--;
//                     break;
//                 }
//             }
//         }
//     }
//     return arr;
// }

// console.log(moveNo(arrToMove,move))





