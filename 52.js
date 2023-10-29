console.log('srcipt started');
const URL = 'https://jsonplaceholder.typicode.com/posts'
function myPromise(method, URL) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, URL, true);
        console.log(xhr.readyState);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                console.log(xhr.readyState);
                resolve(xhr.response);
            }
        };
        xhr.send();

    })
};
myPromise('GET', URL)
    .then((response) => {
        return JSON.parse(response);
    }).then((data) => console.log(data))