/**You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.



Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

 

Example 1:

Input: coordinates = "a1"
Output: false
Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.
 */

/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
  let arr1 = ['a','c','e','g'];
  let arr2 = ['b','d','f','h'];
  
  for (let i = 0; i < arr1.length; i++) {
      if (coordinates[0] === arr1[i] && coordinates[1]%2===1) {
          return false;
      }
  }
  
  for (let i = 0; i < arr2.length; i++) {
      if (coordinates[0] === arr2[i] && coordinates[1]%2===0) {
          return false;
      }
  }
  
  return true;
};