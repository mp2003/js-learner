var sortedSquares = function (nums) {
  let newArr = nums.map((a) => {
    return a * a;
  });
  console.log(newArr);
  return newArr.sort((a, b) => a - b);
};
let x = sortedSquares([-4, -1, 0, 3, 10]);
console.log(x);
