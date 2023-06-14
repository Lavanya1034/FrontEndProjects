//allot numbers for participants

//get the list of participants
let parti = window.prompt("Enter the participants list");
console.log("Input string entered is: "+parti);

//change to array
let partiArray = parti.split(",");

//array to store the distributed no
let disNo =[];


for(const participants of partiArray){
    
    let assigned=0; //indicator to denote the particpant is assigned with no
    
    while(assigned===0){
        let found=0;
        let distriNumber= Math.floor(Math.random()*(partiArray.length))+1;
        
        //push the first value directly, if the length of no array is 0, it is 
        //the first entry so directly assign value

        //check whether the no is alloted
        for(let i=0; i<disNo.length; i++){
            if(disNo[i] === distriNumber){//check whether the no is already taken
                found =1;
                break;
                
            }
        }            
        
        if(found ===0){//denoted the not found in array no(not assigned still)
            disNo.push(distriNumber);
            console.log(`${participants.trim()} - ${distriNumber}`);
            assigned =1;

        }        
    }
        
}