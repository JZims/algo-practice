function isPalindrome(str) {
    return str.split('').reverse().join('') === str;
  }


  console.log(isPalindrome("tacodog")) // false
  console.log(isPalindrome("tacocat")) // true