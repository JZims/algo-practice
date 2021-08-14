

function anagram(string1, string2) {
    //base case: if strings are not the same size, return false
    if (string1.length !== string2.length){
        console.log("Strings are different sizes")
        return false

    } 
    //declare empty objects for both strings to hold character occurences
    let occurences1 = {}
    let occurences2 = {}

    //loop through the given strings
    //check for letters; if a letter is seen for the first time, initialize it, 
    //otherwise add one to existing value
    for(let value of string1){
        occurences1[value] = (occurences1[value] ||  0) + 1
    }

    for(let value of string2){
        occurences2[value] = (occurences2[value] ||  0) + 1
    }

    //iterate through occurences1, checking each value for an equal amount of occurences 
    //of the same value in occurences2
    for(let key in occurences1){
        if(!(key in occurences2)) {
            console.log("key not found")
            return false
        }
        //finally, check to make sure the number of occurences of each letter in the string match
        if (occurences2[key] !== occurences1[key]) {
            console.log("occurences do not match")
            return false
        }
    }


    console.log(occurences1, occurences2)
    return true
}

const string1 = "jimbo"
const string2 = 'jimbo'

anagram(string1, string2)