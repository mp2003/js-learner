console.log("script started");
const id = setTimeout(() => {
    console.log("hello");
}, 0);
for (let index = 0; index < 100; index++) {
    console.log("... " + index);

}
clearTimeout(id);
console.log("script finished");