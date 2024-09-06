var longestAlternatingSubarray = function (nums, threshold) {
    let i = 0, j = 0, ans = 0;
    while (j < nums.length) {

        if (nums[i] % 2 == 0
            && nums[j] % 2 !== nums[j + 1] % 2
            && nums[j] <= threshold
        ) {
            ans = Math.max(ans, j - i + 1);
        } else
            i++;

        j++;
    }
    return ans;
};