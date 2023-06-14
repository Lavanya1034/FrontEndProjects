//Compares the promo code

//get the promo code
let promo;

//compare the promo code for match
do{
    promo= window.prompt("Enter the promo code");
    console.log(promo); 
    if(promo ==="HOLIDAYS22"){
        console.log("10% discount has been applied");
        break;
    }
    else{
        console.log("Incorrect!");
    }

}while(promo);