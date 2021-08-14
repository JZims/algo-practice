//Function takes in a sorted array and asks to print the number of unique values inside the array




function uniqueValues(arr){
    //check base case of array being empty and return 0 if so
    if (arr.length === 0 ) return 0

    //declare a variable i starting at the 0 position
    var i = 0

    //loop through the array, creating variable j
    for(var j = 1; j < arr.length; j++){
        //check if i and j are equal, if so increment j, leaving i in place
        if(arr[i] !== arr[j]){
            //if they are not equal, increment i and splice the index of j onto the index of i
            i++
            arr[i] = arr[j]
        }   
    }
    console.log(i)
    //return the number of times i has been incremented plus one
    return i + 1

}

uniqueValues([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 9])