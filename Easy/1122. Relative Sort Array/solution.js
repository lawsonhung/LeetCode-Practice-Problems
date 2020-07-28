/**Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

 

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19] */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  //     Create an ans array
      let ans = [];
  //     Iterate through arr2
      arr2.map(arr2e => {
  //     Nested for loop through arr1 => On^2
          // arr1.map((arr1e, index) => {
          for (let index = 0; index < arr1.length; index++){
              const arr1e = arr1[index];
  //     Find each element of arr2 in arr1 and push it into the ans array, destructively changing arr1 on the way
              if (arr2e === arr1e){
                  ans.push(arr1.splice(index,1)[0]);
                  
                  console.log();
                  console.log("arr1e is:", arr1e);
                  console.log("index is:", index);
                  console.log("arr1 is:", arr1);
                  console.log("ans is:", ans);
                  index--;
              }
          }
      })
      
      
      
      console.log(ans);
      console.log(arr1);
  //     Reorder arr1 remaining elements in ascending order
      arr1.sort((a,b) => a - b);
  //     Push/append reordered remaining elements into ans array
      ans = ans.concat(arr1);
  //     Return array
      return ans;
  };