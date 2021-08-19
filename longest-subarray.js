// You are given two integer arrays a, b and one array of distinct integers c. Your 
//task is to check whether b is the longest contiguous subarray of a consisting only of elements 
//from c, i.e.

// Each of the elements of b belong to c,
// a contains b as a contiguous subarray,
// b is the longest of the contiguous subarrays of a which satisfy the first two conditions.
// Return true if all the above conditions are met, and false otherwise.

// NOTE: If there is a tie for the longest contiguous subarrays of a consisting of elements from c,
// the answer is still considered true if b is one of these longest contiguous subarrays.

// Example

// For a = [1, 1, 5, 1, 2], b = [1, 2], and c = [2, 1], the output should be longestSubarrayCheck(a, b, c)
// = true.

// All three conditions are met:

// All of the elements of b belong to c,
// a contains b as a contiguous subarray (a[3..4] = b),
// b is the longest of these contiguous subarrays. To prove this, let's look at all the contiguous  subarrays of length greater than 2:
// a[0..2] = [1, 1, 5] contains 5, which doesn't belong to c.
// a[0..3] = [1, 1, 5, 1] contains 5, which doesn't belong to c.
// a[0..4] = [1, 1, 5, 1, 2] contains 5, which doesn't belong to c.
// a[1..3] = [1, 5, 1] contains 5, which doesn't belong to c.
// a[1..4] = [1, 5, 1, 2] contains 5, which doesn't belong to c.
// a[2..4] = [5, 1, 2] contains 5, which doesn't belong to c.
// Therefore b is the longest contiguous subarray of a consisting only of elements from c, so the answer is true.

// For a = [1, 2, 3, 6, 1, 1, 1], b = [1, 2, 3], and c = [2, 1], the output should be longestSubarrayCheck(a, b, c) = false.

// Although b is a contiguous subarray of a, it contains the element b[2] = 3 which does not appear in c, therefore it does not meet the conditions. So the answer is false.

// For a = [1, 2, 2, 3, 2, 1, 3], b = [3, 2, 1, 3], and c = [2, 1, 3], the output should be longestSubarrayCheck(a, b, c) = false.

// All of the elements of a belong to c, and b.length < a.length, so b couldn't possibly be the longest contiguous subarray consisting of elements from c. So, the answer is false.







// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// An array of integers.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 105,
// 0 ≤ a[i] ≤ 109.

// [input] array.integer b

// An array of integers.

// Guaranteed constraints:
// 1 ≤ b.length ≤ 105,
// 0 ≤ b[i] ≤ 109.

// [input] array.integer c

// An array of distinct integers.

// Guaranteed constraints:
// 1 ≤ c.length ≤ 105,
// 0 ≤ c[i] ≤ 109.

// [output] boolean

// Return true if b is the longest contiguous subarray of a consisting of elements from c, otherwise return false