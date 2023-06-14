//array of objects with properties

let arrayOfObject = [
  object1=  {
        name :"John",
        city:"Delhi"
    },
   object2= {
        name :"Tony",
        city:"Mumbai"
    },
    object3={
        name :"Steve",
        city:"Bangalore"
    }
]

//loop through array of obj to add function and execute function to display
for(let i=0;i<arrayOfObject.length;i++){
    
    //Important note for future reference = .this keyword cant be used for arrow function only for regular functions
    arrayOfObject[i].oneLineIntro = ()=>{return `This is ${arrayOfObject[i].name} from ${arrayOfObject[i].city}`};
    
    console.log(arrayOfObject[i].oneLineIntro())
    
}


