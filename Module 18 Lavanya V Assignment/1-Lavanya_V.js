//Tournament Winner

let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python","HTML"],
    ]

let results = [0,0,1];

//Time complexity for this code is O(N*M)- as 2 loops are executed res.length*values.length times.
//Space complexity for this code is O(n)- as Object is being used and based on input,
//                                        size will increase


function winner(comp,res){
    let counts = {};
    if(competitions.length == results.length){
       
        for(let i=0;i<res.length;i++){
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


    }
    
}

console.log(winner(competitions,results));
    
 
    