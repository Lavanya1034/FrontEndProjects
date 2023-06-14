//check the password length
//get the password
let pass = window.prompt("Enter the password");
console.log(pass);

//check the password length
if(pass.length >= 8){
    console.log("acceptable");
}else{
    console.log("not acceptable");
}