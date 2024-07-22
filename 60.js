function func4() {
  console.log("this is function 4");
}

function func3(cb) {
  console.log("this is function 3");
  cb();
}

function func2() {
  console.log("this is function 2");
}

function func1(cb) {
  console.log("this is function 1");
  cb();
}

// func1(func2);
func3(func4);
