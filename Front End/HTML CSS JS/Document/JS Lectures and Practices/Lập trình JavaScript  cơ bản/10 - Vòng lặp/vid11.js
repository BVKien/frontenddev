// Đệ quy là gì? Học về đệ quy! - recursive
// Xem lại sau
// https://fullstack.edu.vn/learning/javascript-co-ban?id=d802fdf1-83dc-43f6-8b8c-1bc424f98c2b

// tự gọi lại chính nó
// gây ra nhiều vấn đè tràn bộ nhớ -> liên quan đến memory
// gây lỗi tràn stack
// tốn cpu, ram, memorry leak

// functional programming -> lập trình hướng hàm
// đệ quy -> phải xác định được điểm dừng
// logic handle -> để tạo ra điểm dừng

/*
var array = ["a", "b", "c", "a", "b", "c"];
console.log(array);

// new constructor Set -> value, element của nó là unique
// -> kết quả chỉ là 1, 2, 3
console.log(new Set([1, 2, 3, 1, 2, 3, 1, 2, 3]));

//  trong khi hiện tại đang nhận 1 Set
// thì phải làm cách nào đẻ nhận lại 1 output là Array
// -> sử dụng toán tử ... (spreadt ?)
// toán tử ... -> bỏ ngoặc của Set {} -> dải elements vào trong ngoặc vuông
console.log([...new Set(array)]);
*/

// recursive
// infinite
function recursive() {
  recursive();
}
//recursive();

// ex: count down
function countDown(number) {
  if (number > 0) {
    console.log(number);
    return countDown(number - 1);
  }
  return number;
}
countDown(3);
