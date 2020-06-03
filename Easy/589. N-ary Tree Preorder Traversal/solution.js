/**Given an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

 

Follow up:

Recursive solution is trivial, could you do it iteratively?

 

Example 1:



Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]
 */

 /**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let ans = [];
  
  traverse = (tree) => {
      if (!tree) {
          return ans;
      }
      ans.push(tree.val);
      for (let i = 0; i < tree.children.length; i++) {
          traverse(tree.children[i]);
      }
      return ans;
  }
  
  return traverse(root);
};