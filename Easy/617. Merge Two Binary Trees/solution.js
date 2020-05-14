/**Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
   5   4   7 */
   
   /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  //     let ans = new TreeNode;
      
  //     if (t1.val && t2.val) {
  //         ans.val = t1.val + t2.val;
  //     }
      if (!t1 && !t2) {
          return null;
      }
      
      if (!t1 || !t2) {
          return t1 || t2;
      }
      
      const root = new TreeNode(t1.val + t2.val);
      
      root.left = mergeTrees(t1.left, t2.left);
      root.right = mergeTrees(t1.right, t2.right);
      
      return root;
  };