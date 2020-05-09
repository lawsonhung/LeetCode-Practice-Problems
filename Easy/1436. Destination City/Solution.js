/**You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 

Example 1:

Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo" 
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo". */

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  const departureCities = new Set(paths.map(path => path[0]));
  
  // paths.map(path => {
  //     departureCities.push(path[0]);
  // })
  
  // for (const path of paths) {
  //     if (!departureCities.includes(path[1])) {
  //         return path[1];
  //     }
  // }
  // for (const path of paths) {
  //     if (!departureCities.has(path[1])) {
  //         return path[1];
  //     }
  // }
  
  return paths.filter((path) =>
      !departureCities.has(path[1])
                     ).pop()[1];
};