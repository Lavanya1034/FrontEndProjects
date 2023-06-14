//check login and password

//given total 5 max attempts
let attempt=5;

for(let i=1; i<=attempt; i++){
    //get the login and password
        let login = window.prompt("Enter the login name");
        console.log(login);
    //get the password
        let pass = window.prompt("Enter the password");
        console.log(pass);
        
        if(login === "admin_425" && pass==="jvv0oj45tm"){
             console.log("Success");
             break;
        }else if(i<5){
            console.log(`Incorrect! Try again. ${attempt-i} attempts left`);
        }else{
            console.log("No attempts left. We have to block your account");
        }
}