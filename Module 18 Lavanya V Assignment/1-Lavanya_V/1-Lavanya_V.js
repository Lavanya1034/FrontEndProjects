//Tournament Winner

let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python","HTML"]
    
    ]

let results = [0,0,1];

//Time complexity for this code is O(N+M)- as 2 loops are executed "res.length+values.length" times.
//Space complexity for this code is O(M)- as Object is being used to store the score count for each 
//                                        competitor. And it increases when input increases.



function winner(comp,res){
    let counts = {};
    if(!comp || !res || !comp.length>0 || !res.length>0){
        return "Tournament inputs are missing";
    }
    if(comp.length == res.length){
       
        for(let i=0;i<res.length;i++){
            if(comp[i][0].length>30 || comp[i][1].length>30){
                return "Team name should be at most 30 characters in length";
            }
            if(res[i]===1){
                if(counts.hasOwnProperty(comp[i][0])){
                    counts[comp[i][0]]=counts[comp[i][0]]+3;
                }else{
                    counts[comp[i][0]]=3;
                }
                
            }else{
                if(counts.hasOwnProperty(comp[i][1])){
                    counts[comp[i][1]]+=3;
                }else{
                    counts[comp[i][1]]=3;
                }
            }
        }
        let values = Object.values(counts);
        let keys= Object.keys(counts);
        let win = values[0]
        for(let j=0;j<values.length;j++){
            if(values[j]>win){
                win = values[j];
            }
        }
    
        return keys[values.indexOf(win)];


    }else{
        return "Please enter equal number of competitions and results accordingly";
    }
    
}
console.log("The input competitions are: ");
console.log(competitions);
console.log("The results given are :");
console.log(results);
console.log("The winner is :");
console.log(winner(competitions,results));
    
 
    