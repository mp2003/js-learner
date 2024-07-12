const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;
function printPyramid(height) {
  for (let i = 0; i < height; i++) {
    let row = "";
    // Add spaces before the first asterisk
    for (let j = 0; j < height - i - 1; j++) {
      row += " ";
    }
    // Add asterisks
    for (let k = 0; k <= i * 2; k++) {
      row += "*";
    }
    console.log(row);
  }
}

r1.question("How many lines of Ladder : ", (a) => {
  num = a;

  printPyramid(num);
  r1.close();
});
