//array of objects to object iterable

const myArray = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" }
];
//created empty obj initially
let obj = {};
//adding the obj prop from array of obj
myArray.forEach((element)=>obj[element.id]= element);
console.log(obj)

