// https://leetcode.com/problems sum-of-all-odd-length-subarrays/

/*Given an array of positive integers arr, calculate the sum of all possible odd - length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd - length subarrays of arr.

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
*/

// data working with: arrays
// returns: number

// add all of the elements in the array
// create subarray from main array 
// sum together the elements of each subarray
// sum each element of main array along with each subarray total
// return total sum

const sumOddLengthSubarrays = arr => {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i += 2) {
    for (let j = 0; j < arr.length - i; j++) {
      sum += arr.slice(j, j + i + 1).reduce((acc, curr) => acc + curr);
      console.log(arr.slice(j, j + i + 1));
    }
  }
  return totalSum;
};