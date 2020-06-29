var a = "helloworld";
var b = 178;
console.log(a);
console.log(b);
var c = ["a", "b", "c"];
var d = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["pink"] = 3] = "pink";
})(Color || (Color = {}));
console.log(Color); //实际可以认为是一个以下标为key，值为value的对象
// {
//   '0': 'red',
//   '1': 'green',
//   '2': 'blue',
//   '3': 'pink',
//   red: 0,
//   green: 1,
//   blue: 2,
//   pink: 3
// }
console.log(Color.pink);
// 3 输出下标
//元组
var x;
x = ["123", 123];
var e = new Date();
console.log(x);
console.log(e);
