//calculate area and perimeter of circle and square

//get the option from user
let option = parseInt(window.prompt("Enter 1 for Circle or 2 for Square"));

switch(option){
    case 1:
        let radiusOfCircle = window.prompt("Enter the radius of circle");
        formCircle(radiusOfCircle);//check for valid input and call fn -edgecase handling
        break;

    case 2:
        let sideOfSquare = window.prompt("Enter the side of square");
        formSquare(sideOfSquare);//check for valid input and call fn -edgecase handling
        break;

    default:
        console.log("Enter valid option");
        break;
}

function formCircle(radiusOfCircle){
    circle ={
        radius:radiusOfCircle,
        calculatePerimeter: function(){
            //perimeter of circle formula (C =2πr) 
            let π = 3.14;
            return 2*π*(this.radius);

        },
        calculateArea: function(){
            //Area of circle formula (A=πr2 - (r square))
            let π = 3.14;
            return π*((this.radius)**2);

        }
    }
    console.log("Perimeter of circle is "+circle.calculatePerimeter());//call method to calculate parameter of circle
    console.log("Area of circle is "+circle.calculateArea());//call method to calculate area of circle
    
}
function formSquare(sideOfSquare){
    square ={
        side:sideOfSquare,
        calculatePerimeter: function(){
            //perimeter of square formula (p=4a)(a is the side of square) 
            
            return 4*(this.side);

        },
        calculateArea: function(){
            //Area of square formula (A=a2)-square of side
            
            return (this.side)**2;

        }
    }
    console.log("Perimeter of square is "+square.calculatePerimeter());//call method to calculate parameter of square
    console.log("Area of square is "+square.calculateArea());//call method to calculate area of square

}