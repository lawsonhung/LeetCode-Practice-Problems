/**You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

 

Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
  var occurences = {};
  let ans = 0;
  
  for (let num of nums) {
      occurences[num] = (occurences[num] || 0) + 1;
  }
  
  for (const [key,val] of Object.entries(occurences)) {
      if (val === 1) {
          ans += parseInt(key);
      }
  }
  
  return ans;
};