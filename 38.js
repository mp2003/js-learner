class userDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  about() {
    return `${this.name} ${this.age}`;
  }
}

class School extends userDetails {
  constructor(name, age, phone, address) {
    super(name, age);
    this.phone = phone;
    this.address = address;
  }
  about() {
    const mainDetail = super.about();
    return `${mainDetail} ${this.phone} ${this.address}`;
  }
}
const user = new School('abc',5,51664,'xyz');
console.log(user);