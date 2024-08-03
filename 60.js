var myAtoi = function (s) {
  let ans = 1;
  let arr = s.trim(" ").split(" ");
  let arr1 = arr[0].split("");
  let numArr = [];
  //   console.log(arr1[0], arr1[1]);
  for (let i = 0; i < arr1.length; i++) {
    // console.log(arr1[i]);
    if (numArr.length !== 0) {
      if (isNaN(arr1[i])) {
        console.log("hit");
        break;
      }
    }
    if (!isNaN(arr1[i])) {
      if (
        (arr1[i - 1] === "." || arr1[i - 2] === "+" || arr1[i - 2] === "-") &&
        numArr.length === 0
      ) {
        return 0;
      } else if (arr1[i - 1] === "-") numArr.push("-");
      else if (arr1[i - 1] === "+") numArr.push("+");

      numArr.push(arr1[i]);
    }
  }
  ans = Number(numArr.join("") * ans);
  console.log(numArr, ans);
  if (numArr.length === 0) return 0;

  if (ans < Math.pow(2, 31) * -1) {
    ans = Math.pow(2, 31) * -1;
  } else if (ans > Math.pow(2, 31) - 1) {
    ans = Math.pow(2, 31) - 1;
  }
  return ans;
};

console.log(myAtoi(".12"));
