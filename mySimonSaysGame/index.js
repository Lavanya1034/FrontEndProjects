let orderShown = [];
let level=1;
let response="";
let levelCount="";
let scoreRecord=[];//to have the history to add the newer score at last of array
let scores=0;
let error = false;
let sysFlashedOrder=[];

let blocks = document.getElementsByClassName("commonBlock")
let play =document.getElementById("play")
let restart =document.getElementById("restart")
let red = document.querySelector(".red")
let yellow = document.querySelector(".yellow")
let blue = document.querySelector(".blue")
let green = document.querySelector(".green")
let leaderboard = document.getElementById("leader")
let h2Levels = document.getElementById("levels")
let desc = document.getElementById("levelDesc")
levelCount = `Level ${level}`;

h2Levels.innerText=levelCount;

//windows onload function - have to display the leaderboard
window.addEventListener('DOMContentLoaded', () => {
    
    const prevScores = JSON.parse(window.localStorage.getItem('scores31'));
    if (prevScores && prevScores.length) {
        //copy of score history to push new score at last
        scoreRecord = [...prevScores];
        for (const prevScore of prevScores) {
            const scoreLi = document.createElement('li');
            const para = document.createElement("p")
            para.textContent= `Your score is ${prevScore}`;
            scoreLi.appendChild(para)
            leaderboard.appendChild(scoreLi)
        }
    }
});

//flash function is called when play button is clicked to display the flashes of box

const flash=(block,orderShown1)=>{
    console.log("block"+block)
    console.log("odershown"+orderShown1)
    console.log("level inside flash "+level)
    return new Promise((resolve, _) => {
        let itemWise= orderShown1.shift();     
        block[itemWise].classList.add("highlight")
        //setTimeout- work done after sometime
        setTimeout(()=>{
            block[itemWise].classList.remove("highlight");
            setTimeout(()=>{
                resolve(),800
            })
        },200);
})
}
//when play button is clicked

play.addEventListener("click",async () =>{
    levelCount = `Level ${level}`;
    h2Levels.innerText=levelCount;
    desc.innerText="";
    //stop continuing to play if error is encountered
    if(!error){
   
    while((level+1) !== orderShown.length){
        let noPick = Math.floor(Math.random()*4);
        orderShown.push(noPick);     
    }  
    let length1 = orderShown.length;
    //storing the order to verify the ans
    sysFlashedOrder = [...orderShown];
    //calling await flash function- flash on the blocks
    for(let j=0;j<length1;j++){
       await flash(blocks,orderShown);
        }
    }
})

//if all values matches
function Success(){
        
    levelCount = `Level ${level}`;
    response=`You Won this round! Click on play to play the next level!`;
    level=level+1;
    h2Levels.innerText=levelCount;
    desc.innerText=response;
    scores=scores+1;
}

//when user clicks the blocks to answer
let userAns =[];

red.addEventListener("click",()=>{
    //can click onky if the previous ans is correct
    if(!error){
        userAns.push(0);
        checkAns(userAns);
    }
    
})
yellow.addEventListener("click",()=>{
    if(!error){
        userAns.push(1);
        checkAns(userAns);
    }
})
blue.addEventListener("click",()=>{
    if(!error){
        userAns.push(2);
        checkAns(userAns);
    }
})
green.addEventListener("click",()=>{
    if(!error){
        userAns.push(3);
        checkAns(userAns);
    }
})

const checkAns= async (userAns1)=>{
        //store the value to check if it is correct
        let playerPressedBlockNo = userAns1[0];
        await flash(blocks,userAns1);
        let orderHasToChecked = sysFlashedOrder.shift();
        //check user pressed block and order shown is same
        if(playerPressedBlockNo==orderHasToChecked){
            if(sysFlashedOrder.length==0){
                error = false;
                Success();}   
        }else{
            levelCount = `Level ${level}`;
            response=`You Lost this round! Click on play to start again!`;
            error = true;
            h2Levels.innerText=levelCount;
            desc.innerText=response;
            scoreRecord.push(scores);
            console.log(scoreRecord)
            //to show the score when the play is lost
            const scoreLi = document.createElement('li');
            const para = document.createElement("p")
            para.textContent= `Your score is ${scores}`;
            scores=0;
            scoreLi.appendChild(para)
            leaderboard.appendChild(scoreLi)
            window.localStorage.setItem('scores31',JSON.stringify(scoreRecord));
            return;
            
        }      
    }
//when restart is clicked
restart.addEventListener("click",()=>{
    level=1;
    levelCount = `Level ${level}`;
    h2Levels.innerText=levelCount;
    desc.innerText="";
    error=false;

})

    