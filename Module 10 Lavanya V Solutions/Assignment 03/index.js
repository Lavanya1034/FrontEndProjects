//with array as input- creating object with 2 keys

let manufacturers = ['audi', 'BMw', 'ForD', 'mG', 'tata', 'MAHINDRA'];

//function to create objects
function caseSort(cars){

    //creating object using map function to get updated array -
    //returned new array is assigned to keys
    obj = {
        //map method will not work for empty arrays- so error is handled by 
        //returning empty array if input array is empty- but good to handle
        allLowerCase: cars.map(element => element.toLowerCase()),
        allUpperCase: cars.map(element => element.toUpperCase())
        }
    return obj;
}

//function which returns obj

console.log(caseSort(manufacturers))
