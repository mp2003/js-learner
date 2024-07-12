const addAll = (...args) => {
  let sum = 0;
  for (let i of args) sum += i;
  console.log(args);
  return sum;
};

console.log(addAll(1,2,3,4,5,6,7,8,9,10));

