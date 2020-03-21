/**Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

Follow up: Solve the problem if repeated values on the tree are allowed.

 

Example 1:


Input: tree = [7,4,3,null,null,6,19], target = 3
Output: 3
Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  // if (!original) return null
  // else if (Object.is(original,target)) return cloned
  // return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target)
      
  console.log("Cloned === Target? ", cloned === target);
  console.log("Original === Target? ", original === target);
  console.log("cloned.val === target.val: ", cloned.val === target.val);
  console.log("Object.is(original,target): ", Object.is(original,target));
  console.log("cloned: ", cloned);
  if (cloned.left){
      console.log("cloned.left: ", cloned.left);
  }
  if (cloned.right){
      console.log("cloned.right: ", cloned.right);
  }
  console.log("target: ", target);
  console.log("\n");
  
  // if (target.val === cloned.val){
  if (original === target)){
      console.log("It's a match! cloned is: ", cloned);
      return cloned;
  } else if (cloned.left && cloned.right === null) {
      return getTargetCopy(original.left, cloned.left, target);
  } else if (cloned.right && cloned.left === null){
      return getTargetCopy(original.right, cloned.right, target);
  }
  else {
      if (cloned.left && cloned.right){
          console.log("Both cloned.left and cloned.right exist");
          console.log("\n");
          return getTargetCopy(original.left, cloned.left, target) ||
          getTargetCopy(original.right, cloned.right, target);
      }
  }
  
};