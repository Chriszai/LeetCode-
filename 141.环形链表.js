/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//     var arr = []
//     var dfs = function (root) {
//         if (!root) {
//             return false
//         }
//         if (arr.includes(root)) {
//             return true
//         } else {
//             arr.push(root)
//             return dfs(root.next)
//         }
//     }
//     return dfs(head)
// };

var hasCycle = function (head) {
    var set = new Set()
    var dfs = function (root) {
        if (!root) {
            return false
        }

        if (set.has(root)) {
            return true
        } else {
            set.add(root)
            return dfs(root.next)
        }
    }
    return dfs(head)
};