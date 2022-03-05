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
 * @return {number[][]}
 */
 var levelOrder = function (root) {
    let arr = []
    let q = []
    if (!root) {
        return []
    }
    q.push(root)
    arr.push([])
    arr[arr.length - 1].push(q[0].val)

    while (q.length != 0) {
        arr.push([])
        var index = q.length
        for (var i = 0; i < index; i++) {
            var cur = q.shift()
            arr[arr.length-1].push(cur.val)

            if (cur.left) {
                q.push(cur.left)       
            }
            if (cur.right) {
                q.push(cur.right)           
            }
        }
    }
    arr.shift()
    return arr
};