function func() {
  function hello() {
    console.log("hello");
  }

  return hello;
}
const a = func();
console.log("a()", a());
//hello
