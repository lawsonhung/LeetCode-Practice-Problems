/**Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = {};
  
  for (let n of nums) {
      if (map[n] == null) 
          map[n] = 0;
      map[n]++;
  }
  
  console.log(map);
  
  for (let n in map) {
      if (map[n] === 1) 
          return parseInt(n);
  }
};