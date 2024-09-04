/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let op = [];
    let l = 0, r = 0;
    let q = [];

    while (r < nums.length) {
        while (q.length !== 0 && nums[q[q.length - 1]] < nums[r]) {
            q.pop();
        }
        q.push(r)
        if (l > q[0]) q.shift();

        if (r + 1 >= k) {
            op.push(nums[q[0]]);
            l++;
        }
        r++;
    }
    return op

    // let i = 0, j = 0;
    // let arr = [], op = [];
    // while (j < nums.length) {
    //     arr.push(nums[j]);
    //     if (j - i + 1 === k) {
    //         op.push(Math.max(...arr));
    //         arr.shift();
    //         i++;
    //     }
    //     j++;
    // }
    // return op;
};