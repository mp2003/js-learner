class animal {
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} ${this.age}`;
    }
}

const Dog = new animal('abc',5);
console.log(Dog.eat());