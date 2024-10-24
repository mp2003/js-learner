/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let arr = [];
    if (head === null || head.next === null)
        return 0;
    while (head) {
        arr.push(head.val);
        console.log(head.val);

        head = head.next;
    }
    console.log(arr);

};

getDecimalValue([1, 0, 1])