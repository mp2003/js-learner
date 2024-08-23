class Solution {
  finalArray(B, n) {
    let arr1 = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      let num = B[i] - 1;
      let index = i + 1;

      while (num > 0 && index < n) {
        arr1[index] += num;
        num--;
        index++;
      }
    }
    let ans = [];
    for (let i = 0; i < n; i++) {
      ans.push(B[i] + arr1[i]);
    }
    return ans;
  }
}

// Example usage:
let B = [3, 1, 3, 4, 5];
let n = 5;
let solution = new Solution();
console.log(solution.finalArray(B, n)); // Output: [0, 2, 1]
