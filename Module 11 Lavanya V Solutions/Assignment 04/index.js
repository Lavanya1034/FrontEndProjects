//Assignment 4

//Given an array of marks of students write a function printMarks in JavaScript 
// to get first and second marks in array without using index positions. 
//Function should take a student object with id, name and marks and print 
//first and second marks from array.


//extract students first and second mark
//destructuring array

let student =[
    {
        name: 'David', 
        id: 1, 
        marks:[89, 76, 45, 83, 93]
    }
]

//function to get marks

function printMarks(studentDetails){
    const[{marks}]=studentDetails;
    const[first,second,...others]=marks; //destructuring arrays
    console.log("First Mark = "+first);
    console.log("second mark = "+second)

}

printMarks(student);