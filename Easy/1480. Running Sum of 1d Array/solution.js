/**Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]. */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let ans = [];
  
  for (let i = 0; i < nums.length; i++) {
      let numsToReduce = [];
      
      for (let temp = 0; temp < i + 1; temp++)
          numsToReduce.push(nums[temp])
      
      console.log(numsToReduce);
      ans.push(numsToReduce.reduce((accumulator, currentVal) => accumulator + currentVal))
  }
  
  return ans;
};