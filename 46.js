function myFunc(callback) {
    console.log("hello");
    callback();
}

myFunc(() => {
    console.log("world");
});