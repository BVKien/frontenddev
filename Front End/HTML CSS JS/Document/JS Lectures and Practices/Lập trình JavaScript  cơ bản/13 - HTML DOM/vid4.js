/**
+ HTML DOM - quy chuẩn W3C đưa ra - phải tuân theo 

+ element
- id
- class,
- tagname
- css selector
- html collection

- attribute 
- text 
*/

// những node attribute và text -> luôn đi ra từ element

// Get element methods

// các phương thức lấy element
// get qua: id, class, tagname, CSS selector, HTML collection

// đi từ document -> chọc tới đó
// chỉ được lấy 1 id
// trả về trực tiếp id
var headingNode = document.getElementById("heading");
console.log({ element: headingNode }); // ngoặc ngoài [element: headingNode]

// get elements by class name - lấy các elements by class name
// trả về 1 mảng
var headingNodes2 = document.getElementsByClassName("heading2");
console.log({ element: headingNodes2 }); //[]

// get elements by tag name - lấy các elements by tag name
// trả về 1 mảng
var headingNodes3 = document.getElementsByTagName("div");
console.log({ element: headingNodes3 }); //[]

// CSS selector
// id: #, .: class
var headingNode = document.querySelector(".box .heading-class-2:first-child");
var headingNode = document.querySelector(".box .heading-class-2:nth-child(2)");
var headingNode = document.querySelectorAll(".box .heading-class-2");

console.log({ element: headingNode }); //[]
console.log({ element: headingNode[2] }); //[]

// HTML collection
// không cần get element by id
console.log(document.forms);
console.log(document.forms[0]);

// lấy đích thị id của form-1
console.log(document.forms["form-1"]);

//  testForm
console.log(document.forms.testForm);

// trả về thẻ <a> có thuộc tính name
// khi đó nếu muốn access vào những elements <a> trên website
// lọc = cách đặt name
console.log(document.anchors);

// get images
console.log(document.images);
