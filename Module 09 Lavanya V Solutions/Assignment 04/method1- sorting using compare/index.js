//method1- using array sort method-array of objects and sorting

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

//function to sort
function sorting(a,b){
    if(a.firstName<b.firstName){
        return -1;
    }
    if(a.firstName>b.firstName){
        return 1 ;
    }
    return 0;
}

//array sort by calling function to compare
let newArray = arrayOfObjects.sort(sorting)

for(let i=0;i<newArray.length;i++){
    console.log(`This is ${newArray[i].firstName} ${newArray[i].lastName}, aged ${newArray[i].age} joined the company on ${newArray[i].joinedDate}`)
}
