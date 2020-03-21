/**You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
 */

 
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  //     let jewels = J.split("");
  //     let stones = S.split("");
  //     let ans = 0;
      
  //     for(let i = 0; i < jewels.length; i++){
  //         for(let j = 0; j < stones.length; j++){
  //             // if (jewels[i] === stones[j]){
  //             //     ans++;
  //             // }
  //             (jewels[i] === stones[j]) ? ans++ : null;
  //         }
  //     }
      
  //     return ans;
      
      let ans = 0;
      
      for(let char of S){
          // J contains char stone
          // Chars is J are distinct from one another
          if (J.lastIndexOf(char) > -1){
              ans++;
          }
      }
      
      return ans;
  };