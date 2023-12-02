// Optional chaining (?.)

// đọc tài liệu đi mà hiểu
// documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

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
11. Tagged template literal --> ok
12. Modules --> ok 
13. Optional chaining (?.) - 2 ký tự đi liền --> ok
*/

// 13. Optional chaining (?.) - 2 ký tự đi liền

/*
+ Syntax 

- obj.val?.prop
- obj.val?.[expr]
- obj.func?.(args)
*/

// giải quyết vấn đè gì ?
const object = {
  name: "Alice",
  cat: {
    name: "Dinah",
    // cat2: {
    //   name: "Dinah 2",
    //   cat3: {
    //     name: "Dinah 3",
    //   },
    // },
  },
};

// trong trường hợp ok
// console.log(object.cat.cat2.cat3.name);

// vấn đề đặt ra
// khi lấy db từ nơi khác - những apis khác -> làm sao có thể chắc chắn nó đúng?
// không thể chắc chắn

// -> phải check
// check như vậy rất cồng kềnh
// -> giải quyết vấn đề bằng optional changing ( ?. )
if (object.cat && object.cat.cat2 && object.cat.cat2.cat3) {
  console.log(object.cat.cat2.cat3.name);
}

// -> ?.
// -> chỉ sử dụng trong trường hợp không chắc chắn nó có tồn tại, đúng, hay là 1 object hay không, ....
// -> tóm tại là sử dụng nó khi nghi ngờ -> đẹp, gọn, tối ưu
if (object?.cat?.cat2?.cat3) {
  console.log(object.cat.cat2.cat3.name);
}

// -> nó sẽ không báo lỗi cho chúng ta

// vúi dụ sử dụng với object
const obj = {
  //   getName(value) {
  //     console.log(value);
  //   },
};

obj.getName?.(123);
