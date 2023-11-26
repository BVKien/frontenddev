/**
+ Kiểu dữ liệu - Data type

+ Dữ liệu nguyên thủy - Primitive Data
- Number
- String
- Boolean 
- Undefined 
- Null
- Symbol - biểu tượng

+ Dữ liệu phức tạp - Complex Data
- Function
- Object
 */

// sử dụng typeof để check kiểu dữ liệu
// kết quả của typeof là 1 string
console.log(typeof a);

// number
var a = 1;

// string
var fullName = "Bui Van 'Kien";
console.log(fullName);

// boolean
var isGood = true;

// undefined type
var age;
console.log(age);

// null
var isNull = null;
console.log(isNull);

// Symbol
// truyền vào thuộc tính gọi là description
// 1 Symbol là duy nhất id != id2
var id = Symbol("id"); // unique
var id2 = Symbol("id"); // unique

console.log(id == id2);

// function
// tự định nghĩa
// định nghãi ra code
// chỉ chạy khi được gọi
var myFunction = function () {
  // code
  console.log("hi");
};
myFunction();

// objetc types
// object
// key: value
// có thể chứa rất nhiều dạng dữ liệu
var myObject = {
  name: "Kien Van",
  age: "20",
  address: "HD City",
  myFunction: function () {},
};
// consle log có thể nhận được 2 tham số như sau
// tạo ra prefix khi có nhiều log đan xem nhau
console.log("myObject", myObject);

// array
// trong array bản chất có key và value -> key đánh bằng số tự động và tự tăng bắt đầu từ 0
var myArray = ["JS", "PHP", "C#"];
console.log(myArray);
