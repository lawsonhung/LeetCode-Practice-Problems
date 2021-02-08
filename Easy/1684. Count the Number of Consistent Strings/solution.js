/**You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

 

Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
 */

 /**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  const allowedSet = new Set(allowed)
  let ans = 0;
  
  outer: for (const word of words) {
      for (const letter of word) {
          if (!allowedSet.has(letter))
              continue outer;
      }
      console.log("word is:", word)
      ans++;
  }
  return ans;
  
};