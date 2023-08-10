// apply
const userMethod = {
    aboutRequest: function (hobby1, hobby2) {
      console.log(`name: ${this.name} age: ${this.age} email: ${this.email} hobby :`+hobby1 +`, `+hobby2 );
    },
  };
  
  const user = {
    name: "abc",
    age: 36,
    email: "abc@example.com",
    about: userMethod.aboutRequest,
  };
  const ue
  const user2 ={
    name:"mno",
    age: 6,
    email:"mno@example.com",
  }
user.about.apply(user2,['guitar','anime']);
// milind 