//get input from user and print the person data using function in object

//get the input of person
let input = window.prompt("Enter he person's details");

//get the input seperated by commas to set values of object properties

let input1 = input.split(",");

//create person object with input data

let person ={
    name:input1[0],
    age:input1[1],
    roomNumber:input1[2],
    personDetails: function(){
        return `I am ${this.name}, aged ${this.age}, living in room ${this.roomNumber}`;
    }
}

console.log(person.personDetails());
