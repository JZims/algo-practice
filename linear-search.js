function linearSearch(arr, value){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === value) {
            console.log(i)
            return i
        }
    } 
 return - 1
}
