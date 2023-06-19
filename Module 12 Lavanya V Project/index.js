//when submit is clicked
let subClicked = document.getElementById("subBtn");
let output="";
subClicked.addEventListener("click",()=>{
    //get the input date,month and year
    let inputDate = document.getElementById("date").value
    let inputMonth = document.getElementById("month").value
    let inputYear = document.getElementById("year").value
    
    output=""
    
    if(!inputDate || !inputMonth || !inputYear){
        (!inputDate)?output= "Please provide Date":
        (!inputMonth)?output="Please provide Month":
        output="Please provide Year";       
        
    }else {
        (inputMonth>12)? output="Please provide Month value in the range from 1 to 12":
        (inputYear.length !== 4)? output="Provide year in format YYYY":
        (isNaN(parseInt(inputDate)))? output="Please provide valid Date":
         (isNaN(parseInt(inputMonth)))? output="Please provide valid Month": 
         (isNaN(parseInt(inputYear)))?output="Please provide valid Year":
         (inputDate<=0)?output="Date cannot be 0 or less than 0":
         (inputMonth<=0)?output="Month cannot be 0 or less than 0":
        (inputYear<=0)?output="Year cannot be 0 or less than 0":
        // check the date matches with month
        (inputDate>31)?output="Please provide valid Date with respect to Month":
        ((((inputMonth<=7 && inputMonth%2 ===0) ||
            (inputMonth>7 && inputMonth%2 !==0))&& inputDate>30)||
            (inputMonth==2 && inputDate>28))?
            output="Please provide valid Date with respect to Month":output=""
    }

    //Age calculations 

    if(output==""){
        //get the current date
        let current = new Date();
        //get the Date,month and year from current date.
        let currentDate = current.getDate();
        let currentMonth = current.getMonth() + 1;
        let currentYear = current.getFullYear();
        
        //calculate difference between entered DOB with current date
        let years = currentYear-inputYear; 
        let months = currentMonth-inputMonth;
        let days = currentDate-inputDate;
        //year should be within current yr(i.e.,diff is greater than 0)
        //if same year, month should not be greater than current month(i.e.,month
        //should not be less than 0)
        if(years>0 || (months>0 &&  years==0)){
            //if month is higher than current month
            if(months<0){
                years = years-1;       //yr is not completed 
                                      //if date is less than or equal current date
                if(days>=0){
                    months=12+months; //months completed = total month-remaining month(negative value)
                }else{                //Date is higher than current date   
                    days= 31+days;
                    months=(12+months)-1; //already previous month not completed  and also current month
                                          //as the date is also not matched yet (so subracted the remaning month with current month)
                }
            }else{                      //birth month completed
                if(days<0){             //but Date is yet to come
                    days= 31+days;      //calculate completed date alone by sub remaining days
                    months=months-1     //current month is pending as date not yet came
                }   
            }

        
            output=`Your Age Is ${years} Years, ${months} Months & ${days} Days`
        }else{
            output=`DOB should not be greater than current Date`
        }
    }
    let pTag = document.getElementById("age");
    pTag.innerHTML=output; 
})

