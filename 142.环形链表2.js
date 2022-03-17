/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function (head) {
//     var set = new Set()

//     var dfs = function (root) {
//         let iterator = set.values();

//         if (!root) {
//             return null
//         }
//         let cur = iterator.next().value
//         while (cur != undefined) {

//             if (cur == root) {
//                 return root
//             }
//             cur = iterator.next().value
//         }
//         set.add(root)
//         return dfs(root.next)
//     }
//     return dfs(head)
// };
var detectCycle = function (head) {
    var set = new Set()

    var dfs = function (root) {
        if (!root) {
            return null
        }
        if (set.has(root)) {
            return root
        }
        set.add(root)
        return dfs(root.next)
    }
    return dfs(head)
};