var plusOne = function (digits) {
  let num = digits.reduce((acc, val) => {
    return acc + val;
  }, "");
  num = BigInt(num) + BigInt(1);
  console.log(num.toString().split(""));
  return num.toString().split("");
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
