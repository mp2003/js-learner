const Input = document.querySelector("input");
const Default = document.querySelector(".default");
const Debounce = document.querySelector(".debounce");
const Throttle = document.querySelector(".throttle");

// console.log(Input, Default, Debounce, Throttle);
function debounce(cb, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

const updateDebounce = debounce((text) => {
  Debounce.textContent = text;
}, 500);

const updateThrottle = throttle((text) => {
  Throttle.textContent = text;
}, 1000);

Input.addEventListener("input", (e) => {
  Default.textContent = e.target.value;
  updateDebounce(e.target.value);
  updateThrottle(e.target.value);
});

function throttle(cb, delay) {
  let shouldWait = false;
  let waitingArgs;

  const timeout = () => {
    if (waitingArgs === null) shouldWait = false;
    else {
      cb(...waitingArgs);
      setTimeout(timeout, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(timeout, delay);
  };
}
