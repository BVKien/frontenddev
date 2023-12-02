// Arrow function

/*
1. let, const --> ok
2. template literals --> ok
3. multi-line string --> ok
4. arrow function
5. classes
6. default parameters values 
7. destructuring 
8. rest parameters 
9. spread
10. enhanced object literals 
11. tagged template literal 
12. modules 
*/

// example
// fuction thông thường
const logger1 = function (log) {
  console.log(log);
};
// logger1("Message");

// arrow function
const logger2 = (log) => {
  console.log(log);
};
// logger2("Message");

// example
// được hiểu là có khối coder bên trong
const sum2 = (a, b) => {
  // code
  return a + b;
};

// được hiểu là return luôn
const sum1 = (a, b) => a + b;

// return 1 object
// c1
const sum3 = (a, b) => {
  return {
    a: a,
    b: b,
  };
};

// c2
const sum4 = (a, b) => ({ a: a, b: b });

// nhận duy nhất 1 tham số -> bỏ ngoặc tròn -> ok
const logger3 = (log) => console.log(log);

// arrow function không có context của nó
// function thường
const course1 = {
  name: "JavaScript basic",
  getName: function () {
    return this; // context
  },
};

// arrow function
const course2 = {
  name: "JavaScript basic",
  getName: () => {
    return this; // context -> không trả về
  },
};

console.log(course2.getName());

// arrow function không thể sử dụng để làm Constructor
const Course1 = function (name, price) {
  this.name = name;
  this.price = price;
};
const jsCourse = new Course1("JavaScript", 2000);
console.log(jsCourse);

const Course2 = (name, price) => {
  this.name = name;
  this.price = price;
};
const jsCourse2 = new Course2("JavaScript", 2000);
console.log(jsCourse2);
