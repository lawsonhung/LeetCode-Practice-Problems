/**Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
 */

 /**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let balanced = 0;
  let count = 0;
  
  for(let sIndex in s){
      if(s[sIndex] === 'R'){
          balanced++;
      } else {
          balanced--;
      }
      if (balanced === 0){
          count++;
      }
  }
  
  return count;
};