// 9. Spread

/**
1. Let, Const --> ok
2. Template Literals --> ok
3. Multi-line String --> ok
4. Arrow function --> ok 
5. Classes --> ok
6. Default parameter values  --> ok
7. Destructuring --> ok
8. Rest parameters ( ... ) --> bổ sung --> ok
9. Spread ( ... )
10. Enhanced object literals --> ok
11. Tagged template literal 
12. Modules 
*/

// 8. Rest parameters --> bổ sung
// rest được hiểu là lấy ra còn lại
// chẳng qua ở trước ...params nó không lấy ra tham só nào
// nên nó lấy ra tất cả
// function logger(...params) {
//   console.log(params);
// }
// logger(1, 2, 3, 4);

// bây giờ có a
// -> nó sẽ lấy ra a = 1, ...params = 2, 3, 4
// tương tự b, c,...
// function logger(a, b, ...params) {
//   console.log(params);
// }

// logger(1, 2, 3, 4);

/// sử dụng distructutring với hàm

// function
// function logger(obj) {
//   console.log(obj);
//   console.log(obj.name);
//   console.log(obj.price);
// }
// logger({
//   name: "Js",
//   price: 1000,
//   description: "des content",
// });

// sử dụng distructutring với hàm
// function logger({ name, price, ...rest }) {
//   console.log(name);
//   console.log(price);
//   console.log(rest);
// }

// logger({
//   name: "Js",
//   price: 1000,
//   description: "des content",
// });

// tương tự array
// function logger([a, b, ...rest]) {
//   console.log(a);
//   console.log(b);
//   console.log(rest);
// }

// logger([2, 3, 1, 1, 2, 3]);

// 9. Spread - toán tử dải
// nếu sử dụng nó dải trước array hoặc object
// thì nó sẽ bỏ đi dấu ngoặc
// var array1 = ["JavaScript", "Ruby", "PHP"];

// var array2 = ["ReactJs", "CSS"];

// // nối array2 array1
// // toán tử spread
// /// var array3 = ["ReactJs", "CSS", ...array1];
// var array3 = [...array2, ...array1];

// console.log(array3);

// hợp nhất 2 object
// var object1 = {
//   name: "JavaScript",
// };

// var object2 = {
//   price: 2000,
// };

// var object3 = {
//   ...object1,
//   ...object2,
// };

// console.log(object3);

/// truyền tham số cho hàm
var array = ["JavaScript", "Ruby", "PHP"];

// function logger(a, b, c) {
//   console.log(a, b, c);
// }

// đây là rest
// rest khi sử dụng destruturing và khi định nghĩa ra tham số
function logger(...rest) {
  for (var i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

// dải vào nó sẽ bỏ cặp ngoặc đi -> chỉ còn JavaScript Ruby PHP
// đây là spread
// spread khi truyền đối số
// dải nó trong 1 array hay objetc khác -> spread
logger(...array);
