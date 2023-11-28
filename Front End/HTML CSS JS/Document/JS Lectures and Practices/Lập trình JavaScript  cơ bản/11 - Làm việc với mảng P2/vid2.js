/**
+ Array methods 

- map()
*/
// tất cả những phuuonwg thức này đều có tham số truyền vào là một hàm

/// map
// muốn chỉnh sửa, thay đổi element của 1 array

var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 250,
  },
  {
    id: 2,
    name: "Python",
    coin: 200,
  },
  {
    id: 3,
    name: "C#",
    coin: 150,
  },
  {
    id: 4,
    name: "ReactJs",
    coin: 0,
  },
  {
    id: 5,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 6,
    name: "C#",
    coin: 0,
  },
];

// dùng dấu . gọi phương thức của 1 object
// map(function(){}): cần 1 đối số là function trong ngoặc của map()
// + Giải thích: bên trong map() đang thực hiện 1 vòng lặp,
// lặp qua từng phần tử của mảng,
// mỗi khi lặp nó sẽ gọi lại 1 function để thực thi
// tạo ra sự thay đổi

// Các dạng viết
// trực tiếp trong map: -> var newCourses = courses.map(function () {});
// dang expression: var courseHandler = function () {}; | function courseHandler() {}; -> var newCourses = courses.map(courseHandler);

// index: key tương ứng khi lặp qua
// originArray: chính là Array gốc sử dụng phương thức map()
// function courseHandler(course, index, originArray): xóa originArray vẫn hoạt động -> tham số t3 ít được dừng
function courseHandler(course, index) {
  // return cái gì sẽ nhận cái đó - return 123; return course;
  // console.log(course);
  // xử lý yêu cầu bài toán
  // replace hàng loạt tất cả các elements tròn array
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    coin: course.coin,
    coinText: `Gia: ${course.coin}`,
    originArray: courses,
  };
}

// logic: function truyền vào cho map cái gì thì map sẽ lấy cái đó làm element
var newCourses = courses.map(courseHandler);

// từ map trả về 1 array
console.log(newCourses);

// ví dụ về đưa lên mã html cho việc render ra giao diện
function courseHandler(course, index) {
  return `<h2>${course.name}</h2>`;
}
var newCourses = courses.map(courseHandler);
document.write(newCourses.join(""));
