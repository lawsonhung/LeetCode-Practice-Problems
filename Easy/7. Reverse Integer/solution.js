/*Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let numToStr = x.toString();
  let reversedArr = [];
  let srcNumIsNeg = x < 0;
  
  for(let i = numToStr.length - 1; i >= 0; i--){
    reversedArr.push(numToStr[i]);
  }
  
  if (srcNumIsNeg) {
    reversedArr.unshift("-");
  }
  
  let reversedStr = reversedArr.join("");
  let reversedNum = parseInt(reversedStr);
  
  if (reversedNum > (Math.pow(2, 31) - 1) ||
     reversedNum < (Math.pow(-2, 31))
     ){
    return 0;
  }
  
  return reversedNum;
};