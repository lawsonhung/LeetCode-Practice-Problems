/**Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
  const len = mat.length;
  let ans = 0;
  for (let i = 0; i < len; i++) {
      ans += mat[i][i];
      if (len-i-1 != i) {
          ans += mat[len-i-1][i]
      }
  }
  return ans;
};

