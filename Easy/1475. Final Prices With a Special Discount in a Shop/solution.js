/**Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

 

Example 1:

Input: prices = [8,4,6,2,3]
Output: [4,2,4,2,3]
Explanation: 
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4. 
For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2. 
For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4. 
For items 3 and 4 you will not receive any discount at all.
 */

/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
  let ans = [];
  
  for (let i = 0; i < prices.length; i++) {
      let currentPrice = prices[i];
      for (let j = i + 1; j < prices.length; j++) {
          let discountPrice = prices[j];
          
          if (discountPrice <= currentPrice) {
              ans.push(currentPrice - discountPrice);
              break;
          } else if (j === prices.length - 1) {
              ans.push(currentPrice);
          }
      }
  }
  
  ans.push(prices[prices.length - 1]);
  
  return ans;
};