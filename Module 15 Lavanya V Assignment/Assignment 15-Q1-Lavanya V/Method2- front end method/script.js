//creating a stack

class stack {
  constructor() {
    this.cart = [];
  }

  //adding the product to cart

  addProd(element) {
    this.cart.push(element);
    return;
  }
  
  top() {
    return this.cart[this.cart.length - 1];
  }
  isEmpty() {
    return this.cart.length == 0;
  }

  size() {
    return this.cart.length;
  }

  remove() {
    let len = this.size();
    for (let i = 0; i < len; i++) {
      console.log("Product removed from cart  = " + this.cart.pop());
      if (!this.isEmpty()) {
        console.log("Now the product at top of stack is : " + this.top());
      } else {
        console.log("The cart is empty now");
      }
    }
    return;
  }

}
//creating a stack

let orders = new stack();
let proList = document.getElementById("proList");

//get the products from user

let addToCart = document.getElementById("add");
let product = document.getElementById("prod");
let checkOut = document.getElementById("checkOut");

addToCart.addEventListener("click", () => {
  orders.addProd(product.value);
  console.log("cart contains = ");
  console.log(orders.cart)
  console.log("Now the top pointer is at : "+ orders.top());
  let content = "";
  orders.cart.forEach((pro) => {
    let eachPro = `<li>${pro}</li>`;
    content += eachPro;
  });
  proList.innerHTML = content;
});

checkOut.addEventListener("click", () => {
    if(!orders.isEmpty()){
        orders.remove();
        console.log("cart contains after checkout = ");
        console.log(orders.cart);
         proList.innerHTML = "";
    }else{
        console.log("No Products in cart to checkout");
    }
  
});
