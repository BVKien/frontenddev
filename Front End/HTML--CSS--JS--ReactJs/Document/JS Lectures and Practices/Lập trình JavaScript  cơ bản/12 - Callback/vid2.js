// Callback - Phần 2

/// là hàm
/// truyền qua đối số
/// được gọi lại (trong hàm nhận đối số)

// bài tập làm sau: forEach, reduce, find, filter, map

// viết lại map2 để hiểu cách map nhận callback và làm gì bên trong

// định nghĩa cho map2
Array.prototype.map2 = function (callback) {
  var output = [],
    arrayLength = this.length;
  for (var i = 0; i < arrayLength; i++) {
    // đối số
    var result = callback(this[i], i);
    output.push(result);
  }
  return output;
};

// this là courses
var courses = ["html", "css", "JavsScript", "C#"];

var htmls = courses.map2(function (course) {
  // tham số
  return `<h2>${course}</h2>`;
});

// var htmls = courses.map2(function (course) {
//   return `<h2>${course}</h2>`;
// });

//console.log(htmls.join(""));

// bai tap
Array.prototype.myMap = function (cb) {
  var output = [],
    arrayLength = this.length;
  for (var i = 0; i < arrayLength; i++) {
    var result = cb(this[i], i);
    output.push(result);
  }
  return output;
};

// Expected results
const numbers = [1, 2, 3];

console.log(
  numbers.myMap(function (number) {
    return number * 2;
  })
); // Output: [2, 4, 6]

console.log(
  numbers.myMap(function (number, index) {
    return number * index;
  })
); // Output: [0, 2, 6]
