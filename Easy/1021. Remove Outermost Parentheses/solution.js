/**A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

 

Example 1:

Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
 */

 /**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let ans = "";
  let cnt = 0;
  let tmpStr = "";
  
  for (const c of S) {
      if (c === "(") {
          cnt++;
      } else if (c === ")") {
          cnt--;
      }
      tmpStr += c;
      if (cnt === 0) {
          ans += tmpStr.slice(1, tmpStr.length - 1);
          tmpStr = "";
      }
  }
  
  return ans;
};