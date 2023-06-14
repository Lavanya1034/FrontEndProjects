//to create dynamic product list based on user input

//get the no of products from user

let productCount = parseInt(window.prompt("Enter the number of products"));

//iterate through the no of product list and create array of objects

//create an empty array to add objects based on user input

let arrayOfProducts = [];


for(let i=0;i<productCount;i++){
    //get the name and quantity of product from user
    let name = window.prompt("Enter name of Product");
    let quantity = window.prompt(`Enter quantity of ${name}`);
    let obj = {}
    //add the object with name and quantity properties to array as 
    //<productName> : <productQuantity> given in question
    //so create object first
    obj[name]= quantity;
    //push the object into array to create array of objects

    arrayOfProducts.push(obj);
    
}
//iterate through array of objects using foreach loop to print the output

arrayOfProducts.forEach(element=>console.log(`${Object.keys(element)}: ${Object.values(element)}`));
