const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector('.todo-form input[type="text"]');
const ul = document.querySelector(".todo-list");
const todoSubmit = document.querySelector('.todo-form input[type="submit"]');

const todoBtn = document.querySelector(".todo-btn");
// console.log(todoBtn.classList);

// console.log(todoInput.value);
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log('submitted');
  const newLi = document.createElement("li");
  newLi.innerHTML = `<span class="text">${todoInput.value}</span>
  <div class="todo-container">
    <button class="todo-btn remove">Remove</button>
    <button class="todo-btn done">Done</button>
    </div>`;
  ul.append(newLi);
  todoInput.value = "";
});
ul.addEventListener('click' , (e) => {
   if (e.target.classList.contains('done')){
    const spanText= e.target.parentNode.previousElementSibling;
    spanText.style.textDecoration ="line-through";
}
  if (e.target.classList.contains('remove')){
    const targetItem = e.target.parentNode.parentNode;
    // console.log(targetItem);
    targetItem.remove();
  }
})