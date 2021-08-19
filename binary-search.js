function binarySearch(arr, value){

    var left = 0
    var right = arr.length-1
    var mid = Math.floor((left + right) / 2)

    while(arr[mid] !== value && left <= right){
        
        if (value < arr[mid]) right = mid - 1
        else left = mid + 1
        mid = Math.floor((left + right) / 2)
    }
    return arr[mid] === value ? mid : -1

}