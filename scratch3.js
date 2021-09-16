// 1) Write a function that given a list of countries, returns the country(s) that occur the least times
// i.e - ["Argentina", "Cuba", "Chile", "Argentina"] -> ["Cuba", "Chile"] -----------***



// function leastAmount(array){
//     let occurences = {}
    

//     for(var i = 0 ; i < array.length; i++){
//         occurences[array[i]] = (occurences[array[i]] || 0) + 1
//     }

//     let sortedArr = Object.entries(occurences).sort((a, b) => a[1] - b[1])
    
//     return sortedArr[sortedArr.length - 1][0]
// }


// 2) Find the length of largest subarray with 0 sum
// Input: arr[] = {15, -2, 2, -8, 1, 7, 10, 23};
// [15, -2, 2, -8, 1, 7, 10, 23]
// Output: 5
// Explanation: The longest sub-array with 
// elements summing up-to 0 is {-2, 2, -8, 1, 7}

    function zeroSum(array){
        var subArrays = []
        var j = 1
        for(var i = 0; i < array.length; i++){
            if(array[i] + array[j] === 0){
                    
            }
        }


    }




// 3) Given an array of size N consisting of only 0's and 1's. The array is sorted in such a manner that all the 1's are placed first and then they are followed by all the 0's. Find the count of all the 0's.

    // function (){

    // }



let countries =["Argentina", "Cuba", "Cuba", "Cuba", "Chile", "Argentina"]

console.log(leastAmount(countries))