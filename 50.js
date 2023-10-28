const URL = 'https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();

xhr.open('GET', URL, true);
xhr.onreadystatechange = () => {
    const response = xhr.response;
    console.log(response);
}

xhr.send();