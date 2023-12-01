// Classes

/**
1. Let, Const --> ok
2. Template Literals --> ok
3. Multi-line String --> ok
4. Arrow function --> ok 
5. Classes
6. Default parameter values 
7. Destructuring 
8. Rest parameters 
9. Spread
10. Enhanced object literals 
11. Tagged template literal 
12. Modules 
*/

// 5. Classes
// trong JavaScript ES6
// đơn giản là cách viết khác của constructor function

// cách viết thường
// constrcutor
// tất cả đều viết trong block code lớn nhất
// function Course(name, price) {
//   this.name = name;
//   this.price = price;

//   this.getName = function () {
//     return this.name;
//   };
// }

// cách viết bằng
// Classes
// bóc ách gọn gàng, không bị chung trong 1 tầng
class Course {
  // constrcutor
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

const javaScriptCourse = new Course("JavaScript", 200);
const cSharpCourse = new Course("C#", 500);

console.log(javaScriptCourse, cSharpCourse);
