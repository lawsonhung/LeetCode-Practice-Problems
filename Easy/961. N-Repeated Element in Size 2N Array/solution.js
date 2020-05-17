/**In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

 

Example 1:

Input: [1,2,3,3]
Output: 3
 */

 /**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let map = [];
  
  for (let element of A) {
      if (map[element]) {
          return element;
      }
      
      map[element] = true;
  }
};