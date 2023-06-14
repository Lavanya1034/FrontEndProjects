//Bonus asssignment 01
//print N random integer number

//get a no from user N(N>0)
let numb = parseInt(window.prompt("Enter a no greater than 0"));
console.log("sample input numbers "+numb);

//array to store numbers
let numbArray = [];

//print the nos within [-100,100] interval

for(let i=0;i<numb;i++){
    let value = Math.floor(Math.random()*(Math.floor(100)-Math.ceil(-100))+(Math.ceil(-100)));
    numbArray.push(value);
}

console.log(`${numbArray}`);//output displayed in back tik as to get desired 
//output model. if directly entered array name in output, it will be displayed 
//with []

//check whether the number is greater than right number and filter those nos
let outputArray=[];
for(let j=0; j<numbArray.length;j++){
    if(numbArray[j]>numbArray[j+1]){
        outputArray.push(numbArray[j]);
    }
}
console.log(`${outputArray}`);   //output displayed in back tik as to get desired 
//output model. if directly entered array name in output, it will be displayed 
//with []