/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
    let [x1, x2] = coordinate1.split("");
    let [y1, y2] = coordinate2.split("");

    x1 = x1.charCodeAt(0) - "a".charCodeAt(0);
    y1 = y1.charCodeAt(0) - "a".charCodeAt(0);

    x2 = Number(x2);
    y2 = Number(y2);

    // console.log(x1 + 1, x2, y1 + 1, y2);

    return (x1 + y1) % 2 === (x2 + y2) % 2;
};

let ans = checkTwoChessboards("a1", "b1");
console.log(ans);
