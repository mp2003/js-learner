const myfunc = function () {
  let counter = 0;
  return function () {
    if (counter == 0) {
      console.log("called once");
      counter++;
    } else {
      console.log("called more than once");
    }
  };
};

const ans = myfunc();
ans();
ans();