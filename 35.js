
function CreateUser(name, email, age) {
  this.name = name;
  this.email = email;
  this.age = age;

}

CreateUser.prototype = {
  about: function () {
    return `${this.name} ${this.email} ${this.age}`;
  },
};

const user = new CreateUser("mno", "mno@gmail.com", 18);
console.log(user);
console.log(user.about());
console.log(user);