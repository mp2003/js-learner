/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0,
        j = 0,
        ans = 0;
    let map = new Map();
    while (j < s.length) {
        map.set(s[j], (map.get(s[j]) || 0) + 1);
        if (map.size === j - i + 1) {
            ans = Math.max(ans, map.size);
        } else if (j - i + 1 > map.size) {
            map.set(s[i], map.get(s[i]) - 1);
            if (map.get(s[i]) === 0) map.delete(s[i]);
            i++;
        }
        j++;
    }
    return ans;
};

let val = lengthOfLongestSubstring("aab");
console.log(val);
