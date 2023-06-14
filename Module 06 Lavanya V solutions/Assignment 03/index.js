//recommends customer cakes to buy

//request customer to give taste and sizes

//get the taste
let taste = window.prompt("Enter the taste");
console.log(taste);

//get the size
let size = parseInt(window.prompt("Enter the size"));
console.log(size);

//with taste and size requirement, suggest the flavour and cake
//suggest flavour
let tasteSuggested;
if(taste === "Chocolate" || taste === "chocolate"){
    tasteSuggested = "Chocolate Dream ";
}
else if(taste === "Berries" || taste === "berries" || 
        taste === "fruits" || taste === "Fruits"){
    tasteSuggested = "Tropic Pleasure";
        }
else if(taste === "Nuts" || taste === "nuts"){
    tasteSuggested = "Cupcake Set";
}
else if(taste === "Cheesecake" || taste === "cheesecake" ){
    tasteSuggested = "Creamy Cheesecake";
}
else{
    tasteSuggested = "Cupcake Set";
}


//suggest size
let sizeSuggested;
if(size>= 1 && size <= 2){
    sizeSuggested = "Small";
}else if(size>= 3 && size <= 5){
    sizeSuggested = "Medium";
}else if(size>= 6){
    sizeSuggested = "Large";
}else{
    sizeSuggested = "Invalid size"//error handling-if size is not entered properly.
}

//print the taste and size together
console.log(sizeSuggested+" " + tasteSuggested);