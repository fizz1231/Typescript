namespace food1 {
  export class Fruit {
    public name: string = "apple";
    teast() {
      console.log("apple 是甜的");
    }
  }
}

namespace food2 {
  export class Fruit {
    public name: string = "orange";
    teast() {
      console.log("orange 是酸的");
    }
  }
}

let f1: food1.Fruit = new food1.Fruit();
let f2: food2.Fruit = new food2.Fruit();

f1.teast();
f2.teast();
