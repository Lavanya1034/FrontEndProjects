//palindrome
//get the input from user
let string = window.prompt("Enter the input string");
console.log("The input is - "+string);

function palindrome(StringCheck){
    //traverse from start and end point to check whether both are sane characters
    //assign 2 pointer one to start and other for end
    let start = 0;
    let end = StringCheck.length-1;

    let palindrome = 1;
    while(start<end){
    
        if(StringCheck[start] !== StringCheck[end]){
            palindrome=0;
            break;
            
        }else{
            start++;
            end--;
        }
    }
    if(palindrome===1){
        return "A palindrome";
    }else{
        return "Not palindrome";
    }

}

//remove all white spaces and change to lower case to verify characters(optional)
//can be changed to upper case too.
let stringOutput = string.replace(/ /gi, "");
let stringLower = stringOutput.toLowerCase();

//check palindrome by calling function
console.log(palindrome(stringLower));




    

 