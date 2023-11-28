// forEach, find, filter, some, every, reduce

// var courses = ["JavaScript", "C#"];

// empty array -> không duyệt qua lần nào nữa
var courses = [];

// new Array(arrayLength) === courses.length = 10;
var courses = new Array(10);

// nhưng nếu đưa từ 2 giá trị trở lên, nó sẽ hiểu đó là 2 phần tử của mảng
// -> không còn là length
var courses = new Array(10, 12);

// thêm phần tử vào mảng
courses.push("html", "css");

// tự gán length cho array
// courses.length = 10;

// console.log(courses);

// dùng không hợp lý - chỉ có 2 phần tử thực nhưng lại duyệt 10 lần
// 8 lần những phần tử không tồn tại -> trả về undefined
// for (var i = 0; i < courses.length; i++) {
//   console.log(courses[i]);
// }

// nên sử dụng for in
// length vẫn bằng 10 -> chỉ lặp qua và trả phần tử thực
for (var index in courses) {
  console.log(courses[index]);
}
