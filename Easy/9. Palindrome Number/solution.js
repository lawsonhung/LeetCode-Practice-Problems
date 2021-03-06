/**Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
 */

 /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  //   let srcNumStr = x.toString();
  //   let srcNumArr = srcNumStr.split("");
    
  //   if (x < 0){
  //     return false;
  //   }
    
  //   for(let i = 0; i < srcNumArr.length; i++){
  //     for(let j = srcNumArr.length - 1; j >= 0; j--){
        
  //       // console.log("i: ", i, "| j: ", j);
  //       // console.log("srcNumArr[i]:", srcNumArr[i], "| srcNumArr[j]:", srcNumArr[j]);
        
  //       if (srcNumArr[i] !== srcNumArr[j]){
  //         return false;
  //       } else {
  //         i++;
  //         // j--;
  //       }
  //     }
  //   }
    
  //   return true;
    
    //Could you solve it without converting the integer to a string?
    let reversedNum = 0;
    let remainder;
    let srcNum = x;
    
    if (x < 0){
      return false;
    }
    
    while (x > 0){
      remainder = x % 10;
      reversedNum = reversedNum * 10 + remainder;
      x /= 10;
      x = Math.trunc(x)
    }
    
    return srcNum === reversedNum
      
  };