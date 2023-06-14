//restaurant management system
const guests = [
    ["001", "Johnson", "Table 2"],
    ["002", "Nisha", "Table 10"],
    ["003", "Vasav", "Table 1"],
    ["004", "Uddin", "Table 7"]
 ]

//get a copy of array 
let guestsCopy = Array.from(guests);
//id from guest
let resId = " ";
//surname
let surName =" ";
let index;
while(resId !=="0" && surName !== "0" && guestsCopy.length>0){
    //get the surname
    surName = window.prompt("Enter the surname");
    console.log(surName);

    //get the id from guest
    resId = window.prompt("Enter the reservation ID");
    console.log(resId);
    
    //check if reservation exist by ID or surname
      
        for(const guest of guestsCopy){
            if(guest[0]=== resId || guest[1]===surName){
                index= guestsCopy.indexOf(guest);
                console.log(`Welcome to the ${guest[2]}`)
                guestsCopy.splice(index,1);
                break;
        } 
    } 
    
}
   