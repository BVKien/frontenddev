// InnerHTML vs OuterHTML Property

// element
// attribute
// text

// InnerHTML vs OuterHTML
// thêm 1 element vào trong 1 element

var boxElement = document.querySelector(".box");

/// innerHTML
// setter
// vừa thêm 1 element là <h1> + text node heading + thêm attribute title='heading'
boxElement.innerHTML = "<h1 title='heading'>new heading</h1>";

console.log(document.querySelector("h1").innerText);

// getter
// khi sử dụng, nó sẽ lấy nội dung bên trong HTML ra
console.log(boxElement.innerHTML);

// outerHTML
// getter
// lấy cả nội dung bên trong và thẻ bao quanh bên ngoài
// ở đây thẻ bao quanh là <div class='box'>
console.log(boxElement.outerHTML);

// setter
// ghi đè thẻ <div class='box'>
// lập tức chỉ còn <p>Test</p>
boxElement.outerHTML = "<p>Test</p>";

// thử in ra
// DOM vẫn còn thẻ <div class='box'>
// nhưng nó chỉ là còn trong bộ nhớ (-> reference(học))
// tuy nhiên trong DOM thật không còn nữa
console.log(boxElement);

// thực tế thường không sử dụng outer HTML

// bai tap
function render(html) {}

var htmlsEletements = document.querySelector("ul");

htmlsEletements.innerHTML = "<li>Khóa học HTML</li>";

function render(html) {
  var ul = document.querySelector("html ul");
  ul.innerHTML = html;
}

render(`
    <li>Khóa học HTML</li>
    <li>Khóa học JS</li>
    <li>Khóa học PHP</li>
`);

//bai tap 2
/*
Thực hành sử dụng InnerHTML #2
Cập nhật tháng 6 năm 2022

Ở bài trước chúng ta đã tạo hàm render để thực hiện chèn 1 đoạn text HTML vào thẻ ul. Trong bài này chúng ta cùng làm 1 thử thách khó hơn nhé.

Các bạn hãy viết hàm render có 1 tham số courses, hàm render sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.

Ví dụ: Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:

ReactJS
AngularJS
VueJS
Gợi ý:

Sử dụng phương thức map kết hợp với join để tạo chuỗi HTML từ mảng courses.
Gán chuỗi HTML vừa tạo vào thuộc innerHTML của thẻ ul giống bài trước nhé.
Note: Tham khảo phương thức join (w3school) hoặc xem lại bài Làm việc với mảng ở chương 7 nhé.
*/

var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];

function render(courses) {
  var getul = document.querySelector("ul");
  var coursesList = courses.map(function (course) {
    return `<li>${course}</li>`;
  });
  getul.innerHTML = coursesList.join("");
}

// render(courses)
