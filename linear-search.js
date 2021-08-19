function linearSearch(arr, value){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === value) {
            console.log(i)
            return i
        }
    } 
 return - 1
}

linearSearch([4, 10, 88, 41, 19, 20],89)