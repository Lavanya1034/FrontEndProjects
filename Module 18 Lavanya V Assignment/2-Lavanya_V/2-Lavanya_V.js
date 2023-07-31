//Validate SubSequence

//time complexity - O(n*m)- as outer loop executes for "seqArr.length" times and
//                          inner loop executes for "arr1.length" times
//space complexity - O(1) - only auxillary spaces are used.

//method 1

let arr1 = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

function SubSequence(arr1, seqArr) {
  if (!arr1 || !seqArr) {
    //edge case handling
    return "Array is missing";
  } else if (arr1.length == 0 || seqArr.length == 0) {
    return "Array is empty";   //edge case handling
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
      } else { // if any middle/first element is itself not a subset, then returned false instead 
        //of looping still- so when larger array data is given, time is reduced.
        return false;
      }
    }
    return true;
  }
}
console.log("The input array is :")
console.log(arr1);
console.log("The subsequence array need to be checked is :");
console.log(sequence);
console.log(SubSequence(arr1, sequence));

//-------------------------------------------------------------------------
//line of code is bit less here but the second for loop(inner loop) will continue always till end
//method 2

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


