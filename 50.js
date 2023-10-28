const URL = 'https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();

xhr.open('GET', URL, true);
xhr.onreadystatechange = () => {
    // console.log(xhr.readyState);
    // if (xhr.readyState === 4) {
    //     const response = xhr.response;
    //     // console.log(response);
    //     const data = JSON.parse(response);
    //     console.log(data);
    // }
    xhr.onload = () => {

        const response = xhr.response;
        // console.log(response);
        const data = JSON.parse(response);
        console.log(data);
    }
}

xhr.send();