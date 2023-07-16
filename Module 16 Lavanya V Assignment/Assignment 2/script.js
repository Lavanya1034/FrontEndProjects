//linear search

keyId = [110, 107, 105, 100, 103, 102, 108, 104, 106, 109, 101];

key = document.getElementById("key");
res = document.getElementById("res");
btn = document.getElementById("btn");

//finding position of key

function roomNo(arr, key) {
    if(arr){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === key) {
              return i;
            }
          }
          return -1;

    }else{
        console.log("Input array is missing");
        return;
    }
  
}

btn.addEventListener("click", () => {
  let input = parseInt(key.value);
  if (input) {
    let no = roomNo(keyId, input);
    console.log(no)
    if (no !== -1) {
      res.textContent = `The position of the key ${input} to unlock room is ${no}`;
      console.log(`The position of the key ${input} to unlock room is ${no}`);
    } else {
      res.textContent = "The key is not found";
      console.log("The key is not found");
    }
  }
});
