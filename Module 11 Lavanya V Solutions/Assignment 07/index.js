//Assignment 7

//Write a JavaScript function flip to take array of numbers containing only 0s 
//and 1s. For given array print another array with opposite values 1 for 0 and 0
// for 1 from input array. Please note that you can’t use any conditional 
//statements like if or ternary or negation.


function flip(...inputArray){
    console.log("Input values "+inputArray)
    return inputArray.map((element)=>Math.abs(element-1))

   //(method2- XOR can also be used)
   // return inputArray.map((element)=>element^1)

}
console.log(flip(0, 1, 1, 1, 0, 0, 1 ))


//Note: 
//1) can also bitwise operations(~)- will give the bitwise conversion and can se &
//i.e., no -> ~no & 1 (eg. 1 -> ~1 &1  )- so the binary form of 1 is reverse 
//so -6 and & 1 -> this will do addition for binary form of -6 and 1 and gives 5 ->0