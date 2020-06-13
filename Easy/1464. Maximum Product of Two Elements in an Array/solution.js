/**Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums.length === 2) 
      return (nums[0]-1) * (nums[1]-1);
  else {
      const max1 = nums.splice(nums.indexOf(Math.max(...nums)), 1);
      console.log(max1);
      console.log(nums);
      const max2 = nums.splice(nums.indexOf(Math.max(...nums)), 1);
      console.log(max2);
      console.log(nums);
      return (max1-1) * (max2-1);
  }
};