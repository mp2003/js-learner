const Input = document.querySelector("input");
const Default = document.querySelector(".default");
const Debounce = document.querySelector(".debounce");
const Throttle = document.querySelector(".throttle");

// console.log(Input, Default, Debounce, Throttle);
const debounce = (cb, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
const updateDebounce = debounce((text) => {
  Debounce.textContent = text;
}, 1000);

Input.addEventListener("input", (e) => {
  Default.textContent = e.target.value;
  updateDebounce(e.target.value);
});
