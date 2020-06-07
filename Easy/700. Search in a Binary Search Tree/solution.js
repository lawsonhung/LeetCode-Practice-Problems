/**Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root === null) {
      return null;
  }
  
  if (root.val === val) {
      return root;
  }
  
//     if (val < root.val) {
//         return searchBST(root.left, val);
//     }
  
//     if (val > root.val) {
//         return searchBST(root.right, val);
//     }
  
  return searchBST(root.left, val) || searchBST(root.right, val);
};