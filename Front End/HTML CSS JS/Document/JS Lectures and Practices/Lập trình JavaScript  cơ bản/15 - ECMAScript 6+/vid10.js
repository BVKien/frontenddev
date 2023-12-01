// Tagged template literals

/**
1. Let, Const --> ok
2. Template Literals --> ok
3. Multi-line String --> ok
4. Arrow function --> ok 
5. Classes --> ok
6. Default parameter values  --> ok
7. Destructuring --> ok
8. Rest parameters ( ... ) --> bổ sung --> ok
9. Spread ( ... ) --> ok
10. Enhanced object literals --> ok
11. Tagged template literal 
12. Modules 
*/

// 11. Tagged template literal
// sử dụng function
// có thể gọi đến function đó
// qua cú pháp template string

// funtion này nó sẽ trả về 1 mảng
// function hightLight(...rest) {
//   console.log(rest);
// }

// spread
// function hightLight([first, ...strings], ...values) {
//   console.log("first - ", first);
//   console.log("strings - ", strings);
//   console.log("values - ", values);
// }

// idea: sử dụng reduce
// láy ra Hoc lap trinh với initialValue của reduce
// reduce sẽ lặp mảng values, khi nó lặp qua -> lấy từng phần tử của nó
// khi lấy ra thêm 1 thẻ <span>JavaScript</span>
// quay xong reduce -> nối với phần tử đầu của mảng strings và xóa bỏ nó
// [' tai ', '.']
// -> <span>JavaScript</span> tại -> ['.']
// -> quay tiếp -> <span>JavaScript</span> tại <span>F8</span> .
// xử lý

// ở đây khi reduce chạy, đã chạy giá trị khởi tạo first - Hoc lap trinh
// và current lầ JavaScript
// khi sử dụng spread -> nó sẽ tự động bỏ ngoặc -> lấy giá trị bên trong
// bây giờ cần nối strings
// reduce lặp lần 1 -> accumulator nó đang là Hoc lap trinh <span>JavaScript</span> tai
// reduec lặp lần thứ 2 -> currentValue sẽ là F8 + nối với accumulator được gán với và tiếp tục thực hiện luồng reduce -> tiếp tục gán nếu còn -> trả về kết quả Hoc lap trinh <span>JavaScript</span> tai <span>F8</span> .
function hightLight([first, ...strings], ...values) {
  return values
    .reduce(
      (accumulator, currentValue) => [
        ...accumulator,
        `<span style="color: red;">${currentValue}</span>`,
        strings.shift(),
      ],
      [first]
    )
    .join("");
}

// bái toán
// tùy ý đưa 1 chuỗi và muốn bôi đậm cái nào

var brand = "F8";
var course = "JavaScript";

// -> mảng nhiều tham số
// tham số 1: chuỗi không chứa phần nội suy, cách nội suy sẽ sinh ra
// tham số 2: nội suy 1
// tham số 3: nội suy 2
const htmls = hightLight`Hoc lap trinh ${course} tai ${brand}.`;

console.log(htmls);

var htmlsEletements = document.querySelector("h1");

htmlsEletements.innerHTML = htmls;
