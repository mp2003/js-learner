/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    let map = new Map();
    let i = 0, j = 0, count = 0;
    while (j < s.length) {
        map.set(s[j], (map.get(s[j]) || 0) + 1);

        if (j - i + 1 === 3) {
            console.log(map);

            if ([...map.values()].every((el) => el === 1))
                count++;
            map.set(s[i], map.get(s[i]) - 1);
            if (map.get(s[i]) === 0) {
                map.delete(s[i]);
            }
            i++;
        }
        j++;
    }
    return count;
};

console.log(countGoodSubstrings("xyzzaz")); 