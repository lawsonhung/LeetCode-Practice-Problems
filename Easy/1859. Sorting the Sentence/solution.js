/**A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 

Example 1:

Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers. */

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  let obj = {};
  const splitArr = s.split(" ");
  for (let item of splitArr)
      obj[item[item.length - 1]] = item.slice(0,item.length - 1);
  let ans = "";
  for (let i = 1; i < splitArr.length + 1; i++){
      ans += obj[i];
      ans += " ";
  }
  return ans.slice(0,ans.length-1);
};