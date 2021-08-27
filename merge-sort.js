//Explots the fact that arrays of 0 or 1 element are always sorted
//works by decomposing an array into smaller arrays, comparing, and restructuring



// function mergeTwo(arr1, arr2){

//     var firstArrIdx = 0
//     var newArr = []

//     for(var i = 0; i < arr2.length; i++){
//         if(firstArrIdx > arr2.length -1 || arr2[i] < arr1[firstArrIdx]){
//             newArr.push(arr2[i])
//             newArr.push(arr1[firstArrIdx])
//         }
//         if(arr2[i] > arr1[firstArrIdx]){
//             newArr.push(arr1[firstArrIdx])
//             newArr.push(arr2[i])
//         }
//         firstArrIdx++
//     }
//     return newArr
// }

//***********Refactor*************** 

function mergeTwo(arr1, arr2){
    var i = 0
    var j = 0
    var newArr = []

    while(arr1.length > i && arr2.length > j){
        if(arr1[i] > arr2[j]){
            newArr.push(arr2[j])
            j++
        } else if(arr1[i] < arr2[j]){
            newArr.push(arr1[i])
            i++
        } else if(arr1[i] === arr2[j]){
            newArr.push(arr2[j])
            j++
            i++
        }
     }

     if(j < arr2.length){
         const remain = arr2.slice(j)
         return newArr.concat(remain)
     } else if( i < arr1.length){
         const remain = arr1.slice(i)
         return newArr.concat(remain) 
     } else return newArr
    
}
   

// console.log(mergeTwo([1900], [2, 14, 99, 200, 300]))


function mergeSort(array){
    //base case - Array length is 1
    if(array.length === 1) return array
    //halfway point through the array
    let mid = Math.floor(array.length / 2)
    //recursivey calling left and right arrays, splitting both with each iteration
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid))

    return mergeTwo(left, right)
}

console.log(mergeSort([2, 1 , 6, 534, 37, 81, 13, 62]))