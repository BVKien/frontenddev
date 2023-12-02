// Câu lệnh rẽ nhánh - If else
// debug js
var date = 2;

// luôn lọt vào 1 nhánh - dù cho 2 điều kiện đúng trong 2 nhánh
if (date === 2) {
  console.log("monday");
} else if (date === 3) {
  console.log("tuesday");
} else if (date === 4) {
  console.log("wednesday");
} else {
  console.log("end");
}

function run(a) {
  //
  if (a % 3 === 0 && a != 5 && a != 15) {
    return 1;
  } else if (a % 5 === 0 && a != 15) {
    return 2;
  } else if (a % 15 === 0) {
    return 3;
  }
}

// Kỳ vọng
console.log(run(3)); // 1
console.log(run(5)); // 2
console.log(run(15)); // 3
