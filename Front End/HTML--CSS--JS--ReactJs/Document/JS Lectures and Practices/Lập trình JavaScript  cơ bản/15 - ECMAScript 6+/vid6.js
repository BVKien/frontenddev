// Default parameter values

/**
1. Let, Const --> ok
2. Template Literals --> ok
3. Multi-line String --> ok
4. Arrow function --> ok 
5. Classes --> ok
6. Default parameter values 
7. Destructuring 
8. Rest parameters 
9. Spread
10. Enhanced object literals 
11. Tagged template literal 
12. Modules 
*/

// 6. Default parameter values

// tham số làm việc với hàm

// function logger(log) {
//   if (typeof log === "undefined") {
//     log = "gia tri mac dinh - default value";
//   }

//   console.log(log);
// }

// cú pháp ES6
// khi ddingj nghĩa ra tham số log
// gán cho nó = 1 value, nó sẽ tư hiệu đó là default parameter values
// sử dụng với những tham số không bắt buộc phải nhập
// function logger(log = "gia tri mac dinh - default value") {
//   console.log(log);
// }
// logger(undefined);

// ví dụ
function logger(log, isAlert = false) {
  if (isAlert) return alert(log);
  console.log(log);
}
logger(undefined);

// ví dụ
function logger(log, type = "log") {
  console[type](log);
}
logger("Message...", "warn"); // error
// undefined
// trong JavaScript nó không khác việc không truyền vào
