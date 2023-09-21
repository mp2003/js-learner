const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector('.todo-form input[type="text"]');
const ul = document.querySelector(".todo-list");
const todoSubmit = document.querySelector('.todo-form input[type="submit"]');
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
