// Template literals

/**
1. Let, Const --> ok
2. Template Literals
3. Multi-line String 
4. Arrow function
5. Classes
6. Default parameter values 
7. Destructuring 
8. Rest parameters 
9. Spread
10. Enhanced object literals 
11. Tagged template literal 
12. Modules 
*/

// 2. Template Literals
const coureName = "JavaScript";
const description1 = "Course name: " + coureName; // sử dụng toán tử + để nối chuỗi

// Template string - sử dụng dấu backtick `` - gạch ngươc
const description2 = `Course name: ${coureName}\\ \${}`; // ${coureName}: nội suy - trong chính nó suy ra

console.log(description1);
console.log(description2);

// 3. Multi-line String
const lines1 = "line 1 \nline 2";

//  template string
const lines2 = `line 1
line 2`;

console.log(lines1);
console.log(lines2);
