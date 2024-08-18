var sumBase = function (n, k) {
  let sum = 0;

  while (n > 0) {
    sum += n % k;
    n = Math.floor(n / k);
  }
  return sum;
};

let ans = sumBase(34, 6);
console.log(ans);
