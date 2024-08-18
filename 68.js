var countSymmetricIntegers = function (low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    let suml = 0,
      sumr = 0;
    let str = i.toString();
    if (str.length % 2 === 0) {
      //   console.log(str);
      let mid = Math.floor(str.length / 2);
      let left = str.slice(0, mid);
      let right = str.slice(mid);
      //   console.log(left, right);
      suml = left.split("").reduce((acc, currentVal) => {
        return Number(Number(acc) + Number(currentVal));
      }, 0);
      sumr = right.split("").reduce((acc, currentVal) => {
        return Number(Number(acc) + Number(currentVal));
      }, 0);
      //   console.log(suml, sumr);
      if (suml === sumr) count++;
    }
  }
  return count;
};

let ans = countSymmetricIntegers(1200, 1230);
console.log(ans);
