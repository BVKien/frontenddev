// Destructuring, Rest

/*
1. let, const --> ok
2. template literals --> ok
3. multi-line string --> ok
4. arrow function --> ok
5. classes
6. default parameters values 
7. destructuring --> 
8. rest parameters --> 
9. spread
10. enhanced object literals --> ok
11. tagged template literal 
12. modules 
*/

var array = ["JavaScript", "PHP", "Ruby"];

var [a, b, c] = array;

var [a, ...rest] = array;

var course = {
  name: "JavaScript",
  price: 1000,
  image: "image.png",
  children: {
    name: "ReactJS",
  },
  description: "description JavaScript",
};

var { name, price, image } = course;

// sử dụng với destructuring -> rest
var { name, ...rest } = course;

var { name, ...newObject } = course;

// có thể đổi tên
var {
  name: parentName,
  children: { name: childrenName },
} = course;

// đặt 1 key = default value nếu nó chưa tồn tại
// nếu có -> lấy value trong object
var { name, price, image, description = "default value " } = course;
console.log(description);

// định nghĩa ra tham số -> rest
function logger(...params) {
  console.log(params);
}

// sử dụng rest -> kết quả trẩ về array
function logger2(a, ...rest) {
  console.log(rest);
}
logger2(1, 2, 3, 4); // -> kết quả: [2, 3, 4]

// rest với function
function logger3({ name, price, ...rest }) {
  console.log(name);
  console.log(price);
  console.log(rest);
}
logger3({
  name: "JavaScript",
  price: 2000,
  description: "description value ",
});

// array
function logger3([a, b, ...rest]) {
  console.log(a);
  console.log(b);
  console.log(rest);
}
logger3([1, 2, 3]);
