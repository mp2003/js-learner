/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let map = new Map();
    for (let ch of p) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    let i = 0, j = 0, count = map.size;
    let result = [];

    while (j < s.length) {
        if (map.has(s[j])) {
            map.set(s[j], (map.get(s[j])) - 1);
            if (map.get(s[j]) === 0) {
                count--;
            }
        }

        if (j - i + 1 === p.length) {
            if (count === 0) result.push(i);

            if (map.has(s[i])) {
                map.set(s[i], map.get(s[i]) + 1);
                if (map.get(s[i]) === 1) count++;
            }
            i++;
        }
        j++;
    }
    console.log(result);

    return result;
};

let ans = findAnagrams("cbaebabacd", "abc");
let ans1 = findAnagrams("abab", "ab")
