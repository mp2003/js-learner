const button = document.querySelector("button");
// console.dir(button);
const body = document.body;
// console.log(body);
const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb("${red}", ${green}, ${blue})`;
  return color;
};
button.addEventListener("click", () => {
    const color = randomColor();
    body.style.backgroundColor = color;
    // console.log(color);
    // body.textContent = `current color: ${randomColor()}`;
})