//request for feedback and provide discount
//get the feeback
let feedBack = window.prompt("Please enter the feedback");
console.log(feedBack);

//estimate the feedback length
let len = feedBack.length;

//check the feedback length and provide the discount

if(len > 10 && len < 30 ){
    console.log("Thanks! Here is your 15% discount");
}
else if(len >= 30){
    console.log("We really appreciate your feedback! Here is your 30% discount");
}
else{
    console.log("Hope to see you again!");
}