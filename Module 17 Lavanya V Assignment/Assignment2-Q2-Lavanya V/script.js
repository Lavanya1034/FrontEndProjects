//Sort student submissions using Insertion Sort- pick and drop method


function insertionSort(subId){
    for(let i=1;i<subId.length;i++){
        let currentVal = subId[i];
        let j;
        for(j=i-1;j>=0 && subId[j]>currentVal;j--){
            subId[j+1]=subId[j];
        }
        subId[j+1]=currentVal;
    }
    return subId;

}

console.log(insertionSort([67, 60, 58, 75, 53, 71, 63, 52, 53, 59, 57, 59, 63, 76, 53]));