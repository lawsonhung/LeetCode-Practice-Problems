/**Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

 

Example 1:

Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  let luckyNums = [];
  let minNums = [];
  let maxNums = [];
  
//     Populate minNums
  matrix.map(array => {
      minNums.push(Math.min(...array));
  });
  
//     Populate maxNums
  for (let col = 0; col < matrix[0].length; col++){
      let colNums = []
      
      for (let row = 0; row < matrix.length; row++) {
          colNums.push(matrix[row][col]);
      }
      
      let maxNumInCol = Math.max(...colNums);
      
      // maxNums.push(maxNumInCol);
      if (minNums.indexOf(maxNumInCol) !== -1)
          luckyNums.push(maxNumInCol);
      
      console.log(colNums);
  }
  
  
  console.log(minNums);
  console.log(maxNums);
  
  // return minNums.filter(n => maxNums.indexOf(n) !== -1);
  return luckyNums;
};