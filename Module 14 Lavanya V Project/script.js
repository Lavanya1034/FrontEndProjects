//login form validation

let form = document.getElementById("form");
let nameErr = document.getElementById("nameErr");
let emailErr = document.getElementById("emailErr");
let passErr = document.getElementById("passErr");
let conPassErr = document.getElementById("conPassErr");

let input=document.querySelectorAll(".input")

//function to validate values in form

function validation(forminp){
    //to log the erros 
    let error={};
    let nameRegex = /^[a-zA-Z0-9]+$/;
    let regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    
    console.log(forminp.name)
    if(!forminp.name){
        error.name="Name cannot be empty.";
    }else{
        if((forminp.name).length<3 || (forminp.name).length >20){
            error.name = "Name must be between 3 - 20 characters";
        }else if(!nameRegex.test(forminp.name)){
            error.name = "Invalid Name";
        }
    }
    
    //validation for email
    if(!forminp.email){
        error.email="Email cannot be empty.";
    }else{
        if(!regex.test(forminp.email)){
            error.email="Please enter valid email";
        }
    }
    
    //validation for password
    if(!forminp.password){
        error.password="Password cannot be empty.";
    }else{
        if((forminp.password).length<6 || (forminp.password).length>10){
            error.password="Password must be between 6-10 characters long";
        }else if(!passRegex.test(forminp.password) ){
            error.password="Please enter valid password";
    }

    if(forminp.conPass !==forminp.password){
        error.conPass="Passwords don't match.";
    }
    return error;

}
}



form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let formVal = event.target;
    //changing to array
    let formArr = Array.from(formVal);

    //autofucing to nect input field
    formArr.forEach((inp,index)=>{
        inp.addEventListener("keydown",(e)=>{
            if(e.key==="Enter"){
                formArr[index+1].focus();
            }
        })
     })
   

    //create a obj with input values of form and can validate
    let formObj={
        name:formArr[0].value,
        email:formArr[1].value,
        password:formArr[2].value,  
        conPass:formArr[3].value
    }

    let errors = validation(formObj);

    if(Object.keys(errors).length>0){
        nameErr.textContent=errors.name || "";
        emailErr.textContent=errors.email || "";
        passErr.textContent=errors.password || "";
        conPassErr.textContent=errors.conPass || "";

    }else{
        //reset the error texts which is obtained previosly if any.
        nameErr.textContent="";
        emailErr.textContent="";
        passErr.textContent="";
        conPassErr.textContent="";
        formArr.forEach((e)=>e.value="");  
        //to open in same page---
        //windown.location.href="signup.html";

        //to open in new page
        window.open("signup.html","_blank");
    }
})