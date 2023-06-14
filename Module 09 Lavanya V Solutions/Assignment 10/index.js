//function to create object wit user input

function submitData(){
    let user ={
        fName: formSection.firstName.value,
        lName: formSection.lastName.value,
        email:formSection.Email.value,
        city:formSection.City.value,
        gender:formSection.Gender.value
    }
    console.log(`This is ${user.fName} ${user.lName}, ${user.gender} from ${user.city} and my email id is ${user.email}`);
}