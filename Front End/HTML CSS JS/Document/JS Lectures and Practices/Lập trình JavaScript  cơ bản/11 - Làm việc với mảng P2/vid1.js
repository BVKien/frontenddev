/**
+ Array methods 

- forEach()
- every()
- some()
- find()
- filter()
- map()
- reduce()
*/
// tất cả những phuuonwg thức này đều có tham số truyền vào là một hàm

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

/// forEach()
// duyệt qua từng phần tử của mảng
// truyền 1 hàm vào qua tham số được gọi là callback()
// function (course, index): phần tử của mảng, vị trí của mảng
courses.forEach(function (course, index) {
  console.log(index, course);
});

/// every()
// hữu ích để kiểm tra tất cả các phần tử của mnagr thỏa mãn điều kiện gì
// check xem tất cả khóa học có free hay không
var isFree = courses.every(function (course, index) {
  return course.coin === 0;
});
console.log(isFree);

/// some()
// ngược lại với every
// chỉ cần 1 free -> true
var isFree = courses.some(function (course, index) {
  return course.coin === 0;
});
console.log(isFree);

/// find()
// để tìm kiếm - nếu không có result -> return undefined
// luôn chỉ trả về 1 đối tượng đầu tiên
var findCourse = courses.find(function (course, index) {
  return course.name === "C#";
});
console.log(findCourse);

/// filter()
// trả về tất cả phần tử thỏa mãn -> 1 list
var filterCourse = courses.filter(function (course, index) {
  return course.name === "C#";
});
console.log(filterCourse);

/// map()
/// reduce()

//
const sports = [
  {
    name: "Bóng rổ",
    like: 6,
  },
  {
    name: "Bơi lội",
    like: 5,
  },
  {
    name: "Bóng đá",
    like: 10,
  },
];

function getMostFavoriteSport(array) {
  return array.filter(function (element) {
    return element.like > 5;
  });
}

// Kỳ vọng
console.log(getMostFavoriteSport(sports));
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]
