const $ = document.querySelector.bind(document); // querey selector
const $$ = document.querySelectorAll.bind(document); // query selector all

// lấy ra tất cả element của tab-item
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

// test xem nhận được hay chưa
// console.log(tabs);
// console.log(panes);

// xử lý line
// tư duy tương tự tabs và panes
// xóa active cũ và add active mới
// line phải chạy ngang với độ rộng item
// -> lấy thông tin offsetLeft trong console
const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

console.log([tabActive]);
console.log([line]);

// xử lý logic
// offsetLeft là một thuộc tính trong JavaScript, thường được sử dụng để lấy giá trị vị + đơn vị pixel
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

// lắng nghe sự kiện trên những thằng tabs
tabs.forEach((tab, index) => {
  // panes có index = tabs
  // -> click vào tab sẽ lấy được pane tương ứng
  const pane = panes[index];

  tab.onclick = function () {
    // tư duy: add tab active cho class mới và xóa active của class cũ
    // tương tự với pane
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    // line
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
    // console.log(this);
    // console.log(pane)
  };
});
