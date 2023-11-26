/**
+ Giới thiệu một số hàm built-in - các hàm có sẵn --- built-in function
- alert: báo động
- console: điều khiển 
- confirm: xác nhận
- prompt: lời nhắc 
- setTimeout: đặt thời gian chờ
- setInterval: đặt khoảng thời gian 
 */

var fullName = "Bui Van Kien";

/*
// console
console.log(fullName);
console.log("This is notification");
console.log(123);
console.warn("Warning");
console.error("Error");
*/

/*
// consfirm
// truyen vao 1 message
confirm("Xac nhan ban da du tuoi");
*/

/*
// prompt
// truyền vào 1 message - hiển thị một ô input cho người dùng nhập
prompt("Xac nhan ban da du tuoi");
*/

/*
// setTimeout
// truyền vào một function
// truyền cào một khoảng thời gian - miliseconds - mili giây - 1000ms = 1s
// setTimeout có nghĩa cho 1 đoạn code đc chạy sau 1 khoảng thời gian
// chỉ chạy duy nhất 1 lần
setTimeout(function () {
  alert("Thong bao");
}, 1000);
*/

/*
// setInterval
// truyền vào một function
// giống setTimeout nhưng điểm khác là nó sẽ chạy liên tục định  kỳ
// cách khoảng thời gian lại chạy 1 lần - ví dụ cứ cách 1s lại chạy 1 lần
setInterval(function () {
  console.log("This is notification" + Math.random());
}, 1000);
*/
