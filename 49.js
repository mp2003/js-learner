const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");

console.log(heading1);

function promise(element, timeout, color, text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.style.color = color;
                element.textContent = text;
                resolve();
            } else {
                reject();
            }
        }, timeout);
    });
}

const returnedPromise = promise(heading1, 1000, "red", "heading 1");

returnedPromise.then(() => {
    return promise(heading2, 1000, "green", "heading 2");
}).then(() => {
    return promise(heading3, 1000, "blue", "heading 3");
}).then(() => {
    return promise(heading4, 1000, " cyan", "heading 4");
}).catch(() => {
    console.error("An error occurred.");
});
