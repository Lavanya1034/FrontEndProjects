//volume of sphere

//get the radius from user
let radius = parseInt(window.prompt("Enter the radius of sphere"));
//pi (π) value is 3.14

//function definition
function volume(rad){
    if(!rad){
        return "input missing";
    }else{
        let π = 3.14;
    let volSphere = (4/3)*(π*(rad**3));
    return volSphere;

    }
    
}

//call the function to calculate volume of sphere
console.log(volume(radius));//function call

