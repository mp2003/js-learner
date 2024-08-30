/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let map = new Map();
    let i = 0, j = 0, ans = 0;
    while (j < s.length) {
        map.set(s[j], (map.get(s[j]) || 0) + 1);
        // console.log(Math.max(...map.values()));

        let max = Math.max(...map.values());
        if ((j - i + 1) - max <= k) {
            ans = Math.max(ans, j - i + 1);
        } else {
            map.set(s[i], map.get(s[i]) - 1);
            i++;
        }
        j++;
    }
    return ans;
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
