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

fun(2,3);

console.log("The time complexity for the given code snippet is  = O(N+M)");
console.log("The space complexity for the given code snippet is = O(n)");

//The time complexity for the given code snippet is  = O(N+M);
//The space complexity for the given code snippet is = O(n);

