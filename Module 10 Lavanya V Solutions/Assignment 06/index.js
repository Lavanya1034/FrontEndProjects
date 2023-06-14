//modify array and display old and new array

let array =  [1, 2, 3, 4, 5];

function updateArray(oldArray,updateFunc){
    //edge case handling
    if(oldArray.length <= 0){
        console.log("Array is empty")
    }else if(!oldArray){
        console.log("input is missing")
    }else{
        console.log("oldArray ---> "+oldArray)
        //modifying the current array- anyway filter will not work for empty array
        //if input array is empty , filter will return empty array
        let newArray = oldArray.filter((element)=>element<4);
        updateFunc(newArray);
    }
    
}

//this function prints the modified array- used arrow function 
let modifyFunc = modifiedArray => console.log("new updated array(filtered elements less than 4) ---> "+modifiedArray); 

//calling the func
updateArray(array,modifyFunc)