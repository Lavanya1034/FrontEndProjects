//Validate SubSequence

//Linear search algorithm is applied - so
//time complexity - O(n)
//space complexity - O(1)

//method 1

// arr1 = [5, 1, 22, 25, 6, -1, 8, 10];
// sequence = [1, 6, -1, 10];

// //using linear search algorithm

// function SubSequence(arr1, seqArr) {
//   if (!arr1 || !seqArr) {
//     //edge case handling
//     return "Array is missing";
//   } else if (arr1.length == 0 || seqArr.length == 0) {
//     return "Array is empty";
//   } else {
//     let start = 0;
//     let found = false;
//     for (let i = 0; i < seqArr.length; i++) {
//       if ((i > 0 && found) || i == 0) {
//         found = false;

//         for (let j = start; j < arr1.length; j++) {
//           if (seqArr[i] === arr1[j]) {
//             start = j + 1;
//             found = true;
//             break;
//           }
//         }
//       }
//     }
//     if (!found) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// console.log(SubSequence(arr1, sequence));


//method 2 

arr1 = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 10];

function SubSequence(arr1, seqArr) {
  if (!arr1 || !seqArr) {
    //edge case handling
    return "Array is missing";
  } else if (arr1.length == 0 || seqArr.length == 0) {
    return "Array is empty";
  } else {
    let start = 0;
    let found = false;
    for (let i = 0; i < seqArr.length; i++) {
      if ((i > 0 && found) || i === 0) {
        found = false;

        for (let j = start; j < arr1.length; j++) {
          if (seqArr[i] === arr1[j]) {
            start = j + 1;
            found = true;
            break;
          }
        }

        if (i === seqArr.length - 1 && !found) {
          return false;
        }
      } else { // if any middle element is itself not a subset, then returned false instead 
        //of looping still.
        return false;
      }
    }
    return true;
  }
}

console.log(SubSequence(arr1, sequence));


