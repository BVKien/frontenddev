// InnerText vs textContent Property

// text

// InnerText vs textContent Property - thuộc tính
// giúp lấy ra và sửa đổi nội dung text node

// muốn tương tác được với text node -> phải get được elements đang chứa text node
var headingElement = document.querySelector("h1");

/// getter
// để lấy ra text
console.log(headingElement.innerText);
console.log(headingElement.textContent);

/// setter
// để sửa đổi nội dung
// sự thay đổi được tạo ra khi mã JavaScript được thực thi
headingElement.innerText = "new heading";

console.log(headingElement.textContent);

/// khác nhau giữa InnerText vs textContent

/// inner text
// khi sử dụng getter để lấy ra giá trị
// nội dung lấy được sẽ giống nội dung nhìn thấy trên trình duyệt

/// text content
// sẽ lấy nội dung text thực sự của nó trong DOM

var headingElement2 = document.querySelector(".heading");

// inner text
// trên trình duyệt nhìn thấy hàng chữ cách nhau là text
// có heading thuộc tính display: none; -> innerText: text;
console.log(headingElement2.innerText);

// text content
// dù trên trình duyệt thế nào
// khi lấy ra sẽ lấy tất cả text node có thể, không ngoài trừ space
// và không bị ảnh hưởng bởi bất kỳ thuộc tính nào khác
// -> lấy cả heading và text -> không bị ảnh hưởng bởi thuộc tính display: none;
console.log(headingElement2.textContent);

// inner text khi set giá trị cho nó để hiển thị lên trìn duyệt
// những thẻ đóng mở không thể sử dụng vì nó đã được mã hóa đầu cuối text
// -> chỉ có thể trả về text

// inner text
// khi viết như này, xuống dòng có nghĩa nó được thêm thẻ <br />
headingElement2.innerText = `

    new heading hihi

`;

// text content
// nó sẽ không hiểu khoẳng trắng là gì khi lên trình duyệt
// -> vẫn trả về 1 dòng text
// nhưng vẫn trả về thực sự các node có trong DOM
headingElement2.textContent = `

    new heading hihi

`;
console.log(headingElement2.textContent);
