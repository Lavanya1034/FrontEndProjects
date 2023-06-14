//method1 - duplicates the array- using concat method

let array = [1, 2, 3, 4, 5];

//creating copy of array and combinig  2 arrays
function duplicate(inputArray){
    //create a copy of array(duplicates)
    let duplicateArray = Array.from(inputArray);
    //concatenate old and duplicated array
    return inputArray.concat(duplicateArray);
}


console.log("using concat method")
console.log(duplicate(array));


//------------------------------------------------------------------------------------------

//method2 - using flatmap() method

let array2 = [1, 2, 3, 4, 5];

function duplicate2(inputArray2){
    //create a copy of array using map and flat to return in single array
    let newArray = inputArray2.flatMap((element)=>[element,element]);
    return newArray;
}


console.log("using flatmap method")
console.log(duplicate2(array2));

