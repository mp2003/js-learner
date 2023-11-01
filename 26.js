console.log("script ready");
const person = {
  name: "John",
  id: 1,
};
const extraInfo = new Map();
extraInfo.set(person, { age: 15, phone: 15236 });
console.log(extraInfo.get(person));
