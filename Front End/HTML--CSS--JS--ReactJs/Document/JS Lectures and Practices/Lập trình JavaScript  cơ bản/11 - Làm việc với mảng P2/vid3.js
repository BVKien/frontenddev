/**
+ Array methods 

- reduce()
*/
// tất cả những phuuonwg thức này đều có tham số truyền vào là một hàm

// trường hợp sử dụng: muốn nhận về một giá trị duy nhất
// sau khi đã tính toán và xử lý những phần tử trên 1 array

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

/*
// biến lưu trữ
var totalCoins = 0;

// lặp qua các phần tử
for (var course of courses) {
  totalCoins += course.coin;
}

console.log(totalCoins);
*/

// khi reduce hoạt động sẽ gọi ngược lại cái function coinHandler
// reduce sẽ trả lại vài tham số cho coinHandler
// + Tham số: accumulator, currentValue, currentIndex, originArray
// accumulator: biến lưu trữ, lưu trữ
// số 0 khi khởi tạo sẽ được gán cho biến lưu trữ accumulator
// currentValue: giá trị hiện tại
// mỗi khi reduce gọi lại function coinHandler
// -> chắc chắn reduce đang ở vị trí nào đó trong array
// -> chính nó là curentValue
// currentIndex: hiể đơn giản là chỉ mục
// -> chỉ mục của chính curentValue trong mảng
// originArray: array gốc,
// chính là array gọi tới phương thức reduce -> ở đây là courses
//function coinHandler(accumulator, currentValue, currentIndex, originArray) {}

// reduce
// 0: khởi tạo giá trị ban đầu, biến lưu trữ của reduce
//var totalCoins = courses.reduce(coinHandler, 0);

// use
var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
  //i++;
  // lần chạy đầu tiên -> lần chạy mà accumulator
  // sẽ được gán giá trị bằng chính giá trị truyền
  // từ đối số t2 vào
  // đối số t2 là 0 - courses.reduce(coinHandler, 0);
  // code
  //   console.table({
  //     "lượt chạy": i,
  //     "biến tích trữ": accumulator,
  //   });

  // console.log(accumulator);

  // currentValue
  //console.log(currentValue);

  // nó return cái gì thì lưu trữ cái đó
  // return 100;

  // giải quyết bài toán tính tổng coin
  return accumulator + currentValue.coin;
}
var totalCoins = courses.reduce(coinHandler, 0); // inital value
console.log(totalCoins);

// giải thích code
var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
  i++;
  var total = accumulator + currentValue.coin;

  console.table({
    "lượt chạy": i,
    "biến tích trữ": accumulator,
    "giá khóa học": currentValue.coin,
    "tích trữ được": total,
  });

  return total;
}
var totalCoins = courses.reduce(coinHandler, 0); // inital value
console.log(totalCoins);

// rút gọn bài toán
// nếu đặt ra ngoài
function coinHandler(accumulator, currentValue) {
  return accumulator + currentValue.coin;
}
var totalCoins = courses.reduce(coinHandler, 0); // inital value
console.log(totalCoins);

// nếu đặt bên trong
var totalCoins = courses.reduce(function coinHandler(
  accumulator,
  currentValue
) {
  return accumulator + currentValue.coin;
},
0); // inital value
console.log(totalCoins);

// bai tap

var sports = [
  {
    name: "Bơi lội",
    gold: 11,
  },
  {
    name: "Boxing",
    gold: 3,
  },
  {
    name: "Đạp xe",
    gold: 4,
  },
  {
    name: "Đấu kiếm",
    gold: 5,
  },
];

function getTotalGold(array) {
  var total = array.reduce(function goldHandler(a, b) {
    return a + b.gold;
  }, 0);
  return total;
}

// Expected results:
console.log(getTotalGold(sports)); // Output: 23
