//ex3

let btn = document.getElementById("bt") 
btn.addEventListener("click",()=>{

//getComputedStyles- give all styles for element including default 


//to get we defined styles alone
// 1. get the no of stylesheets attached to our document:
// document.stylesheets
// 2. then loop throught the length of stylesheets and find the
// no of cssRules applied
// stylesheets[i].cssRules
// 3. after getting the cssRules - loop throgh its length and find each cssRules
// selecterText and its content using CSSMatrixComponent
// --->cssRules will contain ex #id, .class, tag names with all details inside
// --->selecterText will contain the heading alone like #id, .class, tag names
// ---->cssText will contain inner details- to access this we have to write code as
// cssRule[i].style.cssText - will gives as prop name with CSSMathValue(eg width:20px etc)

let divAdd = document.querySelector("#add")
//check if ul tag is present if so remove
console.log(divAdd.children.length)
if(divAdd.children.length>0){
    let childs= divAdd.children;
    divAdd.removeChild(divAdd.firstElementChild)
}
let divTagg = document.querySelector(".divCheck")

console.log(divAdd.firstElementChild)
console.log(divAdd.firstChild)
//stylesheets attached to html
let noOfStyleSheets = document.styleSheets;
console.log(noOfStyleSheets)
let elementStyles;
for(let i=0;i<noOfStyleSheets.length;i++){
    let noOfCssRules = noOfStyleSheets[i].cssRules;
    console.log(noOfCssRules)
    for(let j=0;j<noOfCssRules.length;j++){
        if(divTagg.matches(noOfCssRules[j].selectorText)){
            elementStyles= noOfCssRules[j].style.cssText
        }
    }
}
console.log("elementStyles----"+elementStyles)
let splitArr = elementStyles.split(";")
console.log("splitArr"+splitArr.length )
if(splitArr.length>0){
    let unorerList = document.createElement("ul")
    console.log(splitArr)
    for(let k=0;k<splitArr.length-1;k++){// as the array will be split with 
        //divider ";" , the last element is added as " "- to delete tat used -1
        //or can use pop
        
        let listItem = document.createElement("li")
        let para = document.createElement("p")
        para.textContent=splitArr[k]

        listItem.append(para)
        unorerList.append(listItem)
    }

    
    divAdd.appendChild(unorerList)
}

})

