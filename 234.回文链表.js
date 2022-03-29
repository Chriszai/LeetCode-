/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function (head) {
//     if (head == null || head.next == null) return true
//     let arr = []
//     var dfs = function (root) {
//         if (!root) return
//         arr.push(root.val)
//         dfs(root.next)
//     }
//     dfs(head)
//     if (arr.length % 2 == 1) arr.splice((arr.length - 1) / 2, 1)

//     for (var i = arr.length / 2; i < arr.length; i++) {
//         if (arr[i] !== arr[arr.length - i - 1]) {
//             return false
//         }
//     }
//     return true
// };

var isPalindrome = function(head) {
    const vals = [];
    while (head !== null) {
        vals.push(head.val);
        head = head.next;
    }
    for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
        if (vals[i] !== vals[j]) {
            return false;
        }
    }
    return true;
};
