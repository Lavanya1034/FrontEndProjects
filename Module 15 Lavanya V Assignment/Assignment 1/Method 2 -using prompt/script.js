//product cart

//creating an stack to store the product details

class stack {
  constructor() {
    this.cart = [];
  }

  //to add products to cart
  add(element) {
    this.cart.push(element);
    return;
  }

  //to remove products during checkout
  remove() {
    let len = this.cart.length;
    for (let i = 0; i < len; i++) {
      console.log("Order of Product removed from cart  = " + this.cart.pop());
    }
    return;
  }
}

//create a stack
let orders = new stack();

let option,response=0;
do {
  //get the input from user
  option = parseInt(
    window.prompt(
      `Enter the option either to add products to cart or to checkout \n1. Add Products to cart. \n2. Checkout`
    )
  );

  if (!isNaN(option)) {   //edge case handling
    if (option == 1) {
      let inp;
      do {
        inp = parseInt(
          window.prompt(
            `Enter the products need to be added \n1. Milk \n2. Chocolate \n3. Flowers \n4. Hair care \n5. Skin Care \n6. Press Back to Checkout`
          )
        );
        let prod = "";
        switch (inp) {
          case 1:
            prod = "Milk";
            break;
          case 2:
            prod = "Chocolate";
            break;
          case 3:
            prod = "Flowers";
            break;
          case 4:
            prod = "Hair care";
            break;
          case 5:
            prod = "Skin care";
            break;
          case 6:
            break;
        }

        //add product to cart
        if (inp !== 6) {
          if (!orders.cart.includes(prod)) {
            orders.add(prod);
            console.log("Product added to cart is = " + prod);
            console.log("The cart contains = ");
            console.log(orders.cart);
          } else {
            alert("product already added in cart");
          }
        }
      } while (inp !== 6);
    }

    if (option == 2) {
      if (orders.cart.length > 0) {
          response = parseInt(
          window.prompt(
            `The cart has the following products \n${orders.cart}\npress 1 to confirm Checkout`
          )
        );
        if (response == 1) {
          orders.remove();
          console.log("Checkout is done");
          console.log("cart contains after checkout = ");
          console.log(orders.cart);
        }
      } else {
        alert("No product is added inside cart to checkout");
      }
    }
  }
} while (response !== 1 && !isNaN(option));
