//Binary search

productId = [10, 12, 15, 19, 24, 28, 30, 45, 50, 65, 77, 99];

btn=document.getElementById("btn");
key = document.getElementById("key");
res = document.getElementById("res");

//function to find product ID

function productIdFound(arr,id){
    if(arr){
        let start =0;
        let end = arr.length-1;
        while(start<=end){
            let mid = Math.floor((start+end)/2);
            if(arr[mid]===id){
                return mid;
            }else if(arr[mid]<id){
                start = mid+1;
            }else{
                end = mid-1;
            }
        }
        return -1;

    }else{
        console.log("Input array is missing"); //edge case handling
    }
}

btn.addEventListener("click",()=>{
    let inp = parseInt(key.value);
    if(inp){
        let pos = productIdFound(productId,inp);
        if(pos !== -1){
            console.log(`The position of product with ID ${inp} is ${pos}`);
            res.textContent = `The position of product with ID ${inp} is ${pos}`;
        }else{
            console.log(`Out of stock`);
            res.textContent= `Out of stock`;
        }

    }
})