/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let map = new Map();
    map.set("2", "abc");
    map.set("3", "def");
    map.set("4", "ghi");
    map.set("5", "jkl");
    map.set("6", "mno");
    map.set("7", "pqrs");
    map.set("8", "tuv");
    map.set("9", "wxyz");

    let result = [];
    if (digits.length === 0) return result;
    // console.log(map);
    // console.log(digits);


    for (let num of digits) {
        // console.log(num, [...map.get(num)]);
        result.push(map.get(num));
    }

    let ans = Array.from({ length: Math.max(...result.map(s => s.length)) }, () => '');

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            
        }
    }
    return ans;
};

console.log(letterCombinations("32"));
