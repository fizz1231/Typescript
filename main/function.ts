/**
 * @description
 * @param {number} age
 * @param {string} [status] 在参数后加问号则为可选参数
 * @returns {string}
 */
function search(age: number, status?: string): string {
  return `age is ${age}`;
}

let age: number = 18;
let res: string = search(age);

console.log(res);
