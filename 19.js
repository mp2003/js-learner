const arr = [
  { name: "harshit", age: "22" },
  { name: "milind ", age: 25 },
  { name: "harshit", age: 55 },
  { name: "mahi", age: 55 },
];

arr.forEach(({ name, age }) => {
  console.log(`name: ${name}, age: ${age}`);
});
