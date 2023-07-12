//score analysis using hash table

//hash table

class hashTable{
    constructor(){
        this.score = new Array(100);
        this.size =0;
    }

    _hash(key){
        let hashCount=0;
        for(let i=0;i<key.length;i++){
            hashCount += key.charCodeAt(i); 
        }
        return hashCount % this.score.length;
    }

    set(key,value,id){
        let index= this._hash(key);
        
        if(this.score[index]){
            for(let j=0;j<this.score[index].length;j++){
               if(this.score[index][j][0]==key && this.score[index][j][2]==id){
               this.score[index][j][1]+= value;
               return;                        
            }
         }
        this.score[index].push([key,value,id]);

        }else{
            this.score[index]=[];
            this.score[index].push([key,value,id]);
        }
        this.size++;
        return;
    }

    get(key,id){
        let index=this._hash(key);
        if(this.score[index]){
            for(let i=0;i<this.score[index].length;i++){
                if(this.score[index][i][0]==key && this.score[index][i][2]==id){
                    return this.score[index][i][1];
                }
            }

        }
            return undefined;
        
        
    }

    remove(key,id){
        let index=this._hash(key);
        if(this.score[index] && this.score[index].length){
            for(let i=0;i<this.score[index].length;i++){
                if(this.score[index][i][0]==key && this.score[index][i][2]==id){
                     this.score[index].splice(i,1);
                     this.size--;
                     return true;
                }
            }
            
        }else{
            return false;
        }

    }

    display(){
        this.score.forEach((value,index)=>{
            let chainedValues = value.map(([key,value,id])=>`[${key},${value},${id}]`);
            console.log( `${index}:${chainedValues}`);
        });
    }


}

//creating a score analysis hash table

let scoreHash = new hashTable();
let option;
do{
    //get the option
    option = parseInt(window.prompt("Enter the option \n1. Capture Score \n2. Get score \n3. Done"));
    if(option ==1){
        //get the name of player,score and the ID to add to table
        let playerName = window.prompt("Enter the name of the player");
        let playerScore = parseInt(window.prompt("Enter the score of the player"));
        let playerID = parseInt(window.prompt("Enter the ID of the player"));
        if(playerName && playerScore && playerID){
            scoreHash.set(playerName,playerScore,playerID);
            console.log("The total records stored are : ");
            scoreHash.display();

        }else{
            console.log("Enter valid player name,score and ID to record the details");
        }


    }else if(option ==2){
        //get the key and unique ID
        let keyGiven = window.prompt("Enter the name of the player");
        let uniqueID = parseInt(window.prompt("Enter the ID of the player"));
        if(keyGiven && uniqueID){
            console.log("The player name entered is : "+keyGiven);
            console.log("The ID entered for the player is : "+uniqueID); 
            console.log("The score is : " + scoreHash.get(keyGiven,uniqueID));

        }else{
            console.log("Enter a Valid name and ID");
        }

    }
}while(option && option !==3);
