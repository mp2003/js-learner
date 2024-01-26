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
  incrementCounter(Debounce);
}, 500);

const updateThrottle = throttle((text) => {
  incrementCounter(Throttle);
}, 100);

// Input.addEventListener("input", (e) => {
//   Default.textContent = e.target.value;
//   updateDebounce(e.target.value);
//   updateThrottle(e.target.value);
// });
document.addEventListener("mousemove", (e) => {
  incrementCounter(Default);
  updateDebounce();
  updateThrottle();
});

function incrementCounter(element) {
  element.textContent = (Number(element.innerText) || 0) + 1;
}
function throttle(cb, delay) {
  let shouldWait = false;
  let waitingArgs;

  const timeout = () => {
    if (waitingArgs === null) shouldWait = false;
    else {
      cb(...waitingArgs);
      waitingArgs = null;
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
