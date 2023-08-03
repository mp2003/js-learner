// call
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
  const user2 ={
    name:"mno",
    age: 6,
    email:"mno@example.com",
  }
user.about.call(user2);