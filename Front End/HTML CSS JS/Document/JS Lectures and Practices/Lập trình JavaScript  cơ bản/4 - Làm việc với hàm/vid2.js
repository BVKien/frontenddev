/**
+ Tham số hàm JavaScript cơ bản 

+ Tham số
- Định nghĩa - giá trị có thể truyền vào khi gọi tới 1 function
- Kiểu dữ liệu - không giới hạn kiểu dữ liệu
- Tính private
- 1 tham số - message
- Nhiều tham số - message, message_2

+ Truyền tham số 
- 1 tham số - message
- Nhiều tham số - message, message_2

+ Argument
- Đối tượng arguments
- Giới thiệu vòng for of
*/

// định nghĩa cho hàm 1 tham số
// message ở đây là tham số

function writeLog(message, message_2) {
  console.log(message);
  console.log(message_2);
  // console.log(typeof message);
}

// khi gọi tới function và truyền giá trị vào -> đối số
// nhưng trong thực tế ngta gọi chung nó lại và gọi là tham số
writeLog("test message", "test message_2");
writeLog(123);
writeLog(["Js", "Php"]);

// private
// sẽ báo lỗi vì không được khởi tạo bên ngoài -> private
// console.log(message);

// arguments
function writeLogArguments() {
  console.log(arguments);
}
// truyền bao nhiêu biến vào arguments cũng nhận
writeLogArguments("log 1", "log 2");

// nếu không truyền -> trả về 1 arguments = 0
writeLogArguments();

// for of
function writeLogForOf() {
  var myString = "";
  for (var param of arguments) {
    myString += `${param} - `;
  }
  console.log(myString);
}
writeLogForOf("log 1", "log 2");
