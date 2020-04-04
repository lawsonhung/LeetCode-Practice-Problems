/**Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

  let ansHeadNode;
  let ans;
  console.log("ans: ", ans);
  console.log("l1: ", l1);
  console.log("l2: ", l2);
//  Initializing ans
  if (l1.val <= l2.val){
      ansHeadNode = new ListNode(l1.val);
      l1 = l1.next;
      console.log("l1 <= l2, so ans.head.val = l1.val");
  } else {
      ansHeadNode = new ListNode(l2.val);
      l2 = l2.next;
  }
  console.log("ans is initialized as: ", ans);
  console.log("l1 after initializing ans: ", l1);
  console.log("l2 after initializing ans: ", l2);
  ans = ansHeadNode;
  
  while(l1.next || l2.next){
      if (l1.val <= l2.val){
          ans.next = new ListNode(l1.val);
          l1 = l1.next;
          ans = ans.next;
          console.log("Pushing l1 node to ans: ", l1.val);
      } else {
          console.log("Pushing l2 node to ans: ", l2.val);
          ans.next = new ListNode(l2.val);
          console.log("ans after pushing l2 node: ", ans);
          l2 = l2.next;
          ans = ans.next;
      }
  }
  // console.log("ans after while loop", ans);
  // console.log("l1 after pushing to ans: ", l1);
  // console.log("l2 after pushing to ans: ", l2);
  
  if (l1){
      ans.next = l1;
      ans = ans.next;
      // console.log("Pushing l1");
  }
  if (l2){
      ans.next = l2;
      ans = ans.next;
      // console.log("Pushing l2");
  }
  
  console.log("l1 should be null", l1);
  console.log("l2 should be null", l2);
  console.log("ansHeadNode at end is: ", ansHeadNode);
  return ansHeadNode;
};