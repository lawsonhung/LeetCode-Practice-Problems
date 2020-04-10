/**Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

Example 1:

Input: "Hello"
Output: "hello"
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  // return str.toLowerCase();
  let ans = "";
  for (let letter of str){
      console.log(letter);
      ans += letter.toLowerCase();
  }
  console.log(ans);
  return ans;
};