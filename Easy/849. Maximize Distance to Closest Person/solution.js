/** a row of seats, 1 represents a person sitting in that seat, and 0 represents that the seat is empty. 

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

Return that maximum distance to closest person.

Example 1:

Input: [1,0,0,0,1,0,1]
Output: 2
Explanation: 
If Alex sits in the second open seat (seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.
Example 2:

Input: [1,0,0,0]
Output: 3
Explanation: 
If Alex sits in the last seat, the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3. */

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let maxOpenSeatCt = 0;
  let maxOpenSeatLastIndex = null;
  let prevTakenSeatIndex = null;
  let tempOpenSeatCt = 0;
  
//  Assign maxOpenSeatLastIndex a value
  for (let i in seats) {
      if (seats[i] === 1)
          tempOpenSeatCt = 0;
      else {
          tempOpenSeatCt++;
          if (Math.max(maxOpenSeatCt, tempOpenSeatCt) >= maxOpenSeatCt) {
              maxOpenSeatCt = Math.max(maxOpenSeatCt, tempOpenSeatCt);
              maxOpenSeatLastIndex = i;
          }
      }
  }
  
  console.log("maxOpenSeatCt: ", maxOpenSeatCt);
  console.log("maxOpenSeatLastIndex: ", maxOpenSeatLastIndex);
  
//  Assign prevTakenSeatIndex a value
  prevTakenSeatIndex = maxOpenSeatLastIndex - maxOpenSeatCt;
  console.log("prevTakenSeatIndex: ", prevTakenSeatIndex);
  
//  If all seats on the left are open, return the maxOpenSeatCt
  if (prevTakenSeatIndex === -1) {
      return maxOpenSeatCt;
  }
  
//  If it's the last seat, return the difference between the last open seat index and the last taken seat index
  if (maxOpenSeatLastIndex == seats.length - 1) {
      console.log("This is the last seat in the row");
      return maxOpenSeatLastIndex - prevTakenSeatIndex;
  } else if (prevTakenSeatIndex == seats.length - 1) {
      console.log("Only the last seat in the row is taken");
  }else {
//      There is a next taken seat right after the maxOpenSeatLastIndex
//      Divide maxOpenSeatCt by 2 because Alex will be sitting in the middle
//      Round up for odd numbers
      // if (maxOpenSeatCt % 2 !== 0)
          return Math.ceil(maxOpenSeatCt / 2);
//      If even, divide by 2
      // else
      //     return maxOpenSeatCt / 2;
  }
};