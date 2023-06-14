//empty the given array
//used function methods for 1st method and other 2 in direct ways(it can also be changed to fn)

//---------------------------------------------------------------------------
//method 1 - using splice method

let array = [1, 2, 3, 4, 5]
console.log("Input array "+array)

//used arrow function method for method 1
let funcMethod = arrayMethod => arrayMethod.splice(0)
funcMethod(array)
console.log("----method1 - using splice method----")
console.log(array)

//---------------------------------------------------------------------------
//method2 - using pop method

let array2 = [1, 2, 3, 4, 5]
console.log("Input array "+array2)

for(let i=array2.length;array2.length>0;i--){
    array2.pop();
}
console.log("----method2 - using pop method----")
console.log(array2)

//---------------------------------------------------------------------------
//method3 - using shift method

let array3 = [1, 2, 3, 4, 5]
console.log("Input array "+array3)

for(let i=0;array3.length>0;i++){
    array3.shift();
}
console.log("----method3 - using shift method----")
console.log(array3)

