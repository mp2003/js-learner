const person = {
  name: "John",
  age: 34,
  1: "one",
};
// object literal

const person2 = new Map();
person2.set("name", "John");
person2.set("age", 34);
person2.set(1, "one");

console.log(person);
console.log(person2);

console.log(person2.get("name"));
console.log(person2.keys());

for (let keys of person2) {
  console.log(keys);
}

const person3 = new Map([
  ["name", "jhon"],
  ["age", 35],
  ["one", 1],
]);
console.log(person3);