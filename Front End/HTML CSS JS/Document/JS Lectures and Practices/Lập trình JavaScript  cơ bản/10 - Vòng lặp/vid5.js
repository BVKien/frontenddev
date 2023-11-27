// For/in loop

// sử dụng vòng lặp này để lấy ra key của những đối tượng

// object
var myInfor = {
  name: "Kien Van",
  age: 20,
  address: "HD HN",
};

// chạy tương úng với số key của object
// mỗi lần chạy sẽ gán key = string vào key in myInfor
for (var key in myInfor) {
  // code
  console.log(key);
  console.log(myInfor[key]);
}

// array
var languages = ["html", "css", "js"];

for (var key in languages) {
  console.log(key);
  console.log(languages[key]);
}

// string
var myString = "JavaScript";

// for in vẫn có thể lấy ra số của 1 dạng chuỗi
for (var key in myString) {
  console.log(key);
  console.log(myString[key]);
}

//
function run(object) {
  for (var key in object) {
    return "Thuộc tính " + key + " có giá trị " + object[key];
  }
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

function run(object) {
  var arr = [];
  var i = 0;
  for (var key in object) {
    arr[i] = `Thuộc tính ${key} có giá trị ${object[key]}`;
    i++;
  }
  return arr;
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]
