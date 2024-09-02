/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let i = 0, j = 0, sum = 0, count = 0;
    for (let num of nums) {
        if (num === k) count++;
    }

    while (j < nums.length) {
        console.log("sum = " + sum, j, i);
        sum += nums[j];
        if (sum < k) {
            j++;
        } else if (sum === k) {
            count++;
            j++;
        } else {
            while (sum > k) {
                sum -= nums[i];
                i++;
            }
            if (sum === k) {
                count++;
                j++;
            }
        }
    }
    console.log(count);

    return count;
};

subarraySum([1, 2, 3], 3)