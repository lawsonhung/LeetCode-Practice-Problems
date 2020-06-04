/**Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 

If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 

Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

 

Example 1:

Input: nums = [4,3,10,9,8]
Output: [10,9] 
Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included, however, the subsequence [10,9] has the maximum total sum of its elements. */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  // console.log(nums.reduce((a, b) => {
  //     console.log("a: ", a);
  //     console.log("b: ", b);
  //     return a + b;
  // }));
  nums.sort((a, b) => b - a);
  let total = nums.reduce((a, b) => a + b);
  let half = Math.floor(total / 2);
  let ans = [];
  
  for (let i = 0, sum = 0; i < nums.length && sum <= half; i++) {
      sum += nums[i];
      ans.push(nums[i]);
  }
  return ans;
};