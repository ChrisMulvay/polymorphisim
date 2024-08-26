class Animal {
    constructor(name, age, num_legs) {
        this.name = name;
        this.age = age;
        this.num_legs = num_legs;
        this.speak = () => this.name + ' is an animal who is ' + this.age + ' months old and has ' + num_legs + ' legs.';
    }
}


class Dog extends Animal {
    // Method Overriding - redefining the method for the Dog.
    speak = () => this.name +  ' is a dog who is ' + this.age + ' years old and has ' + this.num_legs + ' legs';
}

class Cat extends Animal {
    // Method Overriding - redefining the method for the Cat.
    speak = () => this.name + ' is a cat who is ' + this.age + ' decades old and has ' + this.num_legs + ' legs.'
}


// Usage
const monkey = new Animal('Bubbles', 26, 2);
const dog = new Dog('Charlie', 10, 4);
const cat = new Cat('Tom', 5, 4);
console.log(monkey.speak());
console.log(dog.speak());
console.log(cat.speak());
