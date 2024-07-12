function myFunction(y) {
  return function (x) {
    console.log(Math.pow(x, y));
  };
}
const square = myFunction(3);
square(4);
