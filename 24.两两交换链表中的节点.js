/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let first;
    let n = 1
    if (head) {
        first = head
        while (head.next) {
            if (n == 1) {
                first = head.next
            }
            if (n % 2 == 1) {
                let cur = head.next
                head.next = head.next.next
                cur.next = head
                n++
            }
            else {
                let cur = head.next
                if (head.next.next) {
                    head.next = head.next.next
                }
                head = cur
                n++
            }
            console.log(first)
        }
        return first
    } else {
        return null
    }//
};