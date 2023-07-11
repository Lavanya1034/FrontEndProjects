//Movie cast section using stack

class stack {
  constructor() {
    this.movieCast = [];
  }

  //adding new member
  add(member) {
    this.movieCast.push(member);
    return;
  }

  top(){
    return this.movieCast[this.movieCast.length-1];
  }
  isEmpty(){
    return this.movieCast.length==0;
  }

  //display method
  showCast() {
    console.log("Movie cast member names are : ")
    this.movieCast.forEach((mem) => {
      console.log(mem);
    });
    return;
  }
  
}

//creating a stack
let movie = new stack();
let option;
do {
  //option to add or show the movie cast member
  option = parseInt(window.prompt(
    "Enter the option \n1. Add movie cast member \n2. Show movie cast members \n3. Done"
  ));
  if (option == 1) {
    //get the input from user
    let name1 = window.prompt("Enter the Movie Cast Member");
    if (name1) {
      movie.add(name1);
      console.log("The movie cast member stack consist of : ");
      console.log(movie.movieCast);
      console.log("Now the top pointer is at : "+ movie.top());
    }else{
      console.log("Enter a valid name");
    }
  }else if(option ==2){
    //show all movie cast member names
    if(!movie.isEmpty()){
      movie.showCast();
    }else{
      console.log("The movie stack is empty");
    }

  }

  
} while (!isNaN(option) && option !==3);
