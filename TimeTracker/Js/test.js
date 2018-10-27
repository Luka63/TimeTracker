var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sayHello() {
    if (1 == 1) {
        var x = 3;
    }
    else {
        var x = 35;
    }
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
    }
    Person.prototype.whatIsYourName = function () {
        throw new Error("Method not implemented.");
    };
    Person.prototype.sayHello = function () {
        return "Hello from " + this.name;
    };
    return Person;
}());
var NicePerson = /** @class */ (function (_super) {
    __extends(NicePerson, _super);
    function NicePerson(name) {
        return _super.call(this, name, 34) || this;
    }
    NicePerson.prototype.sayHello = function () {
        return "Nice Person " + this.name + ". im " + this.age;
    };
    return NicePerson;
}(Person));
var vaysa = new Person("vasya", 28);
alert(vaysa.sayHello());
//# sourceMappingURL=test.js.map