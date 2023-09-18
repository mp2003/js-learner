const btn = document.querySelector(".btn-headline");
// console.dir(btn);
// function myClick() {
//   console.log("clicked!!");
// }
btn.addEventListener("click", () => {
  console.log("hello");
});

const headline = document.querySelector(".headline");
headline.addEventListener("mouseover", () => {
  console.log("hover");
}, false);
