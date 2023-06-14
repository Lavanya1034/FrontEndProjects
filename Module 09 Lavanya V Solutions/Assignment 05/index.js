//object cart price calculation

let cartItems = {
    shampoo: {
        quantity: 5,
        price: 278
    },
    butter: {
        quantity: 4,
        price: 80
    },
    oil: {
        quantity: 2,
        price: 142
    }
 }


 //function to calculate the cart price
function iteration(){

    //get the total no of keys to calculate the object size to iterate over objects
    let keyAll = Object.keys(cartItems)
    
    //calculate the sum 
    let sum = 0;
    let total = 0;

    //iterate through object to calcualte the price 
    for(let i=0;i<keyAll.length;i++){
        total = (cartItems[keyAll[i]].quantity) * (cartItems[keyAll[i]].price);
        sum = sum+total;
    }

    return sum;

}

//calling function for iteration

let output = iteration();
console.log(`Total Cart value is ${output}`);

