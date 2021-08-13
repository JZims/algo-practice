

// const same = (arr1, arr2) => {
//     //Eliminate possibility of uneven arrays being compared by checking equal sizes
//     if(arr1.length !== arr2.length) {
//         console.log("NEED MOAR")
//         return false
//     }   
//     //iterate through each element of array1
//     for(var i = 0; i < arr1.length; i++){
//         //Define the correct value of squared number using indexOf()
//         const correctValue = arr2.indexOf( arr1[i] ** 2 )
//         //check to make sure indexOf does not return false, if so, return false
//         if(correctValue === -1) {
//             console.log("SHIT'S WRONG")
//             return false
//         }
//         //Splice the index of the found number out of array 2
//         arr2.splice(correctValue, 1)
//     }
//     //return true if the end of the array is reached
//     console.log("Gotem")
//     return true
// }
 










const same = (arr1, arr2) => {
//Eliminate possibility of uneven arrays being compared by checking equal sizes
    if(arr1.length !== arr2.length) {
        console.log("LENGTH'S WRONG")
        return false
    }
    //Set Frequentcy counters to an empty object. One for each array.
    const frequency1 = {}
    const frequency2 = {}

    //Iterate through each array, initializing it and setting a value of one if the key occurs once, 
    // or adding one to the value if the key has been encountered already
    for(let value of arr1){
        frequency1[value] = (frequency1[value] || 0) + 1
    }
    for(let value of arr2){
        frequency2[value] = (frequency2[value] || 0) + 1
    }

    //Loop through either of the newly created objects, checking each value
    for(let key in frequency1) {

        //Check for the absence of a squared key of each key existing in the opposite loop and return false
        //using if..in, you can scan an object to see if the key exists

        if(!(key ** 2 in frequency2)) {
            console.log(frequency1, frequency2)
            return false
        }
        //In the loop not being iterated, check if the key squared does not equal the current key in each iteration and return false if it does
        if(frequency2[key ** 2] !== frequency1[key]){
                console.log("SOMETHING ELSE IS WHACK")
                return false
    }

 }
 //If none of these conditions were met, return true
 console.log("GOTEM")
 return true

}






const first = [1, 4, 9, 3]
const second = [81, 16, 1, 9]

same(first, second)

