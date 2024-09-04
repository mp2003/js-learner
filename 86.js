/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t == "") return "";
    let countT = new Map();
    let window = new Map();
    for (let ch of t) {
        countT.set(ch, (countT.get(ch) || 0) + 1);
    }
    let have = 0, need = countT.size, res = [-1, -1], resLen = Infinity, l = 0;
    for (var r = 0; r < s.length; r++) {
        let c = s[r];
        window.set(c, (window.get(c) || 0) + 1);
        if (countT.has(c) && window.get(c) === countT.get(c)) have += 1;
        while (have === need) {
            if (r - l + 1 < resLen) {
                res = [l, r];
                resLen = r - l + 1;
            }
            window.set(s[l], window.get(s[l]) - 1);
            if (countT.has(s[l]) && window.get(s[l]) < countT.get(s[l])) {
                have -= 1;
            }
            l += 1;
        }
    }
    res = [l, r];
    console.log('res:', res, 'resLen:', resLen);

    if (resLen != Infinity) return s.slice(l - 1, r + 1);
    else return "";
};

console.log((minWindow("ADOBECODEBANC", "ABC")))
