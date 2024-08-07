let ip = document.querySelector(".input-el");
let btn = document.querySelector(".btn");
let output = document.querySelector(".output");

btn.addEventListener("click", function () {
  output.textContent = ip.value;
});
