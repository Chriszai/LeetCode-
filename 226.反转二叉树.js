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
 * @return {TreeNode}
 */
 var invertTree = function (root) {

    var dfs = function (root) {
        if (!root) {
            return
        }
        var tep = root.left
        root.left = root.right
        root.right = tep
        if (root.left) {
            dfs(root.left)
        }
        if (root.right) {
            dfs(root.right)
        }
    }
    dfs(root)   
    return root
};