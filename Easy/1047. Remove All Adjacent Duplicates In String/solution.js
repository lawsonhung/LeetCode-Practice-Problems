/**Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

 

Example 1:

Input: "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca". */

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let SArray = S.split('');
//     Iterate through the string and look for duplicates
  for (let i = 0; i < SArray.length - 1; i++) {
      if (SArray[i] === SArray[i+1]) {
          // console.log(SArray[i], SArray[i+1], "are dupes");
  //     Remove the duplicate
          SArray.splice(i,2);
          // console.log('SArray after splice: ', SArray);
//         Decrement i by 2
          i -= 2;
      }
  }
//     If no duplicates can be removed, return the passed in string parameter
  // console.log('SArray before returning: ', SArray);
  return SArray.join('');
};