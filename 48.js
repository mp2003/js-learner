function promise() {
    return new Promise((resolve, reject) => {
        const flag = true;
        setTimeout(() => {
            flag ? resolve("flag", flag) : reject("false");
        }, 2000);
    });
}

promise()
    .then((flag) => console.log(flag))
    .catch((err) => console.error(err));
