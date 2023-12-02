// Spread

/*
1. let, const --> ok
2. template literals --> ok
3. multi-line string --> ok
4. arrow function --> ok
5. classes
6. default parameters values 
7. destructuring --> ok
8. rest parameters --> ok
9. spread --> 
10. enhanced object literals --> ok
11. tagged template literal 
12. modules 
*/

// spread ( ... )
// dải trước array và object -> nó sẽ bỏ đi ngoặc
var arr1 = ["JavaScript", "HTML", "PHP"];
var arr2 = ["C#", "C++", "C"];
var arr3 = [...arr1, ...arr2];
console.log(arr3);

// object
var obj1 = {
  name: "JavaScript",
};
var obj2 = {
  price: 2000,
};

// cái sau sẽ override cái trước
// tưc cái sau mới hơn -> không sợ bị trùng lặp
var obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// truyền tham số cho hàm
var array01 = ["JavaScript", "PHP", "Ruby"];
// rest - định nghĩa tham số
function logger4(...rest) {
  console.log(a, b, c);

  for (var i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}
// spread - truyền đối số
// chung 1 array
logger4(...array01);
