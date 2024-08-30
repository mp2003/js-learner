/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let total_points = cardPoints.reduce((acc, current) => acc + current, 0);
    // console.log(total_points);
    let i = 0, j = 0, sum = 0, ans = 0;
    while (j < cardPoints.length) {
        console.log(cardPoints[j], sum);

        sum += cardPoints[j];
        if (j - i + 1 == cardPoints.length - k) {
            ans = Math.max(ans, total_points - sum);
            sum -= cardPoints[i];
            i++;
        }
        j++;
    }
    console.log(ans);
    return ans;
};

maxScore([1, 2, 3, 4, 5, 6, 1], 3);