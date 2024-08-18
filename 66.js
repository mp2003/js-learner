const addDetails = () => {
  let name, age;
  let arr = [];
  for (let i = 0; i < 1; i++) {
    name = prompt(`add name of user ${i + 1}`);
    age = parseInt(prompt(`add age user ${i + 1}`));
    arr.push([name, age]);
  }
  return arr;
};

addDetails();
console.log(addDetails.length);

const createUser = () => {
  let user = [];
  let arr = addDetails();
  for (let i = 0; i < 1; i++) {
    let [n, a] = arr[i];
    console.log(arr[i]);

    user.push({
      name: n,
      age: a,
    });
  }
  return user;
};

console.log(createUser());
const main = () => {};
