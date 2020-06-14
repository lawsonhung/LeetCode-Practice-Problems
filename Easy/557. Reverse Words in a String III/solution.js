/**Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
 */

 /**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let words = s.split(" ");
  let ans = [];
  
  for (let word of words) {
      console.log(word);
      let reversedWord = "";
      
      for (let i = word.length-1; i >= 0; i--) {
          // console.log(word[i]);
          reversedWord += word[i];
      }
      // console.log(reversedWord);
      ans.push(reversedWord);
  }
  
  console.log(ans);
  return ans.join(" ");
};