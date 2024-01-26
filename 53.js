console.log("====================================");
console.log("====================================");

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(8)(9));
