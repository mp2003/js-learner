const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

const newObject ={...object};
console.log(newObject);

const newObject2 = Object.assign({}, object)
console.log(newObject2);