//calculate total cart price

//get the prices
let price;
//let cartPrice =[];
let totalPrice=0

while(price !==0){
    price = parseInt(window.prompt("Enter the price"));
    console.log(price);
    totalPrice +=price;
    //cartPrice.push("price")   
}

//cartPrice.pop() //removes last entry as it will be 0
totalPrice = totalPrice.toFixed(2); //for 2 decimal places

if(totalPrice >20000){
    let discountPrice = totalPrice -(totalPrice*(30/100));
    let roundValue =Math.round(discountPrice);//rounding off
    roundValue = roundValue.toFixed(2); 
    console.log(`The total sum to pay (with the activated discount) is ${roundValue}`);
}else{
    console.log(`The total sum to pay (with the activated discount) is ${totalPrice}`);
}


