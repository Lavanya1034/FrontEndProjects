//method2- using rearranging - array of objects and sorting

let arrayOfObjects = [
    {
        firstName : "John",
        lastName  : "Apple",
        age       : 27,
        joinedDate: "December 15, 2017"
    },
    {
        firstName : "Ana",
        lastName  : "Rosy",
        age       : 25,
        joinedDate: "January 15, 2019"
    },
    {
        firstName : "Zion",
        lastName  : "Albert",
        age       : 30,
        joinedDate: "February 15, 2011"
    }
]
//copy for array to rearrange original array
let newArray =Array.from(arrayOfObjects);

// notes-console.log(newArray)// if we console here, here itself the array gets sorted
// because even if we create copy, both the arrays refernce to same objects.
// so when we sort the copy array, the original array also gets sorted.. Thats
// wat here itself the array gets sorted.

for(let i=0;i<arrayOfObjects.length;i++){
    if(arrayOfObjects[i].firstName<newArray[0].firstName){
        newArray[2]=newArray[1];
        newArray[1]=newArray[0]
        newArray[0]= arrayOfObjects[i];
    }else if(arrayOfObjects[i].firstName<newArray[1].firstName){
        newArray[2]=newArray[1];
        newArray[1]=arrayOfObjects[i];
    }else{
        newArray[2]=arrayOfObjects[i];
    }
}

//display in ascending order

for(let i=0;i<newArray.length;i++){
    console.log(`This is ${newArray[i].firstName} ${newArray[i].lastName}, aged ${newArray[i].age} joined the company on ${newArray[i].joinedDate}`)
}


