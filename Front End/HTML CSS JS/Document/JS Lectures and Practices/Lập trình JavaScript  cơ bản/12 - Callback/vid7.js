// forEach, find, filter, some, every, reduce

// every
// true / fasle

Array.prototype.every2 = function (callback) {
  var output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (!result) {
        output = false;
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
    isFinish: true,
  },
  {
    name: "PHP",
    coin: 150,
    isFinish: false,
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

var result = courses.every2(function (course, index, originArray) {
  return course.coin >= 0;
});

console.log(result);
