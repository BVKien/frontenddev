// For/of loop

// lấy ra từng phần tử của 1 mảng
// lấy ra từng chữ cái của 1 chuỗi
// không áp dụng được object -> muốn đc -> phải biến đổi

// lấy ra từng phần tử của 1 mảng
var lannguages = ["html", "css", "js"];

// lấy ra từng chữ cái của 1 chuỗi
var lannguages2 = "JavaScript";

// object
var myInfor = {
  name: "Kien Van",
  age: 20,
};

// xử lý
// biến đổi nó trả về array
// c1
console.log(Object.keys(myInfor));

// c2
console.log(Object.values(myInfor));

for (var value of Object.keys(myInfor)) {
  console.log(myInfor[value]);
}
