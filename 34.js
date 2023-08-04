function CreateUser(name, email, age) {
  let obj = Object.create(CreateUser.prototype);
  obj.name = name;
  obj.email = email;
  obj.age = age;
  return obj;
}

CreateUser.prototype = {
  about: function () {
    // console.log(1);
    return `${this.name} ${this.email} ${this.age}`;
  },
};

const user = CreateUser("mno", "mno@gmail.com", 18);
console.log(user);
console.log(user.about());
