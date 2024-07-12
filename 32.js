// bind
const userMethod = {
  aboutRequest: function (hobby1, hobby2) {
    console.log(
      `name: ${this.name} age: ${this.age} email: ${this.email} hobby :` +
        hobby1 +
        `, ` +
        hobby2
    );
  },
};

const user = {
  name: "abc",
  age: 36,
  email: "abc@example.com",
  about: userMethod.aboutRequest,
};
const user2 = {
  name: "mno",
  age: 6,
  email: "mno@example.com",
};

const func = user.about.bind(user2, "guitar", "anime");
func();

const func2 = user.about.bind(user);
func2();