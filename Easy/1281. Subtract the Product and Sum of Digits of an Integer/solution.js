/**Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
 */

 /**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let nSplit = n.toString().split('');
  // Initialize product at 1, since 1 * anything = itself
  let product = 1;
  let sum = 0;
  
  for(let digit of nSplit){
      product *= parseInt(digit);
  }
  
  for(let digit of nSplit){
      sum += parseInt(digit);
  }
  
  return product - sum;
  
};