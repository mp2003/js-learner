const array = [1, 2, 3, 4, 5];

// function func(number, index) {
//     console.log("index: " + index);
//     console.log("number: " + number);
// }

// array.forEach((number, index) => {
//     console.log("index: " + index);
//     console.log(`${number} *2 : ${number*2}`);

// })

const newArray = array.map((number, index, arr) => {
  console.log(number * 2, index, arr);
  return number * 2;
});
console.log(array);
console.log(newArray);

console.log(
  newArray.filter((number) => {
    return number >= 5;
  })
);
