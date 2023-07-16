//calculating discount on total bill

//get the bill amount from user

amnt= document.getElementById("amnt");
btn=document.getElementById("btn");
totalAmnt=document.getElementById("totalAmnt");

btn.addEventListener("click",()=>{
    
    let billAmnt = amnt.value;
    let disAmnt=0;
    if(billAmnt){
        console.log(`The bill amount entered is ${billAmnt}`)
        if(billAmnt>5000){
            //applying 20% discount
            disAmnt= billAmnt*0.2;
            console.log(`The discound applicable is 20%`);
        }else if(billAmnt>3000){
            disAmnt= billAmnt*0.15;
            console.log(`The discound applicable is 15%`);
        }
        else if(billAmnt>2000){
            disAmnt= billAmnt*0.10;
            console.log(`The discound applicable is 10%`);
        }
        billAmnt= billAmnt-disAmnt; 
        totalAmnt.textContent = `The total bill amount is ${billAmnt.toFixed(2)}`;
        console.log(`The total bill amount is ${billAmnt.toFixed(2)}`);
    } 
    
})