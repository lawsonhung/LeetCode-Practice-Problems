/**Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]
 

Example 1:

Input: "IDID"
Output: [0,4,1,3,2] */

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let min = 0;
  let max = S.length;
  let ans = [];
  
  for (let i = 0; i < S.length; i++) {
      if (S[i] === 'I') {
          ans.push(min);
          min++
      } else if (S[i] === 'D') {
          ans.push(max);
          max--;
      }
  }
  
  if (S[S.length - 1] === 'I') {
      ans.push(min);
  } else {
      ans.push(max);
  }
  
  return ans;
};