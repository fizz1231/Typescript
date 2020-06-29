var Person = /** @class */ (function () {
    function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Person.prototype.say = function (name, age, sex) {
        return "my name is " + name + ", i'm " + age + " years old, " + (sex ? "I'm sex" : "");
    };
    return Person;
}());
var p1 = new Person("Tom", 20, "male");
console.log(p1.say("Tom", 20, "male"));
