/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
    let str = num.toString(), arr = [];
    let count = 0;
    let i = 0, j = 0;
    while (j < str.length) {
        arr.push(str[j])
        if (j - i + 1 === k) {
            let n = Number(arr.join(""));
            if (num % n === 0) count++;

            arr.shift();
            i++;
        }
        j++;
    }
    console.log(count);

    return count
};

divisorSubstrings(240, 2)
divisorSubstrings(430043, 2)
