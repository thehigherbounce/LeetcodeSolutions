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
var removeNthFromEnd = function(head, n) {
    let first = head;
    let second = head;
    for(let i = 0;i < n;i++){
        second  = second.next;
    }
    if(!second){
        return head.next;
    }
    while(second.next){
        first = first.next;
        second = second.next;
    }
    first.next = first.next.next;
    return head;
};