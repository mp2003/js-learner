
function sockMerchant(n, ar) {
    let map = new Map();
    for (let num of ar) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let ans = 0;
    for (let [num, freq] of map) {
        ans += Math.floor(freq / 2);
    }

    console.log(ans);

}

sockMerchant(10, [10, 20, 20, 10, 10, 30, 50, 10, 20,30])