/* Given the array of integers nums, you will choose two different indices i and j of that array.Return the maximum value of(nums[i] - 1) * (nums[j] - 1).

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16. */

// data working with: array/number
// return: number

const maxProduct = nums => {
  // stores all possible products
  let product = []
  // nested for loop to iterate through nums arr
  for (let i = 0; i < nums.length; i++) {
    // to avoid duplicates, set j to equal i+1
    for (let j = i + 1; j < nums.length; j++) {
      product.push((nums[i] - 1) * (nums[j] - 1))
    }

  }
  // returns the max number in product array
  return Math.max(...product)

};
