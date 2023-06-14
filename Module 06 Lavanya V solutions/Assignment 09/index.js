//forbidden symbols

//get the login
let login = window.prompt("Enter the login");
console.log(login);

//get the length of string
let len = login.length;

//forbidden symbols
let symbol= "=?*^$№@";
//length of symbols
let symLen = symbol.length;

let i; //initializer for outer 'for loop'
let flag =0; //flag to denote forbidden symbol is identified.
for( i =0; i <len; i++){
    for(let j=0; j < symLen; j++){
        if(login[i]== symbol[j]){
            console.log(`This symbol ${symbol[j]} is forbidden.`);
            flag =1; //if forbidden symbol is found, flag is set
            break;
        }
    }
    if(flag){
        break;
    };
}

//If all characters are tested succesfully for forbidden symbols,flag is 0

if(!flag){
    console.log("Correct!");
} 