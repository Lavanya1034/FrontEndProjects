//Assignment 4: Calculate the time and space complexity


function fun(N,M){

    var arr=[];
    var counter=0
    for(var i = 0 ; i < N ; i ++){
        arr.push(i);
    }
    for(var j = 0 ; j < M ; j ++){
        counter+=1;
    }
    console.log(counter);
}





//The time complexity for the given code snippet is  = O(N+M);
//Explanation:
//  Time is calculated considering 'Running Time'.
//  As there are 2 loops, first loop rotates 'N'(mentioned in for loop) no of times and 
//  second 'for' loop rotates 'M' no of times. So totally the time taken to complete
//  the above mentioned code snippet will be 'N+M' no of time.
//  so the time complexity is "O(N+M)".

//The space complexity for the given code snippet is = O(n);
//Explanation:
//  Space is calculated based on the auxilliary and variable spaces.
//  Here in this code snippet, 
//  a variable 'counter' is defined, which will take O(1) space.
//  an array is defined, whose space will be increased based on 'i' values,
//      so the array will occupy space of O(n).
//  So when we take both(variable and array) into consideration, the
//  maximum space is taken into account- so space complexity is "O(n)".


console.log("The time complexity for the given code snippet is  = O(N+M)");
console.log("The space complexity for the given code snippet is = O(n)");