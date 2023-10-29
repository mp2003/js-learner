console.log("srcipt started");
const URL = "https://jsonplaceholder.typicode.com/posts";
function myPromise(method, URL) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, URL, true);
    // console.log(xhr.readyState);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        // console.log(xhr.readyState);
        resolve(xhr.response);
      }
    };
    xhr.send();
  });
}
myPromise("GET", URL)
  .then((response) => {
    return JSON.parse(response);
  })
  .then((data) => {
    const id = data[4].id;
    const URL2 = `${URL}/${id}`;
    // console.log(URL2);
    return new Promise((resolve, reject) => {
      const xhr2 = new XMLHttpRequest();
      xhr2.open("GET", URL2, true);
      xhr2.onload = () => {
        resolve(xhr2.response);
      };
      xhr2.send();
    });
  })
  .then((response) => {
    console.log(JSON.parse(response));
  });
