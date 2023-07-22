//Sort transaction amounts using Bubble Sort- using normal swap

function bubbleSort(transactionAmt){
    for(let i=0;i<transactionAmt.length;i++){
        for(j=0;j<transactionAmt.length;j++){
            if(transactionAmt[j]>transactionAmt[j+1]){
                let temp = transactionAmt[j];
                transactionAmt[j]=transactionAmt[j+1];
                transactionAmt[j+1]=temp;
            }
        }
    }
    return transactionAmt;

}

console.log(bubbleSort([1500, 1200, 786, 450, 2000, 2300, 546, 780, 800, 900, 2000]));