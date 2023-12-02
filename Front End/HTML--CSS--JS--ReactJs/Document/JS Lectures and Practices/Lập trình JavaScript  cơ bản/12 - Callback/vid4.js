// forEach, find, filter, some, every, reduce

// forEach
// xây dựng vòng lặp forEach - sử dụng for in
// học lại object prototype
// học lại for in
// hasOwnProperty

Array.prototype.forEach2 = function (callback) {
  // trả lời cho câu hỏi tại sao this lại duyệt các elements trong mảng
  // và duyệt luôn cả forEach2
  // bởi vì for in không chỉ duyệt qua elements trong mảng
  // mà còn duyệt qua cả những elements năm trong prototype
  // vấn đề bây giờ - làm sao có thể bỏ qua prototype
  for (var index in this) {
    // .hasOwnProperty(key)
    // -> để kiểm tra xem có phải con của this hay không
    // console.log(index, this.hasOwnProperty(index));
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

//var courses = ["JavaScript", "C#", "ReactJs"];

// test cho độ dài Array
// không care tới length -> chỉ duyệt qua element thực
var courses = new Array(100);

courses.push("ruby");

//courses.length = 100;
//console.log(courses);

var output = courses.forEach2(function (course, index, array) {
  console.log(course, index, array);
});

console.log(output);

// courses.
// tại sao courses. ra 1 đống phương thức
// bởi vì nó đươc kế thừa từ Array.prototype
//console.log(Array.prototype);

// tương tự như vậy nó đúng với tất cả các Constructor khác
// ví dụ Number.prototype - (3)., String.prototype, ...
