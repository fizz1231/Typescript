var food1;
(function (food1) {
    var Fruit = /** @class */ (function () {
        function Fruit() {
            this.name = "apple";
        }
        Fruit.prototype.teast = function () {
            console.log("apple 是甜的");
        };
        return Fruit;
    }());
    food1.Fruit = Fruit;
})(food1 || (food1 = {}));
var food2;
(function (food2) {
    var Fruit = /** @class */ (function () {
        function Fruit() {
            this.name = "orange";
        }
        Fruit.prototype.teast = function () {
            console.log("orange 是酸的");
        };
        return Fruit;
    }());
    food2.Fruit = Fruit;
})(food2 || (food2 = {}));
var f1 = new food1.Fruit();
var f2 = new food2.Fruit();
f1.teast();
f2.teast();
