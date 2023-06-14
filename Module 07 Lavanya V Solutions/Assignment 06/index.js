//group the goods, category wise
const goods = [
    ["Apples", "fruit"],
    ["Milk 3.2%", "dairy products"],
    ["Potato", "vegetables"],
    ["Brinjal", "vegetables"],
    ["Mango", "fruit"],
    ["Cheese", "dairy products"]
 ]
//create a copy of array
let goodsCopy = Array.from(goods)

//create 3 arrays to store 3 category items
let fruitArray=[];
let dairyArray =[];
let vegetablesArray =[];

goodsCopy.filter(category); //calling filter method to filter items based on category
// console.log(fruitArray);
// console.log(dairyArray);
// console.log(vegetablesArray);

//the same can also be done using for of loop
function category(categ){
    
    if(categ[1]==="fruit"){
        return fruitArray.push(categ[0]);
    }else if(categ[1]==="dairy products"){
        return dairyArray.push(categ[0]);
    }else if(categ[1]==='vegetables'){
        return vegetablesArray.push(categ[0]);
    }
}

//print the items based on categories
//fruit category
for(let i=0;i<fruitArray.length;i++){
    if(i===0){console.log(`FRUIT`)};
    console.log(fruitArray[i]);
}
//dairy category
for(let j=0;j<dairyArray.length;j++){
    if(j===0){console.log(`\nDAIRY PRODUCTS`)};
    console.log(dairyArray[j]);
}
//vegetables category
for(let k=0;k<fruitArray.length;k++){
    if(k===0){console.log(`\nVEGETABLES`)};
    console.log(vegetablesArray[k]);
}
