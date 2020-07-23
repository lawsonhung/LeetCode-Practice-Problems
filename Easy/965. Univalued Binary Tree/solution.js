/**A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

 

Example 1:


Input: [1,1,1,1,1,null,1]
Output: true */

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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  // console.log(root);
  // if (root.left != null && root.val != root.left.val)
  //     return false;
  // else if (root.right != null && root.val != root.right.val)
  //     return false;
  // else
  //     return isUnivalTree(root.left) || isUnivalTree(root.right);
  if (root === null) return true;
  const helper = (root, val) => {
      if (root === null) return true;
      return root.val === val && helper(root.left, val) && helper(root.right, val);
  };
  return helper(root, root.val);
};