// Đối tượng Date - làm việc với thời gian

// có thể viết code trong console trên chorme
// nguồn tài liệu - keyword: Date - JavaScript - Mozilla
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// Date - là một đối tượng - object
var date = new Date();
console.log(typeof date);

// get
var year = date.getFullYear();
console.log(year);

var month = date.getMonth() + 1;
console.log(month);

var day = date.getDate();
console.log(day);

// formate date
console.log(`${day} - ${month} - ${year}`);

// Date - là một chuỗi - string
// nhưng không thể sử dụng biến date này để truy xuất vào phướng thức của đối tượng Date vì nó không phải là 1 đối tượng - object
var date = Date();
console.log(typeof date);

// nểu in trực tiếp date sẽ trả kết quả thời gian hiện tại kiểu string
console.log(date);
