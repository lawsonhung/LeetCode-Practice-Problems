/**Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

 

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
 */

 /**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let oddLength = 1;
  let ans = 0;
  
  while(arr.length >= oddLength){
      for(let i = 0; i < arr.length - oddLength + 1; i++){
          for(let j = i; j < oddLength + i; j++){
              ans += arr[j]
          }
      }
      
      oddLength += 2;
  }
  
  return ans;
};