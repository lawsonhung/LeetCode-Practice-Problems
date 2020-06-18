/**Given an integer array arr. You have to sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the sorted array.

 

Example 1:

Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7] */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  //     let bitArr = arr.map(n => (n >>> 0).toString(2));
      
  //     // console.log(bitArr);
      
  //     let splitBitArr = bitArr.map(bitNum => bitNum.split(""));
      
  //     // console.log(splitBitArr);
      
  //     let reducedBitArr = splitBitArr.map(splitBitNumArr => {
  //     //                                     splitBitNumArr.reduce((accumulator, currentBinVal) => { 
  //     //     // console.log(accumulator);
  //     //     console.log(currentBinVal);
  //     //     return accumulator + parseInt(currentBinVal)
  //     // })
  //         let sum = 0;
          
  //         for (let binInt of splitBitNumArr) {
  //             console.log(binInt);
  //             sum += parseInt(binInt);
  //         }
          
  //         console.log(sum);
  //    });
      
  //     console.log(reducedBitArr);
      return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b)
  };
  
  const bitCount = num => {
      let sum = 0;
      while (num) {
          sum += num & 1;
          num = num >> 1;
      }
      return sum;
  }
  