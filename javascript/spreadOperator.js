let array = [1, 2, 3];
let string = "Hello";
// 만들고자하는 형태[1, 2, 3, "H", "e", "l", "l", "o"]
// let newArray = [];
// for(let value of array){
//     newArray.push(value);
// }
// for(let value of string){
//     newArray.push(value);
// }
// console.log(newArray);

let newArray = [...array, ...string];
console.log(newArray);
