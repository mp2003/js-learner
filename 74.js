/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  let map = new Map();
  for (let i = 0; i < position.length; i++) {
    map.set(position[i], speed[i]);
  }

  let sortedArr = [...map.keys()].sort((a, b) => a - b);
  let sortedMap = new Map();
  sortedArr.forEach((key) => sortedMap.set(key, map.get(key)));
  let arr = Array.from(sortedMap).reverse();
//   console.log(arr);

  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    let [p, s] = arr[i];
    stack.push((target - p) / s);
    if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2])
      stack.pop();
  }
//   console.log(stack);

  return stack.length;
};

let ans = carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
console.log(ans);
