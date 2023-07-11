//Credit card statement

class queue {
  constructor() {
    this.transactions = [];
  }

  enqueue(balance) {
    this.transactions.push(balance);
    return;
  }
  front() {
    return this.transactions[0];
  }
  rear() {
    return this.transactions[this.transactions.length - 1];
  }
  isEmpty() {
    return this.transactions.length == 0;
  }
  size() {
    return this.transactions.length;
  }

  display() {
    console.log("Credit card statement :");
    for (let i = 0; i < this.size(); i++) {
      let key = Object.keys(this.transactions[i]);
      console.log(`${key[0]}  --> After Debit of ${this.transactions[i][key[1]]}  Available balance is ${this.transactions[i][key[0]]}`);
    }
  }
}

//creating a credit card statement queue

let creditCard = new queue();

let option;
//default CREDIT BALANCE
let credit = 25000;
do {
  //options to purchase,check available balance,view transactions
  option = parseInt(
    window.prompt(
      "Enter the option \n1. Purchase \n2. Check available balance \n3. View Transactions \n4. Done"
    )
  );
  if (option == 1) {
    //get the purchase amount from user
    let amnt = parseInt(window.prompt("Enter the Purchase amount"));
    if (amnt) {
      credit = credit - amnt;
      let now = new Date();
      let date = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;
      let time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      let occur = `${date} ${time}`;
      creditCard.enqueue({ [occur]: "Rs."+credit, "debitAmount":"Rs."+amnt});
      console.log(`After purchase for Rs.${amnt}`);
      console.log("The credit card queue consist of : ");
      console.log(creditCard.transactions);
      console.log("Now the front pointer is at : ");
      console.log(creditCard.front());
      console.log("Now the rear pointer is at : ");
      console.log(creditCard.rear());
    } else {
      console.log("Enter a valid purchase amount");
    }
  } else if (option == 2) {
    //checking available balance
    if (!creditCard.isEmpty()) {
      let lastBal = Object.values(creditCard.rear());
      console.log(`The available credit balance : ${lastBal[0]}`);
    } else {
        console.log(`No transaction is done yet and the available credit is :  Rs.${credit}`);
    }
  } else if (option == 3) {
    //show all movie cast member names
    if (!creditCard.isEmpty()) {
      creditCard.display();
    } else {
      console.log(
        "The credit card statement is empty- No transactions done to display"
      );
    }
  }
} while (!isNaN(option) && option !== 4);
