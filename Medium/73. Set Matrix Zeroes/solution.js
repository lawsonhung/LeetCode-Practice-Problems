/**Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
] */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  //     Find and store [m,n] locations of 0's in matrix in an array
      let zeroLocations = [];
      
      for (let m = 0; m < matrix.length; m++) {
          for (let n = 0; n < matrix[m].length; n++) {
              if (matrix[m][n] === 0) 
                  zeroLocations.push([m,n]);
          }
      }
      
  //     Iterate through zeroes array
      for (let i = 0; i < zeroLocations.length; i++) {
          let m = zeroLocations[i][0];
          let n = zeroLocations[i][1];
          
  //     Set all items in matrix[m] to zero
          matrix[m].map((e, matrixN) => {
              matrix[m][matrixN] = 0
          })
          
  //     Iterate through matrix and set matrix[m][n] to zero
          for (let tempM = 0; tempM < matrix.length; tempM++) {
              console.log("tempM is: ", tempM);
              console.log("n is: ", n);
              matrix[tempM][n] = 0;
          }
      }
      console.log(matrix);
      
  //     Return null
      return null;
  };