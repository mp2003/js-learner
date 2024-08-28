/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    // nums = nums.map((el) => el * multiplier);
    // console.log(nums);
    let min = Math.min(...nums);
    let minIndex = nums.indexOf(min);
    // console.log(minIndex);
    nums[minIndex] = min * multiplier;
  }
  return nums;
};

let ans = getFinalState([2, 1, 3, 5, 6], 5, 2);
console.log(ans);
