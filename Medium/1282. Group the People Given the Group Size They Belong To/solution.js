/**There are n people whose IDs go from 0 to n - 1 and each person belongs exactly to one group. Given the array groupSizes of length n telling the group size each person belongs to, return the groups there are and the people's IDs each group includes.

You can return any solution in any order and the same applies for IDs. Also, it is guaranteed that there exists at least one solution. 

 

Example 1:

Input: groupSizes = [3,3,3,3,3,1,3]
Output: [[5],[0,1,2],[3,4,6]]
Explanation: 
Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].
 */

 /**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  let ans = [];
  // let currentGroup = [];
  let map = {};
  
  // groupSizes.sort((a,b) => a - b);
  
//     for(let i = 0; i < groupSizes.length; i++){
//         console.log(currentGroup);
//         console.log(i);
//         console.log(groupSizes[i]);
      
//         if (currentGroup.length < groupSizes[i])
//             currentGroup.push(i);
//         else {
//             ans.push(currentGroup);
//             currentGroup = [];
//         }
//     }
  
  for (let id in groupSizes) {
      const groupSize = groupSizes[id];
      
      if (!map[groupSize]) map[groupSize] = [];
      
      if (map[groupSize].length === groupSize) {
          ans.push(map[groupSize]);
          map[groupSize] = [id];
      } else 
          map[groupSize].push(id);
  }
  
  for (const groupSize in map)
      ans.push(map[groupSize]);
  
  return ans;
};