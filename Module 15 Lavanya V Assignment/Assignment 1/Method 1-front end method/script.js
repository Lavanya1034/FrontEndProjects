//creating a stack

class stack{
    constructor(){
        this.cart = [];
    }

    //adding the product to cart

    addProd(element){
        this.cart.push(element);
        return;
    };

    remove(){
        let len = this.cart.length;
        for(let i=0;i<len;i++){
            console.log("Order of Product removed from cart  = "+this.cart.pop());
        } 
        return
    }
}
//creating a stack

let orders = new stack();
let proList = document.getElementById("proList")

//get the products from user

let addToCart = document.getElementById("add");
let product = document.getElementById("prod");
let checkOut = document.getElementById("checkOut");

addToCart.addEventListener("click",()=>{
    orders.addProd(product.value);
    console.log("cart contains = "+orders.cart)
    let content = "";
    orders.cart.forEach((pro)=>{
        let eachPro=`<li>${pro}</li>`;
        content +=eachPro;

    })
    proList.innerHTML=content;

});

checkOut.addEventListener("click",()=>{
    
    orders.remove();
    console.log("cart contains after checkout = ");
    console.log(orders.cart);
    proList.innerHTML="";
    
})
