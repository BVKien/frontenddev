// forEach, find, filter, some, every, reduce

// some

// tìm xem tối thiểu có 1 thằng thỏa mãn
// điều kiện của bài hay không
// true / false

Array.prototype.some2 = function (callback) {
  var output = false;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      // check no
      // true
      if (callback(this[index], index, this)) {
        //return true;

        output = true;
        // break;
        return output;
      }
    }
  }
  return output;
};

var courses = [
  {
    name: "JavaScript",
    coin: 500,
    isFinish: false,
  },
  {
    name: "PHP",
    coin: 150,
    isFinish: true,
  },
  {
    name: "Ruby",
    coin: 250,
    isFinish: false,
  },
  {
    name: "C#",
    coin: 0,
    isFinish: false,
  },
  {
    name: "ReactJs",
    coin: 0,
    isFinish: false,
  },
];

// không lặp qua Array rỗNg, những phần tử trống
// var courses = new Array(100);

// duy nhất 1 ông có isFinish === true -> trả về true
var result = courses.some2(function (course, index, originArray) {
  // console.log(courses); // test lặp rỗng
  return course.isFinish;
});

console.log(result);
