//recall the movie name by it's main character

//get the character name

let mainChar = window.prompt("Enter the main character name");
console.log(mainChar);

while(mainChar !== '0'){
    
    //check the movie name 
    if(mainChar === "Peter Parker" || mainChar === "peter parker"){
        console.log("Spider-Man");
    }else if(mainChar === "Fiona" || mainChar === "fiona"){
        console.log("Shrek");
    }else if(mainChar === "Jack Sparrow" || mainChar === "jack sparrow"){
        console.log("The Pirates of the Caribbean");
    }else if(mainChar === "Master Shifu" || mainChar === "master shifu"){
        console.log("Kung Fu Panda");
    }
    else {
        console.log("I don't know him/her yet");
    }
    mainChar = window.prompt("Enter the main character name");
    console.log(mainChar);  

}

