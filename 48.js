function promise() {
    const flag = true;
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            flag ? resolve("flag", flag)
                : reject(console.error("false"));
        });
    }, 2000);
}
promise().then((flag) => {
    console.log(flag);
}).catch((err) => { err });