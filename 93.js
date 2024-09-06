/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (s, k) {
    let map = new Map();
    map.set("B", 0);
    map.set("W", 0);
    let j = 0, i = 0, ans = Infinity;
    while (j < s.length) {

        map.set(s[j], (map.get(s[j]) || 0) + 1);
        if (j - i + 1 === k) {
            // console.log(map);
            ans = Math.min(ans, map.get('W'));
            map.set(s[i], map.get(s[i]) - 1)
            i++;
        }
        j++;
    }
    console.log(ans);

    return ans
};

minimumRecolors("WBBWWBBWBW", 7)
minimumRecolors("WBWBBBW", 2)
minimumRecolors("BB", 1)
