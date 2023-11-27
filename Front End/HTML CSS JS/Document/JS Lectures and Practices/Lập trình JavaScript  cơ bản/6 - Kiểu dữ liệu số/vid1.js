/*
+  Kiểu số trong Js - Number type

- chủ động: JavaScript working number
- bên console log - nếu là số thì in màu xanh tím, nếu là string thì in màu đen

+ Tạo giá trị Number
- Các cách tạo
- Dùng cách nào? tại sao? - c1 / gọn gàng, đúng kiểu dữ liệu
- Kiểm tra data type - typeof

+ Làm việc với Number
- To string
- To Fixed
*/

/// Các cách tạo
// c1
var age = 20;
var PI = 3.14;

// c2
// type of new Number(9); là object
var number = new Number(9);

// không hợp lệ - tạo ra 1 number không hợp lệ
// NaN - Not and Number nghĩa là không phải 1 số
var result = 20 / "ok";
console.log(result);

// cách kiểm tra như thế nào là biến NaN
console.log(isNaN(result));

/// Làm việc với Number
// toString() - cung cấp để chuyển đổi kiểu number thành kiểu string
// bên console log - nếu là số thì in màu xanh tím, nếu là string thì in màu đen
console.log(age.toString());

// toFixed() - sử dụng trong trường hợp làm tròn số
// .toFixed(): không truyền -> được hiểu là giá trị 0
console.log(PI.toFixed());

// rút gọn với chữ số thập phân đằng sau
// .toFixed(2) - 2 số thập phân
console.log(PI.toFixed(2));
