// Enhanced object literals

/**
1. Let, Const --> ok
2. Template Literals --> ok
3. Multi-line String --> ok
4. Arrow function --> ok 
5. Classes --> ok
6. Default parameter values  --> ok
7. Destructuring 
8. Rest parameters 
9. Spread
10. Enhanced object literals 
11. Tagged template literal 
12. Modules 
*/

/// 10. Enhanced object literals
/// Có thể làm
// 1. Định nghĩa key: value cho object bằng 1 cái ngắn gọn hơn
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

// ví dụ
var name = "JavaScript";
var price = 1000;

// 1. Định nghĩa key: value cho object bằng 1 cái ngắn gọn hơn
var course = {
  name,
  price,

  // 2. Định nghĩa method cho object
  getName() {
    return name;
  },
};

console.log(course);

// 3. Định nghĩa key cho object dưới dạng biến
var fieldName = "name";
var fieldPrice = "price";

const course2 = {
  [fieldName]: "ReactJs",
  [fieldPrice]: 2000,
};

console.log(course2);
