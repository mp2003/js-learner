class createUser {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  about() {
    return `${this.name} ${this.age}`;
  }
}
const user = new createUser("mno", 36);
console.log(user);
console.log(user.about());
console.log(Object.getPrototypeOf(user));