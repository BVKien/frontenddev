/**
+ Kiểu dữ liệu chuỗi (string)

+ Tạo chuỗi 
- Cách tạo chuỗi - 2 cách
- Nên dùng cách nào? Lý do? - dùng cách 1
- Kiểm tra data type

+ Một số case sử dụng backslash (\)
+ Xem độ dài chuỗi
+ Chú ý độ dài khi viết code 
+ Template string ES6
 */

// Tạo chuỗi
// 2 cách
// c1
var fullName = "Kien Van";

// c2
// -> typeof object - lập trình viên không mong muốn
var fullName = new String("Kien Van");
//alert(fullName);

// Một số case sử dụng backslash (\)
var fullName = "Kien Van ''";

// Xem độ dài chuỗi
// sử dụng thuộc tính .length tính cả dấu cách

// Chú ý độ dài khi viết code
// nên có số lượng 1 dòng tối đa 80 ký tự
var myString =
  "Chú ý độ dài khi viết code" +
  "Chú ý độ dài khi viết code" +
  "Chú ý độ dài khi viết code";

// Template string ES6
var firstName = "Kien";
var lastName = "Van";

console.log(`Toi la: ${firstName} ${lastName}`);
