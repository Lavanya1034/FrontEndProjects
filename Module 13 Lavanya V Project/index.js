let addTask = document.querySelector("#addTask");
let priorityTask = document.querySelector("#priorityTask");
let deleteTask = document.querySelector("#deleteTasks");
let inputValue = document.querySelector("#inputText");
let ulTag = document.querySelector(".listItems");
let childCount = document.querySelector("ul")
//flag to check whether it is priority task adding
let prior = false;

const listForming = (content)=>{
    let divTag = document.createElement("div");
    divTag.setAttribute("class","todo");
    let liItem = document.createElement("li");
    liItem.setAttribute("class","todo-item");
    // let para = document.createElement("p");
    // para.textContent=inputValue.value;
    if(prior){
        liItem.innerHTML=`1. ${content}`;
    }else{
        liItem.innerHTML=`${childCount.childElementCount+1}. ${content}`;
    }
    
    divTag.appendChild(liItem);
    let btn1 = document.createElement("button");
    btn1.setAttribute("class","complete-btn");
    btn1.textContent="Completed";
    divTag.appendChild(btn1);
    let btn2 = document.createElement("button");
    btn2.setAttribute("class","delete-btn");
    btn2.textContent="Delete";
    divTag.appendChild(btn2);
    //when priority task is added, numbering order is changed for list items
    if(prior){
        let listNumbering = document.querySelectorAll(".todo-item");
        listNumbering.forEach((element,index)=>{
            let listText = element.textContent;
            let no =listText.substring(0,1);
            no++;
            element.textContent= `${no}.${listText.substring(2)}`
        })        
    }
    return divTag;
}

//complete the particular task from todo list
const completeParticularTask=()=>{

    //clicking comp button for an list
    let  comp = document.querySelectorAll(".complete-btn")

    comp.forEach((element)=>{
            element.addEventListener("click",()=>{
            element.parentElement.style.opacity="0.3";
        })
    })

}

//delete the particular task from todo list
const deleteParticularTask=()=>{
    
    //clicking delete button for an list
    let  deleteBtn = document.querySelectorAll(".delete-btn")
    deleteBtn.forEach((element)=>{
        element.addEventListener("click",()=>{
            let parentOfDeleteBtn = element.parentElement;
            ulTag.removeChild(parentOfDeleteBtn);
            //adjust the numbering of list items when a list is deleted
            let listNumbering = document.querySelectorAll(".todo-item");
            listNumbering.forEach((element,index)=>{
                element.textContent= `${index+1}.${(element.textContent).substring(2)}`
        })      
        })
    })
}

//add tasks 
addTask.addEventListener("click",()=>{
    let content1 = inputValue.value;
    if(content1.length>0){
        let tags= listForming(content1)
        ulTag.appendChild(tags);
        inputValue.value="";    
    }
    let todoTags = document.querySelectorAll(".todo")
    if(todoTags.length>0){
        completeParticularTask();
        deleteParticularTask();
    }

})

//add Priority Task
priorityTask.addEventListener("click",()=>{
    let content1 = inputValue.value;
    if(content1.length>0){
        prior=true;
        let tags= listForming(content1)
        ulTag.insertBefore(tags,ulTag.firstElementChild);
        inputValue.value="";    //after adding, delete from display
    }
    let todoTags = document.querySelectorAll(".todo")
    if(todoTags.length>0){
        completeParticularTask();
        deleteParticularTask();
    }

})

//to delete all Tasks
deleteTask.addEventListener("click",()=>{
    let childList = ulTag.children;
    //converting to real array
    let childTotal= Array.from(childList);
    childTotal.forEach(element => {ulTag.removeChild(element);
   });                
})








