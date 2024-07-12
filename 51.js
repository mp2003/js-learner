console.log("xhr ajax request");

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL, true);

xhr.onreadystatechange = () => {
  xhr.onload = () => {
    const response = xhr.response;
    const data = JSON.parse(response);
    const id = data[4].id;
    const URL2 = `${URL}/${id}`;

    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", URL2, true);
    xhr2.onreadystatechange = () => {
      const response = xhr2.response;
      const data = JSON.parse(response);
      console.log(data.title);
    };
    xhr2.send();
  };
};

xhr.send();
