const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;
const ladder = (num) => {
  for (let i = num; i >= 0; i--) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    console.log(str);
  }
};

r1.question("How many lines of Ladder : ", (a) => {
  num = a;

  ladder(num);
  r1.close();
});
