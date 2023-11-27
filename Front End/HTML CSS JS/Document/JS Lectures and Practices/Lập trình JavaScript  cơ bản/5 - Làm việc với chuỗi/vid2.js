/**
+ Làm việc với chuỗi

- chủ động tìm hiểu: JavaScript string methods

- length
- find index
- cut string
- replace
- convert to upper case
- convert to lower case 
- trim
- split
- get a character by index
*/

var myString = "         Toi la Kien Van Kien Kien 18 tuoi";

/// length
console.log(myString.length);

/// find index - tìm vị trí ký tự trong 1 chuỗi
// không tìm đc -> trả về -1
// trả về chuỗi đầu tiên tìm đc
console.log(myString.indexOf("Kien"));

// vậy muốn tìm những chuỗi đằng sau phải làm cách nào?
// đơn giản là đặt vị trí để tìm sau vị trí của chuỗi đã tìm đc là ok
console.log(myString.indexOf("Kien", 11));

// muồn tìm được chữ cuối cùng thì phải làm sao?
// đơn giản sử dụng lastIndexOf("")
console.log(myString.lastIndexOf("Kien"));

// cuối cùng là search vị trí
// chỉ trả về kết quả đầu tiên
console.log(myString.search("Kien"));

/// cut string
// slice(start, end)
// cắt xuôi
console.log(myString.slice(0)); // cut all
console.log(myString.slice(4)); // cut from 4 to end
console.log(myString.slice(4, 6)); // cut from 4 to 6

// cắt ngược từ phải sang trái
// bắt đầu bằng 0 -> đi lùi về số âm
console.log(myString.slice(-3, -1));

/// replace - ghi đè, thay thế
// chỉ thay thế string đầu tiên
console.log(myString.replace("Kien", "dep zai"));

// muốn replace all -> phải dùng biểu thức chính quy -> nâng cao
console.log(myString.replace(/Kien/g, "dep zai"));

/// convert to upper/lower case - chữ hoa / thường
// upper case
console.log(myString.toUpperCase());

// lower case
console.log(myString.toLowerCase());

/// trim - hữu ích trong việc xử lý dữ liệu nhập vào của người dùng
// -> tưc là người dùng có thể nhập thừa khoảng trắng
console.log(myString.trim());

/// split - cắt 1 chuỗi thành 1 array(mảng) bằng 1 điểm chung
var languages = "js, php, C#";
console.log(languages.split(", "));

var js = "javascript";
console.log(languages.split(""));

/// get a character by index - từ 1 chuỗi có thể lấy ra đc 1 chữ cái index mong muốn
const myString2 = "Kien Van";
console.log(myString2.charAt(0));

console.log(myString2[0]);

// trả về 1 chuỗi rỗng nếu không tìm thấy
console.log(typeof myString2.charAt(20));

// trả về undefined
console.log(myString2[20]);
