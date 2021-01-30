/**You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

 

Example 1:

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal". */

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let ans = ""
  for(let i = 0; i < command.length; i++){
      if (command[i] === "G"){
          ans += "G";
          continue;
      }
      else if (command[i+1] === ")"){
          ans += "o";
          i++;
          continue;
      }
      else {
          ans += "al";
          i += 3;
          continue;
      }
  }
  return ans;
};