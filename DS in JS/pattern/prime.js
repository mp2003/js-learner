const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1, num2;

const isPrime = (num) => {
  if (num <= 1) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    return num % i === 0;
  }
};

r1.question("enter the value of a : ", (a) => {
  num1 = Number(a);
  r1.question("enter the value of b : ", (b) => {
    num2 = Number(b);
    for (let i = num1 + 1; i <= num2; i++) {
      if (!isPrime(i)) {
        console.log(i);
      }
    }
    r1.close();
  });
});
