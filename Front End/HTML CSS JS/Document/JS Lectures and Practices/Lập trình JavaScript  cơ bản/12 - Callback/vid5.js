// forEach, find, filter, some, every, reduce

// filter

// chủ động tìm hiểu: keyword - values types and reference types

Array.prototype.filter2 = function (callback) {
  var output = [];

  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

var courses = [
  {
    name: "JavaScript",
    coin: 500,
  },
  {
    name: "PHP",
    coin: 150,
  },
  {
    name: "Ruby",
    coin: 250,
  },
  {
    name: "C#",
    coin: 0,
  },
  {
    name: "ReactJs",
    coin: 0,
  },
];

// var courses = new Array(100);

// array mới được trả về là 1 array khác originArray
// nó không lặp qua array trống - empty array
var filterCourses = courses.filter2(function (course, index, originArray) {
  //console.log(course, index, originArray);
  return course.coin === 0;
});

console.log(filterCourses);
