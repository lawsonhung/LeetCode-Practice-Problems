/**Given an array of unique integers salary where salary[i] is the salary of the employee i.

Return the average salary of employees excluding the minimum and maximum salary.

 

Example 1:

Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500 */

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  //     This was 34.08% runtime, 5.06% memory usage
  // //     Sort
  //     let sortedSalary = salary.sort((a,b) => a - b);
  // //     Remove the first and last salaries
  //     sortedSalary.pop();
  //     sortedSalary.shift();
  // //     Find the average of the remaining
  //     let sum = sortedSalary.reduce((accumulator,currentValue) => accumulator + currentValue);
  //     return sum / sortedSalary.length;
      
      let max = Math.max(...salary);
      let min = Math.min(...salary);
      
      let maxIndex = salary.indexOf(max);
      salary.splice(maxIndex, 1);
      
      let minIndex = salary.indexOf(min);
      salary.splice(minIndex, 1);
      
      let sum = 0;
      
      for(let i = 0; i < salary.length; i++){
          sum += salary[i];
      }
      
      console.log("salary: ", salary);
      console.log(sum);
      
      return sum / salary.length;
  };