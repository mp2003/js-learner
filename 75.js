/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let i = 0,
    j = 0,
    sum = 0,
    maxSum = 0;

  while (j < nums.length) {
    sum += nums[j];
    if (Math.abs(nums[i] - nums[j]) === k) {
        maxSum = Math.max(maxSum, sum);
      } 
    }
    j++;
  }
};
