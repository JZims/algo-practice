// given an array of integers and an integer, find the maximum sum of n numbers inside the array
// return the largest sum


function maxSubarraySum(arr, num) {
    //declare a max variable to store the maximum sum
    let maxSum = 0
    //decalre a temp varable to store the sum between transitions
    let tempSum = 0
    //check edge case of the array length being shorter than the number given, return null if so
    if(arr.length < num) return null
    //loop through the array a number of times equal to the number given, adding values
    //to create an initial max sum
    for(var i = 0; i < num; i++){
        maxSum = maxSum + arr[i]
    }
    //set temp equal to max
    tempSum = maxSum
    //in a separate loop, begin at the index of the num given and iterate through the array
        //store max by comparing what was already stored to temp and keeping the higher number
    for(var i = num; i < arr.length; i++){
        //store temp by subtracting the first value in the previous operation, and adding the next value
        tempSum = tempSum - arr[i - num] + arr[i]
        if(tempSum > maxSum) maxSum = tempSum
    }
    console.log(maxSum)

    //return max 
    return maxSum
}




maxSubarraySum([4, 1, 5, 7, 2, 4, 7, 9], 2)