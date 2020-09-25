/**Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

 

Example 1:

Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers for each row is: 
row 0 -> 2 
row 1 -> 4 
row 2 -> 1 
row 3 -> 2 
row 4 -> 5 
Rows ordered from the weakest to the strongest are [2,0,3,1,4]
 */
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  //     let reducedMat = [];
  //     let ans = [];
      
  // //     Iterate through mat
  //     for (let row of mat) {
  // //     Iterate through mat[i] with reduce
  //         const reducer = (accumulator, currentVal) => accumulator + currentVal;
  //         const reducedVal = row.reduce(reducer);
  // //     Store reduced value in new array
  //         reducedMat.push(reducedVal);
  //     }
      
  //     console.log(reducedMat);
  //     let reducedMatSplice = reducedMat;
  // //     Iterate through stored array to find weakest rows (lowest reduced value)
  //     while (k > 0) {
  //         const min = Math.min(...reducedMatSplice);
  // //     Store lowest values in answer array
  //         const i = reducedMat.indexOf(min);
  //         ans.push(i);
  //         const indexSplice = reducedMatSplice.indexOf(min);
  //         reducedMatSplice.splice(indexSplice,1);
          
  //         k--;
  //     }
  // //     Return answer
  //     return ans;
      //console.log(mat, k, '<---');    
      let result = []; 
      for (let i of mat){        
          const counter = i.filter(j => j != 0);        
          result.push(counter.length);    
      };        
  
      let resultObj = Object.assign({}, result);        
  
      let sorted = [];    
  
      for (var el in resultObj) {    
          sorted.push([el, resultObj[el]]);    
      }    
  
      sorted.sort(function(a, b) {        
          return a[1] - b[1];    
      });        
  
      let finalResult = sorted.slice(0,k);    
      let finalFinalResult = [];    
      for (let elem of finalResult){        
          finalFinalResult.push(elem[0]);    
      }        
  
      return finalFinalResult;
  };
  