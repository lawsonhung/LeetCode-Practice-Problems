/**Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

 

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 */

 /**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  //     let splitAddr = address.split('.');
      
  //     for(let i = 0; i < splitAddr.length; i++){
  //         console.log("The current index is: " + i);
  //         console.log(splitAddr[i]);
  //         if(splitAddr[i] === "."){
  //             console.log("This is a period: ");
  //         }
  //     }
      // console.log(address.split('.').join('[.]'));
      return address.split('.').join('[.]')
  };