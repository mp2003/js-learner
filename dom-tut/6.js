const allButtons = document.getElementsByTagName(".my-button button");
const mybutton = document.createElement("button");
mybutton.textContent="button4";
allButtons.append(mybutton);
console.log('allButtons');
// console.dir(allButtons);
for (button of allButtons) {
  button.addEventListener("mouseover", function (e) {
    e.currentTarget.style.backgroundColor ='yellow';
  });
  button.addEventListener("mouseout", function (e) {
    e.currentTarget.style.backgroundColor ='white';
  });
}
