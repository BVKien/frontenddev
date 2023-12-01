// Destructuring, Rest

/**
1. Let, Const --> ok
2. Template Literals --> ok
3. Multi-line String --> ok
4. Arrow function --> ok 
5. Classes --> ok
6. Default parameter values  --> ok
7. Destructuring 
8. Rest parameters 
9. Spread
10. Enhanced object literals --> ok
11. Tagged template literal 
12. Modules 
*/

/// 7. Destructuring  - Phân rã
// var array = ["JavaScript", "ReactJs", "C#"];

// cách 1 - không sử dụng Destructuring
// var a = array[0];
// var b = array[1];
// var c = array[2];

// cách 2 - suwe dụng Destructuring
// var [a, b, c] = array;
// console.log(a, b, c);

// nếu chỉ muốn lấy a và c
// var [a, , c] = array;
// console.log(a, c);

/// 8. Rest parameters - Lấy ra những phần còn lại
// toán tử rest trùng với 9.Spread - vậy làm sao để phân biệt?
// là rest -> khi sử dụng cùng với Destructuring

// sử dụng rest với array
// var array = ["JavaScript", "ReactJs", "C#"];

// cú pháp ...tên biến -> để lấy ra những thằng còn lại
// var [a, ...rest] = array;

// console.log(a);
// console.log(rest);

// sử dụng rest vớI object
// var course = {
//   name: "JavaScript",
//   price: 1000,
//   img: "img",
// };

// sử dụng destructuring
// vì array không có keyname nên đặT gì cũng được var array = [a, b, c, d] = array
// nhưng object phải gọi đúng name, price, ...
// var { name, price, img } = course;
// console.log(course);

// sử dụng ...rest
// var { name, ...rest } = course;
// console.log(name);
// console.log(rest);

// ví dụ
// var course2 = {
//   name: "JavaScript",
//   price: 1000,
//   img: "img",
//   children: {
//     name: "ReactJs",
//   },
// };

// // có thể đtặ ra và đổi tên
// var {
//   name: parentName,
//   children: { name: childrenName },
// } = course2;

// console.log(parentName);
// console.log(childrenName);

// ví dụ
// var course2 = {
//   name: "JavaScript",
//   price: 1000,
//   img: "img",
//   description: "javascript basic",
// };

// // có thể đtặ ra và đổi tên
// // gán 1 giá trị mặc đinh nếu nó không có
// var { name, description = "default" } = course2;

// console.log(description);

// ví dụ
// ...params - params là tên tự đặt
// khi nhận tham số mà dùng toán tử ... -> nó vẫn là toán tử Rest
// sử dụng định nghĩa tham số -> rest
// trường hợp khác -> spread
function logger(...params) {
  // truyền tham số cách nhau bởi dấu phẩy
  // khi được truyền vào đây - sử dụng toán tử rest - sẽ trở thành mảng
  console.log(params);
  //   console.log(arguments); // giống với arguments
}

console.log(logger(1, 2, 3, 4, 5, 6, 7, 8));
