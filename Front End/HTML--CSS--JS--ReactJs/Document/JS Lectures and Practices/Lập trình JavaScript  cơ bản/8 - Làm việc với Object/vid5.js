/**
+ Math object - built-in object

- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()
*/

/// Math.PI
// trả về số PI
console.log(Math.PI);

/// Math.round()
// làm trong số
console.log(Math.round(3.14));

/// Math.abs() absolute
// giá trị tuyệt đối
console.log(Math.abs(-3.14));

/// Math.ceil()
// làm tròn trên
console.log(Math.ceil(3.14));

/// Math.floor()
// làm tròn dưới
console.log(Math.floor(3.14));

/// Math.random()
// random 1 dãy số ngẫu nhiên nhỏ hơn 1
// ứng dụng cho việc đặt tên
console.log(Math.random());
// tạo ra 1 dãy số ngẫu nhiên cho 1 khoảng cho trước = cách nhân với số đó
// ở đay ddnag random trong khoảng từ 0 đến 9
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));

// lấy ví dụ
var random = Math.floor(Math.random() * 5);
var bonus = ["10 coins", "20 coins", "30 coins", "40 coins", "50 coins"];
console.log(bonus[random]);

// ví dụ random tỉ lệ thấp - 50%
var random2 = Math.floor(Math.random() * 100);
if (random2 < 50) {
  console.log("Cuong hoa thanh cong");
}

/// Math.min()
// lấy ra số nhỏ nhất
console.log(Math.min(1, 5, 7, 9, 100));

/// Math.max()
// lấy ra số lớn nhất
console.log(Math.max(1, 5, 7, 9, 100));
