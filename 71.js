class Solution {
    specialSubarrays(n, arr, k) {
        const MOD = 10**9 + 7;
        let count = 0;

        function checkCondition(maxInRange, arr, l, r, k) {
            for (let i = l; i <= r; i++) {
                if (Math.abs(maxInRange - arr[i] - arr[r]) % k === 0) {
                    return true;
                }
            }
            return false;
        }

        for (let l = 0; l < n; l++) {
            let maxInRange = arr[l];
            for (let r = l; r < n; r++) {
                maxInRange = Math.max(maxInRange, arr[r]);
                if (checkCondition(maxInRange, arr, l, r, k)) {
                    count = (count + 1) % MOD;
                }
            }
        }

        return count;
    }
}

// Example usage:
const sol = new Solution();
const n = 4;
const arr = [5,7,2,4];
const k = 2;

console.log(sol.specialSubarrays(n, arr, k)); // Example output
