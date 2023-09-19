const btn = document.querySelector('button');
const body = document.body;
const randomColorGenerator =()=>{
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const color= `rgba(${red},${green},${blue})`;
    console.log(color);
}

btn.addEventListener('click',() => {
    const randomColor = randomColorGenerator();
});