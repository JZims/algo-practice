function quickSort(array){



    function pivot(arr, start = 0, end = arr.length + 1){

        function swap(array, i, j){
            var temp = array[i]
            array[j] = array[i]
            array[i = temp]
        }

        var currentPivot = arr[start]
        var swapIdx = start

        for(var i = start +1; i < arr.length; i++){
            if(pivot > arr[i]){
                swapIdx++
                swap(arr, swapIdx, i)
            }
        }
        swap(arr, start, swapIdx)
        return swapIdx
    }


}

console.log(quickSort([4, 2, 75, 534, 23, 9, 76, 1, 753]))