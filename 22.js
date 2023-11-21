const numbers = [1, 2, 3, 4, 6, 7, 8, 9];

// console.log(
//   numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   })
// );
// // accumulator     currentValue  return
// // 1               2               3
// // 3               3               6
// // 6               4               10
// // 10              5               15
// // 15              6               21
// // 21              7               28
// // 38              9               45

const usercart = [
  { productId: 1, productName: "mobile", price: 12500 },
  { productId: 2, productName: "loptop", price: 35000 },
  { productId: 3, productName: "covered", price: 500 },
];

console.log(
  usercart.reduce((totalPrice, currentProduct) => {
    return currentProduct.price + totalPrice;
  }, 0)
);
