const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [one, two, three, four, five, ...MyNewArray] = arr;
console.log(one, two, three, four, five, MyNewArray);

console.log(
  arr.forEach((element) => {
    return element * element;
  })
);
