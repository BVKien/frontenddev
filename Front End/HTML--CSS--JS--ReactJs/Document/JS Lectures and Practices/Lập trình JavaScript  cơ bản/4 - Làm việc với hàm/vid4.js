/**
+ Một số điều cần biết về function

- Khi function đặt trùng tên - function định nghĩa sau sẽ ghi đè function định nghĩa trước - không hể áp dụng trong thực tế
- Khái báo biến trong hàm - có 
- Định nghĩa hàm trong hàm - có
 */

// Khi function đặt trùng tên
function showMess() {
  console.log("mes 1");
}

function showMess() {
  console.log("mes 2");
}

showMess();

// Khái báo biến trong hàm
function showMess() {
  var fullName = "Kien Van";
  console.log(fullName);
}

// Định nghĩa hàm trong hàm
function showMess() {
  function showMess2() {
    console.log("Show mes 2");
  }
  showMess2();
}
showMess();
