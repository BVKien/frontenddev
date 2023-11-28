// String/Array - phương thức includes() method

// phương thức includes
// có sẵn trong Array và String
// có tác dụng khác nhau
console.log(String.prototype.includes);
console.log(Array.prototype.includes);

/// String
var title = "Responsive web design";

// kiểm tra title có chứa chuỗi web ko -> true
// includes('string', start index to find)
// thường sẽ ít sử dụng index -> chủ yếu tìm có chuỗi hay k
// tìm tại vị index nào -> nhận đc string cần tìm bắt đầu từ sau character của index đó
// ví dụ web có w index = 11 -> true,
// nhưng tìm index 12 -> bắt đầu từ e mặc dù có trong từ web nhưng -> false
console.log(title.includes("web", 12));

/// Array
var courses = ["html", "css", "js"];

// includes('string', fromIndex)
// được chuyển số âm
// được tính bằng độ dài mảng -> tổng - (index âm) = index dương
// 3 + -1 = 2 -> hoặc đơn giản là đặt điểm 0 về cuối và lùi lại
// khác là, tìm tại vị index nào -> nhận đc string cần tìm tại đó
console.log(courses.includes("css", 1));
