/**Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

 

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"] */

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  //     Find the word with the least number of characters
      const shortestWordLength = Math.min(...A.map((word) => {
          return word.length;
      }));
      console.log(shortestWordLength);
      const shortestWord = A.find(word => word.length === shortestWordLength);
      console.log(shortestWord);
      
  //     Iterate through the letters of that word and put it in a map
  //     For each letter, create a new key-value pair and instantiate the value at 1 to keep track of how many times each letter has been repeated
      let shortestWordMap = {};
      shortestWord.split('').map(letter => shortestWordMap[letter] = 1)
      console.log(shortestWordMap);
  //     A for loop iterating through other words. On2
  //     If the letters match, put the letter in the map and add 1 if the letter already exists
  //     Iterate through the map and search for characters with a value equal to the length of A, meaning they showed up in all the strings
  //     Instantiate an array and put the answers in the array
  //     Return the answer array
  };