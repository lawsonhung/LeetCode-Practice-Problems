/**Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

Example 1:

Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s. */

/**
 * @param {string} s
 * @return {boolean}
 */
 var areOccurrencesEqual = function(s) {
  let mapped = {};
  
  for (let letter of s) {
      mapped[letter] = (mapped[letter] || 0) + 1;
  }
  
  const occurences = new Set(Object.values(mapped));
  if (occurences.size === 1) return true;
  return false;
};