// for loop

// var i = 1; i <= 10; i++: các thành phần này là không bắt buộc

var i = 1;

// (; true; i++), (;; i++), (; i > 0; i++) -> vô hạn
/*
for (; i <= 10; ) {
  // code
  console.log(i);
  i++;
}
*/

function getTotal(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return console.log(sum);
}

// Expected results
//getTotal([1, 2, 3]); // Output: 6
//getTotal([4, 5, -3]); // Output: 6
//getTotal([4, 5, 3, 5]); // Output: 17
