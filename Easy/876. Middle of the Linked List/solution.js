/**Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let length = 0;
  let currentNode = head;
  
  while (currentNode) {
      length++;
      currentNode = currentNode.next;
  }
  
  // console.log(length);
  
  let middle;
  
  if (length % 2 === 0)
      middle = length / 2 + 1;
  else 
      middle = Math.round(length / 2);
  
  console.log(middle);
  
  let ansNode = head;
  
  while (middle > 1) {
      ansNode = ansNode.next;
      middle--;
  }
  
  return ansNode;
};