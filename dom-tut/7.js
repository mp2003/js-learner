const btn = document.querySelector('button');
const body = document.body;
const h1 = document.querySelector('h1');
const randomColorGenerator =()=>{
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const color= `rgba(${red},${green},${blue})`;
    return color;
}

btn.addEventListener('click',() => {
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    h1.textContent = `current color: ${randomColor}`;
});
