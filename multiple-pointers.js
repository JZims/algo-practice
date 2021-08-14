//finding the zerosum of an array of positive and negative integers
//return the two values that equal zero



function zeroSum(arr){

    //decalre two variables to hold left and right positions in the array
    var left = 0 
    var right = arr.length - 1

    //utilize a while loop, comparing the lesser left to the greater right
        //this will ensure zero, which is in the middle, is hit as a final resort
    while ( left < right ){

        //declare the sum value, and add left and right values together
        let sum  = arr[left] + arr[right]
        //check for the sum equalling zero, if it does, return the two values
        if( sum === 0 ) {
            console.log("Ok")
            return [arr[left], arr[right]]
        } 
        //check the sum being greater than zero. if it is, decrement the right value
        else if(sum > 0) {
            right--
        }
        //check the sum being less than zero. if it is, increment the left value
        else {
            left++
        }
    }


}

zeroSum([-4, -3, -2, -1, 0, 1, 2, 3, 10])