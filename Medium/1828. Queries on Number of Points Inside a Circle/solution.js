/**You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane. Multiple points can have the same coordinates.

You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj.

For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle are considered inside.

Return an array answer, where answer[j] is the answer to the jth query.

 

Example 1:


Input: points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]
Output: [3,2,2]
Explanation: The points and circles are shown above.
queries[0] is the green circle, queries[1] is the red circle, and queries[2] is the blue circle.
 */

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
 var countPoints = function(points, queries) {
  const isInCircle = (point, circle) => {
      const [x, y, r] = circle;
      const [a, b] = point;
      return (a - x) ** 2 + (b - y) ** 2 <= r ** 2
  }
  
  return queries.map((circle) => 
      points.reduce((sum, point) =>{
          return sum + (isInCircle(point, circle) ? 1 : 0);
      }, 0)
  )
};