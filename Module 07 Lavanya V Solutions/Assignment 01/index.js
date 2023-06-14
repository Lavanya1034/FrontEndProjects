//coin collecting

//get the coins from user until 0
let coins;
let coinCountry =[]; //empty array to store coins
while(coins!=='0'){
    
    //get the input
    coins = window.prompt("Enter the coin country");
    coinCountry.push(coins);
    
}

//remove the last entry as last entry will be 0
coinCountry.pop();
//sort the coinCountry name which is in array

coinCountry.sort();

//print the output
console.log("Wow! There are coins from 4 countries in this collection:");
for(let i=0;i<coinCountry.length;i++){
    console.log(coinCountry[i]);
}
