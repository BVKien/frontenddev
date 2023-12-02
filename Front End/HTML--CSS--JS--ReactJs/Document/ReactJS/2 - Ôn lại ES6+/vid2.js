// Enhanced object literals

/*
1. let, const --> ok
2. template literals --> ok
3. multi-line string --> ok
4. arrow function --> ok
5. classes
6. default parameters values 
7. destructuring 
8. rest parameters 
9. spread
10. enhanced object literals --> 
11. tagged template literal 
12. modules 
*/

// 1. Định nghĩa key value cho object ngắn gọn hơn
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

var name = "JavaScript";
var price = 2000;

// function thường
var course1 = {
  name: name,
  price: price,
};

// enhanced object literals
var course2 = {
  //1. định nghĩa key value cho object ngắn gọn hơn
  name: name,
  price: price,
  // 2. method cho object
  getName() {
    return this.name;
  },
};

// 3. định nghĩa key cho object dưới dạng biến
var filedName = "name";
var filedPrice = "price";

const course3 = {
  // key: value
  [filedName]: "JavaScript",
  [filedPrice]: 2000,
};

// ===
// 3. định nghĩa key cho object dưới dạng biến
var filedPhone = "phone";
var filedAge = "age";

const person = {
  // 1. định nghĩa key value cho object ngắn gọn hơn
  [filedPhone]: 961498125,
  [filedAge]: 20,
  // 2. định nghĩa method cho ogbject
  getAge() {
    return this[filedAge];
  },
};

console.log(person);
