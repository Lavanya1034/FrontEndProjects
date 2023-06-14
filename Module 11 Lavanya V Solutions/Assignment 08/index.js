//Assignment 8

//Write a JavaScript function findMostExpensiveCar to return most expensive car 
//for given car objects. Car object has key as name of car and value as price of
// car.


//car object
let car = {
    'hyundai': 35000, 
    'tesla':100000, 
    'MG': 80000
}
console.log(car)

//method1- using extracting keys and values of ob and comparing 

function findMostExpensiveCar(cars){

    let key = Object.keys(cars)
    let value = Object.values(cars)

    //to sort - create a deep copy of array using spread operator 
    let sortedValue =[...value]
    sortedValue.sort((a,b)=>b-a)//first value is highest price

    for(let i=0;i<value.length;i++){
        if(value[i]===sortedValue[0]){
            console.log(`The most expensive car is ${key[i]} `)
        }

    }
}

findMostExpensiveCar(car)


//method 2 - using destructing  obj


// const{hyundai,tesla,MG} = car;
// function findMostExpensiveCar(...cars){
    
//     cars.sort((a,b)=>b-a)
//     if(hyundai === cars[0]){
//         return "The most expensive car is hyundai ";
//     }else if(tesla === cars[0]){
//         return "The most expensive car is tesla ";
//     }else{
//         return "The most expensive car is MG ";
//     }
// }

// console.log(findMostExpensiveCar(hyundai,tesla,MG));


