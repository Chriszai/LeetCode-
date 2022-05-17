var mergeTrees = function (root1, root2) {
    var dfs = function (root1, root2) {
        var x = 0, y = 0;
        if (root1) {
            var x = root1.val
        }
        if (root2) {
            var y = root2.val
        }
        if (root1 != null || root2 != null) {
            var tree = new TreeNode(x + y, null, null)
            tree.left = dfs(root1 == null ? null : root1.left, root2 == null ? null : root2.left)
            tree.right = dfs(root1 == null ? null : root1.right, root2 == null ? null : root2.right)
        }
        return tree == null ? null : tree
    }
    return dfs(root1, root2)
};