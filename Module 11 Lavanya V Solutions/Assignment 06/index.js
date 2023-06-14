//Assignment 6

//Define a JavaScript function largestSwapExistsInMarks within a student object
// having an array of marks to check if for given 2 digit number, its largest 
//swap exists in marks. Function should be defined as a property of the object
// and invoke it using dot operator on the object. Note that function should 
//only accept one parameter as it should be able to access other properties of 
//current object.


let student={
    marks:[23, 56, 78, 89, 43],
    largestSwapExistsInMarks:function(checkMark){
        console.log("Array of marks "+this.marks)
        console.log("Input mark "+checkMark)
        
        let res = checkMark.toString()
        
        if(res.length==2){
            
            let c= res[1]+res[0]//swapped no 
            res = parseInt(c)
            console.log("swapped mark "+res)
            if(this.marks.includes(res)){return true};
            
        }
        return false;
    }
}


console.log(student.largestSwapExistsInMarks(78));
console.log(student.largestSwapExistsInMarks(34));