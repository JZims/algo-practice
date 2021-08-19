function divisorSubstrings(n, k) {
    let accu = 0
    let num = n + ''
    let numArr = num.split('')
    
    for(var i = k; i < numArr.length; i++){
        //Need to set k as the limiting size of the subarrays
        let divisor =  numArr[i-1] + numArr[i]
        if(parseInt(divisor) % n == 0){
            accu++
        }
    }
    return accu

}