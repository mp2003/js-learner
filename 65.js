let obj = {
  name: "John Doe",
  age: 30,
  city: "New York",

  about: function (hobby = "playing guitar") {
    console.log(this.name, this.age, hobby);
  },
};

let obj1 = {
  name: "Jane Doe",
  age: 28,
  city: "Los Angeles",
};

obj.about.call(obj1, "monu");
obj.about.apply(obj1);
obj.about.apply(obj1, ["milind"]);
let func = obj.about.bind(obj1, ["milind"]);
func.prototype = {
  hello: "milind",
};

console.log(Array.prototype);
