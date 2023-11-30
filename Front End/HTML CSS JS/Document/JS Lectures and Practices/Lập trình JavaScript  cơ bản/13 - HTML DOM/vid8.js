// DOM attribute

// attributes từ getelements đi ra
// muốn tương tác attribute -> getElements trước
var headingElement = document.querySelector("h1");
var tagnameElement = document.querySelector("a");
var heading3Element = document.querySelector("h3");
var heading2Element = document.querySelector("h2");

// thêm attributes vào trong elements
// sau khi thêm title
// inspect từ dev tools ra sẽ thấy
// nhưng show src code ra sẽ không thấy
// lý do: nó chỉ có khi code java script được thực thi
// src code là đang show mã nguồn
// khi show mã nguồn JavaScript không hề được thực thi
headingElement.title = "heading";
headingElement.style.color = "red";

// thêm class
headingElement.className = "heading";

// thêm href cho thẻ <a>
// cách thêm này gọi là setter -> set trực tiếp giá trị đó với toán tử gán
tagnameElement.href = "tagName";

// cách khác sử dụng phương thức
// gán 1 attribute ngẫu nhiên - tự đặt tên
// - không nhất thiết phải tồn tại, hợp lệ đối với element đó
// .setAttribute(tên attribute, giá trị attribute): nhận 2 đối số
heading3Element.setAttribute("href-1", "heading");

console.log(headingElement);
console.log(tagnameElement);
console.log(heading3Element);

// lưu ý với những elements có những cái attribute hợp lệ -> phải thêm đúng

// get ra value của attibute
// thêm bằng set -> lấy bằng get
// truyền vào đối số: attribute name muốn lấy giá trị

heading2Element.title = "Title test";
heading2Element.setAttribute("testClassJs", "test-class-js");

console.log(heading2Element.getAttribute("class"));
console.log(heading2Element.getAttribute("title"));
console.log(heading2Element.title); // cách này chỉ nhận attribute hợp lệ
console.log(heading2Element.getAttribute("testClassJs")); // cách này lấy tất cả dù hợp lệ hay không - thực tế dùng
console.log(heading2Element.testClassJs); // undefined
