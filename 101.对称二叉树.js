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
var isSymmetric = function (root) {
    if (!root.left && !root.right) {
        return true
    }
    var dfs = function (root1, root2) {
        if (!root1 && !root2) {
            return true
        }
        if (root1 && root2 && root1.val == root2.val) {
            return (dfs(root1.left, root2.right) && dfs(root1.right, root2.left))
        } else {
            return false
        }
    }
    if (root.left && root.right && root.left.val == root.right.val) {
        return dfs(root.left, root.right)
    }
    return false
};