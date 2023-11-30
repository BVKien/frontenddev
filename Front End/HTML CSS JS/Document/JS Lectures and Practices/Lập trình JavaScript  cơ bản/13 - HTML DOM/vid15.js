// DOM events example

// input / select
// key up / down

/*
/// input type=text
var inputElement = document.querySelector('input[type="text"]');

console.log(inputElement);

var inputValue;

// blur ra ngaofi -> lấy value được thay đổi trong input
inputElement.onchange = function (e) {
  console.log(e.target.value);
};

// lấy trực tiếp -> gõ đến đâu lấy đến đó
inputElement.oninput = function (e) {
  //console.log(e.target.value);
  // nội dung gõ sẽ được lưu vào biến inputValue
  inputValue = e.target.value;
};

/// input type=checkbox
// check hoặc không check -> thay đổi
// onchange

var checkboxElement = document.querySelector('input[type="checkbox"]');

console.log(checkboxElement);

var checkboxValue;

checkboxElement.onchange = function (e) {
  console.log(e.target.checked);
  checkboxValue = e.target.checked;
};

// select
// onchange

var selectElement = document.querySelector("select");

console.log(selectElement);

var selectValue;

selectElement.onchange = function (e) {
  console.log(e.target.value);
  selectValue = e.target.value;
};
*/

/// key up / down
var inputElement = document.querySelector("input[type='text']");

inputElement.onkeydown = function (e) {
  // trả về keyboardEvent -> trả lại đối tượng event tương ứng -> sự kiện bàn phím
  console.log(e);
  console.log(e.which); // cách xác định which của bàn phím trên máy
  console.log(e.target.value);
};

// keyup / keydown
// đơn giản là bàn phím máy tính, ...
// nút phím keydown nhận giá trị khi ấn phím xuống,
// keyup nhận giá trị khi bỏ giữ phím và nhấc phím lên

// mô phỏng phím hoạt động trên keyboard
// onkeypress - esc không nhận
// giữ phím -> nhận giá trị liên tiếp
document.onkeypress = function (e) {
  console.log(e.which);
  switch (e.which) {
    case 27:
      console.log("ESC");
      break;
    case 13:
      console.log("Enter");
      break;
  }
};
