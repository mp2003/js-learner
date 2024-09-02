/**
 * @param {number[][]} queries
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (queries, k) {
    let ans = [], stack = [];
    for (let i = 0; i < queries.length; i++) {
        let [x, y] = queries[i];
        let d = Math.abs(x) + Math.abs(y);

        if (stack.length == 0) {
            stack.push(d)
        } else {
            if (stack[stack.length - 1] > d) {
                stack.push(d)
            }
        }
        if (i < k - 1)
            ans.push(-1);
        console.log(stack);

    }
    return ans;
};

let ans = resultsArray([[1, 2], [3, 4], [2, 3], [-3, 0]], 2)
console.log(ans);
