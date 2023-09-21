const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector('.todo-form input[type="text"]');
const todoSubmit = document.querySelector('.todo-form input[type="submit"]');
// console.log(todoInput.value);
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log('submitted');
  todoInput.value = "";
});
