class Animal {
    constructor(name, age, num_legs) {
        this.name = name;
        this.age = age;
        this.num_legs = num_legs;
        this.speak = () => 'My name is ' + this.name + ' and I am an animal.';
    }
}

const monkey = new Animal('Bubbles', 26, 2);
console.log(monkey.speak());