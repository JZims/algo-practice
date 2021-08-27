// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

let A = [1, 3, 6, 4, 1, 2]
let B = [-1, -3, -6, -17]
let C = [1, 4]

function smallestPositiveInt(arr){
   let sortedArr = arr.sort((a, b) => a - b)
   if(sortedArr[sortedArr.length - 1] + sortedArr[0] < 0) return 1
   for(let i = 0; i < sortedArr.length; i++){
       if(sortedArr[i + 1] - sortedArr[i] !== 1){
           return sortedArr[i] + 1
       }
   }
}


console.log(smallesPositiveInt(C))