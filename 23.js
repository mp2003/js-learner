// const arr = [5, 9, 1200, 1400, 1, 9, 68];
// console.log(arr.sort((a,b) => {
//    return a-b;
// }));
// sort

const products = [
    { productId: 1, productName: "p4", price: 500 },
    { productId: 2, productName: "p2", price: 5500 },
    { productId: 3, productName: "p3", price: 800 },
    { productId: 4, productName: "p1", price: 700 },
    { productId: 5, productName: "p5", price: 400 },
    { productId: 6, productName: "p6  ", price: 11500 },
  ];
  const newArray = [...products].sort((a,b) => {
      return a.price - b.price;
  });
  console.log(newArray);