/**Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
Return the string formed after mapping.

It's guaranteed that a unique mapping will always exist.

 

Example 1:

Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
 */

 /**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  const CHAR_CODE_OFFSET = 96;
  let ans = "";
  
  for (let index = 0; index < s.length; index++) {
      let tempNum = s[index];
      
      if (s[index + 2] === "#") {
          tempNum = s.slice(index, index + 2);
          console.log("tempNum is now: ", tempNum);
          index += 2;
      }
      
      console.log("tempNum: ", tempNum);
      console.log("charCode: ", String.fromCharCode(parseInt(tempNum) + CHAR_CODE_OFFSET));
      ans += String.fromCharCode(parseInt(tempNum) + CHAR_CODE_OFFSET);
  }
  
  return ans;
};