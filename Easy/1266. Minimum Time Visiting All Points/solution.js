/**On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:

In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
You have to visit the points in the same order as they appear in the array.
 

Example 1:


Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds */

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  //     let secs = 0;
  //     let x = points[0][0];
  //     let y = points[0][1];
      
  //     for(let point of points){
  //         if (x !== point[0] && y !== point[1]){
              
  //         }
          
  //         if (x !== point[0]){
  //             console.log("x: ", x);
  //             console.log("point[0]: ", point[0]);
  //             secs += Math.abs(x - point[0]);
  //             console.log("Incrementing secs to: ", secs);
  //             x = point[0];
  //         } 
  //         if (y !== point[1]){
  //             console.log("y: ", y);
  //             console.log("point[1]: ", point[1]);
  //             secs += Math.abs(y - point[1]);
  //             console.log("Incrementing secs to: ", secs);
  //             y = point[1];
  //         }
  //     }
      
  //     return secs;
      let secs = 0;
      
      for(let i = 1; i < points.length; i++){
          let x = Math.abs(points[i-1][0] - points[i][0]);
          let y = Math.abs(points[i-1][1] - points[i][1]);
          
          secs += Math.max(x,y);
      }
      return secs;
  };