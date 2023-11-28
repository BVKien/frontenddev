// Vòng lặp do...while

var i = 0;

/*
// luôn chạy 1 lần trước khi kiểm tra điều kiện
do {
  // code
  console.log(i);
  i++;
} while (i < 10);
*/

// ví dụ nạp thẻ cào
var isSuccess = false;
do {
  i++;

  console.log("Nap the lan " + i);

  // Success
  if (true) {
    isSuccess = true;
  }
} while (isSuccess == false && i < 3);
