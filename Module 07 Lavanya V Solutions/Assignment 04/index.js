//recommendation of movie

let movies = window.prompt("Enter the movie names");
console.log(movies);

//split string to array
let movieArray = movies.split(",");
//console.log(movieArray);

//request the age from user
let age = parseInt(window.prompt("Enter the age"));
console.log(age);

//get a copy of array
let arrayCopy = Array.from(movieArray);
//console.log(arrayCopy);
let index;
    
if(age<18){

    for(let movie of arrayCopy){
        
        index=0;
        switch(movie.trim()){ //input can be written with space after comma or sometimes without space,
            // so i used trim to omit space if given in input string
            case "The Batman":
                index= arrayCopy.indexOf(movie);
                arrayCopy.splice(index,1,"Coco");
                break;
            case 'Against the Ice': 
                index= arrayCopy.indexOf(movie);
                arrayCopy.splice(index,1," Free Guy");
                break;
        }
    }
    console.log("Why wouldn’t you watch these movies:");
}


console.log(arrayCopy.join());


