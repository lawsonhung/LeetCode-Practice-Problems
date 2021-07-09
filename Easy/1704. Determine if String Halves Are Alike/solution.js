/**You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

 

Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
 */

 /**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  let sum = 0;
  const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
  for (let i = 0; i < s.length / 2; i++)
      sum += vowels.has(s[i]) - vowels.has(s[s.length - 1 - i]);
  return !sum
};