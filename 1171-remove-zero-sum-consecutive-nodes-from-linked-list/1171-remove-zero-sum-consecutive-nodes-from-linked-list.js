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
var removeZeroSumSublists = function(head) {
    let temp = new ListNode(0);
    temp.next = head;
    let prefixSum = 0;
    let node = temp;
    let prefixSums = new Map();

    while (node) {
        prefixSum += node.val;
        if (prefixSums.has(prefixSum)) {
            let prev = prefixSums.get(prefixSum).next;
            let sum = prefixSum + prev.val;
            while (sum !== prefixSum) {
                prefixSums.delete(sum);
                prev = prev.next;
                sum += prev.val;
            }
            prefixSums.get(prefixSum).next = node.next;
        } else {
            prefixSums.set(prefixSum, node);
        }
        node = node.next;
    }

    return temp.next;
};