/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let i = 0, j = 0, count = 0, sum = 0;
    while (j < arr.length) {
        sum += arr[j];

        if (j - i + 1 === k) {
            let avg = sum / k;
            avg >= threshold && count++;

            sum -= arr[i];
            i++;
        }
        j++;
    }
    console.log(count);
    return count;
};

numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)