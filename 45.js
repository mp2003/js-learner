const body = document.body;
const id = setInterval(() => {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}, 1000);

const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('clicked');
    clearInterval(id)
});