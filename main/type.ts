let a: string = "helloworld";
let b: Number = 178;
console.log(a);
console.log(b);

let c: Array<string> = ["a", "b", "c"];
let d: Number[] = [1, 2, 3];

enum Color {
  red,
  green,
  blue,
  pink,
}
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
let x: [string, number];
x = ["123", 123];

let e: Date = new Date();
console.log(x);
console.log(e);
