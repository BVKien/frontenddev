/* 
+ DOM events

+ tài liệu
- https://www.w3schools.com/jsref/dom_obj_event.asp

+ attributes events 
- lắng nghe sự kiện người udngf bằng attributes 
- <h1 class="">DOM events</h1> - class là attributes 

+ assign event using the element node 
- gán sự kiện sử dụng element node 

-> kết quả như nhau - sử dụng tùy trường hợp 
*/

// assign: gán

// những sự kiện diễn ra trong DOM
// những hành vi diễn ra của người dùng hoặc trình duyệt
// người dùng: như là bôi đen, cuộn, kéo thả các kiểu
// trình duyệt: tải trình duyệt, load, ...

// assign event using the element node
// element node
// thực tế dùng c2
var h2Element = document.querySelectorAll("h2");
var buttonElement = document.querySelector("button");

for (var i = 0; i < h2Element.length; i++) {
  //   console.log(h2Element[i]);
  h2Element[i].onclick = function (e) {
    console.log(e);
  };

  //   lỗi
  //   h2Element[i].onclick = function (e) {
  //     console.log(h2Element[i]);
  //   };
}
// lỗi
console.log(i);

h2Element.onclick = function (e) {
  // e: events của onmouseclick hoặc onpointerclick
  console.log(e);
  console.log(e.target);
};

buttonElement.onclick = function (e) {
  console.log((e.target.style.color = "red"));
};
