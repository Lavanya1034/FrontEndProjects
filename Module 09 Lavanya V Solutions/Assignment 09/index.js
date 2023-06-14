//employee details 

let employees = [{
     firstName: 'Steve',
     lastName: 'Rogers',
     age: 27,
     joinedDate: 'December 15, 2017'
  }, 
  {
     firstName: 'Tony',
     lastName: 'Stark',
     age: 25,
     joinedDate: 'January 15, 2019'
  }, 
  {
     firstName: 'Bruce',
     lastName: 'Banner',
     age: 30,
     joinedDate: 'February 15, 2011'
  }
];

//subtask1 : create a new object to be added at end of array

let objEnd = {
    firstName: 'Black',
    lastName: 'Widow',
    age: 27,
    joinedDate: 'December 25, 2018'
 }

 //add the obj to array

 employees.push(objEnd);
 

 //subtask2 : create a new object to be added at start of array

let objStart = {
    firstName: 'Winter',
    lastName: 'Soldier',
    age: 27,
    joinedDate: 'October 15, 2007'
 }

 //add the the above obj to start of array

 employees.unshift(objStart)
 

 //subtask3:print the output1 data

 //function to print the outputs

 function print(employees1){
    for(var emp of employees1){
        console.log(`This is ${emp.firstName} ${emp.lastName}, aged ${emp.age} joined the company on ${emp.joinedDate}`);
     }
 }

 console.log("Output1:");
 print(employees); //call function to print the output

 //subtask4 & subtask5: seal the obj to prevent adding but can allow updation
 //and in subtask5- update the joining date of all objects

 for(var obj of employees){
    
    //sealing all objects in array
    Object.seal(obj);
    
    //subtask 5- to update joining date
    obj.joinedDate = "December 13, 2021"
 }


//subtask 6- to print the output2
console.log("Output2:");
//call the function to print
print(employees);
