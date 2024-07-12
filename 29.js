const userMethod = {
  aboutRequest: function () {
    console.log(`name: ${this.name} age: ${this.age} email: ${this.email}`);
  },
};

const user = {
  name: "abc",
  age: 36,
  email: "abc@example.com",
  about: userMethod.aboutRequest,
};
user.about();
