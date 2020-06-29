class Person {
  name: string;
  age: number;
  sex: string;
  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  say(name: string, age: number, sex?: string): string {
    return `my name is ${name}, i'm ${age} years old, ${sex ? "I'm sex" : ""}`;
  }
}

let p1 = new Person("Tom", 20, "male");
console.log(p1.say("Tom", 20, "male"));
