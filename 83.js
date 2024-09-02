/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let max = 0, altitude = 0;
    max = gain.reduce((acc, current) => {
        altitude = acc + current;
        return altitude > max
    }, 0)
    console.log(max);

    return max;
};

largestAltitude([-5, 1, 5, 0, -7])
largestAltitude([-4, -3, -2, -1, 4, 3, 2])