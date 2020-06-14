/**Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

Return the number of cells with odd values in the matrix after applying the increment to all indices.

 

Example 1:


Input: n = 2, m = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.
 */

//  /**
//  * @param {number} n
//  * @param {number} m
//  * @param {number[][]} indices
//  * @return {number}
//  */
// var oddCells = function(n, m, indices) {
//   let matrix = new Array(n);
//   matrix.fill(new Array(m));
  
//   for (let row of matrix) {
//       row.fill(0);
//   }
  
//   console.log(matrix);
  
// //     for (let [row,col] of indices) {
// // //      Increment the row
// //         // matrix[pair[0]] = matrix[pair[0]].map(e => e+1);
// //         for (let i = 0; i < n; ++i) ++matrix[i][col];
// //         console.log(matrix);
      
// // //      Increment the column
// //         // matrix.map(row => {
// //         //     row[pair[1]]++;
// //         // })
// //         for (let j = 0; j < m; ++j) ++matrix[row][j];
      
// //         console.log(matrix);
// //     }
  
//   for (let [r,c] of indices) {
//       for (let i = 0; i < n; ++i) {
//           console.log("row: ", i);
//           console.log("col: ", c);
//           ++matrix[i][c];
          
//           console.log(matrix);
//       }
//       // for (let j = 0; j < m; ++j) ++matrix[r][j];

//       console.log(matrix);
//   }
  
//   let ans = 0;
  
//   for (let row of matrix) {
//       // row.reduce((total, num) => {
//       //     // console.log("ans: ", ans);
//       //     if (num % 2 === 1)
//       //         ans++;
//       // }, ans);
//       // for (let num of row) {
//       //     if (num % 2 === 1)
//       //         ans++
//       // }
//       ans += [...row].filter(x => x % 2 === 1).length;
//   }
  
//   return ans;
// };

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  //     let matrix = new Array(n);
  //     matrix.fill(new Array(m));
      
  //     for (let row of matrix) {
  //         row.fill(0);
  //     }
      
      let matrix = [...Array(n)].map(() => Array(m).fill(0));
      
      console.log(matrix);
      
  //     for (let [row,col] of indices) {
  // //      Increment the row
  //         // matrix[pair[0]] = matrix[pair[0]].map(e => e+1);
  //         for (let i = 0; i < n; ++i) ++matrix[i][col];
  //         console.log(matrix);
          
  // //      Increment the column
  //         // matrix.map(row => {
  //         //     row[pair[1]]++;
  //         // })
  //         for (let j = 0; j < m; ++j) ++matrix[row][j];
          
  //         console.log(matrix);
  //     }
      
      for (let [r,c] of indices) {
          for (let i = 0; i < n; ++i) {
              // console.log("row: ", i);
              // console.log("col: ", c);
              // console.log("matrix[i][c]: ", matrix[i][c]);
              ++matrix[i][c];
              
              // console.log(matrix);
          }
          for (let j = 0; j < m; ++j) ++matrix[r][j];
   
          // console.log(matrix);
      }
      
      let ans = 0;
      
      for (let row of matrix) {
          // row.reduce((total, num) => {
          //     // console.log("ans: ", ans);
          //     if (num % 2 === 1)
          //         ans++;
          // }, ans);
          // for (let num of row) {
          //     if (num % 2 === 1)
          //         ans++
          // }
          ans += [...row].filter(x => x % 2 === 1).length;
      }
      
      return ans;
  };