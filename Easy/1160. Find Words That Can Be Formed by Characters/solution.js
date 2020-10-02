/**You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
 */

 /**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let count = 0;
  
  words.map(word => {
      let charsCopy = chars;
      let wordArray = word.split('');
      let charsCopyArray = charsCopy.split('');
      let wordCount = 0;
      
      wordArray.forEach((ch, index) => {
          // console.log(ch);
          if(charsCopyArray.includes(ch)){
              let charsIndex = charsCopyArray.indexOf(ch);
              charsCopyArray.splice(charsIndex,1);
              wordCount++;
          }
          // console.log(charsCopyArray);
      })
      
      if(wordCount === word.length)
          count += word.length
      // count += (chars.length - charsCopyArray.length);
  })
  
  return count;
};