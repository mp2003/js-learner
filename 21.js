const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// filter
console.log(numbers.filter((number) => {
  return number%2===0 ? true : false;
}));