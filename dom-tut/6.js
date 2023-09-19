const allButtons = document.querySelectorAll(".my-button button");
// console.dir(allButtons);
for (button of allButtons) {
  button.addEventListener("mouseover", function (e) {
    e.currentTarget.style.backgroundColor ='yellow';
  });
  button.addEventListener("mouseout", function (e) {
    e.currentTarget.style.backgroundColor ='white';
  });
}
