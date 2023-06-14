//Assignment 5

//Write a function totalPrice in JavaScript to construct an object with list of 
//orders for given array of items and cost. Find the order with highest cost. 
//Function takes 2 inputs 1st array of items, 2nd array of values. 
//Constructed object should have orders array with key:value pair.

//function to find highest cost

//method1- creating a full obj using the input keys and values and then
//find the highest cost and extracting respective key using filter method

function totalPrice(items,cost){
    //creating obj initially
    let orders = [];
    let obj={};
    for(let i=0;i<items.length;i++){
        orders.push({[items[i]]:cost[i]})      
     }
    obj.orders= orders
    console.log("------Method 1 --------")
    console.log("The Object with all items and cost")
    console.log(obj)   //object created with all keys and values

    //to find the highest value
    cost.sort((a,b)=>b-a)
    let highesValue= cost[0]    

    //extracting the obj with highest value from main obj
    let newArr = orders.filter((Element)=>{
        let val = Object.values(Element)
        for(let j=0;j<val.length;j++){
            if(val[j]===highesValue){
                return Element
            }}})
        
    let highest1Obj={}
    highest1Obj.order = newArr
    return highest1Obj
}
let result = totalPrice(["item1", "item2", "item3"],[200, 400, 260]);
console.log(`The Object with highest cost `)
console.log(result)


//Future reference-to refer similar approaches
// //method2 - creating an obj with highest cost- while creating the array of 
//object- checking for highest cost object and moving that alone in return 
//(method3- also can create obj and find the highest cost and return that index obj)


// function totalPrice(items,cost){
//     let orders = [];
//     let obj={}
//     let highestCost = cost[0]
//     for(let i=0;i<items.length;i++){
//         if(cost[i]>highestCosdt){
//             orders.splice(0,1,{[items[i]]:cost[i]})
//             highestCost=cost[i];
//             obj.orders= orders
//         }
//     }   
       
//     return obj
// }

// let res = totalPrice(["item1", "item2", "item3"],[200, 400, 260]);
// console.log(`The Object with highest cost `)
// console.log(res);

