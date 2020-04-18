/**Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

Return the number of negative numbers in grid.

 

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
 */

 /**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let ans = 0;
  
  for (let row = 0; row < grid.length; row++){
      for (let col = 0; col < grid[row].length; col++){
          if (grid[row][col] < 0){
              ans++;
              console.log(grid[row][col], " is less than 0");
              console.log("ans is now: ", ans);
          }
      }
  }
  
  return ans;
};