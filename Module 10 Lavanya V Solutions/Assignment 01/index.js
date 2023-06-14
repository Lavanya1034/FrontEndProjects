//function expression

let secFunc = function (){
    console.log("Secondary function");
}

let mainFunc = function(callFunc){
    return callFunc();

}

//variable which calls function in parameter

mainFunc(secFunc)


