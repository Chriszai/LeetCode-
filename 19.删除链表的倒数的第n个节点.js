/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
    let newHead = new ListNode(0, head)
    let length = getLength(newHead)
    

    let first = newHead
    for (var i = 0; i < length - n - 1; i++) {
        newHead = newHead.next
    }
    if (n == 1) {
        newHead.next = null
    } else {
        newHead.next = newHead.next.next
    }
    first = first.next
    return first

};
var getLength = function (head) {
    let length = 0;
    while (head) {
        length++
        head = head.next
    }
    return length
}