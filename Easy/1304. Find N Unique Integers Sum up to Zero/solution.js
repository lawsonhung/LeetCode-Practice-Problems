/**Given an integer n, return any array containing n unique integers such that they add up to 0.

 

Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
 */

 /**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let ans = [];
  
  if (n % 2 === 1){
      ans.push(0);
      n--;
  }
  
  for (let i = n; i > 0; i -= 2){
      ans.push(i);
      ans.push(i * -1);
  }
  
  return ans;
};