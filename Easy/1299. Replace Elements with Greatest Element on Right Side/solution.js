/**Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1] */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let ans = [];
    
    for (let numToChangeIndex = 1; 
         numToChangeIndex <= arr.length; 
         numToChangeIndex++){
        let largestNum = arr[numToChangeIndex];
        
        if (numToChangeIndex === arr.length){
            ans.push(-1);
        } else {
        
            for (let numToCompareToIndex = numToChangeIndex + 1;
                 numToCompareToIndex < arr.length;
                 numToCompareToIndex++){
                // console.log("largestNum is: ", largestNum);
                // console.log("arr[numToCompareToIndex] is: ", 
                //             arr[numToCompareToIndex]);
                // console.log("numToCompareToIndex is: ", numToCompareToIndex);

                largestNum = Math.max(largestNum, arr[numToCompareToIndex]);
            }
            ans.push(largestNum);
        }
        // console.log("ans is: ", ans);
    }
    return ans;
};