function bubbleSort(arr) {
var noSwaps
    for(var i = arr.length-1; i > 0; i--){
        noSwaps = true
        for(var j = 0; j < i -1; j++){
            if(arr[j] > arr[j +1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            } 
        }
        if(noSwaps) break;
    }
    console.log(arr)
    return arr
}

// ---------------
//-----OPTIMIZATION
//----------------



numbers = [5, 8, 2, 7, 2, 7, 23, 10]
bubbleSort(numbers)