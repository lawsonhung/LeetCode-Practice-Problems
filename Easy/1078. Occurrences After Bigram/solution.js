/**Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

For each such occurrence, add "third" to the answer, and return the answer.

 

Example 1:

Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
Output: ["girl","student"] */

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  let arr = text.split(' ');
  let ans = [];
  for(let i = 0; i < arr.length - 2; i++){
      if(arr[i] === first && arr[i+1] === second) ans.push(arr[i+2]);
  }
  return ans;
};