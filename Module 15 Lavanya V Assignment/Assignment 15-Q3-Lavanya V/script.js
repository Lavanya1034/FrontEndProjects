//Bus ticket booking using queue

class queue {
  constructor() {
    this.tickets = [];
  }
  //adding user-enqueue method
  enqueue(userDetails) {
    this.tickets.push(userDetails);
    console.log("The user name is : "+userDetails.name);
    console.log("The from city is : "+userDetails.fromCity);
    console.log("The to city is : "+userDetails.toCity);
    return;
  }
  

  //display method
  searchUser(userID) {
    console.log("The entered user ID is : "+userID);
    let found=0;
    this.tickets.forEach((element) => {
      if (element.id == userID) {
        console.log("The user details for the entered ID is :   ");
        console.log(element);
        found =1;
        return;
      }
    });
    if(found==0){
      console.log("No user details found for the ID entered");
    }
    return;
  }
  front(){
    return this.tickets[0];
  }
  rear(){
    return this.tickets[this.tickets.length-1];
  }
  isEmpty(){
    return this.tickets.length ==0;
  }


}

//creating a ticket queue

let busBookingTicket = new queue();
let idArr = []; //ID array
let option;
do {
  //option to add or get the user details
  option = parseInt(
    window.prompt("Enter the option \n1. Book ticket \n2. Search User \n3. Done")
  );
  if (option == 1) {
    //get the input from user
    let name1 = window.prompt("Enter the name");
    let fromCity = window.prompt("Enter from city");
    let toCity = window.prompt("Enter to city");
    if (name1 && fromCity && toCity) {
        //generating an unique ID
        let ID=0;
        while(ID==0){
          //random ID taken between 1-10
            let no = Math.floor(Math.random()*11)+1;
            if(!idArr.includes(no)){
              ID=no;
              idArr.push(no);
            }
        }
        console.log("The user details getting added to stack now is : ")
        console.log("random ID to this user is "+ID)
        //creating an object with user details and pushing the details of user in stack
        busBookingTicket.enqueue({"name":name1,"fromCity":fromCity, "toCity":toCity,"id":ID});
        console.log("The Bus ticket booking stack consist of : ");
        console.log(busBookingTicket.tickets);
        console.log("Now the user at front is ");
        console.log(busBookingTicket.front())
        console.log("Now the user at rear is ");
        console.log(busBookingTicket.rear())
    } else {
        console.log(
        "Details provided are not sufficient to book bus ticket \nPlease enter all required details"
      );
    }
  } else if (option == 2) {
    idEntered = parseInt(
      window.prompt("Enter the user ID to get user details ")
    );
    //show all movie cast member names
    if(!isNaN(idEntered)){
      if(!busBookingTicket.isEmpty()){
        busBookingTicket.searchUser(idEntered);
      }else{
        console.log("The stack is empty")
      }
      
    }else{
      console.log("Please enter a valid ID");
    }
  }
} while (!isNaN(option) && option !==3);
