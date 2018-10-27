function sayHello() {

    if (1 == 1) {
        let x = 3;
    } else {
        let x = 35;
    }
}


class Person implements IPerson{
    whatIsYourName(): void {
        throw new Error("Method not implemented.");
    }

    constructor(public name: string, public age: number) {
        this.name = name;
    }
    sayHello() {
        return `Hello from ${this.name}`;
    }
}
class NicePerson extends Person {
    constructor(name) {
        super(name,34);
    }
    sayHello() {
        return `Nice Person ${this.name}. im ${this.age}`;
    }
}
interface IPerson {
    name:string,
    age: number,
    whatIsYourName(): void;
}
var vaysa = new Person("vasya",28);
alert(vaysa.sayHello());