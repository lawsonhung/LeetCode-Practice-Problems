/**Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  //     let objs = {};
  //     let objt = {};
      
  //     if(s.length !== t.length) return false;
      
  //     for(let i = 0; i < s.length; i++){
  //         objs[s[i]] = objs[s[i]] ? objs[s[i]]+1 : 1;
  //     }
      
  //     for(let i = 0; i < t.length; i++){
  //         objt[t[i]] = objt[t[i]] ? objt[t[i]]+1 : 1;
  //     }
      
  //     for(let key in objs){
  //         if(objs[key] !== objt[key]) return false;
  //     }
      
  //     return true;
      
      let sSorted = s.split('').sort().join('');
      let tSorted = t.split('').sort().join('');
      return sSorted === tSorted;
  };