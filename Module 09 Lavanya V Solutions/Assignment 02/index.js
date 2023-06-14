//create objects- array of objects 

let arrayOfObjects =[
    object1={
    author:"Bill Gates",
    title:"The Road Ahead",
    readingStatus:true

},
object2={
    author:"Steve Jobs",
    title:"Walter Isaacson",
    readingStatus:true

},
object3={
    author:"Suzanne Collins",
    title:"Mockingjay: The Final Book of The Hunger Games",
    readingStatus:false

}
]


//loop through array of objects and based on readingStatus - display the output

for(let books in arrayOfObjects){

    //display based reading status
    if(arrayOfObjects[books].readingStatus=== true){
    console.log(`I already read ${arrayOfObjects[books].title} by ${(arrayOfObjects[books].author).toUpperCase()}.`);
    }
    else{
        console.log(`I need to read ${arrayOfObjects[books].title} by ${(arrayOfObjects[books].author).toUpperCase()}.`);
    }

}

//note:
//method2 - can be directly print by accessing objects- simpler method- if not into array

// console.log(`I already read ${object1.title} by ${(object1.author).toUpperCase()}.`)
// console.log(`I already read ${object2.title} by ${(object2.author).toUpperCase()}.`)
// console.log(`I need to read ${object3.title} by ${(object3.author).toUpperCase()}.`)

